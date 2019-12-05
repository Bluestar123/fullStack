import { Controller, Get } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User } from '@libs/db/modules/user.module';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiUseTags } from '@nestjs/swagger';

@Crud({
  model: User,
})
@Controller('users')
@ApiUseTags('用户')
export class UsersController {
  constructor(@InjectModel(User) private readonly model) {}
  @Get('options')
  option() {
    return {
      title: '123',
      column: [{ prop: 'username', label: '用户名' }],
    };
  }
}
