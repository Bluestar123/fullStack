import Vue from "vue"
import App from "./App.vue"
import "./plugins/element"
import "./plugins/avue"
import router from "./router"
import axios from "axios"

Vue.config.productionTip = false

// import EleForm from "vue-ele-form"
// Vue.use(EleForm)
const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL
})
// avue上传使用
Vue.prototype.$httpajax = http
Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
