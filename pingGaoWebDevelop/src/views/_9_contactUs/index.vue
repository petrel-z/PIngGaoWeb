<script setup>
defineOptions({
  name: "marketing-serviceIndex",
});

import { ref } from "vue";
import ComHeader from "@/components/ComHeader.vue";
import Footer from "@/components/Footer.vue";
import imgPath from "@/assets/imgs/_9_contactUsImgs/头部轮播-09.png";
import footerBg from "@/assets/imgs/_6_qualityAssuranceImgs/t6_topBar.png";

const content = ref({
  title: "联系我们",
  content: "改革·创新·团结·奋斗·实干",
  footer: "PG GROUP",
  imgPath: imgPath,
  footerBg: footerBg,
});
const footer = ref([
  {
    name: "招标采购",
    path: "/contactUs/purchaseByBidding",
  },
  {
    name: "成为伙伴",
    path: "/contactUs/becomePartner",
  },
  {
    name: "业务咨询",
    path: "/contactUs/businessConsulting",
  },
  {
    name: "地址电话",
    path: "/contactUs/addressTelephone",
  },
]);
</script>

<template>
  <div class="header">
    <ComHeader :content="content" :footer="footer" :footerImg="footerImg" />
  </div>
  <router-view />
  <div>
    <Footer />
  </div>
</template>

<style scoped>
.header {
  height: 68vh;
  width: 100%;
  background-image: url("@/assets/imgs/_9_contactUsImgs/头部轮播-09.png");
  background-size: cover;
}
</style>
