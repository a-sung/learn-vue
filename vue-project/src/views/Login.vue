<template>
  <q-card>
    <q-toolbar class="bg-secondary text-white q-my-md shadow-2">
      로그인
    </q-toolbar>
    <div class="q-pa-lg">
      <q-input v-model="email" label="이메일을 입력하세요." />
      <q-input v-model="password" label="비밀번호를 입력하세요." />
    </div>
  </q-card>
</template>

<script>
export default {
	data() {
		return {
			email: null,
			password: null,
		};
	},
};
</script>
