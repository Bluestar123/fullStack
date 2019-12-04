import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { NewsController } from './news/news.controller';

@Module({
  imports: [
    DbModule
  ],
  controllers: [AppController, NewsController],
  providers: [AppService],
})
export class AppModule {}
