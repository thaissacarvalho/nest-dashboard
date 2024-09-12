import { Module } from '@nestjs/common';
import { CreateCampaignController } from 'src/controllers/create-campaign.controller';
import { FindCampaignsController } from 'src/controllers/find-campaign.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { CampaignService } from 'src/services/campaign.service';

@Module({
  controllers: [FindCampaignsController, CreateCampaignController],
  providers: [CampaignService, PrismaService],
})
export class CampaingModule {}
