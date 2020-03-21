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

如果like 字段定义死了，只是课程，后续如果有文章，老师之类的，改起来会很费事

likes 表   （收藏或点赞等， **不能单一的命名**）
user object type createdAt
 1     1     Course(类型使用和模型一样的名字，查找方便)
 2     2     Episode
__________________
actions 模型
user object type      action createdAt
 1     1     Course   addFavorite
 1     2     Product  like
 2     1     Product  upVote顶
 1     3     Course   downVote踩