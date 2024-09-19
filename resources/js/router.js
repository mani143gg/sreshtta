import { createRouter, createWebHistory } from 'vue-router';
import Login from './components/Login.vue';  // Pointing to the components directory
import Home from './components/Home.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/homes',
    name: 'Home',
    component: Home
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
