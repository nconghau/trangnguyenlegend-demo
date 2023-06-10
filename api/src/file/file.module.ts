import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express/multer';
import { diskStorage } from 'multer';
import { CloudinaryService } from './cloudinary.service';
import { FileController } from './file.controller';
import { FileService } from './file.service';
import { FileUploadSchema } from './schemas/file.schema';
import { FirebaseService } from './filebase.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'FileUpload', schema: FileUploadSchema }]),
    MulterModule.register({
      storage: diskStorage({
        destination: './files',
      }),
    }),
  ],
  controllers: [FileController],
  providers: [
    FileService,
    CloudinaryService,
    FirebaseService
  ],
})
export class FileModule { }
