import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { configuration } from './config/configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set globally the validator
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(configuration().port);
}

bootstrap();