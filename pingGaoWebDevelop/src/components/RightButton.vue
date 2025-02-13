<script setup>
</script>
<template>
  <div class="button">
    <div class="top box">
      <div class="icon"><span class="icon iconfont">&#xe7e5;</span></div>
      <div class="p">定顶部</div>
    </div>
    <div class="middle box">
      <div class="icon"><span class="icon iconfont">&#xe6b5;</span></div>
      <div class="p">上一页</div>
    </div>
    <div class="bottom box">
      <div class="icon"><span class="icon iconfont">&#xe6e9;</span></div>
      <div class="p">首页</div>
    </div>
  </div>
</template>
<style scoped>
.button{
  width: 121px;
  height: 393px;
  background-color: #333333;
  border-radius: 15px 0 0 15px;
  padding-top: 16px;
}
.box{
  width: 63px;
  height: 83px;
  color: #898989;
  text-align: center;
  margin:24px 26px;
  cursor: pointer;
}
.box .p{
  font-size: 20px;
  font-family: "AlibabaPuHuiTi_2_55_Regular",sans-serif;
  color: rgb(137, 137, 137);
  margin-top: -16px;
}
.top .icon{
  font-weight: 600;
}
</style>
