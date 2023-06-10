import {
  Body,
  Controller, Get, Post, Query
} from '@nestjs/common';
import { TextDTO } from 'src/convert/dto/convert.dto';
import { MainService } from './main.service';
import { ProcessDTO } from './dto/process.dto';

@Controller('api')
export class MainController {
  constructor(
    private mainService: MainService
  ) {
  }

  @Post("/process")
  async process(@Body() payload: ProcessDTO): Promise<any> {
    console.log("🚀", payload)
    return await this.mainService.process(payload);
  }

  @Get("/getChatGPTResponse")
  async getChatGPTResponse(@Query('user') user: string): Promise<any[]> {
    console.log("🚀", user)
    return await this.mainService.getChatGPTResponse(user);
  }
}
