<template>
  <div id="video">
    <el-table
      :data="list.filter(data => !search || data.address.toLowerCase().includes(this.search.toLowerCase())  || data.title.toLowerCase().includes(this.search.toLowerCase()) || (data.ID == search) || (data.good == search)).slice(ye*10-10,ye*10)"
      style="width: 100%">
      <el-table-column
        label="ID"
        prop="ID">
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
        label="视频文件路径"
        prop="video_file">
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
              type="danger">删除</el-button>
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
        <el-form-item label="标题">
          <el-input v-model="formLabelAlign.title" placeholder="xxx"></el-input>
        </el-form-item>
        <el-form-item label="发布者">
          <el-input v-model="formLabelAlign.promulgator" placeholder="xx"></el-input>
        </el-form-item>
        <el-form-item label="发布时间">
          <el-input v-model="formLabelAlign.release_time" placeholder="c:xxxxxxxxxx/xxxxxxxxxxx/xxxxxxxxxx.png"></el-input>
        </el-form-item>
        <el-form-item label="阅读量">
          <el-input v-model="formLabelAlign.reading_quantity" placeholder="xxxx"></el-input>
        </el-form-item>
        <el-form-item label="下载量">
          <el-input v-model="formLabelAlign.downloads" placeholder="xxxx"></el-input>
        </el-form-item>
        <el-form-item label="权限">
          <el-input v-model="formLabelAlign.access" placeholder="xxxx"></el-input>
        </el-form-item>
        <p>	简介：<el-input v-model="formLabelAlign.abstract" placeholder="请输入内容"></el-input></p>

        <br><br>
        <p>	视频文件路径：<el-input v-model="formLabelAlign.video_file" placeholder="请输入内容"></el-input></p>

        <br><br>
        
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-popover
          placement="top"
          width="160"
          v-model="nodata"
          @click="">
            <p>{{tisi}}</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="dialogVisible1 = false;nodata = false">确定</el-button>
              <el-button type="primary" size="mini" @click="nodata = false">取消</el-button>
            </div>
            <el-button
              @click=" tisi= formLabelAlign.isupdata?'确定放弃修改吗？':'确定放弃添加吗？' "
              slot="reference">取 消</el-button>
        </el-popover>
    <el-button v-if="formLabelAlign.isupdata" type="info" @click="updatareste">重置</el-button>
        <el-popover
          placement="top"
          width="160"
          v-model="okdata"
          @click="">
            <p>{{tisi}}</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="okdata = false">取消</el-button>
              <el-button type="primary" size="mini" @click="okdata = false ;okupdate()">确定</el-button>
            </div>
            <el-button
              type="primary"
              @click=" tisi= formLabelAlign.isupdata?'确定提交修改吗？':'确定提交添加吗？' "
              slot="reference">确 定</el-button>
        </el-popover>
  </span>
    </el-dialog>
  </div>
</template>


<script>

  import jiaohu from "../jiaohu"
  import {amend, open2, open4, updatadataF, insertdataF} from "../../../public/methods/adminFun";
  export default {
    title: "thevideo",
    data(){
      return{
        labelPosition: 'left',
        formLabelAlign: {
          ID: '',
          title: '',
          release_time: '',
          reading_quantity: '',
          promulgator: '',
          abstract: '',
          video_file: '',
          adept: '',
          good: '',
          address: '',
          title: '添加成员信息',
          isupdata: false,//判断是否是修改数据，用于v-if调节表单项，默认不是，因为添加数据时的表单项在修改数据时都存在
        },
        updatadata:'',
        okdata:'',
        tisi:"",//提示
        nodata:'',
        list:[],
        metadata:[],
        search:'',
        ye:1,
        api:"video",
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
          list: "video"
        }
      })
        .then(body => {//请求成功
          if (body.data.status_code == 1009) {//状态码正常
            this.list = JSON.parse(JSON.stringify(body.data.datas));//深度拷贝
            this.metadata = body.data.datas;//存放真实数据
            this.end(this.ye);
            jiaohu.$emit("len", this.list.filter(data => !this.search || data.address.toLowerCase().includes(this.search.toLowerCase())  || data.title.toLowerCase().includes(this.search.toLowerCase()) || (data.ID == this.search) || (data.good == this.search)));
            jiaohu.$on("ye", (ye) => {
              this.ye = ye;
            });
            this.open2("加载成功");
            this.Deposit();
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
      updatadataF,//修改方法
      insertdataF,//添加方法
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
        this.formLabelAlign.title = '修改成员信息';
        this.updatadata = this.metadata.filter(data => data.ID == row.ID)[0];//提取元数据
        //对表单赋初值
        this.formLabelAlign.ID = this.updatadata.ID;
        this.formLabelAlign.title = this.updatadata.title;
        this.formLabelAlign.release_time = this.updatadata.release_time;
        this.formLabelAlign.reading_quantity = this.updatadata.reading_quantity;
        this.formLabelAlign.promulgator = this.updatadata.promulgator;
        this.formLabelAlign.abstract = this.updatadata.abstract;
        this.formLabelAlign.video_file = this.updatadata.video_file;
        this.formLabelAlign.adept = this.updatadata.adept;
        this.formLabelAlign.good = this.updatadata.good;
        this.formLabelAlign.address = this.updatadata.address;
      },
      updatareste(){
        //对表单重新赋值
        this.formLabelAlign.title = this.updatadata.title;
        this.formLabelAlign.release_time = this.updatadata.release_time;
        this.formLabelAlign.reading_quantity = this.updatadata.reading_quantity;
        this.formLabelAlign.promulgator = this.updatadata.promulgator;
        this.formLabelAlign.abstract = this.updatadata.abstract;
        this.formLabelAlign.video_file = this.updatadata.video_file;
        this.formLabelAlign.adept = this.updatadata.adept;
        this.formLabelAlign.good = this.updatadata.good;
        this.formLabelAlign.address = this.updatadata.address;
      },
      okupdate(){
        this.dialogVisible1 = false;//关闭对话框
        if (this.formLabelAlign.isupdata) {
          //发送修改请求
          this.updatadataF('http://49.234.9.206/Gaindata/updata_video.php',{
            ID : this.formLabelAlign.ID,
            title : this.formLabelAlign.title,
            release_time : this.formLabelAlign.release_time,
            promulgator :this.formLabelAlign.promulgator,
            abstract : this.formLabelAlign.abstract,
            video_file : this.formLabelAlign.video_file,
            adept : this.formLabelAlign.adept,
            good : this.formLabelAlign.good,
            address : this.formLabelAlign.address,
            reading_quantity : this.formLabelAlign.reading_quantity,
          });
        }else {
          //发送添加请求
          this.insertdataF('http://49.234.9.206/Gaindata/insert_video.php',{
            title : this.formLabelAlign.title,
            release_time : this.formLabelAlign.release_time,
            promulgator :this.formLabelAlign.promulgator,
            abstract : this.formLabelAlign.abstract,
            video_file : this.formLabelAlign.video_file,
            adept : this.formLabelAlign.adept,
            good : this.formLabelAlign.good,
            address : this.formLabelAlign.address,
            reading_quantity : this.formLabelAlign.reading_quantity,
          });
        }

      },
      insert(){
        this.dialogVisible1 = true;//打开对话框
        this.formLabelAlign.isupdata = false;//不是修改对话框
        //清除表单初值
        this.formLabelAlign = {
          ID: '',
          title: '',
          release_time: '',
          reading_quantity: '',
          promulgator: '',
          abstract: '',
          video_file: '',
          adept: '',
          good: '',
          address: '',
          title: '添加成员信息',
          isupdata: false,
        };
      },
      handleDelete(index, row) {

      },
      end(ye) {
        var i = (this.list.filter(data => !this.search || data.address.toLowerCase().includes(this.search.toLowerCase())  || data.title.toLowerCase().includes(this.search.toLowerCase()) || (data.ID == this.search) || (data.good == this.search))).length / 10;
        if (ye > i) {
          this.endye = true;
        } else {
          this.endye = false;
        }
      },
      Deposit(){
        for (var i = 0; i < this.list.length; i++) {
          this.$set(this.list[i], 'visible', false);
          //对展示数据的长度进行处理
          if (this.list[i].abstract.length > 10) {
            this.list[i].abstract = this.list[i].abstract.substr(0,10) + "...";
          }
          if (this.list[i].video_file.length > 6) {
            this.list[i].video_file = this.list[i].video_file.substr(0,6) + "...";
          }
        }
      }
    },
    beforeUpdate(){
      jiaohu.$emit("len", this.list.filter(data => !this.search || data.address.toLowerCase().includes(this.search.toLowerCase())  || data.title.toLowerCase().includes(this.search.toLowerCase()) || (data.ID == this.search) || (data.good == this.search)));
      this.end(this.ye);
    }
  }
</script>

<style scoped>

</style>
