import { createStore } from "vuex";

export default createStore({
  state: {
    allUsers: [
      {id:1, name:'asung', email:'abc@gmail.com', password:'123456'},
    ],
    isLogin: false,
    isLoginError: false,
  },
  mutations: {
    loginSuccess(state){
      state.isLogin = true;
      state.isLoginError = false;
    },
    loginError(state){
      state.isLogin = false;
      state.isLoginError = true;
    }
  },
  actions: {
    login({ state,commit }, loginObj){
      let selectedUser = null;
      state.allUsers.forEach(user => {
        if (user.email === loginObj.email) {
          selectedUser = user;
        }
      });
      if (selectedUser === null) {
        commit('loginError');
      }
      else {
        selectedUser.password !== loginObj.password
          ? commit('loginError')
          : commit('loginSuccess');
      }
    },
  },
  modules: {},
});
