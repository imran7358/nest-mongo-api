import { Prop, Schema, SchemaFactory  } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UsersDocument = Users & Document;

@Schema({
  timestamps : true,
})
export class Users {
    @Prop({ required: true })
    name: string;
  
    @Prop({ required: true, unique: true })
    email: string;
  
    @Prop({ required: true })
    password: string;
  }
  
  export const UserSchema = SchemaFactory.createForClass(Users);
  