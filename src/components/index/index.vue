<template>
    <router-view></router-view>
</template>

<script>
    export default {
        name: "index",
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
        methods:{

        }
    }
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
</style>
