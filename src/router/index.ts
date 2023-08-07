import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../pages/List.vue'),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;