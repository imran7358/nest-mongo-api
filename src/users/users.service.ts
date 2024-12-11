import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users, UsersDocument } from 'src/schema/user.schema';

@Injectable()
export class UsersService {
    constructor(@InjectModel(Users.name) private userModel: Model<Users>) { }
    async findAll(): Promise<Users[]> {
        const resultAll = await this.userModel.find();
        return resultAll
    }
    
    

}

