/** @format */

import { Injectable } from '@nestjs/common';
import { regsiterDto } from './dto/dto.register';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { AuthDocument } from './entities/schemas/auth.schema';
import { Connection, Model } from 'mongoose';

type objT = { email: string; password: string };

@Injectable()
export class AuthService {
  constructor(
    @InjectModel('Auth') private readonly AuthModel: Model<AuthDocument>,
    @InjectConnection() private readonly connection: Connection
  ) {}

  register(body: regsiterDto) {
    try {
      const register = new this.AuthModel(body);
      register.save();
      return 'registration was success';
    } catch (err) {
      return err;
    }
  }

  getUser(id: number): Promise<AuthDocument> {
    try {
      return this.AuthModel.findById({ _id: id }).select('-__v');
    } catch (err) {
      return err;
    }
  }

  //prettier-ignore
  getUserByPassAndEmail(obj: objT): Promise<AuthDocument> {
    try {
      return this.AuthModel.findOne(obj).select('-__v').exec();
    } catch (err) {
      return err;
    }
  }
}
