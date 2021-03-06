import Vue from 'vue';
import Router from 'vue-router';
import Users from './views/Users.vue';
import Register from './views/Register.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
    },
  ],
});
