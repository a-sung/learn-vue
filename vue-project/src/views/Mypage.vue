<template>
  <div>
    <h3> {{ userInfo.name }}님 환영합니다. </h3>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['userInfo'])
  }
}
</script>