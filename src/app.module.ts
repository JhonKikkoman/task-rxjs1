/** @format */

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RxjsModule } from './rxjs/rxjs.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [RxjsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
