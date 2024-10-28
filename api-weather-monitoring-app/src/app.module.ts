import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './resources/auth/auth.module';
import { StatisticModule } from './resources/statistic/statistic.module';
import { UsersModule } from './user/users/users.module';

@Module({
  imports: [AuthModule, StatisticModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
