import { Controller, Get, Inject } from '@nestjs/common';
import { LogsService } from '../connections-microservices/logs/logs.service';

@Controller('logs')
export class LogsController {
  @Inject()
  private readonly logsService: LogsService;

  @Get('findLogs')
  findLogs() {
    return this.logsService.findLogs();
  }
}
