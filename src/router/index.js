import { createRouter, createWebHistory } from 'vue-router'
import Mykitchen from '../components/Mykitchen'
import MyGuestsRoom from '@/components/MyGuestsRoom.vue'
import MyMenu from '@/components/MyMenu.vue'
import MyStorage from '@/components/MyStorage.vue'
import MyFinances from '@/components/MyFinances.vue'

const routes = [
  {
    path: '/',
  },
  {
    path: '/kitchen',
    name: 'kitchen',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Mykitchen
  },
  {
    path: '/guests-room',
    component: MyGuestsRoom
  },
  {
    path: '/menu',
    component: MyMenu
  },
  {
    path: '/storage',
    component: MyStorage
  },
  {
    path: '/finance',
    component: MyFinances
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
