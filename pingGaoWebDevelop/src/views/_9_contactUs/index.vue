<script setup>
defineOptions({
  name: "marketing-serviceIndex",
});

import { ref } from "vue";
import ComHeader from "@/components/ComHeader.vue";
import Footer from "@/components/Footer.vue";
import imgPath from "@/assets/imgs/_9_contactUsImgs/头部轮播-09.png";
import footerBg from "@/assets/imgs/_6_qualityAssuranceImgs/t6_topBar.png";
import RightButton from "@/components/RightButton.vue";

const content = ref({
  title: "联系我们",
  titleEn: "CONTACT US",
  content: "改革·创新·团结·奋斗·实干",
  contentEn: "Reform, Innovation, Unity, Struggle, and Practical Action",
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

// import ContactUsEn from '../_9_contactUs/english/index.vue'
</script>

<template>
  <div class="header">
    <ComHeader :content="content" :footer="footer" />
  </div>
  <router-view />
  <!-- <ContactUsEn></ContactUsEn> -->
  <div class="right_button"><RightButton></RightButton></div>
  <div>
    <Footer />
  </div>
</template>

<style scoped>
.header {
  height: 32vw;
  width: 100%;
  background-image: url("@/assets/imgs/_9_contactUsImgs/头部轮播-09.png");
  background-size: cover;
}
.right_button {
  position: absolute;
  top: 1400px;
  right: 0;
  z-index: 1001;
}
/* 大型设备（桌面，大于 900px） */
@media (max-width: 900px) {
  .header {
    height: 53vw;
  }
}
</style>
