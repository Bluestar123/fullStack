import Vue from "vue"
import App from "./App.vue"
import "./plugins/element"
import "./plugins/avue"
import router from "./router"
import axios from "axios"

Vue.config.productionTip = false

// import EleForm from "vue-ele-form"
// Vue.use(EleForm)

Vue.prototype.$http = axios.create({
  baseURL: "http://localhost:3000"
})

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
