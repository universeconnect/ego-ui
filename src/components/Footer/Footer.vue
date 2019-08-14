<template>
  <el-pagination
    background
    :current-page=1
    layout="prev, pager, next"
    @current-change="show"
    :total="len">
  </el-pagination>
</template>

<script>
  import jiaohu from "../jiaohu";
    export default {
        name: "Footer",
      data(){
          return{
            len:this.bbtn(),
            yesu:1
          }
      },
      methods:{
          bbtn:function () {
            jiaohu.$on("len",(lens)=>{
              this.len = lens.length;
            })
          },
        show:function (ye) {
          jiaohu.$emit("ye",ye);
        }
      },
    }
</script>

<style scoped>
</style>
