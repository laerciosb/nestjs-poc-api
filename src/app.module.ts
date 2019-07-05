import { Module, CacheModule, CacheInterceptor } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotificationsModule } from './notifications/notifications.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { redisConfig } from './config/redis.config';

@Module({
  imports: [
    CacheModule.register(redisConfig),
    TypeOrmModule.forRoot(typeOrmConfig),
    NotificationsModule,
  ],
  controllers: [AppController],
  providers: [
    { provide: APP_INTERCEPTOR, useClass: CacheInterceptor },
    AppService,
  ],
})
export class AppModule {}
