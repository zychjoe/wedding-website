import { createRouter, createWebHistory } from 'vue-router'
import Login from './components/Login.vue'
import GuestPortal from './components/GuestPortal.vue'

const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/portal',
    component: GuestPortal,
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})