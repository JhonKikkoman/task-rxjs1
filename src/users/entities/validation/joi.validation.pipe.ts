/** @format */

import { BadRequestException, Injectable } from '@nestjs/common';
import { ArgumentMetadata, PipeTransform } from '@nestjs/common/interfaces';
import { ObjectSchema } from 'joi';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

// prettier-ignore
@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: ObjectSchema) {}
  public transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    const { error } = this.schema.validate(value);
    if (error) {
      throw new BadRequestException('validation failed').getStatus();
    }
    return value;
  }
}
