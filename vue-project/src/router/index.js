import { createRouter, createWebHistory } from 'vue-router';
import store from '../store/index.js'

const rejectAuthUser = (to, from, next) => {
	if(store.state.isLogin === true) {
		alert('이미 로그인 하셨습니다.');
		next('/')
	} else{
		next()
	}
}

const onlyAuthUser = (to, from, next) => {
	if(store.state.isLogin === false) {
		alert('로그인 후 사용하실 수 있습니다.');
		next('/')
	} else{
		next()
	}
}


const routes = [
	{
		path: '/',
		name: 'home',
		component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
	},
	{
		path: '/login',
		name: 'login',
		beforeEnter: rejectAuthUser,
		component: () =>
			import(/* webpackChunkName: "Login" */ '../views/Login.vue'),
	},
	{
		path: '/mypage',
		name: 'mypage',
		beforeEnter: onlyAuthUser,
		component: () =>
			import(/* webpackChunkName: "Mypage" */ '../views/Mypage.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
