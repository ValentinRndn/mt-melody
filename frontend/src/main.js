import { createApp } from 'vue'; // Import correct pour Vue 3
import './style.css';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router'; // Import correct pour Vue Router 4
import AdminPage from './views/AdminPage.vue';
import Authentification from './views/Authentification.vue';
import profileParameter from './views/ProfileParameter.vue';
import Home from './views/Home.vue';
import AdminHome from './views/AdminDashboard/AdminHome.vue';
import ArtistHome from './views/ArtistDashboard/ArtistHome.vue';


const router = createRouter({
    history: createWebHistory(), 
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/adminPage',
        name: 'adminPage',
        component: AdminPage,
      },
        {
            path: '/auth',
            name: 'auth',
            component: Authentification
        },
        {
          path: '/profileParameter',
          name: 'profileParameter',
          component: profileParameter,
        },
        {
          path: '/adminHome',
          name: 'AdminHome',
          component: AdminHome,
        },
        {
          path: '/artistHome',
          name: 'ArtistHome',
          component: ArtistHome,
        },
    ]
});

// Middleware global pour vérifier l'authentification avant d'accéder aux routes protégées
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      const token = localStorage.getItem('token');
    
      if (!token) {
        next({ name: 'auth' }); 
      } else {
        next(); 
      }
    } else {
      next();
    }
  });
  


createApp(App).use(router).mount('#app');
