<template>
  <div>
    <h1>{{ isNew ? "编辑" : "创建" }}列表</h1>
    <ele-form :form-data="data" :form-desc="fields"> </ele-form>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator"

@Component({})
export default class CourseEdit extends Vue {
  @Prop(String) id!: string //会赋值

  data = {}
  fields = {
    name: { label: "课程名称", type: "input" },
    cover: { label: "课程封面", type: "input" }
  }

  // computed  把方法当成属性用
  get isNew() {
    return this.id
  }

  async fetch() {
    const res = await this.$http.get("courses")
    this.data = res.data
  }
  created() {
    // this.fetch()
  }
}
</script>

<style lang="scss"></style>
