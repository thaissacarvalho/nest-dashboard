import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/DTO/create-user.dto';
import { UsersService } from 'src/services/user.service';

@Controller('users')
export class CreateUserController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async create(@Body() createUser: CreateUserDto) {
    return await this.userService.createUser(createUser);
  }
}
