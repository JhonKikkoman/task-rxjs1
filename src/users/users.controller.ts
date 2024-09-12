/** @format */

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  UseFilters,
  HttpException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { JoiValidationPipe } from './entities/validation/joi.validation.pipe';
import { registerSchema } from './entities/validation/schemas/register.schema';
import { HttpExpectionFilter } from './http.expection.filter';

@UseFilters(HttpExpectionFilter)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UsePipes(new JoiValidationPipe(registerSchema))
  @Post('create')
  create(@Body() body: CreateUserDto) {
    return this.usersService.create(body);
  }

  @Get()
  findAll() {
    // ожидая ошибку
    throw new HttpException('custom error', 401);
    return this.usersService.allUsers();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.oneUser(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
