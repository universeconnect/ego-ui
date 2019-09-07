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
          <el-input class="code" type="text"></el-input><span class="code-in">Iy76</span>
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
            age: ''
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
      mounted() {
            this.$cookies.set('isLogin',true);
          for( let i = 0;i< document.getElementsByClassName('el-form-item__label').length; i++)
          document.getElementsByClassName('el-form-item__label')[i].style.color = "#FFF";

      }
    }
</script>

<style scoped>
.el-form-box{
  width: 400px;
  height: 280px;
  margin: 0 auto;
  padding: 80px 100px 10px 20px;
  position: relative;
  top: 150px;
  border-radius: 10px;
  background-color: rgba(255,255,255,0.1);
}
  .code{
    width: 150px;
  }
  .code-in{
    letter-spacing: 2px;
    border-radius: 2px;
    font-size: 16px;
    padding: 10px 20px;
    margin-left: 70px;
    text-align: center;
    background-color: aqua;
  }
</style>
