import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"
import Home from "../views/Home.vue"
import Main from "../views/Main.vue"
import ResourceCrud from "../views/ResourceCrud.vue"
// import CourseList from "../views/courses/CourseList.vue"
// import CourseEdit from "../views/courses/CourseEdit.vue"

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: "/",
    component: Main,
    children: [
      { name: "home", path: "/", component: Home },
      {
        name: "courses-crud",
        path: "/:resource/list",
        component: ResourceCrud,
        props: true
      }
      // {
      //   name: "courses-edit",
      //   path: "/courses/edit/:id",
      //   props: true,
      //   component: CourseEdit
      // },
      // {
      //   name: "courses-create",
      //   path: "/courses/create",
      //   component: CourseEdit
      // }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
