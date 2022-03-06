<template>
	<div style="max-width: 450px; margin: auto" class="q-pa-lg">
		<q-card class="login-form">
			<q-card-section>
				<q-toolbar class="bg-secondary text-white q-my-md shadow-2">
					로그인
				</q-toolbar>
				<q-input v-model="email" label="이메일을 입력하세요." />
				<q-input v-model="password" label="비밀번호를 입력하세요." />
			</q-card-section>
		</q-card>
	</div>
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
