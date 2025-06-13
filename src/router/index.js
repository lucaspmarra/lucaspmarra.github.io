import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QrCodeView from '../views/QrCodeView.vue'

const router = createRouter({
  mode: 'history',
  history: createWebHistory('/lucaspmarra.github.io/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/qr-code',
      name: 'qr-code',
      component: QrCodeView,
    },
  ],
})

export default router
