<template>
  <div class="header">
    <ComHeader :content="info" :footer="footer"></ComHeader>
  </div>
  <router-view></router-view>
  <div class="right_button"> <RightButton></RightButton> </div>
  <div style="width: auto">
    <Footer />
  </div>
</template>
<script setup>
import comHeaderFoot from "@/assets/imgs/_1_aboutPinggaoImgs/t6_topBar.png";
import RightButton from "@/components/RightButton.vue";
import { ref } from "vue";
import ComHeader from "@/components/ComHeader.vue";
import Footer from "@/components/Footer.vue";
import imgPath from "@/assets/imgs/_7_scientificResearchCenterImgs/头部轮播-07.png";
defineOptions({
  name: "ScientificResearchCenter",
});

const info = ref({
  title: "科研中心",
  content: "电工行业重大技术装备支柱企业",
  footer: "PG GROUP",
  imgPath: imgPath,
  footerBg: comHeaderFoot,
});

const footer = ref([
  { name: "科研体系", path: "/scientificResearchCenter/scientificResearchSystem" },
  { name: "科研成果", path: "/scientificResearchCenter/scientificResearchAchievement" },
  { name: "试验体系", path: "/scientificResearchCenter/testSystem" },
]);
</script>
<style lang="less" scoped>
.header {
  background-image: url("../../assets/imgs/_7_scientificResearchCenterImgs/头部轮播-07.png");
  width: auto;
  height: 68vh;
  background-size: cover;
}
.right_button {
 position: absolute;
 top: 1400px;
 right: 0;
 z-index: 1001;
}
</style>
