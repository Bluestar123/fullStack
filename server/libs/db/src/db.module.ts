import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose'
import { User } from './modules/user.module';

const modules = TypegooseModule.forFeature([User])

// 标记全局模块 都可以引用
@Global()
@Module({
  imports:[
    TypegooseModule.forRoot('mongodb://localhost/topfullstack',{
      useNewUrlParser:true,
      useCreateIndex:true,
      useUnifiedTopology:true,
      useFindAndModify:false
    }),
    modules
  ],
  providers: [DbService],
  exports: [DbService,modules],
})

export class DbModule {}
