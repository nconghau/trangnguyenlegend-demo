import { Injectable } from '@nestjs/common';
import { UploadApiResponse, v2 } from 'cloudinary';
import { FileUploadDTO } from './dto/file.dto';
import { formatFileSize } from 'src/common/file';

@Injectable()
export class CloudinaryService {
  constructor() {
    v2.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }

  async uploadFiles(files: any[]): Promise<FileUploadDTO[]> {
    const uploadedFiles: FileUploadDTO[] = [];
    try {
      for (const file of files) {
        const uploadResult: UploadApiResponse = await v2.uploader.upload(file.path, {
          upload_preset: "ml_default",
          resource_type: 'auto',
          access_mode: 'public',
        });

        if (uploadResult) {
          uploadedFiles.push({
            name: file.originalname,
            link: uploadResult.url,
            type: "image",
            size: formatFileSize(uploadResult?.bytes),
            user: "userId1"
          });
        }

      }
    }
    catch (error) {
      console.log("🚀 uploadFiles ~ error:", error)
    }
    return uploadedFiles;
  }



}
