import { Module } from '@nestjs/common';
import { LogsService } from './infrastructure/connections-microservices/logs/logs.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import {
  LOGS_SERVICE_SYMBOL,
  USER_SERVICE_SYMBOL,
} from '../../../domain/Symbols/services.symbols';
import { LogsController } from './infrastructure/controllers/logs.controller';
import { UserController } from './infrastructure/controllers/user.controller';
import { UserService } from './infrastructure/connections-microservices/user/user.service';

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
      {
        name: USER_SERVICE_SYMBOL,
        transport: Transport.TCP,
        options: {
          host: '0.0.0.0',
        },
      },
    ]),
  ],
  providers: [LogsService, UserService],
  controllers: [LogsController, UserController],
})
export class ApiGatewayModule {}
