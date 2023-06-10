import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { FileUploadDTO } from './dto/file.dto';
import { FileUpload } from './schemas/file.schema';

@Injectable()
export class FileService {
    s
  constructor(
    @InjectModel(FileUpload.name)
    private fileUploadModel: mongoose.Model<FileUpload>,) {
  }

  async save(payload: FileUploadDTO[]): Promise<FileUpload[]> {
    const saved = [];
    for (const file of payload) {
      const res = await this.fileUploadModel.create(file);
      saved.push(res);
    }
    return saved;
  }

  async getFiles(user: string): Promise<FileUpload[]> {
    return this.fileUploadModel.find();
  }
}
