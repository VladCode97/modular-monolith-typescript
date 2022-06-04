import { Controller, Get, Inject } from '@nestjs/common';
import { LogsService } from '../connections-microservices/logger/logs.service';

@Controller('logger')
export class LogsController {
  @Inject()
  private readonly logsService: LogsService;

  @Get('findLogs')
  findLogs() {
    return this.logsService.findLogs();
  }
}
