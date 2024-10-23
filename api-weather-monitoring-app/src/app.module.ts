import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './resources/auth/auth.module';
import { StatisticModule } from './resources/statistic/statistic.module';

@Module({
  imports: [AuthModule, StatisticModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
