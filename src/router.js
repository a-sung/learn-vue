import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const About = () => {
  return import(/* webpackChunkName: "about" */ './views/About.vue')
}

const Users = () => import(/* webpackChunkName: "users" */ './views/Users.vue')
const UsersDetail = () => import(/* webpackChunkName: "users-detail" */ './views/UsersDetail.vue')
const UsersEdit = () => import(/* webpackChunkName: "users-edit" */ './views/UsersEdit.vue')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component: About
    },
    {
      path: '/users',
      name: 'users',
      // beforeEnter: (to, from, next) => {
      //   // to, from: 라우터가 어디에서 어디로 가는지의 정보
      //   console.log('before Enter')
      //   next()
      // },
      component: Users,
      children:[
        {
          path: ':id',
          name: 'users-detail',
          component: UsersDetail
        },
        {
          path: ':id/edit',
          name: 'users-edit',
          component: UsersEdit
        }
      ]
    },
    {
      path: '/redirect-me',
      redirect: {name: 'home'}
    },
    {
      path:'/*',
      redirect: {name: 'home'}
    }
  ]
})
