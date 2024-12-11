import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schema/user.schema';

@Module({
  imports : [MongooseModule.forFeature([{name:'Users', schema: UserSchema}])], 
  providers: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
