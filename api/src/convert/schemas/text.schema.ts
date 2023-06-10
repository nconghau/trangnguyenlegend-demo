import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Text {
  @Prop({ default: "userid1" })
  user: string;

  @Prop()
  text: string;

  @Prop({ type: Types.ObjectId, ref: 'FileUpload' })
  file: Types.ObjectId;
}

export const TextSchema = SchemaFactory.createForClass(Text);
