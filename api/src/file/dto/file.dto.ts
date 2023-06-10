import { BaseModel } from "src/common/model/common.model";
import { TextDTO } from "src/convert/dto/convert.dto";

export class FileUploadDTO extends BaseModel {
  name: string;
  link: string;
  type: string;
  size: string;
  user: string;
  text?: TextDTO
}
