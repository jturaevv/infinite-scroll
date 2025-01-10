import { createMemoryHistory, createRouter } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

export default createRouter({
  history: createMemoryHistory(),
  routes: [
    { 
      path: '/',
      component: HomeView 
    },
  ],
})
