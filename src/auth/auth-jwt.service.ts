/** @format */

import { Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthJwtService {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService
  ) {}

  async validateUser(obj: any) {
    try {
      const user = await this.authService.getUserByPassAndEmail(obj);
      return user
        ? `Welcome ${user.firstName} @mail - ${user.email}! ID-${user._id}`
        : null;
    } catch (err) {
      return err;
    }
  }

  async getUserToken(id: number) {
    try {
      const { email, password } = await this.authService.getUser(id);
      return this.jwtService.sign({ email, password });
    } catch (err) {
      return err;
    }
  }
}
