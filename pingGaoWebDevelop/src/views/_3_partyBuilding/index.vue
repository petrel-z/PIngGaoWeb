<script setup>
import { ref } from "vue";
import ComHeader from "@/components/ComHeader.vue";
import Footer from "@/components/Footer.vue";
import imgPath from "@/assets/imgs/_3_partyBuildingImgs/头部轮播-03.png";
import T3_topBar from "@/assets/imgs/_3_partyBuildingImgs/t3_topBar.png"
defineOptions({
  name: "PartyBuilding",
});
const content = ref({
  title: "党的建设",
  content: "高举中国特色社会主义伟大旗帜",
  footer: "PG GROUP",
  imgPath: imgPath,
});
const footer = ref([
  {
    name: "党的精神",
    path: "/partyBuilding/partyspirit",
  },
  {
    name: "平高党建",
    path: "/partyBuilding/pinggaoPartyBuilding",
  },
]);
</script>

<template>
  <div style="width: auto">
    <div class="header">
      <img class="header-bg" src="@/assets/imgs/_3_partyBuildingImgs/t3_p1_titleBg.png" alt="">
      <div class="header-body" style="padding-top: 32px; height: 100%; ">
        <ComHeader :content="content" :footer="footer" :css="{ fontColor: '#fce3cd', footerColor: '#a51617'}" :footerImg="T3_topBar"/>
      </div>
    </div>

    <RouterView />

    <div style="width: auto">
      <Footer/>
    </div>
  </div>
</template>

<style lang="less" scoped>
.header {
  /* height: 611px; */
  height: auto;
  /* min-width: 1920px; */
  width: 100vw;
  // background-image: url("@/assets/imgs/_3_partyBuildingImgs/t3_p1_titleBg.png");
  background-size: 100%;
  background-repeat: no-repeat;
  position:relative;
  img {
    width: 100%;
  }

  .header-body {
    width: 100%;
    position: absolute;
    top: 0;
    padding: 0;
  }
}


</style>
