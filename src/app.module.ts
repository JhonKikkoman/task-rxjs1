/** @format */

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RxjsModule } from './rxjs/rxjs.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    RxjsModule,
    UsersModule,
    AuthModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_CONNECT, { dbName: 'auth' }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
