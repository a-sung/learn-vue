<template>
  <div>
    <h1>Users Edit</h1>
    <p>{{ userId }}</p>
  </div>
</template>

<script>
export default {
  computed:{
    userId(){
      return this.$route.params.id
    }
  },
  methods:{
    edit(){
      this.$router.push({name:'users-edit'})
    }
  }
}
</script>