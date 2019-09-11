<template>

<div>
  <a href="#">标题1</a>
  <a href="#">标题2</a>
  <a href="#">标题3</a>
</div>

</template>

<script>
    export default {
        name: "essay",
        props:['essay'],
    }
</script>

<style scoped>
a {
  text-decoration: none;
  margin-left: 80px;
  font-size: small;
  color: #8e8e8e;
}
a:link{
  color:red;
}


</style>
