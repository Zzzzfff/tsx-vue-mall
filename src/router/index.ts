import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/home/Home.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('../views/category/Category.vue'),
  },
  {
    path: '/shopcart',
    name: 'Shopcart',
    component: () => import('../views/shopcart/Shopcart.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/profile/Profile.vue'),
  },
  {
    path: '/detail/:iid',
    name: 'Detail',
    component: () => import('../views/detail/Detail.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
