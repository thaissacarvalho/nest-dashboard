import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Institutions } from '@prisma/client';
import { CreateInstitutionDto } from 'src/DTO/create-institution.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InstitutionService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Institutions[]> {
    try {
      return this.prisma.institutions.findMany();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  async createInstitution(createInstitution: CreateInstitutionDto) {
    const { name } = createInstitution;

    try {
      const existingName = await this.prisma.institutions.findFirst({
        where: { name },
      });

      if (existingName) {
        throw new HttpException(
          'Institution already exists.',
          HttpStatus.CONFLICT,
        );
      }

      return this.prisma.institutions.create({
        data: {
          name,
        },
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.CONFLICT);
    }
  }

  async findInstitutionsById(institutionId: number) {
    try {
      return this.prisma.institutions.findUnique({
        where: { id: institutionId },
        include: {
          campaigns: {
            select: {
              name: true,
            },
          },
        },
      });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
