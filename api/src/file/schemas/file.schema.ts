import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class FileUpload {
  @Prop({ default: "userid1" })
  user: string;

  @Prop()
  name: string;

  @Prop()
  link: string;

  @Prop()
  size: string;

  @Prop()
  type: string;
}

export const FileUploadSchema = SchemaFactory.createForClass(FileUpload);
