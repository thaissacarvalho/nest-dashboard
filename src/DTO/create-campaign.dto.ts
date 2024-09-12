import { IsString } from 'class-validator';

export class CreateCampaignDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  institutionName: string;
}
