<script setup>
import MyTitle from "@/components/MyTitle.vue";
</script>
<template>
  <div class="lesadingMember">
    <MyTitle h="领导成员" English="LENDING MEMBERS"></MyTitle>
    <div class="content">
      <div class="info">
        <img src="@/assets/imgs/_1_aboutPinggaoImgs/peoplebg.png" alt="" />
        <div class="h">孙继强</div>
        <div class="hr"></div>
        <div class="p1">党委书记</div>
        <div class="p2">董事长</div>
      </div>
      <div class="info">
        <img src="@/assets/imgs/_1_aboutPinggaoImgs/peoplebg.png" alt="" />
        <div class="h">刘立成</div>
        <div class="hr"></div>
        <div class="p1">党委副书记</div>
        <div class="p2">总经理</div>
      </div>
      <div class="info">
        <img src="@/assets/imgs/_1_aboutPinggaoImgs/peoplebg.png" alt="" />
        <div class="h">宋晗光</div>
        <div class="hr"></div>
        <div class="p1">党委委员</div>
        <div class="p2">纪委书记</div>
        <div class="p3">监事</div>
      </div>
      <div class="info">
        <img src="@/assets/imgs/_1_aboutPinggaoImgs/peoplebg.png" alt="" />
        <div class="h">李亚军</div>
        <div class="hr"></div>
        <div class="p1">党委委员</div>
      </div>
      <div class="info">
        <img src="@/assets/imgs/_1_aboutPinggaoImgs/peoplebg.png" alt="" />
        <div class="h">张友鹏</div>
        <div class="hr"></div>
        <div class="p1">党委委员</div>
        <div class="p2">副总经理</div>
      </div>
      <div class="info">
        <img src="@/assets/imgs/_1_aboutPinggaoImgs/peoplebg.png" alt="" />
        <div class="h">庞庆平</div>
        <div class="hr"></div>
        <div class="p1">三级顾问</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.lesadingMember {
  position: relative;
  margin: auto;
  width: 100%;
  padding: 64px 210px;
  border-radius: 20px;
  background-color: #f7f8f8;
  z-index: -100;
}
.content {
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.content .info {
  position: relative;
  width: 33%;
  height: 301px;
  background-size: cover;
  margin-bottom: 10px;
}
.content .info img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.info .h {
  top: 42px;
  left: 32px;
  position: absolute;
  font-size: 29px;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: rgb(0, 111, 193);
}
.info .hr{
  width: 40%;
  height: 1px;
  left: 32px;
  background-color: #4093d1;
  top: 85px;
  position: absolute;
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
