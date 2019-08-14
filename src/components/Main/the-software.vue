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
            @click="handleEdit(scope.$index, scope.row)">修改</el-button>
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
      <el-button type="primary" plain @click="dialogVisible1 = true">添加按钮</el-button>
    </div>
    <p v-if="endye" style="color: #ada9af; height: 50px; line-height:50px;">没有更多啦！</p>
    <!--以下是弹框放置位置-->
    <el-dialog
      title="添加推荐软件"
      :visible.sync="dialogVisible1"
      width="30%"
      :before-close="handleClose1">
      <div style="margin: 10px;"></div>
      <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
        <el-form-item label="软件名称">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
        <el-form-item label="软件介绍">
          <el-input v-model="formLabelAlign.description"></el-input>
        </el-form-item>
        <el-form-item label="下载链接">
        <el-input v-model="formLabelAlign.Download_link"></el-input>
      </el-form-item>
        <el-form-item label="破解安装">
          <el-input v-model="formLabelAlign.cit"></el-input>
        </el-form-item>
        <el-form-item label="使用教程">
          <el-input v-model="formLabelAlign.tutorial"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible1 = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>

  import jiaohu from "../jiaohu"
  import {amend, open2, open4} from "../../public/methods/adminFun";
  export default {
    name: "theSoftware",
    data(){
      return{
        labelPosition: 'left',
        formLabelAlign: {
          name: '',
          description: '',
          Download_link: '',
          cit: '',
          tutorial: '',
        },
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
      handleEdit(index, row) {
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
      }
    }
  }
</script>

<style scoped>
  .el-add-button{
    position: absolute;
    top: 155px;
    left: 225px;
  }
  .el-main{
    line-height: 20px;
  }
</style>
