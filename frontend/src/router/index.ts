import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'
import LoginView from '../views/LoginView.vue'
import api from '../services/api';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/login', name: 'login', component: LoginView },
    { path: '/dashboard', name: 'dashboard', component: DashboardView, meta: { requiresAuth: true } }
  ]
})

// This navigation guard runs before each route change.
router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    try {
      // Check with the backend if the user has a valid session
      const { data } = await api.get('/auth/me');
      if (data.loggedIn) {
        next(); // User is authenticated, proceed to dashboard
      } else {
        next('/login'); // User is not authenticated, redirect to login
      }
    } catch (error) {
      next('/login'); // If API call fails, redirect to login
    }
  } else {
    next(); // Page does not require authentication, proceed
  }
});

export default router;