import { Module } from '@nestjs/common';
import { UserModule } from './infrastructure/modules/user/user.module';
import { LogModule } from './infrastructure/modules/log/log.module';
import { ApiGatewayModule } from './infrastructure/modules/api-gateway/api-gateway.module';

@Module({
  imports: [UserModule, LogModule, ApiGatewayModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
