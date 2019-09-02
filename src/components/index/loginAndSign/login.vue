<template>
    <div>
        <Navigation></Navigation>
        <router-link to="{path: '/index/login'}">登录</router-link>
        <router-link to="{path: '/index/sign'}">注册</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    import Navigation from '../the-navigation'
    export default {
        name: "login",
        components: {Navigation},
        methods:{
        }
    }
</script>

<style scoped>

</style>
