import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Home.vue'),
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    return {
      top: savedPosition?.top || 0,
    };
  },
  routes,
});
export default router;
