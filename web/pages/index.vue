<template>
  <div>
    首页
    <span @click="aa">
      asdfasdfasdfasdf
    </span>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    async aa() {
      const res = await this.$axios.get('/')
      console.log(res)
    }
  }
}
</script>
