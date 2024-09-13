/** @format */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export { Document } from 'mongoose';

export type AuthDocument = Auth & Document;

@Schema()
export class Auth {
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
