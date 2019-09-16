<template>

      <div class="box01">
        <h2><font color="#b22222">Testimonial</font></h2>
        <el-carousel :interval="5000" arrow="never">

          <el-carousel-item v-for="(item,index) in b" :key="index">
            <div  class="one">{{item.img}}</div>
            <div>{{item.text1}}</div>
            <div class="two">{{item.text}}</div>


          </el-carousel-item>
        </el-carousel>

      </div>


</template>

<script>
    export default {
        name: "the-home-testimonial",
      data(){
        return{
          b:[{
            img:"图片1",
            text:"有一枝荷静静地盛开在心中，心中便自有芳香。即使韶华匆匆，即使一切都不会回到最初的模样。",
            text1:"名字1"
          },{
            img:"图片2",
            text:"心与花木栖居一处，便活得洒脱。不管生活有多么粗糙，内心有这样一处精致之境，心自会清明。",
            text1:"名字2"
          },{
            img:"图片3",
            text:"有一枝荷静静地盛开在心中，心中便自有芳香。即使韶华匆匆，即使一切都不会回到最初的模样。",
            text1:"名字3"
          },{
            img:"图片4",
            text:"心与花木栖居一处，便活得洒脱。不管生活有多么粗糙，内心有这样一处精致之境，心自会清明。",
            text1:"名字4"
          },]
        }
      }
        }


</script>

<style scoped>
  .box01{ width:1400px; height:300px; text-align: center; margin: auto}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }


  .el-carousel__item:nth-child(1) {
    background-color: #e4e7ed;
  } /*控制第一个*/

  .el-carousel__item:nth-child(2) {
    background-color:  #e4e7ed;
  }
  .el-carousel__item:nth-child(3) {
    background-color:  #e4e7ed;
  }
  .el-carousel__item:nth-child(4) {
    background-color: #e4e7ed;
  }
  .el-carousel__item:nth-child(5) {
    background-color:  #e4e7ed;
  }
  .one{ height: 90px; width: 90px; background: #B3C0D1; margin: auto; border-radius: 50%; margin-top: 50px}
  .two{ margin-top: 50px}

</style>
