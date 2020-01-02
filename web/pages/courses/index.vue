<template>
  <div>
    <h3 class="pa-3">热门课程</h3>
    <v-row>
      <v-col v-for="item in courses" :key="item._id">
        <v-card class="mx-auto" max-width="400" md="3">
          <v-img :src="item.cover" class="white--text align-end" height="200px">
            <v-card-title>{{ item.name }}</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">{{ item.createdAt }}</v-card-subtitle>

          <v-card-actions>
            <v-btn color="orange" text>
              Share
            </v-btn>

            <v-btn color="orange" text>
              Explore
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  // nuxt 事先获取数据在渲染, axios 在初始化项目时已安装
  async asyncData({ $axios }) {
    /**
     * $get 直接返回 res.data数据
     */
    const data = await $axios.$get('courses')
    // return 对象，接口数据
    return {
      courses: data.data
    }
  }
}
</script>

<style></style>
