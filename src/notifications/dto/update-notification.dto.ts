import { IsOptional, IsIn } from 'class-validator';
import { NotificationStatus } from '../notification-status.enum';

export class UpdateNotificationDto {
  @IsOptional()
  fractalId: number;

  @IsOptional()
  appId: number;

  @IsOptional()
  message: string;

  @IsOptional()
  @IsIn([NotificationStatus.READ])
  status: NotificationStatus;
}
