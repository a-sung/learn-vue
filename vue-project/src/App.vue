<template>
  <div class="container">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <span v-if="isLogin">
        <router-link to="/mypage" >My</router-link> |
      </span>
      <router-link to="/login" v-else>Login</router-link>
      <span v-if="isLogin" @click="logout"> 로그아웃 </span>
    <router-view />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed:{
    ...mapState(['isLogin'])
  },
  beforeCreate() {
    this.$store.dispatch('getMemberInfo');
  },
  methods:{
    ...mapActions(['logout']),
  }
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
