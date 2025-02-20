<script setup>
defineOptions({
  name: "marketing-serviceIndex",
});

import { ref } from "vue";
import ComHeader from "@/components/ComHeader.vue";
import Footer from "@/components/Footer.vue";
import imgPath from "@/assets/imgs/_5_marketingServiceImgs/头部轮播-05.png";
import footerBg from "@/assets/imgs/_6_qualityAssuranceImgs/t6_topBar.png";
import RightButton from "@/components/RightButton.vue";

const content = ref({
  title: "营销服务",
  content: "始于客户需求·为客户创造价值",
  footer: "PG GROUP",
  imgPath: imgPath,
  footerBg: footerBg,
});
const footer = ref([
  {
    name: "服务承诺",
    path: "/marketingService/performancePledge",
  },
  {
    name: "营销组织",
    path: "/marketingService/markingOrganization",
  },
  {
    name: "服务网络",
    path: "/marketingService/serviceNetWork",
  },
]);
</script>

<template>
  <div class="header">
    <ComHeader :content="content" :footer="footer" />
  </div>
  <router-view />
  <div class="right_button"> <RightButton></RightButton> </div>
  <div>
    <Footer />
  </div>
</template>

<style scoped>
.header {
  /* height: 735px; */
  height: 32vw;
  width: 100%;
  background-image: url("@/assets//imgs/_5_marketingServiceImgs/头部轮播-05.png");
  background-size: cover;
}
.right_button {
 position: absolute;
 top: 1400px;
 right: 0;
 z-index: 1001;
}
</style>
