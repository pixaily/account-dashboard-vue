import { createRouter, createWebHistory } from 'vue-router'

import UserProfile from './components/pages/UserProfile.vue';

// GitHub Pages URL
const ghpUrl = '/account-dashboard-vue/'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      // path: '/',
      path: ghpUrl,
      component: UserProfile
    }
  ]
})

export default router;