import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Log, LogDocument } from '../database/nosql/Schemas/log.schema';
import { Model } from 'mongoose';
import { ILogsModel } from '../../../../../domain/models/logs.model';

@Injectable()
export class LogsService {
  constructor(
    @InjectModel(Log.name)
    private readonly logModel: Model<LogDocument>,
  ) {}

  async create(log: ILogsModel): Promise<void> {
    await new this.logModel(log).save();
    await log;
  }

  async find(): Promise<Array<ILogsModel>> {
    return this.logModel.find({});
  }
}
