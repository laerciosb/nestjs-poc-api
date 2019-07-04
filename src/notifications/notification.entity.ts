import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { NotificationStatus } from './notification-status.enum';

@Entity()
export class Notification {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  fractalId: number;

  @Column()
  appId: number;

  @Column()
  message: string;

  @Column()
  status: NotificationStatus;
}
