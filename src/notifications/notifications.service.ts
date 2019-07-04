import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotificationRepository } from './notification.repository';
import { Notification } from './notification.entity';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';

@Injectable()
export class NotificationsService {
  constructor(
    @InjectRepository(NotificationRepository)
    private readonly notificationRepository: NotificationRepository,
  ) {}

  async findAll(): Promise<Notification[]> {
    return await this.notificationRepository.find();
  }

  async findOne(id: string): Promise<Notification> {
    const notification = await this.notificationRepository.findOne(id);
    if (!notification) {
      throw new NotFoundException(`Notification with ID ${id} not found`);
    }
    return notification;
  }

  async create(createNotificationDto: CreateNotificationDto): Promise<Notification> {
    return this.notificationRepository.insertNotification(createNotificationDto);
  }

  async update(id: string, updateNotificationDto: UpdateNotificationDto): Promise<Notification> {
    return this.notificationRepository.updateNotification(id, updateNotificationDto);
  }

  async remove(id: string): Promise<void> {
    await this.notificationRepository.delete(id);
  }
}
