import { Controller, Get, Param } from '@nestjs/common';
import { Campaigns } from '@prisma/client';
import { CampaignService } from 'src/services/campaign.service';

@Controller('campaigns')
export class FindCampaignsController {
  constructor(private readonly campaignService: CampaignService) {}

  @Get()
  findAll(): Promise<Campaigns[]> {
    return this.campaignService.findAll();
  }

  @Get(':campaignsId/donations')
  async getDonations(@Param('campaignsId') campaignId: string) {
    const id = parseInt(campaignId, 10);
    return this.campaignService.findDonationsByCampaign(id);
  }
}
