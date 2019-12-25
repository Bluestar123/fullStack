import { prop, modelOptions, Ref } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { Course } from './course.model';

@modelOptions({
  schemaOptions: { timestamps: true },
})
export class Episode {
  @ApiProperty({ description: '课时名称' })
  @prop()
  name: string;

  @ApiProperty({ description: '课时文件' })
  @prop()
  file: string;

  // 定义跟course关联， 参考course中东西
  @prop({ref: 'Course'})
  course: Ref<Course>
}
