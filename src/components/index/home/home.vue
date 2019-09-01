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
    import TheHomeBelow from './home/the-home-below';
    import TheHomeHead from './home/the-home-head';
    import TheHomeIntro from './home/the-home-intro';
    import TheHomeShare from './home/the-home-share';
    import TheHomeTeam from './home/the-home-team';
    import TheHomeTestimonial from './home/the-home-testimonial';
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
