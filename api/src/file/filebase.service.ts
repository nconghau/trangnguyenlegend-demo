import * as admin from 'firebase-admin';
import { formatFileSize } from 'src/common/file';
import { FileUploadDTO } from './dto/file.dto';

export class FirebaseService {
  async uploadFiles(files: any[]): Promise<any[]> {
    const uploadedFiles: FileUploadDTO[] = [];

    for (const file of files) {
      const uploadedFile = await this.uploadFile(file);
      if (uploadedFile) {
        uploadedFiles.push(uploadedFile);
      }
    }

    return uploadedFiles;
  }

  async uploadFile(file: any): Promise<any> {
    const remotePath = `web/${file.originalname}`;
    const bucket = admin.storage().bucket();

    try {
      const res = await bucket.upload(file.path, {
        destination: remotePath,
        metadata: {
          cacheControl: 'public, max-age=31536000',
          contentType: 'application/pdf' // Specify the content type for PDF files
        }
      });

      const response = res[0];
      if (response) {
        return {
          name: file.originalname,
          link: `https://firebasestorage.googleapis.com/v0/b/${response.metadata.bucket}/o/${encodeURIComponent(response.name)}?alt=media`,
          type: "pdf",
          size: formatFileSize(response.metadata.size),
          user: "userId1"
        };
      }
    } catch (error) {
      console.log("🚀FirebaseService  uploadFile  error", error);
    }

    return null;
  }

}
