<template>


</template>
<script>
  export default {
    name: 'App',
    data(){
      return{

      }
    },
    created() {
      this.axios.post('http://localhost:3000/Gaindata/users.php').then(body => {
        this.lists = body.data
      })
    }

  };
</script>

<style>

</style>

