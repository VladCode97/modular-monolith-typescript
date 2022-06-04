import { Controller, Inject } from '@nestjs/common';
import { LogsService } from '../services/logs.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ILogsModel } from '../../../../../domain/models/logs.model';
import { ECommands } from '../../../../../domain/enums/commands/commands.enum';

@Controller()
export class LogsEvent {
  @Inject()
  private logsService: LogsService;

  @MessagePattern({ cmd: ECommands.CREATE_LOG })
  createLog(@Payload() log: ILogsModel) {
    return this.logsService.create(log);
  }

  @MessagePattern({ cmd: ECommands.VIEW_LOG })
  viewLogs() {
    return this.logsService.find();
  }
}
