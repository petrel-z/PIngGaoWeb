<template>
  <div class="header">
    <ComHeader :content="info" :footer="footer"></ComHeader>
  </div>
  <router-view></router-view>

  <div style="width: auto">
    <Footer />
  </div>
</template>

<script setup>
import comHeaderFoot from "@/assets/imgs/_1_aboutPinggaoImgs/t6_topBar.png"
defineOptions({
  name: "ProductEngineering",
});
import { ref } from "vue";
import ComHeader from "@/components/ComHeader.vue";
import Footer from "@/components/Footer.vue";
import imgPath from "@/assets/imgs/_4_productEngineeringImgs/头部轮播-04.png";
const info = ref({
  title: "产品工程",
  content: "建设世界一流智慧电气装备集团",
  footer: "PG GROUP",
  imgPath: imgPath,
  footerBg: comHeaderFoot
});

const footer = ref([
  { name: "产品系列", path: "/productEngineering/productSeries" },
  { name: "重点工程", path: "/productEngineering/keyProject" },
]);
</script>
<style lang="less" scoped>

.header {
  background-image: url("../../assets/imgs/_4_productEngineeringImgs/头部轮播-04.png");
  width: auto;
  height: 68.3vh;
  background-size: cover;
  padding-top: 32px;
}
</style>
