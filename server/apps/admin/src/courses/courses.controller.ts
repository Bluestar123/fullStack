import { Controller, Get } from '@nestjs/common';
import { Course } from '@libs/db/modules/course.model';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiUseTags } from '@nestjs/swagger';

@Crud({
  model: Course,
})
@Controller('courses')
@ApiUseTags('课程')
export class CoursesController {
  // 类型可以定义可以不定义， 如果定义用泛型
  constructor(
    @InjectModel(Course) private readonly model: ReturnModelType<typeof Course>,
  ) {}

  // 展示table中curd定义
  @Get('option')
  option() {
    return {
      title: '课程管理',
      align: 'center',
      border: true,
      stripe: true,
      column: [
        {
          prop: 'name',
          label: '课程名称',
          sortable: true,
          search: true,
          regex: true,
          row: true,
        },
        {
          prop: 'cover',
          label: '课程封面图',
          type: 'upload',
          listType: 'picture-img',
          row: true,
          action: 'upload',
          width: '120',
        },
      ],
    };
  }
}
