/** @format */

import {
  CallHandler,
  ExecutionContext,
  Injectable,
  InternalServerErrorException,
  NestInterceptor,
} from '@nestjs/common';
import { catchError, Observable, of, tap } from 'rxjs';
import { usersT } from './users/entities/interfaces/user.interface';

type obsT = {
  status: string;
  data: usersT[];
};

// prettier-ignore
@Injectable()
export class ChekoutInterceptor implements NestInterceptor {
    constructor() {}
    public intercept(context: ExecutionContext, next: CallHandler): Observable<obsT> {
        console.log('method executed',{
            handler: context.getHandler().name,
            className: context.getClass().name
        });
        return next
        .handle()
        .pipe(
            tap((data) => {
                return {
                    status: 'success',
                    data
                }
            }),
            catchError((err) => {
                return of({
                    status: 'failed',
                    data: new InternalServerErrorException(err),
                })
            })
        )
    }
}
