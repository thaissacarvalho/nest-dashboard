import { Controller, Get, Param } from '@nestjs/common';
import { Institutions } from '@prisma/client';
import { InstitutionService } from 'src/services/institution.service';

@Controller('institutions')
export class FindInstitutionsController {
  constructor(private readonly institutionService: InstitutionService) {}

  @Get()
  findAll(): Promise<Institutions[]> {
    return this.institutionService.findAll();
  }

  @Get(':institutionId/campaigns')
  async getCampaigns(@Param('institutionId') institutionId: string) {
    const id = parseInt(institutionId, 10);
    return this.institutionService.findInstitutionsById(id);
  }
}
