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
                    <el-button class="openUserInfo" type="text"  @click="drawer = true">...</el-button>
                </div>
                <div class="userinfoBox">
                    <p class="nicknameBox"><!--{{nickname}}-->这是昵称哦！</p>
                    <p class="usernameBox"><!--{{username}}-->15870290085@163.com</p>
                </div>
              <div style="margin-top: -3px; height: 200px; width: 300px;z-index: 200">
                  <el-drawer
                          title="个人信息"
                          :visible.sync="drawer"
                          :direction="direction"
                          :before-close="handleClose">
                      <div class="personal_info">
                          <div class="head_portraitBox_user">
                              <img src="../../assets/default_imgs/user.png" width="120" height="120" alt="userimg">
                          </div>
                          <div class="personal_info_head">
                              <el-button size="mini">修改头像</el-button>
                          </div>
                          <div class="personal_info_input">
                              <el-form :label-position="labelPosition" label-width="100px" :model="formLabelAlign">
                                  <el-form-item label="用户名：">
                                      <el-input v-model="formLabelAlign.name" style="width: 350px;"></el-input>
                                  </el-form-item>
                                  <el-form-item label="昵称：">
                                      <el-input v-model="formLabelAlign.region" style="width: 350px;"></el-input>
                                  </el-form-item>
                                  <el-form-item label="邮箱：">
                                      <el-input v-model="formLabelAlign.type" style="width: 350px;"></el-input>
                                  </el-form-item>
                                  <el-form-item label="个人简介：" class="personal_info_intro">
                                      <el-input type="textarea" :rows="4" placeholder="请输入内容" style="width: 350px;" v-model="textarea"></el-input>
                                  </el-form-item>
                              </el-form>
                          </div>
                          <div class="personal_info_btn">
                              <!--<el-button>取 消</el-button>-->
                              <el-button>重 置</el-button>
                              <el-button type="primary">确 定</el-button>
                              <el-button type="danger" @click="logout">注销</el-button>
                          </div>
                      </div>
                  </el-drawer>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "the-home-navigation",
        data(){
            return {
                drawer: false,
                direction: 'rtl',
                labelPosition: 'right',
                formLabelAlign: {
                    name: '',
                    region: '',
                    type: ''
                },
                textarea:'',
            }
        },
        methods: {
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            },
            logout(){
                //注销登录
                //删除所有注册cookie数据
                this.$cookies.set('isLogin',null);
                this.$cookies.remove('username',);
                this.$cookies.remove('ID');
                this.$cookies.remove('email');
                this.$cookies.remove('nickname');
                this.$cookies.remove('head_portrait');
                this.$cookies.remove('creation_time');
                this.$cookies.remove('access');
                //清除vux登录状态以及数据
                this.$store.commit('logout')

            }
        },
        mounted() {
            // console.log($store.state.isLogin);
        },
    }
</script>



<style scoped>
    .navigation{
        z-index: 999;
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
        float: right;
        width: 20px;
        overflow: hidden;
    }
    .openUserInfo{
        color: #fff;
        height: 50px;
        font-size: 25px;
    }
    .router-link-active > .link02{
        color: #d73d07;
    }
    .router-link-active > .link02 > .box{
        background-color: #d73d07;
        height: 3px;
        border: 0;
    }
    .head_portraitBox_user{
      margin: 0 auto;
      width: 120px;
      height: 120px;
    }
  .personal_info{
    width: 500px;
    height: 800px;
    margin: 50px auto 0;
  }
  .personal_info_input{
    margin-top: 80px;
  }
  .personal_info_head{
    margin: 20px auto 0;
    width: 80px;
  }
  .personal_info_btn{
    width: 252px;
    margin: 50px auto 0;
  }
</style>
