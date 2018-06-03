import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import LoginToken from './views/LoginToken.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login/token/:token',
      name: 'login-token',
      component: LoginToken,
    },
  ],
});
