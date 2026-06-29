import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsageModule } from './usage/usage.module';

@Module({
  imports: [UsageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
