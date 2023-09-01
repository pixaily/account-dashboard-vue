import { createRouter, createWebHistory } from 'vue-router'

import UserProfile from './components/pages/UserProfile.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '/',
      redirect: 'user-profile'
    },
    {
      name: 'user-profile',
      path: '/user-profile',
      component: UserProfile
    }
  ]
})

export default router;