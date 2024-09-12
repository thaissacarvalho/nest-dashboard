import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Campaigns } from '@prisma/client';
import { CreateCampaignDto } from 'src/DTO/create-campaign.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CampaignService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Campaigns[]> {
    try {
      return this.prisma.campaigns.findMany();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  async createCampaign(createCampaign: CreateCampaignDto) {
    const { name, description, institutionName } = createCampaign;

    const existingName = await this.prisma.campaigns.findFirst({
      where: { name, institutionName },
    });

    if (existingName) {
      throw new HttpException(
        'Campaigns already exists.',
        HttpStatus.BAD_REQUEST,
      );
    }

    try {
      return this.prisma.campaigns.create({
        data: {
          name,
          description,
          institutionName,
        },
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  async findDonationsByCampaign(campaignId: number) {
    try {
      return this.prisma.campaigns.findUnique({
        where: { id: campaignId },
        include: {
          Donations: true,
        },
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
