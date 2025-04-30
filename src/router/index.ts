import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '@/pages/LandingPage.vue';
import CardsListPage from '@/pages/CardsListPage.vue';

const routes = [
    {
      path: '/',
      name: 'Home',
      component: LandingPage,
    },
    {
      path: '/cards',
      name: 'CardsList',
      component: CardsListPage,
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  });
  
  export default router;
