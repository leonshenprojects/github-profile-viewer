import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Intro.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '/',
    component: Home
  },
  {
    path: '/details',
    name: 'details',
    component: () => import('../views/Details.vue')
  },
  {
    path: '/confirmation',
    name: 'confirmation',
    component: () => import('../views/Confirmation.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
