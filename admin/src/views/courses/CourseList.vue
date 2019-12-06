<template>
  <div>
    <h1>课程列表</h1>
    <el-table :data="data.data" border stripe>
      <el-table-column
        v-for="(field, name) in fields"
        :prop="name"
        :key="name"
        :label="field.label"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"

@Component({})
export default class CourseList extends Vue {
  data = {}
  fields = {
    _id: { label: "ID" },
    name: { label: "课程名称" },
    cover: { label: "课程封面" }
  }

  async fetch() {
    const res = await this.$http.get("courses")
    this.data = res.data
  }
  created() {
    this.fetch()
  }
}
</script>

<style lang="scss"></style>
