<template>
  <div>
    <avue-crud
      v-if="option.column"
      :page="page"
      :data="data.data"
      :option="option"
      @row-save="create"
      @row-update="update"
      @row-del="remove"
      @on-load="changePage"
      @sort-change="changeSort"
    ></avue-crud>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { watch } from 'fs'

@Component({})
export default class ResourceList extends Vue {
  @Prop(String) resource!: string
  private data: any = {}

  private option: any = {}

  query: any = {
    limit: 2
  }

  private page = {
    total: 0
    // pageSize: 2
    // pageSizes: [2, 10, 20]
  }

  // @Watch('option')
  // changeOption(newVal: any, oldVal: any) {
  // }

  async fetchOption() {
    const res = await this.$http.get(`${this.resource}/option`)
    this.option = res.data
    this.$set(this.option, 'align', 'center')
  }
  async fetch() {
    const res = await this.$http.get(`${this.resource}`, {
      params: {
        query: this.query
      }
    })
    this.data = res.data
    this.page.total = res.data.total
  }

  async changePage({ currentPage, pageSize }) {
    this.query.page = currentPage
    this.query.limit = pageSize
    this.fetch()
  }
  // 排序 ，参数都放在query中
  async changeSort({ prop, order }) {
    if (!order) {
      this.query.sort = null
    } else {
      this.query.sort = {
        // prop 动态当属性。直接写prop 就是prop了
        [prop]: order === 'ascending' ? 1 : -1
      }
    }
    this.fetch()
  }
  async create(row, done, loading) {
    await this.$http.post(`${this.resource}`, row)
    this.$message.success('创建成功')
    this.fetch()
    done() // 加载完成 自动关闭框
  }
  async update(row, index, done, loading) {
    const data = JSON.parse(JSON.stringify(row))
    delete data.$index
    await this.$http.put(`/${this.resource}/${data._id}`, data)
    this.$message.success('更新成功')
    this.fetch()
    done()
  }
  async remove(row: any) {
    // 捕获错误，
    try {
      await this.$confirm('是否确认删除')
    } catch (error) {
      return // 防止往下自动执行
    }
    await this.$http.delete(`/${this.resource}/${row._id}`)
    this.$message.success('删除成功')
    this.fetch()
  }
  created() {
    this.fetch()
    this.fetchOption()
  }
}
</script>

<style lang="scss"></style>
