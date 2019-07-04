import { Notification } from './notification.entity';
import { Repository, EntityRepository, getMongoManager } from 'typeorm';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';

@EntityRepository(Notification)
export class NotificationRepository extends Repository<Notification> {
  async insertNotification(createNotificationDto: CreateNotificationDto): Promise<Notification> {
    const { fractalId, appId, message } = createNotificationDto;
    const notification = new Notification();

    notification.fractalId = fractalId;
    notification.appId     = appId;
    notification.message   = message;

    const manager = getMongoManager();
    await manager.save(notification);

    return notification;
  }

  async updateNotification(id: string, updateNotificationDto: UpdateNotificationDto): Promise<Notification> {
    const { fractalId, appId, message } = updateNotificationDto;
    const notification = await this.findOne(id);

    if (fractalId) { notification.fractalId = fractalId; }
    if (appId)     { notification.appId     = appId; }
    if (message)   { notification.message   = message; }

    const manager = getMongoManager();
    await manager.save(notification);

    return notification;
  }
}
