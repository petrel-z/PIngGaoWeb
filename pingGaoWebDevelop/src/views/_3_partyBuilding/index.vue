<script setup>
import { ref } from "vue";
import ComHeader from "@/components/ComHeader.vue";
import Footer from "@/components/Footer.vue";
import imgPath from "@/assets/imgs/_3_partyBuildingImgs/头部轮播-03.png";
import footerBg from "@/assets/imgs/_3_partyBuildingImgs/t3_topBar.png";
import RightButton from "@/components/RightButton.vue";

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
};
</script>

<template>
  <!-- <div class="header"><ComHeader :content="content" :footer="footer" :css="headerCss" /></div>
  <RouterView /> -->
  <div class="right_button"><RightButton></RightButton></div>
  <div style="width: auto">
    <div class="header">
      <div style="height: 100%; width: auto">
        <ComHeader :content="content" :footer="footer" :css="headerCss" :footer-bg-color="'#deb893'"/>
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
  height: 32vw;
  background-size: 100%;
  // height: 610px;
  background-repeat: no-repeat;
  position: relative;
  background-image: url("../../assets/imgs/_3_partyBuildingImgs/头部轮播-03.png");
  background-size: cover;
}

/* 大型设备（桌面，大于 900px） */
@media (max-width: 900px) {
  .header {
    height: 53vw;
  }

}

@media (max-width: 800px) {
}

/* 中型设备（平板，600px 到 900px） */
@media (max-width: 700px) {
} /* 小型设备（手机，小于 600px） */

@media (max-width: 600px) {
}

@media (max-width: 500px) {

}
</style>
