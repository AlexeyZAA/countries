import Vue from 'vue'
import VueRouter from 'vue-router'
import Countri from '../views/Countri.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'countri',
    component: Countri,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
