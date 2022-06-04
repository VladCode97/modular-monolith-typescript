import { EErrorsCatch } from '../enums/errors.enum';

export interface ILogsModel {
  name: string;
  message: string;
  typeError: EErrorsCatch;
}
