import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { NewsController } from './news/news.controller';
import { NewsModule } from './news/news.module';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';

@Module({
  imports: [DbModule, NewsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
