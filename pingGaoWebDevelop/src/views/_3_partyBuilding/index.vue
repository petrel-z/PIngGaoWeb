<script setup>
import { ref } from "vue";
import ComHeader from "@/components/ComHeader.vue";
import Footer from "@/components/Footer.vue";
import imgPath from "@/assets/imgs/_3_partyBuildingImgs/头部轮播-03.png";
import footerBg from "@/assets/imgs/_3_partyBuildingImgs/t3_topBar.png";

defineOptions({
  name: "PartyBuilding",
});
const content = ref({
  title: "党的建设",
  content: "高举中国特色社会主义伟大旗帜",
  footer: "PG GROUP",
  imgPath: imgPath,
  footerBg: footerBg,
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
const headerCss = {
  fontColor: "#fce3cd",
  footerColor: "#a51617",
}
</script>

<template>
  <div style="width: auto">
    <div class="header">
      <div style="height: 100%; width: auto">
        <ComHeader :content="content" :footer="footer" :css="headerCss" />
      </div>
    </div>

    <RouterView />

    <div style="width: auto">
      <Footer />
    </div>
  </div>
</template>

<style lang="less" scoped>
.header {
  width: auto;
  height: 65vh;
  background-size: 100%;
  // height: 610px;
  background-repeat: no-repeat;
  position: relative;
  background-image: url("../../assets/imgs/_3_partyBuildingImgs/头部轮播-03.png");
  background-size: cover;
}
</style>
