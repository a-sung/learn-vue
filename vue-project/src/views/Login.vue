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
<!--      <q-btn @click="test"> GET 테스트 </q-btn>-->
<!--      <q-btn @click="postTest"> POST 테스트 </q-btn>-->
    </div>
  </q-card>
</template>

<script>
import { mapState, mapActions } from 'vuex'

// const axios = require('axios').default;

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
    ...mapActions(['login']),
    // test(){
    //   axios.get('https://reqres.in/api/users?page=2')
    //     // 받아온 response data를 다시 뷰 인스턴스 내의 변수에 할당하려면 vue를 가리켜야 함.
    //     // 그런데 callback 함수에서 function을 쓰게되면 this가 vue instance대신 function 내부를 가리키게 됨. -> arrow function 사용
    //     .then(res => {
    //       // handle success
    //       console.log(res);
    //     })
    //     .catch(err => {
    //       // handle error
    //       console.log(err);
    //     })
    //     .then(() => {
    //       // always executed
    //       console.log('test');
    //     });
    // },
    // postTest(){
    //   axios.post('https://reqres.in/api/register', {
    //     email: "eve.holt@reqres.in",
    //     password: "pistol"
    //   })
    //     .then(res => {
    //       console.log(res);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
  },
};
</script>
