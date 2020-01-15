// 本地策略 用户名密码
import {Strategy, StrategyOptions, ExtractJwt} from 'passport-jwt'
import {PassportStrategy} from '@nestjs/passport'
import { InjectModel } from 'nestjs-typegoose'
import { User } from '@libs/db/modules/user.module'
import { ReturnModelType } from '@typegoose/typegoose'
import { BadRequestException } from '@nestjs/common'
import { compareSync} from 'bcryptjs'

// 继承并读取 策略
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt'){ // 默认是 passport- name
  constructor(@InjectModel(User) private userModel:ReturnModelType<typeof User>){
    // jwt 登陆 1. 把token取出来 2.通过解密token出来的数据（_id）找对应用户
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //自动从header bear中取token  // 没有token 守卫会自动报错
      secretOrKey:process.env.SECRET
    } as StrategyOptions)
  }
  // 解析完token的 _id 值，传过来
  async validate(id) {
    return await this.userModel.findById(id)
  }
}