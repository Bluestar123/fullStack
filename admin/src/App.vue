<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class App extends Vue {}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.avue-upload__avatar {
  height: auto !important;
}
</style>
