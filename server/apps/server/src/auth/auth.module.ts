import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports:[PassportModule],
  controllers: [AuthController],
  providers: [LocalStrategy, JwtStrategy], // 放复杂操作的地方 , 把token 策略放这里
})
export class AuthModule {}
