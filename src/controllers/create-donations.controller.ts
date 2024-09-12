import { Body, Controller, Post } from '@nestjs/common';
import { CreateDonationsDto } from 'src/DTO/create-donation.dto';
import { DonationsService } from 'src/services/donations.service';

@Controller('donations')
export class CreateDonationsController {
  constructor(private readonly donationsService: DonationsService) {}

  @Post()
  async create(@Body() createDonations: CreateDonationsDto) {
    return await this.donationsService.createDonations(createDonations);
  }
}
