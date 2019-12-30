import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { ConfigModule } from '@nestjs/config'
import { DbModule } from '@libs/db';

// 公共模块
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    DbModule
  ],
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
