<template>
  <div>
    <div class="el-form-box">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item class="code-label" label="验证码">
          <el-input class="code" type="text" v-model="ruleForm.code"></el-input>
          <span class="code-in"><img  src="http://49.234.9.206/LoginAndSignin/code.png" id="img"></span>
          <span class="updataCode" @click="updataVerificationCode()" >点击换一换</span>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "login",
      data(){


        var validatePass = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请输入密码'));
          } else {
            if (this.ruleForm.checkPass !== '') {
              this.$refs.ruleForm.validateField('checkPass');
            }
            callback();
          }
        };
        var validatePass2 = (rule, value, callback) => {
          if (value === '') {
            callback(new Error('请再次输入密码'));
          } else if (value !== this.ruleForm.pass) {
            callback(new Error('两次输入密码不一致!'));
          } else {
            callback();
          }
        };
        return{
          ruleForm: {
            pass: '',
            checkPass: '',
            code:'',
          },
          rules: {
            pass: [
              { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
              { validator: validatePass2, trigger: 'blur' }
            ],
          }
        };
      },
        methods:{
          updataVerificationCode(){
            //发送请求
            this.axios.get('http://49.234.9.206/LoginAndSignin/verificationCode.php')
              .then(body => {//请求成功
                this.code = body.data;//存放正确的验证码
                document.getElementById("img").src="http://49.234.9.206/LoginAndSignin/code.png?"+Math.random();//img是img标签的id，自己取
              })
              .catch(error => {//请求失败
                console.log("获取新的验证码失败，原因是" + error);
              });
          },

          submitForm(formName) {
            this.$refs[formName].validate((valid) => {
              if (valid) {
                alert('submit!');
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          },
          resetForm(formName) {
            this.$refs[formName].resetFields();
          }
        },
      created(){

      },
      mounted() {
            this.$cookies.set('isLogin',true);


        for( let i = 0;i< document.getElementsByClassName('el-form-item__label').length; i++)
          document.getElementsByClassName('el-form-item__label')[i].style.color = "#FFF";

      },
    }
</script>

<style scoped>
.el-form-box{
  width: 400px;
  height: auto;
  margin: 0 auto;
  padding: 80px 100px 30px 20px;
  position: relative;
  top: 100px;
  border-radius: 10px;
  background-color: rgba(255,255,255,0.1);
}
  .code{
    width: 120px;
  }
  .updataCode{color: #FFF;
    position: absolute;
    margin-left: 90px;
    font-size: 12px;
    cursor:pointer;
    top: 10px;
  }
  .code-in{
    position: absolute;
    left: 117px;
    top: 1px;
    text-align: center;
  }


</style>
