import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TextSchema } from './schemas/text.schema';
import { ConvertController } from './convert.controller';
import { ConvertService } from './convert.service';
import { FileUploadSchema } from 'src/file/schemas/file.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Text', schema: TextSchema }]),
    MongooseModule.forFeature([{ name: 'FileUpload', schema: FileUploadSchema }]),
  ],
  controllers: [ConvertController],
  providers: [
    ConvertService,
  ],
  exports: [
    ConvertService,
  ]
})
export class ConvertModule { }
