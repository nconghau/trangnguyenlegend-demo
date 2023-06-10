import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({
  timestamps: true,
})
export class ChatGPTResponse {
  @Prop({ default: "userid1" })
  user: string;

  @Prop()
  result: string;

  @Prop()
  response: string;

  @Prop()
  text: string[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'FileUpload' }] })
  file: Types.ObjectId[];
}

export const ChatGPTResponseSchema = SchemaFactory.createForClass(ChatGPTResponse);
