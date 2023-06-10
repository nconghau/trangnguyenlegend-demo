import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatGPTResponseSchema } from './schemas/chatGPTResponse.schema';
import { MainController } from './Main.controller';
import { MainService } from './main.service';
import { TextSchema } from 'src/convert/schemas/text.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'ChatGPTResponse', schema: ChatGPTResponseSchema }]),
    MongooseModule.forFeature([{ name: 'Text', schema: TextSchema }]),
  ],
  controllers: [MainController],
  providers: [
    MainService,
  ],
  exports: [
    MainService,
  ]
})
export class MainModule { }
