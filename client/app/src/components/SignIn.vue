<template>
  <div id="app">
      Login<br>
      <input type="text" v-model="login"><br>
      Password<br>
      <input type="text" v-model="password"><br>
      <button @click = "onClick">Submit</button><br>

      

      
  </div>
  
</template>

<script>
export default {
  name: 'SignIn',
  data() {
    return {
      login:'',
      password:'',
      
    }
  },
  

  methods: {
    onClick(event) {
    
      this.$store.commit('setName', {login:this.login, password:this.password});
      this.$store.dispatch('asyncSetName');
      
    },
     
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
