<template>
    <div>
        <router-link to="/index/login">登录</router-link>
        <router-link to="/index/sign">注册</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>

</style>
