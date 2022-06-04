import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const microservice = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
    },
  });
  await app.startAllMicroservices();
  app.listen(3000, () =>
    console.log(`Modular monolith running in >http://localhost:3000`),
  );
}
bootstrap();
