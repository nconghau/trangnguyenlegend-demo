import { BaseModel } from "src/common/model/common.model";

export class TextDTO extends BaseModel {
  text: string;
  file: string;
  user: string;
}