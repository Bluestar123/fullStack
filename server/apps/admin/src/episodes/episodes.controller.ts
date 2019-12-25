import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';
import { Episode } from '@libs/db/modules/episode.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { Course } from '@libs/db/modules/course.model';

@Crud({
  model: Episode,
})
@Controller('episodes')
@ApiTags('课时')
export class EpisodesController {
  constructor(
    // 引入episode为了增删改查
    @InjectModel(Episode)
    private readonly model: ReturnModelType<typeof Episode>,
    // 引入模块 ，方法查询
    @InjectModel(Course) private readonly courseModel: ReturnModelType<typeof Course>
  ) {}

  // 展示table中curd定义
  @Get('option')
  async option() {
    const courses = (await this.courseModel.find()).map(item => ({
      label: item.name,
      value: item._id
    }))
    return {
      title: '课时管理',
      align: 'center',
      border: true,
      stripe: true,
      translate: false,
      column: [{
        label:'所属课程',
        prop: 'course',
        type: 'select',
        row: true,
        dicData: courses
      },{ prop: 'name', label: '课时名称', span: 24 }, {
        prop:'file',
        label: '视频文件',
        listType:'picture-img',
        span: 24,
        type: 'upload',
        action: '/upload',
        width: 120
      }],
    };
  }
}
