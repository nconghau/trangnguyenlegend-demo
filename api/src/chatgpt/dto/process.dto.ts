import { BaseModel } from "src/common/model/common.model";

export class ProcessDTO extends BaseModel {
  texts: string[];
  user: string;
}