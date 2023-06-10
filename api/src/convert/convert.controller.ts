import {
  Body,
  Controller, Get, Post, Query
} from '@nestjs/common';
import { FileUploadDTO } from 'src/file/dto/file.dto';
import { ConvertService } from './convert.service';

@Controller('api/converts')
export class ConvertController {
  constructor(
    private convertService: ConvertService) {
  }

  @Post('toText')
  async toText(@Body("fileUpload") fileUpload: FileUploadDTO[]): Promise<any[]> {
    console.log("🚀", fileUpload)

    return await this.convertService.toText(fileUpload);
  }

  @Get()
  async getFiles(@Query('user') user: string): Promise<any[]> {
    console.log("🚀", user)
    return await this.convertService.getText(user);
  }
}
