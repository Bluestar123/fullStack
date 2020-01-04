import { prop, modelOptions, arrayProp, Ref } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { Episode } from './episode.model';

@modelOptions({
  schemaOptions: {
    timestamps: true, // 创建时间更新时间
    toJSON: {
      virtuals: true// 虚拟字段true 才能查找到关联
    }
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
  /**
   * localField ，在course中庸那个变量关联，用_id 关联
   * course中_id 与 episode中course 对应
   * foreignField 外键是哪个，跟ref的Episode中的course对应
   * 查询时候顺道查出来
   */
  @arrayProp({ ref: 'Episode', localField: '_id', foreignField: 'course'}) // 字符串好一点， 防止循环引用
  episodes: Ref<Episode>[];
}
