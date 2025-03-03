import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '@/views/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/register',
      component: Register,
    },
  ],
})

export default router
