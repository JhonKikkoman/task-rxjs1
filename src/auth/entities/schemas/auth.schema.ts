/** @format */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

export { Document } from 'mongoose';

export type AuthDocument = Auth & Document;

@Schema()
export class Auth {
  @Prop()
  _id: Types.ObjectId;
  @Prop()
  public email: String;

  @Prop()
  public password: String;

  @Prop({ required: true })
  public firstName: String;

  @Prop()
  public lastName: String;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
