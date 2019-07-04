import { IsNotEmpty } from 'class-validator';

export class CreateNotificationDto {
  @IsNotEmpty()
  fractalId: number;

  @IsNotEmpty()
  appId: number;

  @IsNotEmpty()
  message: string;
}
