import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import {
  Log,
  LogSchema,
} from './infrastructure/database/nosql/Schemas/log.schema';
import { LogsService } from './infrastructure/services/logs.service';
import { LogsEvent } from './infrastructure/events/logs.event';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.URL_MONGOOSE),
    MongooseModule.forFeature([{ name: Log.name, schema: LogSchema }]),
  ],
  controllers: [LogsEvent],
  providers: [LogsService],
})
export class LogModule {}
