<template>
  <div id="essay">
    <el-table
      :data="list.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()) || (data.promulgator == search) || (data.ID == search) || (data.access == search)).slice(ye*10-10,ye*10)"
      style="width: 100%">
      <el-table-column
        label="ID"
        prop="ID"
        width="120px">
      </el-table-column>
      <el-table-column
        label="标题"
        prop="title">
      </el-table-column>
      <el-table-column
        label="简介"
        prop="abstract">
      </el-table-column>
      <el-table-column
        label="内容"
        prop="content">
      </el-table-column>
      <el-table-column
        label="发布者"
        prop="promulgator">
      </el-table-column>
      <el-table-column
        label="发布时间"
        prop="release_time">
      </el-table-column>
      <el-table-column
        label="阅读量"
        prop="reading_quantity">
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
          <el-button size="mini" @click="dialogVisible2 = true, handleEdit(scope.$index, scope.row)">修改</el-button>
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
      <el-button type="primary" plain>添加按钮</el-button>
    </div>
    <p v-if="endye" style="color: #ada9af; height: 50px; line-height:50px;">没有更多啦！</p>
    <el-dialog title="修改数据" :visible.sync="dialogVisible2" width="40%" :before-close="handleClose">
      <el-form label-width="80px" :model="formLabelAlign">
        <el-form-item label="ID">
          <el-input v-model="formLabelAlign.ID"></el-input>
        </el-form-item>
        <el-form-item label="标题">
          <el-input v-model="formLabelAlign.title"></el-input>
        </el-form-item>
        <el-form-item label="简介">
          <el-input v-model="formLabelAlign.abstract"></el-input>
        </el-form-item>
        <el-form-item label="内容">
          <el-input v-model="formLabelAlign.content"></el-input>
        </el-form-item>
        <el-form-item label="发布者">
          <el-input v-model="formLabelAlign.promulgator"></el-input>
        </el-form-item>
        <el-form-item label="发布时间">
          <el-input v-model="formLabelAlign.release_time"></el-input>
        </el-form-item>
        <el-form-item label="阅读量">
          <el-input v-model="formLabelAlign.reading_quantity"></el-input>
        </el-form-item>
        <el-form-item label="下载量">
          <el-input v-model="formLabelAlign.downloads"></el-input>
        </el-form-item>
        <el-form-item label="权限">
          <el-input v-model="formLabelAlign.access"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible2 = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible2 = false">确 定</el-button>
            </span>
    </el-dialog>
  </div>
</template>


<script>

  import jiaohu from "../jiaohu"
  import {amend, open2, open4} from "../../../public/methods/adminFun";
  export default {
    name: "theEssay",
    data(){
      return{
        dialogVisible2: false,
        formLabelAlign: {
            ID: '',
            title: '',
            abstract: '',
            content: '',
            promulgator: '',
            release_time: '',
            reading_quantity: '',
            downloads: '',
            access: '',
        },
        list:[],
        search:'',
        ye:1,
        api:"essay",
        endye:0,
        dialogTableVisible: false,
        dialogFormVisible: false,
        formLabelWidth: '120px'
      }
    },
    created() {
      let loadingInstance = this.$loading({text: "数据加载中", fullscreen: false,});
      this.axios.get('http://49.234.9.206/Gaindata/selet_mysql.php', {
        params: {
          list: "essay"
        }
      })
        .then(body => {//请求成功
          if (body.data.status_code == 1009) {//状态码正常
            this.list = body.data.datas;
            this.open2("加载成功");
            this.end(this.ye);
            jiaohu.$emit("len", this.list.filter(data => !this.search || data.title.toLowerCase().includes(this.search.toLowerCase()) || (data.promulgator == this.search) || (data.ID == this.search) || (data.access == this.search)));
            jiaohu.$on("ye", (ye) => {
              this.ye = ye;
            })
          } else {//状态码异常
            this.open4("加载失败");
          }
          for (var i = 0; i < this.list.length; i++) {
            this.$set(this.list[i], 'visible', false);
          }
          this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
            loadingInstance.close();
          })
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
      amend,    //删除方法
      handleEdit(index, row) {
          this.formLabelAlign.ID = row.ID;
          this.formLabelAlign.title = row.title;
          this.formLabelAlign.abstract = row.abstract;
          this.formLabelAlign.content = row.content;
          this.formLabelAlign.promulgator = row.promulgator;
          this.formLabelAlign.release_time = row.release_time;
          this.formLabelAlign.reading_quantity = row.reading_quantity;
          this.formLabelAlign.downloads = row.downloads;
          this.formLabelAlign.access = row.access;
      },
      handleClose(done) {
          this.$confirm('确认关闭？')
              .then(_ => {
                  done();
              })
              .catch(_ => {});
      },
      handleDelete(index, row) {
      },
      end(ye) {
        var i = (this.list.filter(data => !this.search || data.title.toLowerCase().includes(this.search.toLowerCase()) || (data.promulgator == this.search) || (data.ID == this.search) || (data.access == this.search))).length / 10;
        if (ye > i) {
          this.endye = true;
        } else {
          this.endye = false;
        }
      },
      open2,
      open4,
    },
    beforeUpdate(){
      jiaohu.$emit("len", this.list.filter(data => !this.search || data.title.toLowerCase().includes(this.search.toLowerCase()) || (data.promulgator == this.search) || (data.ID == this.search) || (data.access == this.search)));
      this.end(this.ye);
    }
  }
</script>

<style scoped>

</style>
