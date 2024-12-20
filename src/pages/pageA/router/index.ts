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
    component: () => import('@/pages/pageA/views/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/pageA/views/About.vue'),
  },
  {
    path: '/pinia',
    name: 'pinia',
    component: () => import('@/pages/pageA/views/PiniaDemo.vue'),
  },
  {
    path: '/query',
    name: 'query',
    component: () => import('@/pages/pageA/views/Query.vue'),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
