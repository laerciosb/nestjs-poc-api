import { IsOptional } from 'class-validator';

export class UpdateNotificationDto {
  @IsOptional()
  fractalId: number;

  @IsOptional()
  appId: number;

  @IsOptional()
  message: string;
}
