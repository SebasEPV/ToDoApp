import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { ActivityModule } from './activity/activity.module';

@Module({
  imports: [PrismaModule, UserModule, TaskModule, ActivityModule],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
