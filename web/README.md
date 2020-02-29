# topFullStack

## 建模

- 收藏

- 课程
> 备操作的对象
- 用户
> 操作者， 主体， 操作对象是 [课程]
    user1   nodejs
    user1   html


    - 最简单方式
        1. 在user1 用户中加个字段  liked: [_id, _id]
        ```
            @arrayProp({ref:'Course'})
            liked: Ref<Course>[]  // 最简单操作 但是 不利于分页
        ```
    - 有分页不要用单个字段 数组形式