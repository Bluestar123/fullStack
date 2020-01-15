// 本地策略 用户名密码
import {Strategy, IStrategyOptions} from 'passport-local'
import {PassportStrategy} from '@nestjs/passport'
import { InjectModel } from 'nestjs-typegoose'
import { User } from '@libs/db/modules/user.module'
import { ReturnModelType } from '@typegoose/typegoose'
import { BadRequestException } from '@nestjs/common'
import { compareSync} from 'bcryptjs'

// 继承并读取 策略
export class LocalStrategy extends PassportStrategy(Strategy, 'local'){ // 默认是 passport- name
  constructor(@InjectModel(User) private userModel:ReturnModelType<typeof User>){
    /**
     * as 标记是什么类型， 这样就会有提示
     * 用的local 所以读取的是 requestbody中的值， 默认username password， 可以修改
     *  */ 
    super({
      usernameField: 'username',
      passwordField: 'password'
    } as IStrategyOptions)
  }
  // 一定要返回 用户
  async validate(username:string, password:string) {
    const user = await this.userModel.findOne({
      username
    }).select('+password') // 要求返回密码字段
    if (!user) {
      throw new BadRequestException('用户名不正确')
    }
    if (!compareSync(password, user.password)) {
      throw new BadRequestException('密码不正确')
    }
    return user
  }
}