import { Controller, Get } from '@nestjs/common';
import { Donations } from '@prisma/client';
import { DonationsService } from 'src/services/donations.service';

@Controller('donations')
export class FindDonationsController {
  constructor(private readonly donationService: DonationsService) {}

  @Get()
  findAll(): Promise<Donations[]> {
    return this.donationService.findAll();
  }
}
