import { createRouter, createWebHistory } from 'vue-router';
import LoginView from './views/LoginView.vue';
import RegistroView from './views/RegistroView.vue';
import HomeView from './views/HomeView.vue';
import { auth } from './firebaseConfig';

const routes = [
  { path: '/login', component: LoginView },
  { path: '/registro', component: RegistroView },
  { path: '/home', component: HomeView, meta: { requiresAuth: true }},
  { path: '/', redirect: '/login' }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Protección de rutas
router.beforeEach((to, from, next) => {
  const user = auth.currentUser;
  if (to.meta.requiresAuth && !user) {
    next('/login');
  } else {
    next();
  }
});

export default router;
