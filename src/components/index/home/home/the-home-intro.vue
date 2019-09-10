<template>
    <div class="box01">
        <el-row style="width: 1200px; margin: 0 auto">
            <el-col class="intro-left-box">
                <el-card class="intro-card  tran" shadow="never">
                    <h2 style="margin: 0;">关于我们</h2>
                    <p style="letter-spacing: 2px; line-height: 26px">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;工作室
                        成立与2018年，	富有活力，集创意、设计、 策划、制作于一体的设计性机构。
                        主要从事产品设计开发及生产、空间规划、品牌策划、包装及礼品设计。
                        他们热情真诚，为需要的客户量身设计和开发定制产品。
                        他们参与的设计注重设计意识和创意的传播及设计流程的管理，更注重同行业间的沟通和设计意识的更新。</p>
                </el-card>
            </el-col>
            <el-col class="intro-right-box tran">
                <el-carousel :interval="4000" type="card" height="310px">
                    <el-carousel-item class="intro-card-ca" v-for="item in award" :key="item.name">
                        <el-card shadow="always" class="intro-card-nei">
                            <div class="intro-card-radio">
                                <!--<img src="" width="150px" height="150px" style="border-radius: 50%"/>-->
                            </div>
                            <h4 class="center">{{item.center}}</h4>
                            <p>{{item.name}}</p>
                            <p>指导老师:{{item.teacher}}</p>
                        </el-card>
                    </el-carousel-item>
                </el-carousel>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "the-home-intro",
        data(){
            return{
                award:[
                    //假数据
                    {
                        img:'',//头像
                        center:'挑战杯优秀奖',//奖项
                        name:'陈晋',//获奖人
                        teacher:'陈妍'//指导老师
                    },{
                        img:'',//头像
                        center:'挑战杯优秀奖',//奖项
                        name:'王明',//获奖人
                        teacher:'陈妍'//指导老师
                    },{
                        img:'',//头像
                        center:'挑战杯优秀奖',//奖项
                        name:'吴英',//获奖人
                        teacher:'陈妍'//指导老师
                    },{
                        img:'',//头像
                        center:'挑战杯优秀奖',//奖项
                        name:'陈瑶',//获奖人
                        teacher:'陈妍'//指导老师
                    },{
                        img:'',//头像
                        center:'挑战杯优秀奖',//奖项
                        name:'韩颖',//获奖人
                        teacher:'陈妍'//指导老师
                    }
                ]
            }
        },
        methods:{
            handleScroll() {
                this.$store.commit('updatascrollTop',document.documentElement.scrollTop);
                if(this.$store.state.scrolltop >= 140){
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
        mounted() {
            window.addEventListener('scroll', this.handleScroll);
        },
        beforeUpdate: function() {

        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>

<style scoped>
    .box01{
        width: 100%;
        height: 500px;
        overflow: hidden;
    }
    .intro-left-box{
        width: 35%;
        height: 500px;
        margin-left: 7%;
    }
    .intro-card{
        height: 390px;
        margin-top: 20px;
        padding: 50px 40px 10px 50px;
    }
    .intro-right-box{
        width: 45%;
        height: 500px;
        margin-left: 7%;
        padding-top: 80px;
    }
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .intro-card-ca{
        width: 350px;
    }
    .intro-card-nei{
        height: 310px;
        width: 90%;
        text-align: center;
    }
    .intro-card-radio{
        width: 150px;
        height: 150px;
        margin: 0 auto;
        background-color: #848686;
        border-radius: 50%;
    }
    .intro-card-radio img{
        z-index: -1;
    }
    .center{
        width: auto;
        text-align: center;
        padding-top: 5px;
        margin: 0 auto;
    }
    .tran{
        position: relative;
        top: 500px;
        filter:alpha(Opacity=0);
        -moz-opacity:1;
        opacity: 0;
        transition-duration: 1.2s;
    }
</style>
