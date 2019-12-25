import { prop, modelOptions } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';

@modelOptions({
  schemaOptions: {
    timestamps: true, // 创建时间更新时间
  },
})
export class User {
  @ApiProperty({ description: '用户名'})
  @prop()
  username: string;

  @ApiProperty({ description: '密码'})
  @prop()
  password: string;
}
