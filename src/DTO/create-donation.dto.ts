import { IsNumber, IsString } from 'class-validator';

export class CreateDonationsDto {
  @IsString()
  userName: string;

  @IsString()
  institutionName: string;

  @IsString()
  campaignName: string;

  @IsString()
  item: string;

  @IsNumber()
  amount: number;
}
