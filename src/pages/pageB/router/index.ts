import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/pages/pageB/views/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/pageB/views/About.vue'),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
