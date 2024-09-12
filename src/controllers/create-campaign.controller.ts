import { Body, Controller, Post } from '@nestjs/common';
import { CreateCampaignDto } from 'src/DTO/create-campaign.dto';
import { CampaignService } from 'src/services/campaign.service';

@Controller('campaigns')
export class CreateCampaignController {
  constructor(private readonly campaignService: CampaignService) {}

  @Post()
  async create(@Body() createCampaign: CreateCampaignDto) {
    return await this.campaignService.createCampaign(createCampaign);
  }
}
