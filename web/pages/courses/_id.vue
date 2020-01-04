<template>
  <div class="pa-3">
    <h3>{{ course.name }}</h3>
    <v-select
      v-model="currentIndex"
      :items="course.episodes.map((v, i) => ({ text: v.name, value: i }))"
    ></v-select>
    <video :src="episode.file" width="100%" controls></video>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const { id } = params
    const course = await $axios.$get(`/courses/${id}`, {
      params: {
        query: {
          // populate: 'user course'
          populate: 'episodes' // 前端通知后台 查找时找关联谁
        }
      }
    })
    return {
      id,
      course
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  computed: {
    episode() {
      return this.course.episodes[this.currentIndex]
    }
  }
}
</script>

<style></style>
