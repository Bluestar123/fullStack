import { Module, Global } from '@nestjs/common';
import { CommonService } from './common.service';
import { ConfigModule } from '@nestjs/config'
import { DbModule } from '@libs/db';
import { JwtModule } from '@nestjs/jwt'

// 公共模块
@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    JwtModule.registerAsync({
      useFactory() {
        return {
          secret: process.env.SECRET // 秘钥生成token用的
        }
      }
    }),
    DbModule
  ],
  providers: [CommonService],
  exports: [CommonService, JwtModule],
})
export class CommonModule {}
