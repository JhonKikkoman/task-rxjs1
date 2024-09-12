/** @format */

import {
  ExceptionFilter,
  ArgumentsHost,
  HttpException,
  Catch,
} from '@nestjs/common';
import { Response } from 'express';

// prettier-ignore
@Catch(HttpException)
export class HttpExpectionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    console.log('exeption', status);
    response
    .status(status)
    .json(
        {
            timestamp: new Date().toISOString(),
            status: "fail",
            data: exception.message,
            code: status ? status : 500,
        }
    )
  }
}
