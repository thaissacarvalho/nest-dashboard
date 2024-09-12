import { Module } from '@nestjs/common';
import { CreateUserController } from 'src/controllers/create-users.controller';
import { FindUsersController } from 'src/controllers/find-users.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/services/user.service';

@Module({
  controllers: [FindUsersController, CreateUserController],
  providers: [UsersService, PrismaService],
})
export class UsersModule {}
