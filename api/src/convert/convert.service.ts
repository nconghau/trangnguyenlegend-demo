import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import axios from 'axios';
import mongoose from 'mongoose';
import { FileUploadDTO } from 'src/file/dto/file.dto';
import { FileUpload } from 'src/file/schemas/file.schema';
import { createWorker } from 'tesseract.js';
import { Text } from './schemas/text.schema';
@Injectable()
export class ConvertService {
	constructor(
		@InjectModel(Text.name)
		private textModel: mongoose.Model<Text>,
		@InjectModel(FileUpload.name)
		private fileUploadModel: mongoose.Model<FileUpload>
	) {
	}

	private worker = createWorker({
		logger: (m) => {
			// console.log(m)
		}
	});

	async getTextFromPDF(link: string): Promise<string> {
		try {
			const response = await axios.get(link, { responseType: 'arraybuffer' });
			const pdfBuffer = Buffer.from(response.data, 'binary');
			const pdf = require('pdf-parse');
			let data = await pdf(pdfBuffer);
			return data.text;
		} catch (error) {
			console.log("🚀 getTextFromPDF ~ error:", error)
		}
		return "";
	}

	async getTextFromImage(link: string): Promise<string> {
		try {
			await this.worker.load();
			await this.worker.loadLanguage('vie');
			await this.worker.initialize('vie');
			const { data: { text } } = await this.worker.recognize(link);
			// await this.worker.terminate();

			return text;
		} catch (error) {
			console.log("🚀 getTextFromImage ~ error:", error)
		}
	}

	async toText(payload: FileUploadDTO[]): Promise<Text[]> {
		const saved = [];
		try {
			let text = ""
			let singleFile = payload[0];

			if (singleFile.type == "image") {
				text = await this.getTextFromImage(singleFile.link);
			}
			if (singleFile.type == "pdf") {
				text = await this.getTextFromPDF(singleFile.link);
			}

			const created = await this.textModel.create({
				"user": "userId1",
				file: new mongoose.Types.ObjectId(singleFile._id),
				text: text,
			})
			saved.push(created);
		} catch (error) {
			console.log("🚀 toText ~ error:", error)
		}
		return saved;
	}

	async getText(user: string): Promise<any[]> {
		const texts: Text[] = await this.textModel.find().populate("file");
		return texts;
	}
}
