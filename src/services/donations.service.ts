import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Donations } from '@prisma/client';
import { CreateDonationsDto } from 'src/DTO/create-donation.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DonationsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Donations[]> {
    try {
      return this.prisma.donations.findMany();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  async createDonations(createDonations: CreateDonationsDto) {
    const { userName, institutionName, campaignName, item, amount } =
      createDonations;

    try {
      const username = await this.prisma.users.findFirst({
        where: { username: userName },
      });

      if (!username) {
        throw new HttpException('User not found.', HttpStatus.NOT_FOUND);
      }

      const campaign = await this.prisma.campaigns.findFirst({
        where: { name: campaignName },
      });

      if (!campaign) {
        throw new HttpException('Campaign not found.', HttpStatus.NOT_FOUND);
      }

      const institution = await this.prisma.institutions.findFirst({
        where: { name: institutionName },
      });

      if (!institution) {
        throw new HttpException('Institution not found.', HttpStatus.NOT_FOUND);
      }

      return this.prisma.donations.create({
        data: {
          userName,
          institutionName,
          campaignName,
          item,
          amount,
        },
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.CONFLICT);
    }
  }
}
