<template>
    <div>
        <h1>这是登录组件</h1>
        <button @click="oklogin">点击登录成功</button>
        <button @click="nologin">点击注销登录</button>
    </div>
</template>

<script>
    export default {
        name: "login",
        methods:{
            oklogin(){
                //改变登录状态
                this.$store.state.isLogin = true;
            },
            nologin(){
                //改变登录状态
                this.$store.state.isLogin = false;
            }
        }
    }
</script>

<style scoped>

</style>
