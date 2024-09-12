import { Module } from '@nestjs/common';
import { CreateInstutionsController } from 'src/controllers/create-institutions.controller';
import { FindInstitutionsController } from 'src/controllers/find-institutions.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { InstitutionService } from 'src/services/institution.service';

@Module({
  controllers: [FindInstitutionsController, CreateInstutionsController],
  providers: [InstitutionService, PrismaService],
})
export class InstitutionModule {}
