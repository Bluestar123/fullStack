import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './modules/user.module';
import { Course } from './modules/course.model';
import { Episode } from './modules/episode.model';

const modules = TypegooseModule.forFeature([User, Course, Episode]);

// 标记全局模块 都可以引用
@Global()
@Module({
  imports: [
    TypegooseModule.forRootAsync({
      useFactory() {// 工厂函数
        return  {
          uri: process.env.DB,
          useNewUrlParser: true,
          useCreateIndex: true,
          useunifiedTopogy: true,
          useFindAndModify: false
        }
      }
    }),
    // TypegooseModule.forRoot(process.env.DB, {
    //   useNewUrlParser: true,
    //   useCreateIndex: true,
    //   useUnifiedTopology: true,
    //   useFindAndModify: false,
    // }),
    modules,
  ],
  providers: [DbService],
  exports: [DbService, modules],
})
export class DbModule {}
