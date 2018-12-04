// import createPersistedState from 'vuex-persistedstate';

import Vue from 'vue';
import Vuex from 'vuex';
import register from './register';


Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    baseUrl: '/api',
  },
  modules: {
    register,
  },
  mutations: {

  },
  actions: {

  },
  // plugins: [
  //   createPersistedState(),
  // ],
});
