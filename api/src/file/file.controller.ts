import {
  Controller, Get,
  Post, Query, UploadedFiles, UseInterceptors
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { isImage, isPDF } from 'src/common/checker';
import { CloudinaryService } from './cloudinary.service';
import { FileService } from './file.service';
import { FirebaseService } from './filebase.service';

@Controller('api/files')
export class FileController {
  constructor(
    private cloudinaryService: CloudinaryService,
    private filebaseService: FirebaseService,
    private fileService: FileService) {
  }

  @Post('upload')
  @UseInterceptors(FilesInterceptor('file'))
  async uploadFiles(@UploadedFiles() files: any[]): Promise<any[]> {
    console.log("🚀", files)

    // check type file

    // valid

    // upload
    const pdfFiles: any[] = [];
    const imageFiles: any[] = [];
    const otherFiles: any[] = [];

    for (const file of files) {
      if (isPDF(file)) {
        pdfFiles.push(file);
      } else if (isImage(file)) {
        imageFiles.push(file);
      } else {
        otherFiles.push(file);
      }
    }

    const uploadImageFiles = await this.cloudinaryService.uploadFiles(imageFiles);

    const uploadpdfFiles = await this.filebaseService.uploadFiles(pdfFiles);

    // save db
    const created = await this.fileService.save(uploadImageFiles.concat(uploadpdfFiles));
    return created;
  }

  @Get()
  async getFiles(@Query('user') user: string): Promise<any[]> {
    console.log("🚀", user)
    return await this.fileService.getFiles(user);
  }
}
