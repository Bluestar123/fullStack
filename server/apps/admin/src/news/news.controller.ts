import { Controller, Get } from '@nestjs/common';
import { User } from '@libs/db/modules/user.module';
import { InjectModel } from 'nestjs-typegoose';

@Controller('news')
export class NewsController {
  @Get()
  index() {
    return 4545646;
  }
}
