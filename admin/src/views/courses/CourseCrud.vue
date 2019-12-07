<template>
  <div>
    <avue-crud
      :data="data.data"
      :option="option"
      @row-save="create"
      @row-update="update"
      @row-del="remove"
    >
    </avue-crud>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

@Component({})
export default class CourseList extends Vue {
  data = {}

  option = {
    title: "课程管理",
    column: [
      { prop: "name", label: "课程名称" },
      { prop: "cover", label: "课程封面图" }
    ]
  }

  async fetch() {
    const res = await this.$http.get("courses")
    this.data = res.data
  }
  async create(row, done, loading) {
    await this.$http.post("courses", row)
    this.$message.success("创建成功")
    this.fetch()
    done() // 加载完成 自动关闭框
  }
  async update(row, index, done, loading) {
    const data = JSON.parse(JSON.stringify(row))
    delete data.$index
    await this.$http.put(`/courses/${data._id}`, data)
    this.$message.success("更新成功")
    this.fetch()
    done()
  }
  async remove(row: any) {
    // 捕获错误，
    try {
      await this.$confirm("是否确认删除")
    } catch (error) {
      return // 防止往下自动执行
    }
    await this.$http.delete(`/courses/${row._id}`)
    this.$message.success("删除成功")
    this.fetch()
  }
  created() {
    this.fetch()
  }
}
</script>

<style lang="scss"></style>
