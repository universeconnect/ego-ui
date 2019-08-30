<template>
  <div class="box01">
    <TheHomeHead></TheHomeHead>
    <TheHomeIntro></TheHomeIntro>
    <TheHomeTestimonial></TheHomeTestimonial>
    <TheHomeTeam></TheHomeTeam>
    <TheHomeShare></TheHomeShare>
    <TheHomeBelow></TheHomeBelow>
  </div>
</template>

<script>
  import TheHomeBelow from './the-home-below';
  import TheHomeHead from './the-home-head';
  import TheHomeIntro from './the-home-intro';
  import TheHomeShare from './the-home-share';
  import TheHomeTeam from './the-home-team';
  import TheHomeTestimonial from './the-home-testimonial';
  export default {
    name: "home",
    data(){
      return{

      }
    },
    components:{TheHomeBelow, TheHomeHead, TheHomeIntro, TheHomeShare, TheHomeTeam, TheHomeTestimonial}
  }
</script>

<style scoped>
  .box01{
    width: 100%;
  }
  *{
    margin: 0;
    padding: 0;
  }
</style>
