import HTTP from '../http';
import router from '../router';

export default {
  namespaced: true,
  state: {
    registerUsername: null,
    registerFirstname: null,
    registerLastname: null,
    registerAvatarUrl: null,
    registerCity: null,
    // registerError: null,
  },
  actions: {
    register({ state }) {
      return HTTP().post('/register', {
        username: state.registerUsername,
        firstname: state.registerFirstname,
        lastname: state.registerLastname,
        avatarUrl: state.registerAvatarUrl,
        city: state.registerCity,
      })
        .then(({ data }) => {
          console.log(data);
          router.push('/users');
        });
    },
  },

  mutations: {
    setRegisterUsername(state, username) {
      state.registerUsername = username;
    },
    setRegisterFirstname(state, firstname) {
      state.registerFirstname = firstname;
    },
    setRegisterLastname(state, lastname) {
      state.registerLastname = lastname;
    },
    setRegisterAvatarUrl(state, avatarUrl) {
      state.registerAvatarUrl = avatarUrl;
    },
    setRegisterCity(state, city) {
      state.registerCity = city;
    },
  },
};
