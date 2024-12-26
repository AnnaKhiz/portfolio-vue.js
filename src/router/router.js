import { createRouter, createWebHistory } from 'vue-router';
import MainPage from "@/components/pages/MainPage";
import SmallTasksPage from "@/components/pages/SmallTasksPage.vue";
import EduPage from "@/components/pages/EduPage";

const routes = [
  {
    path: '/',
    name: 'portfolio',
    component: MainPage,
    props: true,
    meta: {
      title: 'Портфолио',
      favicon: '',
    },

  },
  {
    path: '/small',
    name: 'small',
    component: SmallTasksPage,
    props: true,
    meta: {
      title: 'Small Tasks',
      favicon: '',
    },

  },
  {
    path: '/edu',
    name: 'edu',
    component: EduPage,
    props: true,
    meta: {
      title: 'Education/Experience',
      favicon: '',
    },

  },

]

const router = createRouter({
  routes,
  history: createWebHistory('/'),

})
// eslint-disable-next-line
router.afterEach((to, from) => {
  document.title = to.meta.title || 'Главная';
  const favicon = to.meta.favicon || '';
  document.querySelector('link[rel="icon"]').href = favicon;
});

export default router
