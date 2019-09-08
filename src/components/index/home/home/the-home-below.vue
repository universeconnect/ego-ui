<template>
    <div class="footer">
      <div>
        <div class="links">
          <dl>
            <dt>关于我们</dt>
            <dd><a href="#">关于</a></dd>
            <dd><a href="#">关于我们</a></dd>
            <dd><a href="#">关于我们啊</a></dd>
            <dd><a href="#">关于我们</a></dd>
          </dl>
          <dl>
            <dt>关于我们</dt>
            <dd><a href="#">关于</a></dd>
            <dd><a href="#">关于我们</a></dd>
            <dd><a href="#">关于我们啊</a></dd>
            <dd><a href="#">关于我们</a></dd>
          </dl>
          <dl>
            <dt>关于我们</dt>
            <dd><a href="#">关于</a></dd>
            <dd><a href="#">关于我们</a></dd>
            <dd><a href="#">关于我们啊</a></dd>
            <dd><a href="#">关于我们</a></dd>
          </dl>
        </div>
      </div>
      <div class="right">
        <img src="src/assets/web_img/QRcode.jpg" alt="">
      </div>
    </div>
</template>

<script>
    export default {
        name: "the-home-below"
    }
</script>

<style scoped>
  a {
    text-decoration: none;
  }
 .footer {
   width: 100%;
   height: 200px;
   background-color: #201e1e;
 }
 .links {
   margin-left: 54px;
 }
  .links dl {
    float: left;
    padding-top: 27px;
    margin-right: 70px;
  }
  .links dt {
    height: 35px;
    font-size: 16px;
    color: #e5e5e5;
    text-align: right;
  }
  .links dd a {
    text-align: left;
    font-size: 12px;
    color: #e5e5e5;

  }
  .links dd a:hover {
    color: #d73d07;
  }
  .right {
    float: right;
  }
</style>
