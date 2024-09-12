import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Users } from '@prisma/client';
import { CreateUserDto } from 'src/DTO/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Users[]> {
    try {
      return this.prisma.users.findMany();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  async createUser(createUser: CreateUserDto) {
    const { name, username } = createUser;

    try {
      const existingUsername = await this.prisma.users.findUnique({
        where: { username },
      });

      if (existingUsername) {
        throw new HttpException(
          'Username already exists.',
          HttpStatus.CONFLICT,
        );
      }

      return this.prisma.users.create({
        data: {
          name,
          username,
        },
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.CONFLICT);
    }
  }

  async findDonationsByUsers(userId: number) {
    try {
      return this.prisma.users.findUnique({
        where: { id: userId },
        include: {
          Donations: true,
        },
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
