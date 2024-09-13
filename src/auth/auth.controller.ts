/** @format */

import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { regsiterDto } from './dto/dto.register';
import { AuthJwtService } from './auth-jwt.service';
import { JwtAuthGuard } from './auth.guard';
import { Request as ExpressReq } from 'express';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly authJwtService: AuthJwtService
  ) {}

  @Post('singup')
  singup(@Body() body: regsiterDto) {
    return this.authService.register(body);
  }

  @UseGuards(JwtAuthGuard)
  @Post('singin')
  singin(@Request() req: ExpressReq) {
    return req.user;
  }

  @Get('/token/:id')
  getToken(@Param('id') id: number) {
    return this.authJwtService.getUserToken(id);
  }
}
