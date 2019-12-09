import { Controller, Get } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';
import { Episode } from '@libs/db/modules/episode.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';

@Crud({
  model: Episode,
})
@Controller('episodes')
@ApiUseTags('课时')
export class EpisodesController {
  constructor(
    @InjectModel(Episode)
    private readonly model: ReturnModelType<typeof Episode>,
  ) {}

  // 展示table中curd定义
  @Get('option')
  option() {
    return {
      title: '课时管理',
      column: [{ prop: 'name', label: '课时名称' }],
    };
  }
}