/** @format */

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ChekoutInterceptor } from './app.checkout.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ChekoutInterceptor());
  await app.listen(3000);
}
bootstrap();
