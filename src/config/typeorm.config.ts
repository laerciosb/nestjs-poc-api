import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mongodb',
  host: 'localhost',
  database: 'notifications-api_development',
  entities: [join(__dirname, '/../**/*.entity{.ts,.js}')],
  synchronize: true,
  useNewUrlParser: true,
};
