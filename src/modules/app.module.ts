import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { UsersModule } from './user.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { InstitutionModule } from './institution.module';
import { CampaingModule } from './campaign.module';
import { DonationsModule } from './donation.module';

@Module({
  imports: [UsersModule, InstitutionModule, CampaingModule, DonationsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
