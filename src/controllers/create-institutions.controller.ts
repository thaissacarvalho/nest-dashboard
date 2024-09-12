import { Body, Controller, Post } from '@nestjs/common';
import { CreateInstitutionDto } from 'src/DTO/create-institution.dto';
import { InstitutionService } from 'src/services/institution.service';

@Controller('institutions')
export class CreateInstutionsController {
  constructor(private readonly instutitionService: InstitutionService) {}

  @Post()
  async create(@Body() createInstitution: CreateInstitutionDto) {
    return await this.instutitionService.createInstitution(createInstitution);
  }
}
