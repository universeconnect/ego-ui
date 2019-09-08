<template>

<div>
  <div class="abc">

  </div>
  <table>
    <thead>
    <tr>
      <th>全部文档</th>
      <th>推荐</th>
      <th>价格</th>
      <th>阅读量</th>
      <th>下载量</th>
      <th>上传日期</th>
      <th>creation_time</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="list in lists" :key="list.ID">
      <td>{{list.ID}}</td>
      <td>{{list.username}}</td>
      <td>{{list.password}}</td>
      <td>{{list.email}}</td>
      <td>{{list.nickname}}</td>
      <td>{{list.head_portrait}}</td>
      <td>{{list.creation_time}}</td>
    </tr>
    </tbody>
  </table>

</div>
</template>
<script>
  export default {
    name: 'App',
    data(){
      return{
        lists:[
          {"ID":1, "username":"李斯", "password":"99", "email":"390", "nickname":"100", "head_portrait":"2019-09-08", },
          {"ID":2, "username":"嬴政", "password":"99", "email":"390", "nickname":"100", "head_portrait":"2019-09-08", },
          {"ID":3, "username":"赵高", "password":"99", "email":"390", "nickname":"100", "head_portrait":"2019-09-08", },
          {"ID":4, "username":"韩非", "password":"99", "email":"390", "nickname":"100", "head_portrait":"2019-09-08", },
          {"ID":5, "username":"荀子", "password":"99", "email":"390", "nickname":"100", "head_portrait":"2019-09-08", },
        ],
      }
    },
    created() {
      this.axios.post('http://localhost:3000/Gaindata/users.php').then(body => {
        this.lists = body.data
      })
    }

  };
</script>

<style>
  .abc {
    width: 600px;
    height: 200px;
  }
  table {
    font-family: "宋体";
    color: #333333;
  }
  th{
    width: 200px;
    height: 80px;
    border-top:1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
  }
  td{
    height: 129px;
    border-bottom: 1px dashed #e4e4e4;
    text-align: center;
  }
  table {
    background-color: #ffffff;
  }
</style>

