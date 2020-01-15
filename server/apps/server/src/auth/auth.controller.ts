import { Controller, Post, Body, Get, UseGuards, Req } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiProperty, ApiBearerAuth } from '@nestjs/swagger';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType, DocumentType } from '@typegoose/typegoose';
import { User, UserDocument } from '@libs/db/modules/user.module';
import { AuthGuard } from '@nestjs/passport';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { CurrentUser } from './current-user.decorator';

@Controller('auth')
@ApiTags('用户')
export class AuthController {
  constructor(
    private jwtService: JwtService,
    @InjectModel(User) private userModel:ReturnModelType<typeof User>
  ){}
  @Post('register')
  @ApiOperation({summary: '注册'})
  async register (@Body() dto:RegisterDto) { // data transform object
    const {username, password} = dto
    const user = await this.userModel.create({username, password}) // 直接属性名 属性值， 根据数据库的格式来
    return user 
  }

  @Post('login')
  @ApiOperation({summary: '登陆'})
  @UseGuards(AuthGuard('local'))
  async login (@Body() dto: LoginDto, @CurrentUser() user: UserDocument) {
    // 本地权限验证的结果 赋值到 req中 req.user

    return {
      token: this.jwtService.sign(String(user._id))
    }
  }

  @Get('user')
  @ApiOperation({summary: '获取个人信息'})
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async user (@CurrentUser() user: DocumentType<User>) { //DocumentType表示可以使用mongose中属性， 基于User 模块
    return user
  }
}
