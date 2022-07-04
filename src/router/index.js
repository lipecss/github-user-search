import Vue from 'vue'
import Router from 'vue-router'
import { routes } from '@router/routes.js'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  routes
})

export default router
