import { BaseModel } from '../base/base-model';

export class AppointmentsModel extends BaseModel {
  telNumbers: number[];
  sendTime: string;
  message: string;
}
