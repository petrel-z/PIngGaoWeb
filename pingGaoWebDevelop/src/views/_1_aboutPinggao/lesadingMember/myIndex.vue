<script setup>
import MyTitle from "@/components/MyTitle.vue";
</script>
<template>
  <div class="lesadingMember">
    <MyTitle h="领导成员" English="LENDING MEMBERS"></MyTitle>
    <div class="content">
      <div class="info">
        <div class="h">孙继强</div>
        <div class="p1">党委书记</div>
        <div class="p2">董事长</div>
      </div>
      <div class="info">
        <div class="h">刘立成</div>
        <div class="p1">党委副书记</div>
        <div class="p2">总经理</div>
      </div>
      <div class="info">
        <div class="h">宋晗光</div>
        <div class="p1">党委委员</div>
        <div class="p2">纪委书记</div>
        <div class="p3">监事</div>
      </div>
      <div class="info">
        <div class="h">李亚军</div>
        <div class="p1">党委委员</div>
      </div>
      <div class="info">
        <div class="h">张友鹏</div>
        <div class="p1">党委委员</div>
        <div class="p2">副总经理</div>
      </div>
      <div class="info">
        <div class="h">庞庆平</div>
        <div class="p1">三级顾问</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.lesadingMember {
  height: auto;
  position: relative;
  margin: auto;
  width: 100%;
  /* border: 1px solid rgb(177, 177, 177); */
  padding: 64px 5em;
  border-radius: 20px;
  background-color: #f7f8f8;
  z-index: -100;
}
.rightButton {
  position: absolute;
  top: 460px;
  right: 0;
  z-index: 10;
}
.content {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.content .info {
  position: relative;
  width: 478px;
  height: 301px;
  background-image: url("../../../assets/imgs/_1_aboutPinggaoImgs/people-bg.png");
  background-size: cover;
}
.info .h {
  top: 42px;
  left: 32px;
  position: absolute;
  font-size: 29px;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: rgb(0, 111, 193);
}
.info .p1 {
  top: 88px;
  position: absolute;
  left: 32px;
  font-size: 20px;
  font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
  color: rgb(89, 87, 87);
}
.info .p2 {
  top: 118px;
  position: absolute;
  left: 32px;
  font-size: 20px;
  font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
  color: rgb(89, 87, 87);
}
.info .p3 {
  top: 146px;
  position: absolute;
  left: 32px;
  font-size: 20px;
  font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
  color: rgb(89, 87, 87);
}
</style>
