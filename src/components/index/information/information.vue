<template>
    <div>
        <Navigation></Navigation>
        <!--建议在该位置放一级、二级菜单-->
        <div class="box">
            <router-link :to="{path: 'essay'}">分享文章</router-link>
            <router-link :to="{path: 'video'}">分享视频</router-link>
            <router-link :to="{path: 'software'}">分享软件</router-link>
            <router-link :to="{path: 'softwareCoures'}">软件使用教程</router-link>
            <router-link :to="{path: 'website'}">分享网站</router-link>
            <router-link :to="{path: 'informations'}">分享资料</router-link>
            <br>
            <span v-for=""></span>
            <router-view :a="123"></router-view>
        </div>
    </div>

</template>

<script>
    import Navigation from '../the-navigation'
    export default {
        name: "information",
        data(){
            return{

            }
        },
        methods:{

        },
        components: {Navigation}
    }
</script>

<style scoped>
.box{
    width: 1200px;
    margin: 0 auto;
}
</style>
