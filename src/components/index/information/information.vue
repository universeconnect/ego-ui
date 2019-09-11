<template>
    <div>
        <Navigation></Navigation>
        <!--建议在该位置放一级、二级菜单-->
      <!--使用v-for导致其他组件也跟着循环了，没找到问题所在。需要菜单的栏目少，且essay还未更新，最后干脆把二级菜单写到了各自的子组件里-->

        <div id="box">
            <router-link :to="{path: 'essay'}" >分享文章</router-link>
            <router-link :to="{path: 'video'}">分享视频</router-link>
            <router-link :to="{path: 'software'}">分享软件</router-link>
            <router-link :to="{path: 'softwareCoures'}">软件使用教程</router-link>
            <router-link :to="{path: 'website'}">分享网站</router-link>
            <router-link :to="{path: 'informations'}">分享资料</router-link>
          <br>
          <br>
       <!--   <span v-for="title in  essay_menu">
            <router-view :essay="title"></router-view>
          </span>-->
          <router-view ></router-view>
        </div>
    </div>
</template>

<script>
    import Navigation from '../the-navigation'


    export default {
      name: "information",
      data() {
        return {
          // video_menu:["标题","标题2","标题3"],
          // essay_menu:["标题1","标题2","标题3"]
        }
      },
      methods: {

      },
      components: {
        Navigation
      }
    }

</script>

<style scoped>
#box{
  width: 100%;
  height: 70px;
  background-color: #475669;
}
  a{
    text-decoration: none;
    font-size: medium;
    color: #e5e5e5;
    margin-left: 80px;
  }
a:hover{
  color:red;
}


</style>
