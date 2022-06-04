import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { LOGS_SERVICE_SYMBOL } from '../../../domain/Symbols/services.symbols';
import { UserService } from './infrastructure/services/user.service';
import { UserEvent } from './infrastructure/events/user.event';
import { LogsService } from './infrastructure/connection-microservices/connections-microservices/logs/logs.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: LOGS_SERVICE_SYMBOL,
        transport: Transport.TCP,
        options: {
          host: '0.0.0.0',
        },
      },
    ]),
  ],
  controllers: [UserEvent],
  providers: [LogsService, UserService],
})
export class UserModule {}
