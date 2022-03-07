<template>
  <!--  alert modal (error) -->
  <q-card v-if="isLoginError" class="q-pa-md q-mt-lg bg-red">
    아이디와 비밀번호를 확인해주세요.
  </q-card>

  <!--  alert modal (success) -->
  <q-card v-if="isLogin" class="q-pa-md q-mt-lg bg-red">
    로그인을 완료했습니다.
  </q-card>

  <!--  login frame -->
  <q-card>
    <q-toolbar class="bg-secondary text-white q-my-md shadow-2">
      로그인
    </q-toolbar>
    <div class="q-pa-lg">
      <q-input
        v-model="email"
        label="이메일을 입력하세요." />
      <q-input
        v-model="password"
        type="password"
        label="비밀번호를 입력하세요." />
      <q-btn
        unelevated
        class="full-width q-ma-lg"
        color="secondary"
        label="로그인"
        @click="login({ email, password })"/>
    </div>
  </q-card>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
	data() {
		return {
			email: null,
			password: null,
		};
	},
  computed: {
    ...mapState(['isLogin', 'isLoginError'])
  },
  methods: {
    ...mapActions(['login'])
  },
};
</script>
