/** @format */

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AuthJwtService } from './auth-jwt.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authJwtService: AuthJwtService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.SECRET_KEY,
    });
  }

  async validate(payload: any) {
    const { email, password } = payload;
    try {
      const user = await this.authJwtService.validateUser({ email, password });
      if (!user) {
        throw new UnauthorizedException();
      }
      return user;
    } catch (err) {
      return err;
    }
  }
}
