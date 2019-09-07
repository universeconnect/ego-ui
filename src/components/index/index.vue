<template>
    <router-view></router-view>
</template>

<script>
    export default {
        name: "index",
        data(){
          return{
              scrolltop:0,
          }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
        methods:{
            handleScroll() {
                this.$store.commit('updatascrollTop',document.documentElement.scrollTop);
                if(this.$store.state.scrolltop >= 160){
                    document.getElementsByClassName("tran")[0].style.filter = "alpha(Opacity=100)";
                    document.getElementsByClassName("tran")[0].style.opacity = 1;
                    document.getElementsByClassName("tran")[0].style.top = "0px";
                    document.getElementsByClassName("tran")[1].style.filter = "alpha(Opacity=100)";
                    document.getElementsByClassName("tran")[1].style.opacity = 1;
                    document.getElementsByClassName("tran")[1].style.top = "0px";
                }/* else if(this.$store.state.scrolltop < 110){
                    document.getElementsByClassName("tran")[0].style.filter = "alpha(Opacity=0)";
                    document.getElementsByClassName("tran")[0].style.opacity = 0;
                    document.getElementsByClassName("tran")[0].style.top = "500px";
                    document.getElementsByClassName("tran")[1].style.filter = "alpha(Opacity=0)";
                    document.getElementsByClassName("tran")[1].style.opacity = 0;
                    document.getElementsByClassName("tran")[1].style.top = "500px";
                }*/
            },
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
</style>
