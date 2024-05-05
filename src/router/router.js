import { createRouter, createWebHistory } from 'vue-router';
import MainPage from "@/components/pages/MainPage";
import CMSPage from "@/components/pages/CMSPage";
import ReactPage from "@/components/pages/ReactPage";
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
    path: '/cms',
    name: 'cms',
    component: CMSPage,
    props: true,
    meta: {
      title: 'CMS',
      favicon: '',
    },

  },
  {
    path: '/react',
    name: 'react',
    component: ReactPage,
    props: true,
    meta: {
      title: 'React',
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
  history: createWebHistory(process.env.BASE_URL),

})
// eslint-disable-next-line
router.afterEach((to, from) => {
  document.title = to.meta.title || 'Главная';
  const favicon = to.meta.favicon || '';
  document.querySelector('link[rel="icon"]').href = favicon;
});

export default router