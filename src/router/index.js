import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUp from '../views/SignUp.vue'
import LogIn from '@/views/LogIn.vue'
import hader from '@/components/hader.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/Hader',
      name: 'Hader',
      component: hader
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/LogIn',
      name: 'LogIn',
      component: LogIn
    },
    

    
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
  ]
})

export default router
