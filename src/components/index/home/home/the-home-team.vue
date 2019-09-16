<template>
    <div class="box01">
     <h2 class="cc">Team</h2>
      <el-carousel :interval="5000" arrow="never" >

        <el-carousel-item v-for="(item,c) in a" :key="c">
          <div>{{item.text}}</div>
          <div class="aa">
              <div class="a">
                  <div class="b">{{item.img}}</div>
                  <div>名字</div>
                  <p>个人简历：包含自己的基本信息：姓名、性别、年龄、民族、籍贯、政治面貌、学历、联系方式，以及自我评价、工作经历、等等。</p>
              </div>
              <div class="a">
                  <div class="b">{{item.img}}</div>
                  <div>名字</div>
                  <p>个人简历：包含自己的基本信息：姓名、性别、年龄、民族、籍贯、政治面貌、学历、联系方式，以及自我评价、工作经历、等等。</p>
              </div>
              <div class="a">
                   <div class="b">{{item.img}}</div>
                   <div>名字</div>
                   <p>个人简历：包含自己的基本信息：姓名、性别、年龄、民族、籍贯、政治面貌、学历、联系方式，以及自我评价、工作经历、等等。</p>
              </div>
           </div>
        </el-carousel-item>
       </el-carousel>

    </div>
</template>

<script>
     export default {
        name: "the-home-team",
      data(){
          return{
            a:[{
              text:"工作室有20人，都是人中龙凤，青年翘楚",
              img:"图片1",
              text1:"工作室有20人，都是人中龙凤，青年翘楚",

            },{
              text:"工作室有20人，都是人中龙凤，青年翘楚",
              img:"图片2",

            },{
              text:"工作室有20人，都是人中龙凤，青年翘楚",
              img:"图片3",

            },{
              text:"工作室有20人，都是人中龙凤，青年翘楚",
              img:"图片4",

            },]
          }
      }
    }
</script>

<style scoped>
   .box01{ width:1200px; text-align: center; margin: auto; margin-top: 90px;}


  .el-carousel__item h2 {
    color: #666666;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(1) {
    background-color: #e4e4e4;
    indicator-position:none;

  } /*控制第一个*/

  .el-carousel__item:nth-child(2) {
   background-color: #e4e4e4;

  }
  .el-carousel__item:nth-child(3) {
    background-color: #e4e4e4;
  }
  .el-carousel__item:nth-child(4) {
    background-color: #e4e4e4;
  }
  .el-carousel__item:nth-child(5) {
    background-color: #e4e4e4;
  }
  .aa{ margin-left:120px; margin-top: 25px}
  .a{width:300px; height:230px; background: #e4e7ed; float: left; margin: auto; margin-left: 20px}
  .b{ height: 90px; width: 90px; background: white; margin: auto; border-radius: 50%; margin-top: 20px}
  .cc{ color: #b22222}

</style>
