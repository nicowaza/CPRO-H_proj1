import Vue from 'vue';
import HTTP from '../http';

export default {
  namespaced: true,
  state: {
    users: [],
  },
  actions: {
    // saveProject({ commit }, project) {
    //   return HTTP().patch(`projects/${project.id}`, project)
    //     .then(() => {
    //       commit('unsetEditMode', project);
    //     });
    // },
    // deleteProject({ commit }, project) {
    //   return HTTP().delete(`projects/${project.id}`)
    //     .then(() => {
    //       commit('removeProject', project);
    //     });
    // },
    fetchUsers({ commit }) {
      return HTTP().get('/users')
        .then(({ data }) => {
          commit('setUsers', data);
        });
    },
    // createProject({ commit, state }) {
    //   return HTTP().post('/projects', {
    //     title: state.newProjectName,
    //   })
    //     .then(({ data }) => {
    //       commit('appendProject', data);
    //       commit('setNewProjectName', null);
    //     });
    // },
  },
  getters: {
  },
  mutations: {
    appendUser(state, user) {
      state.users.push(user);
    },
    setUsers(state, users) {
      state.users = users;
    },
    setUserUsername(state, { user, username }) {
      user.username = username;
    },
    // setEditMode(state, project) {
    //   Vue.set(project, 'isEditMode', true);
    // },
    // unsetEditMode(state, project) {
    //   Vue.set(project, 'isEditMode', false);
    // },
    // removeProject(state, project) {
    //   state.projects.splice(state.projects.indexOf(project), 1);
    // },
  },
};