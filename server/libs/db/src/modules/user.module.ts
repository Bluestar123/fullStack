import { prop, modelOptions, DocumentType } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { hashSync } from 'bcryptjs';

export type UserDocument = DocumentType<User>

@modelOptions({
  schemaOptions: {
    timestamps: true, // 创建时间更新时间
  },
})
export class User {
  @ApiProperty({ description: '用户名', example: 'user1'})
  @prop()
  username: string;

  @ApiProperty({ description: '密码', example: 'pass1'})
  @prop({
    select: false,// 常规请求中不返回 密码字段
    get(val){
      return val
    },
    set(val) {
      // 保存到数据库之前处理下加密
      return val ? hashSync(val) : val 
    }
  }) // set 散列，传入当前值 返回什么样的值
  password: string;
}
