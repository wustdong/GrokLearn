import { createRouter, createWebHistory } from 'vue-router'
import AIChatView from '../views/AIChatView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'chat',
      component: AIChatView,
    },
  ],
})

export default router
