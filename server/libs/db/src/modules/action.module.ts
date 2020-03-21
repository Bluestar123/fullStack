import { prop, modelOptions, Ref } from "@typegoose/typegoose";
import { User } from "./user.module";
import { Episode } from "./episode.model";
import { Course } from "./course.model";

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
// Ref代表 参考关联
export class Action {
  @prop({ref: 'User'})
  user: Ref<User>

  @prop({enum: ['Course', 'Episode']})
  type: string  // Course,  Episode


  // refPath 动态参考 基于 type 字段参考
  @prop({refPath: 'type'})
  object: Ref<Course|Episode>

  @prop({enum: ['like', 'upVote']})
  name: string
}