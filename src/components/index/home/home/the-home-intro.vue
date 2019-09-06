<template>
    <div class="box01">
      <el-row >
        <el-col class="intro-left-box">
          <el-card class="intro-card" shadow="never">
            <h2>关于我们</h2>
            <p style="letter-spacing: 2px; line-height: 26px">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;工作室
              成立与2018年，	富有活力，集创意、设计、
              策划、制作于一体的设计性机构。主要从事产品设
              计开发及生产、空间规划、品牌策划、包装及礼品
              设计。他们热情真诚，为需要的客户量身设计和开
              发定制产品。他们参与的设计注重设计意识和创意
              的传播及设计流程的管理，更注重同行业间的沟通
              和设计意识的更新。</p>
          </el-card>
        </el-col>
        <el-col class="intro-right-box">
          <el-carousel :interval="4000" type="card" height="310px">
            <el-carousel-item class="intro-card-ca" v-for="item in 6" :key="item">
              <el-card shadow="always" class="intro-card-nei">
                <div class="intro-card-radio">
                  <img src="../../../../assets/default_imgs/tzb.jpg" width="150px" height="150px" style="border-radius: 50%"/>
                </div>
                <h4 class="center">挑战杯优秀奖</h4>
                <p>挑战杯是全国大学生课外科技作品竞赛。指导老师:陈妍</p>
              </el-card>
            </el-carousel-item>
          </el-carousel>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "the-home-intro"
    }
</script>

<style scoped>
</style>
