import { createStore } from 'vuex';
import router from '@/router/index.js';
import axios from 'axios';

export default createStore({
	state: {
		userInfo: null,
		allUsers: [
			{ id: 1, name: 'asung', email: 'abc@gmail.com', password: '123456' },
		],
		isLogin: false,
		isLoginError: false,
	},
	mutations: {
		loginSuccess(state, payload) {
			state.isLogin = true;
			state.isLoginError = false;
			state.userInfo = payload;
		},
		loginError(state) {
			state.isLogin = false;
			state.isLoginError = true;
		},
		logout(state) {
			state.isLogin = false;
			state.isLoginError = false;
			state.userInfo = null;
		},
	},
	actions: {
		login({ dispatch }, loginObj) {
			axios
				.post('https://reqres.in/api/login', loginObj)
				.then(res => {
					let token = res.data.token;
					localStorage.setItem('access-token', token);
					dispatch('getMemberInfo');
				})
				.catch(() => {
					alert('이메일과 비밀번호를 확인하세요.');
				});
		},
		logout({ commit }) {
			commit('logout');
			router.push({ name: 'home' });
		},
		getMemberInfo({ commit }) {
			let token = localStorage.getItem('access-token');
			let config = {
				headers: {
					'access-token': token,
				},
			};
			axios
				.get('https://reqres.in/api/users/2', config)
				.then(response => {
					let userInfo = {
						id: response.data.data.id,
						first_name: response.data.data.first_name,
						last_name: response.data.data.last_name,
						avatar: response.data.data.avater,
					};
					commit('loginSuccess', userInfo);
					console.log(userInfo);
				})
				.catch(() => {
					alert('이메일과 비밀번호를 확인하세요.');
				});
		},
	},
	modules: {},
});
