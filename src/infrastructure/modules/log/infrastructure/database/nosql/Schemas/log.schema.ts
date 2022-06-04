import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ILogsModel } from '../../../../../../../domain/models/logs.model';
import { EErrorsCatch } from '../../../../../../../domain/enums/errors.enum';

export type LogDocument = Log & Document;

@Schema()
export class Log implements ILogsModel {
  @Prop({ required: true, default: '' })
  message: string;

  @Prop({ required: true, default: '' })
  name: string;

  @Prop({ required: true, default: '' })
  typeError: EErrorsCatch;
}

export const LogSchema = SchemaFactory.createForClass(Log);
