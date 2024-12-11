import { Controller, Get } from '@nestjs/common';
import { Users } from 'src/schema/user.schema';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor (private UsersService:UsersService ){}
    
    @Get()
    async findAll():Promise<Users[]>{
        return this.UsersService.findAll()
    }
}
