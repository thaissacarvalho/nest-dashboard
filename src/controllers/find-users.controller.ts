import { Controller, Get, Param } from '@nestjs/common';
import { Users } from '@prisma/client';
import { UsersService } from 'src/services/user.service';

@Controller('users')
export class FindUsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  findAll(): Promise<Users[]> {
    return this.userService.findAll();
  }

  @Get(':usersId/donations')
  async getCampaigns(@Param('usersId') usersId: string) {
    const id = parseInt(usersId, 10);
    return this.userService.findDonationsByUsers(id);
  }
}
