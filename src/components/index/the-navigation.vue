<template>
    <div class="box01">
        <div class="navigation">
            <div class="navigationA">
                <router-link :to="{path: '/index/home'}"  class="link01" replace>
                    <span class="link02">
                        宇宙互联
                        <span class="box"></span>
                    </span>
                </router-link>
                <router-link :to="{path: '/index/home0'}" class="link01" replace>
                    <span class="link02">
                        了解我们
                        <span class="box"></span>
                    </span>
                </router-link>
                <router-link :to="{path: '/index/information'}" class="link01" replace>
                    <span class="link02">
                        经验分享
                        <span class="box"></span>
                    </span>
                </router-link>
                <router-link :to="{path: '/index/links'}" class="link01" replace>
                    <span class="link02">
                        有情链接
                        <span class="box"></span>
                    </span>
                </router-link>
                <router-link class="link01" :to="{path: '/index/contactUs'}" replace>
                    <span class="link02">
                        联系我们
                        <span class="box"></span>
                    </span>
                </router-link>
                <span v-if="!$store.state.isLogin" class="loginAndSign">
                    <router-link :to="{path: '/index/login'}" class="link01" style="margin-left: 25%;" replace>
                    <span class="link02">
                        登陆
                        <span class="box"></span>
                    </span>
                    </router-link>
                    <span style="color: #e5e5e5;">|</span>
                    <router-link :to="{path: '/index/sign'}" class="link01" replace>
                    <span class="link02">
                        注册
                        <span class="box"></span>
                    </span>
                    </router-link>
                </span>
            </div>
            <div v-if="$store.state.isLogin" class="user">
                <div class="head_portraitBox"><img src="../../assets/default_imgs/user.png" width="55" height="55" alt="userimg"></div>
                <div class="openUserInfoBox">
                    <router-link :to="{path: 'user'}" class="openUserInfo">...</router-link>
                </div>
                <div class="userinfoBox">
                    <p class="nicknameBox"><!--{{nickname}}-->这是昵称哦！</p>
                    <p class="usernameBox"><!--{{username}}-->15870290085@163.com</p>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "the-home-navigation",
        data(){
            return{

            }
        },
        methods: {

        },
        mounted() {
            // console.log($store.state.isLogin);
        }
    }
</script>



<style scoped>
    .navigation{
        position: relative;
        height: 66px;
        border-width: 0 0 1px 0;
        border-style: solid;
        border-color: #666666;
        width: 100%;
        background-color: #201e1e;
    }
    .navigationA{
        top: 0;
        height: 66px;
        width: 1000px;
        border-width: 0 0 1px 0;
        border-style: solid;
        border-color: #666666;
        background-color: #201e1e;
        margin: 0 auto;
    }
    .box{
        display: block;
        width: 25px;
        height: 2px;
        background-color: #201e1e;
        border-bottom: 1px #666666 solid;
        margin: 0 auto;
    }
    .link01{
        display: inline-block;
        height: 65px;
        text-align: center;
        margin: 0 2%;
    }
    .link01 > .link02{
        display: inline-block;
        height: 65px;
        text-align: center;
        line-height: 64px;
        color: #e5e5e5;
    }
    .loginAndSign{
    }
    .user{
        position: absolute;
        top: 0;
        right: 100px;
        width: 230px;
        height: 66px;
    }
    .head_portraitBox{
        display: inline-block;
        margin: 6px 0;
        width: 54px;
        height: 54px;
        border-radius: 50%;
        overflow: hidden;
    }
    .userinfoBox{
        display: inline-block;
        float: right;
        width: 144px;
        height: 66px;
        overflow: hidden;
        margin: 0 5px 0 0;
    }
    .nicknameBox{
        margin: 15px 0 3px 0;
        padding: 0;
        font-size: 16px;
        color: #d4d0d6;
    }
    .usernameBox{
        margin: 0;
        padding: 0;
        font-size: 10px;
        color: #9e99a0;
    }
    .openUserInfoBox{
        display: inline-block;
        float: right;
        width: 20px;
        height: 66px;
        overflow: hidden;
    }
    .openUserInfo{
        color: #fff;
        display: inline-block;
        height: 66px;
        line-height: 50px;
        font-size: 30px;
        text-decoration: none;
    }
    .router-link-active > .link02{
        color: #d73d07;
    }
    .router-link-active > .link02 > .box{
        background-color: #d73d07;
        height: 3px;
        border: 0;
    }
</style>
