import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ECommands } from 'src/domain/enums/commands/commands.enum';
import { LOGS_SERVICE_SYMBOL } from '../../../../../../domain/Symbols/services.symbols';
import { map } from 'rxjs';

@Injectable()
export class LogsService {
  constructor(
    @Inject(LOGS_SERVICE_SYMBOL)
    private readonly logsProxyService: ClientProxy,
  ) {}

  findLogs() {
    const pattern = { cmd: ECommands.VIEW_LOG };
    return this.logsProxyService.send(pattern, {}).pipe(
      map((data) => {
        return data;
      }),
    );
  }
}
