import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { User } from '@libs/db/modules/user.module';

export class RegisterDto {
  @ApiProperty()
  username: string
  @ApiProperty()
  password: string
}

@Controller('auth')
@ApiTags('用户')
export class AuthController {

  constructor(
    @InjectModel(User) private userModel:ReturnModelType<typeof User>
  ){}
  @Post('register')
  @ApiOperation({summary: '注册'})
  async register (@Body() dto:RegisterDto) { // data transform object
    const {username, password} = dto
    this.userModel.create({username, password}) // 直接属性名 属性值， 根据数据库的格式来
    return dto 
  }

  @Post('login')
  @ApiOperation({summary: '登陆'})
  async login (@Body() dto) {
    return dto
  }

  @Get('user')
  @ApiOperation({summary: '获取个人信息'})
  async user () {
    return {}
  }
}
