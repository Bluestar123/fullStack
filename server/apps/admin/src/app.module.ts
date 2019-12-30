import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { CoursesModule } from './courses/courses.module';
import { EpisodesModule } from './episodes/episodes.module';
import { MulterModule } from '@nestjs/platform-express';
import { CommonModule } from '@app/common';
const MAO = require('multer-aliyun-oss');

@Module({
  imports: [
    CommonModule, // 放上面先加载，然后在加载别的模块
    MulterModule.registerAsync({
      useFactory() {
        return {
          storage: MAO({
            config: {
              region: 'oss-cn-hangzhou',
              accessKeyId: 'LTAI4FuhmDY8p3cqXgvdXoFh',
              accessKeySecret: 'BJZHwJk8sBxr4wXZDk3SriSCskAtUV',
              bucket: 'fulltopstack',
            }
          })
        }
      }
    }),
    // MulterModule.register({
      // 存储地址，模块
      // dest: 'uploads',
    // }),
    UsersModule,
    CoursesModule,
    EpisodesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
