import { createRouter, createWebHistory } from 'vue-router'
import Pet from '../views/Pet.vue'

const routes = [
  {
    path: '/',
    name: 'Pet',
    component: Pet
  },
  {
    path: '/paginaPet',
    name: 'PaginaPet',

    component: () => import('../views/Pet.vue') // mudar para Animais.vue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router