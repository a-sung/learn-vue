import { createStore } from "vuex";
import router from "../router/index.js"

export default createStore({
  state: {
    userInfo:null,
    allUsers: [
      {id:1, name:'asung', email:'abc@gmail.com', password:'123456'},
    ],
    isLogin: false,
    isLoginError: false,
  },
  mutations: {
    loginSuccess(state, payload){
      state.isLogin = true;
      state.isLoginError = false;
      state.userInfo = payload;
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
      if (selectedUser === null || selectedUser.password !== loginObj.password){
        commit('loginError')
      } else{
        commit('loginSuccess', selectedUser);
        router.push({ name: 'mypage' });
      }
    },
  },
  modules: {},
});
