<template>
    <div>
        <router-link :to="{path: 'login'}">登录</router-link>
        <router-link :to="{path: 'sign'}">注册</router-link>
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
