import Vue from 'vue';
import Vuex from 'vuex';

import { isAdmin } from './API';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    user: null,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  getters: {
    isLoggedIn(state) {
      return state.user ? true : false;
    },
  },
  actions: {
    login({ commit }, token) {
      if (token) {
        commit('setToken', token);
        localStorage.token = token;
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        const user = JSON.parse(window.atob(base64));
        commit('setUser', user);
      } else {
        commit('setToken', '');
        commit('setUser', null);
      }
    },
    isAdmin({ commit, state }) {
      return state.user.role_id === 3;
    },
  },
});
