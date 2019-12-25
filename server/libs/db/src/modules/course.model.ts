import { prop, modelOptions, arrayProp, Ref } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { Episode } from './episode.model';

@modelOptions({
  schemaOptions: {
    timestamps: true, // 创建时间更新时间
  },
})
/**
 * 课程 课时
 */
export class Course {
  @ApiProperty({ description: '课程名称' })
  @prop()
  name: string;

  @ApiProperty({ description: '封面图' })
  @prop()
  cover: string;

  // 数据关联, 课时属于哪个课程
  @arrayProp({ itemsRef: 'Episode' }) // 字符串好一点， 防止循环引用
  episodes: Ref<Episode>[];
}
