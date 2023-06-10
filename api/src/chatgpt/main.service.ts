import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { axiosClient } from 'src/api/axiosClient';
import { Text } from 'src/convert/schemas/text.schema';
import { ProcessDTO } from './dto/process.dto';
import { ChatGPTResponse } from './schemas/chatGPTResponse.schema';

export class FullTextResult {
	files: string[]
	fullText: string
}

export class TextRequest {
	files: string[]
	texts: string[]
	content: string
}

@Injectable()
export class MainService {
	constructor(
		@InjectModel(ChatGPTResponse.name)
		private chatGPTResponse: mongoose.Model<ChatGPTResponse>,
		@InjectModel(Text.name)
		private textModel: mongoose.Model<Text>,
	) {
	}
	private apiUrl = 'https://api.openai.com/v1/chat/completions';
	private maxToken = 4090;

	async callChatGPT(payload: TextRequest): Promise<ChatGPTResponse | null> {
		return new Promise((resolve, reject) => {
			axiosClient
				.post(this.apiUrl, {
					model: "gpt-3.5-turbo",
					temperature: 1,
					messages: [
						{
							role: "system",
							content: `${payload.content}`
						},
						{
							role: "user",
							content:
								"Trong đó, 'summary': là đoạn tóm tắt, 'questions' là danh sách 5 câu hỏi, 'q' là câu hỏi, 'a' là danh sách các đáp án A, B, C, D, và 'r' là đáp án đúng. trả lời bằng tiếng Việt và format json"
						}
					]
				})
				.then(response => {
					console.log("callChatGPT::Response", response);
					// save db
					const saved = this.chatGPTResponse.create({
						file: payload.files,
						text: payload.texts,
						response: JSON.stringify(response),
						result: response["choices"][0].message.content.toString()
					});
					resolve(saved);
				})
				.catch(error => {
					console.error("Error:", error);
					reject(error);
				});
		});
	}

	async getFullText(texts: string[]): Promise<FullTextResult> {
		let files = [];
		const textPromises = texts.map(async (i) => {
			const text: Text = await this.textModel.findById(i);
			if (text) {
				files.push(text.file);
				return text.text;
			}
			return '';
		});

		const fulltextResults = await Promise.all(textPromises);
		const fullText = fulltextResults.join('');

		return {
			files: files,
			fullText: fullText
		};
	}

	async getFullText2(payload: any[]): Promise<string> {
		const textPromises = payload.map(async (i) => {
			if (i.result) {
				return i.result;
			}
			return '';
		});

		const fulltextResults = await Promise.all(textPromises);
		const fullText = fulltextResults.join('');

		return fullText;
	}

	chunkText(textFull: string): string[] {
		const tokens: string[] = textFull.split(/\s+/); // Split the text by whitespace into tokens
		const chunks: string[] = [];
		let currentChunk: string = '';

		for (const token of tokens) {
			if ((currentChunk + token).length <= this.maxToken) {
				currentChunk += token + ' ';
			} else {
				chunks.push(currentChunk.trim());
				currentChunk = token + ' ';
			}
		}

		// Add the remaining tokens as the last chunk
		if (currentChunk.trim() !== '') {
			chunks.push(currentChunk.trim());
		}
		return chunks;
	}

	async process(payload: ProcessDTO): Promise<any[]> {

		const fullText: FullTextResult = await this.getFullText(payload.texts);

		const chunks: string[] = this.chunkText(fullText.fullText);
		let count = 0;
		let result = [];
		for (const chunk of chunks) {
			const chatGPTPayload: TextRequest = {
				content: chunk,
				files: fullText.files,
				texts: payload.texts
			};
			count += 1;

			if (count <= 3) {
				console.log(`🚀 ${count}`, chatGPTPayload)
				// Call the chatGPT API for each chunk
				const response: ChatGPTResponse | null = await this.callChatGPT(chatGPTPayload);
				console.log("🚀", response)
				if (response) {
					result.push(response);
				}
			}
		}

		// summary
		// const fullText2: string = await this.getFullText2([
		// 	{
		// 		"_id": "6468fd8403f4233a6c81dcaa",
		// 		"user": "userid1",
		// 		"result": "{\n    \"summary\": \"Triết học là hệ thống tri thức lý luận chung nhất của con người về thế giới; về vị trí, vai trò của con người trong thế giới ấy. Nó ra đời từ hoạt động nhận thức của con người phục vụ nhu cầu sống và chỉ xuất hiện trong những điều kiện nhất định. Đối tượng của triết học thay đổi theo từng giai đoạn lịch sử.\",\n    \"questions\": [\n        \"Triết học là gì?\",\n        \"Triết học ra đời do đâu?\",\n        \"Triết học chỉ có thể xuất hiện trong những điều kiện như thế nào?\",\n        \"Đối tượng của triết học thay đổi như thế nào trong quá trình phát triển?\",\n        \"Triết học ra đời ở đâu và có bao nhiêu trung tâm văn minh cổ đại tham gia?\"\n    ],\n    \"q\": [\n        \"Triết học là gì?\",\n        \"Triết học ra đời do hoạt động nhận thức của con người phục vụ nhu cầu gì?\",\n        \"Triết học chỉ có thể xuất hiện trong những điều kiện như thế nào?\",\n        \"Đối tượng của triết học thay đổi như thế nào trong quá trình phát triển?\",\n        \"Triết học ra đời ở đâu?\"\n    ],\n    \"a\": {\n        \"1\": [\"Hệ thống tri thức lý luận chung nhất của con người về thế giới và vị trí của con người trong thế giới\", \"Nghệ thuật tạo sinh động\", \"Khoa học xã hội\", \"Công nghệ kỹ thuật\"],\n        \"2\": [\"Phục vụ nhu cầu sống\", \"Thỏa mãn sự hiếu khách\", \"Chứng tỏ khả năng của con người\", \"Nâng cao tinh thần\"],\n        \"3\": [\"Con người cần có một vốn hiểu biết nhất định và đạt đến khả năng rút ra được cái chung trong muôn vàn những sự kiện, hiện tượng riêng lẻ. Xã hội đã phát triển đến thời kỳ hình thành tầng lớp lao động trí óc. Họ đã nghiên cứu, hệ thống hóa các quan điểm, quan niệm rời rạc lại thành học thuyết, thành lý luận và triết học ra đời.\", \"Triết học chỉ có thể xuất hiện trong những điều kiện đặc biệt, không tạo ra quan hệ với thực tiễn\", \"Triết học là sản phẩm của một số học giả nổi tiếng\", \"Triết học ra đời do ý tưởng phi khoa học\"],\n        \"4\": [\"Thay đổi theo từng giai đoạn lịch sử\", \"Không có sự thay đổi\", \"Lúc nào cũng giống nhau\", \"Chỉ thay đổi ở mức độ cụ thể\"],\n        \"5\": [\"Ra đời ở Hy Lạp\", \"Có 2 trung tâm văn minh cổ đại tham gia\", \"Ra đời ở Trung Quốc, không có trung tâm văn minh nào khác tham gia\", \"Ra đời ở ấn Độ và Trung Quốc, có nhiều trung tâm văn minh cổ đại khác tham gia\"]\n    },\n    \"r\": [\"Hệ thống tri thức lý luận chung nhất của con người về thế giới và vị trí của con người trong thế giới\",\n          \"Phục vụ nhu cầu sống\",\n          \"Con người cần có một vốn hiểu biết nhất định và đạt đến khả năng rút ra được cái chung trong muôn vàn những sự kiện, hiện tượng riêng lẻ. Xã hội đã phát triển đến thời kỳ hình thành tầng lớp lao động trí óc. Họ đã nghiên cứu, hệ thống hóa các quan điểm, quan niệm rời rạc lại thành học thuyết, thành lý luận và triết học ra đời.\",\n          \"Thay đổi theo từng giai đoạn lịch sử\",\n          \"Ra đời ở nhiều trung tâm văn minh cổ đại như Trung Quốc, Ấn Độ, Hy Lạp\"\n          ]\n}",
		// 		"response": "[object Object]",
		// 		"text": [
		// 			"64684cc5e019f450678123fd",
		// 			"64684d24e019f450678123ff"
		// 		],
		// 		"file": [
		// 			"64684928755547930adc62d6",
		// 			"64684932755547930adc62d8"
		// 		],
		// 		"createdAt": "2023-05-20T17:04:04.655Z",
		// 		"updatedAt": "2023-05-20T17:04:04.655Z",
		// 		"__v": 0
		// 	},
		// 	{
		// 		"_id": "6468fdae03f4233a6c81dcac",
		// 		"user": "userid1",
		// 		"result": "{\n    \"summary\": \"Triết học từng được coi là hình thái cao nhất của tri thức, chứa đựng tri thức về nhiều lĩnh vực và được xem là khoa học của mọi khoa học. Sau thời kỳ trung cổ, triết học phát triển nhanh chóng và đóng vai trò quan trọng trong sự phát triển xã hội. Triết học mácxít coi đối tượng của nó là giải quyết mối quan hệ giữa vật chất và ý thức trên lập trường duy vật triệt để và nghiên cứu các quy luật chung nhất của tự nhiên, xã hội và tư duy.\",\n    \"questions\": [\n        {\n            \"q\": \"Triết học được coi là gì?\",\n            \"a\": [\n                \"Hình thái cao nhất của tri thức\",\n                \"Khoa học của mọi khoa học\",\n                \"Chứa đựng tri thức về nhiều lĩnh vực\",\n                \"Tất cả đều đúng\"\n            ],\n            \"r\": \"D\"\n        },\n        {\n            \"q\": \"Triết học phát triển nhanh chóng trong giai đoạn nào?\",\n            \"a\": [\n                \"Thời kỳ trung cổ\",\n                \"Thế kỷ XV, XVI\",\n                \"Thế kỷ XVII, XVIII\",\n                \"Thế kỷ XIX\"\n            ],\n            \"r\": \"B\"\n        },\n        {\n            \"q\": \"Triết học mácxít xác định đối tượng nghiên cứu của mình là gì?\",\n            \"a\": [\n                \"Giải quyết mối quan hệ giữa vật chất và ý thức trên lập trường duy vật triệt để\",\n                \"Nghiên cứu các quy luật chung nhất của tự nhiên\",\n                \"Nghiên cứu các quy luật chung nhất của xã hội\",\n                \"Nghiên cứu các quy luật chung nhất của tư duy\"\n            ],\n            \"r\": \"A\"\n        },\n        {\n            \"q\": \"Triết học nghiên cứu thế giới bằng phương pháp nào?\",\n            \"a\": [\n                \"Phương pháp của khoa học tự nhiên\",\n                \"Phương pháp của khoa học xã hội\",\n                \"Phương pháp củng cố giả thuyết\",\n                \"Phương pháp củng cố quan niệm\"\n            ],\n            \"r\": \"D\"\n        },\n        {\n            \"q\": \"Triết học mácxít coi khoa học là gì?\",\n            \"a\": [\n                \"Một mắt khâu phụ thuộc vào triết học\",\n                \"Một học thuyết độc lập\",\n                \"Một hệ thống phổ biến của sự nhận thức\",\n                \"Một công cụ hỗ trợ cho triết học\"\n            ],\n            \"r\": \"A\"\n        }\n    ]\n}",
		// 		"response": "[object Object]",
		// 		"text": [
		// 			"64684cc5e019f450678123fd",
		// 			"64684d24e019f450678123ff"
		// 		],
		// 		"file": [
		// 			"64684928755547930adc62d6",
		// 			"64684932755547930adc62d8"
		// 		],
		// 		"createdAt": "2023-05-20T17:04:46.053Z",
		// 		"updatedAt": "2023-05-20T17:04:46.053Z",
		// 		"__v": 0
		// 	},
		// 	{
		// 		"_id": "6468fddd03f4233a6c81dcae",
		// 		"user": "userid1",
		// 		"result": "{\n    \"summary\": \"Triết học là một lĩnh vực nghiên cứu về sự tồn tại và sự ý thức của con người, mối quan hệ của con người nói chung với thế giới xung quanh và có hai vấn đề cơ bản: quan niệm về sự tồn tại và vấn đề khả năng nhận thức của con người. Triết học được coi là hạt nhân lý luận của thế giới quan và có vai trò định hướng cho quá trình củng cố và phát triển thế giới quan của mỗi cá nhân, mỗi cộng đồng trong lịch sử.\",\n    \"questions\": [\n        \"Triết học là gì?\",\n        \"Có những vấn đề gì là cơ bản của triết học?\",\n        \"Triết học có vai trò gì trong thế giới quan?\",\n        \"Triết học giúp con người như thế nào trong cuộc sống?\",\n        \"Triết học ảnh hưởng như thế nào đối với xã hội?\"\n    ],\n    \"qas\": [\n        {\n            \"q\": \"Triết học là gì?\",\n            \"a\": [\n                \"Triết học là một lĩnh vực nghiên cứu về sự tồn tại và sự ý thức của con người.\",\n                \"Triết học là một nghiên cứu về sự tồn tại của vật chất.\",\n                \"Triết học là một nghiên cứu về sự ý thức của con người.\",\n                \"Triết học là một lĩnh vực nghiên cứu về vũ trụ và các hành tinh khác.\"\n            ],\n            \"r\": 0\n        },\n        {\n            \"q\": \"Có những vấn đề gì là cơ bản của triết học?\",\n            \"a\": [\n                \"Quan niệm về sự tồn tại và vấn đề khả năng nhận thức của con người.\",\n                \"Sự phát triển kinh tế và chính trị của quốc gia.\",\n                \"Lịch sử và văn hóa của một dân tộc.\",\n                \"Khoa học tự nhiên và khoa học xã hội.\"\n            ],\n            \"r\": 0\n        },\n        {\n            \"q\": \"Triết học có vai trò gì trong thế giới quan?\",\n            \"a\": [\n                \"Triết học được coi là hạt nhân lý luận của thế giới quan và có vai trò định hướng cho quá trình củng cố và phát triển thế giới quan của mỗi cá nhân, mỗi cộng đồng trong lịch sử.\",\n                \"Triết học chỉ đóng vai trò nhỏ trong thế giới quan.\",\n                \"Thế giới quan không liên quan đến triết học.\",\n                \"Triết học chỉ đóng vai trò quan trọng trong khoa học tự nhiên.\"\n            ],\n            \"r\": 0\n        },\n        {\n            \"q\": \"Triết học giúp con người như thế nào trong cuộc sống?\",\n            \"a\": [\n                \"Triết học giúp con người xác định được mục đích, ý nghĩa cuộc sống và lựa chọn cách thức hoạt động đạt được mục đích, ý nghĩa đó.\",\n                \"Triết học không có vai trò gì trong cuộc sống con người.\",\n                \"Cuộc sống con người không liên quan gì đến triết học.\",\n                \"Triết học chỉ đóng vai trò trong lĩnh vực nghiên cứu và giáo dục.\"\n            ],\n            \"r\": 0\n        },\n        {\n            \"q\": \"Triết học ảnh hưởng như thế nào đối với xã hội?\",\n            \"a\": [\n                \"Triết học có ảnh hưởng lớn đến xã hội vì nó giúp con người hiểu rõ hơn về thế giới và về bản thân mình.\",\n                \"Triết học không ảnh hưởng đến xã hội.\",\n                \"Triết học chỉ ảnh hưởng đến một số người ở tầng lớp cao trong xã hội.\",\n                \"Triết học chỉ mang tính chất trừu tượng và không ảnh hưởng đến xã hội.\"\n            ],\n            \"r\": 0\n        }\n    ]\n}",
		// 		"response": "[object Object]",
		// 		"text": [
		// 			"64684cc5e019f450678123fd",
		// 			"64684d24e019f450678123ff"
		// 		],
		// 		"file": [
		// 			"64684928755547930adc62d6",
		// 			"64684932755547930adc62d8"
		// 		],
		// 		"createdAt": "2023-05-20T17:05:33.761Z",
		// 		"updatedAt": "2023-05-20T17:05:33.761Z",
		// 		"__v": 0
		// 	}
		// ]);
		// const chunks2: string[] = this.chunkText(fullText2);
		// for (const chunk of chunks2) {
		// 	const chatGPTPayload: TextRequest = {
		// 		content: chunk,
		// 		files: fullText.files,
		// 		texts: payload.texts
		// 	};
		// 	count += 1;

		// 	if (count <= 3) {
		// 		console.log(`🚀 ${count}`, chatGPTPayload)
		// 		// Call the chatGPT API for each chunk
		// 		// const response: ChatGPTResponse | null = await this.callChatGPT(chatGPTPayload);
		// 		// console.log("🚀", response)
		// 		// if (response) {
		// 		// 	result.push(response);
		// 		// }
		// 	}
		// }

		return result;
	}

	async getChatGPTResponse(user: string): Promise<ChatGPTResponse[]> {
		return this.chatGPTResponse.find().populate("file");
	}
}
