import { Module } from '@nestjs/common';
import { CreateDonationsController } from 'src/controllers/create-donations.controller';
import { FindDonationsController } from 'src/controllers/find-donations.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { DonationsService } from 'src/services/donations.service';

@Module({
  controllers: [FindDonationsController, CreateDonationsController],
  providers: [DonationsService, PrismaService],
})
export class DonationsModule {}
