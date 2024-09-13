/** @format */

import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthGuard } from '@nestjs/passport';

type methodT = boolean | Promise<boolean> | Observable<boolean>;

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  public canActivate(context: ExecutionContext): methodT {
    return super.canActivate(context);
  }
  public handleRequest<TUser = any>(err: any, user: any): TUser {
    if (err) {
      throw err;
    }
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
