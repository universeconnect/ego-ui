<template>
  <div id="software">
    <el-table
      :data="list.filter(data => !search || data.name.toLowerCase().includes(this.search.toLowerCase()) || (data.ID == search) || (data.access == search)).slice(ye*10-10,ye*10)"
      style="width: 100%">
      <el-table-column
        label="ID"
        prop="ID"
        width="120px">
      </el-table-column>
      <el-table-column
        label="软件名称"
        prop="name">
      </el-table-column>
      <el-table-column
        label="发布时间"
        prop="release_time">
      </el-table-column>
      <el-table-column
        label="软件介绍"
        prop="description">
      </el-table-column>
      <el-table-column
        label="下载链接"
        prop="Download_link">
      </el-table-column>
      <el-table-column
        label="提取码"
        prop="password">
      </el-table-column>
      <el-table-column
        label="破解安装教程"
        prop="cit">
      </el-table-column>
      <el-table-column
        label="使用教程"
        prop="tutorial">
      </el-table-column>
      <el-table-column
        label="下载量"
        prop="downloads">
      </el-table-column>
      <el-table-column
        label="权限"
        prop="access">
      </el-table-column>
      <el-table-column
        align="right">
        <template slot="header" slot-scope="scope">
          <el-input
            v-model="search"
            size="mini"
            placeholder="输入关键字搜索"/>
        </template>
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="updata(scope.$index, scope.row)">修改</el-button>
          <el-popover
            placement="top"
            width="160"
            v-model="scope.row.visible"
            @click="">
            <p>确定要删除该数据吗</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="amend(scope.$index, scope.row)">确定</el-button>
              <el-button type="primary" size="mini" @click="scope.row.visible = false">取消</el-button>
            </div>
            <el-button
              size="mini"
              slot="reference"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
    <div class="el-add-button">
      <el-button type="primary" plain @click="insert()">添加按钮</el-button>
    </div>
    <p v-if="endye" style="color: #ada9af; height: 50px; line-height:50px;">没有更多啦！</p>
    <!--以下是弹框放置位置-->
    <el-dialog
      :title="formLabelAlign.title"
      :visible.sync="dialogVisible1"
      width="80%"
      :before-close="handleClose1">
      <div style="margin: 10px; line-height: 20px !important;"></div>
      <el-form :inline="true" :model="formLabelAlign" class="demo-form-inline">
        <h2 v-if="formLabelAlign.isupdata" style="margin: -20px auto 5px">ID:{{formLabelAlign.ID}}</h2>
        <el-form-item label="软件名称">
          <el-input v-model="formLabelAlign.name" placeholder="xxxxxx"></el-input>
        </el-form-item>
        <el-form-item label="下载链接">
          <el-input v-model="formLabelAlign.Download_link" placeholder="（http/https）：//xxxxxxxxx.xxxx"></el-input>
        </el-form-item>
        <el-form-item label="提取码">
          <el-input v-model="formLabelAlign.password" placeholder="xxxx"></el-input>
        </el-form-item>
        <el-form-item v-if="formLabelAlign.isupdata" label="下载量">
          <el-input v-model="formLabelAlign.downloads" placeholder="x"></el-input>
        </el-form-item>
        <el-form-item v-if="formLabelAlign.isupdata" label="权限">
          <el-input v-model="formLabelAlign.access" placeholder="x"></el-input>
        </el-form-item>
        <el-form-item v-if="formLabelAlign.isupdata" label="发布时间">
          <el-input v-model="formLabelAlign.release_time" placeholder="xxxx-xx-xx xx：xx：xx"></el-input>
        </el-form-item>
        <p>软件介绍：</p>
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="请输入内容"
          v-model="formLabelAlign.description">
        </el-input>
        <p>破解安装教程：</p>
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="请输入内容"
          v-model="formLabelAlign.cit">
        </el-input>
        <p>使用教程：</p>
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="请输入内容"
          v-model="formLabelAlign.tutorial">
        </el-input>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible1 = false">取 消</el-button>
    <el-button v-if="formLabelAlign.isupdata" type="info" @click="updatareste">重置</el-button>
    <el-button type="primary" @click="okupdate()">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>

  import jiaohu from "../jiaohu"
  import {amend, open2, open4} from "../../../public/methods/adminFun";
  export default {
    name: "theSoftware",
    data(){
      return{
        labelPosition: 'left',
        formLabelAlign: {
          ID: '',
          description: '',
          Download_link: '',
          cit: '',
          tutorial: '',
          downloads: '',
          access: '',
          name: '',
          release_time: '',
          password: '',
          title: '添加推荐软件',
          isupdata: false,//判断是否是修改数据，用于v-if调节表单项，默认不是，因为添加数据时的表单项在修改数据时都存在
        },
        updatadata:'',
        list:[],
        search:'',
        ye:1,
        api:"software",
        endye:0,
        dialogTableVisible: false,
        dialogFormVisible: false,
        formLabelWidth: '120px',
        dialogVisible1:false
      }
    },
    created() {
      let loadingInstance = this.$loading({text: "数据加载中", fullscreen: false,});
      this.axios.get('http://49.234.9.206/Gaindata/selet_mysql.php', {
        params: {
          list: "software"
        }
      })
        .then(body => {//请求成功
          if (body.data.status_code == 1009) {//状态码正常
            this.list = body.data.datas;
            this.open2("加载成功");
            this.end(this.ye);
            jiaohu.$emit("len", this.list.filter(data => !this.search || data.name.toLowerCase().includes(this.search.toLowerCase()) || (data.ID == this.search) || (data.access == this.search)));
            jiaohu.$on("ye", (ye) => {
              this.ye = ye;
            });
            for (var i = 0; i < this.list.length; i++) {
              this.$set(this.list[i], 'visible', false);
            }
            this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
              loadingInstance.close();
            })
          } else {//状态码异常
            this.open4("加载失败");
          }

        })
        .catch(error => {
          //请求失败
          this.$nextTick(() => {
            loadingInstance.close();
          });
          this.open4("加载失败");
          console.log(error);
        });
    },
    mounted() {
      this.$cookies.set('dl',1);
    },
    methods : {
      amend,//删除方法
      open2,
      open4,
      handleClose1(done){
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      updata(index, row) {
        this.dialogVisible1 = true;//打开对话框
        this.formLabelAlign.isupdata = true;//是修改对话框
        this.formLabelAlign.title = '修改信息';
        this.updatadata = row;//将数据保存，以便于重置功能的实现
        //对表单赋初值
        this.formLabelAlign.ID = this.updatadata.ID;
        this.formLabelAlign.description = this.updatadata.description;
        this.formLabelAlign.Download_link = this.updatadata.Download_link;
        this.formLabelAlign.cit = this.updatadata.cit;
        this.formLabelAlign.tutorial = this.updatadata.tutorial;
        this.formLabelAlign.downloads = this.updatadata.downloads;
        this.formLabelAlign.access = this.updatadata.access;
        this.formLabelAlign.name = this.updatadata.name;
        this.formLabelAlign.release_time = this.updatadata.release_time;
        this.formLabelAlign.password = this.updatadata.password;
      },
      updatareste(){
        //对表单重新赋值
        this.formLabelAlign.description = this.updatadata.description;
        this.formLabelAlign.Download_link = this.updatadata.Download_link;
        this.formLabelAlign.cit = this.updatadata.cit;
        this.formLabelAlign.tutorial = this.updatadata.tutorial;
        this.formLabelAlign.downloads = this.updatadata.downloads;
        this.formLabelAlign.access = this.updatadata.access;
        this.formLabelAlign.name = this.updatadata.name;
        this.formLabelAlign.release_time = this.updatadata.release_time;
        this.formLabelAlign.password = this.updatadata.password;
      },
      okupdate(){
        this.dialogVisible1 = false//关闭对话框
        //发送请求
      },
      insert(){
        this.dialogVisible1 = true;//打开对话框
        this.formLabelAlign.isupdata = false;//不是修改对话框
        //对表单赋初值
        this.formLabelAlign.title = '添加信息';
      },
      handleDelete(index, row) {
      },
      end(ye) {
        var i = (this.list.filter(data => !this.search || data.name.toLowerCase().includes(this.search.toLowerCase()) || (data.ID == this.search) || (data.access == this.search))).length / 10;
        if (ye > i) {
          this.endye = true;
        } else {
          this.endye = false;
        }
      },
      addtutton(){
      },
      turnoff(){}
    },
    beforeUpdate(){
      jiaohu.$emit("len", this.list.filter(data => !this.search || data.name.toLowerCase().includes(this.search.toLowerCase()) || (data.ID == this.search) || (data.access == this.search)));
      this.end(this.ye);
    }
  }
</script>

<style scoped>

</style>
