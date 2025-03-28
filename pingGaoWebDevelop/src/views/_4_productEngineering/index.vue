<template>
  <div class="header">
    <ComHeader :content="info" :footer="footer"></ComHeader>
  </div>
  <router-view></router-view>
  <div class="right_button"><RightButton></RightButton></div>
  <div style="width: auto">
    <Footer v-if="currentLang === 'zh-CN'"></Footer>
    <Footer_En v-else></Footer_En>
  </div>
</template>

<script setup>
defineOptions({
  name: "ProductEngineering",
});
import { ref } from "vue";
import ComHeader from "@/components/ComHeader.vue";
import Footer from "@/components/Footer.vue";
import Footer_En from "@/components/Footer_En.vue";
import imgPath from "@/assets/imgs/_4_productEngineeringImgs/头部轮播-04.png";
import footerBg from "@/assets/imgs/_6_qualityAssuranceImgs/t6_topbar.png";
import RightButton from "@/components/RightButton.vue";
import { useLanguageStore } from "@/stores/languageStores";
import { storeToRefs } from "pinia";

const use = useLanguageStore();
const { currentLang } = storeToRefs(use);
const info = ref({
  title: "产品工程",
  titleEn: "CORE PRODUCTS",
  content: "建设世界一流智慧电气装备集团",
  contentEn: "Building a world-class smart electrical equipment group",
  footer: "PG GROUP",
  imgPath: imgPath,
  footerBg: footerBg,
});

const footer = ref([
  { name: "产品系列", path: "/productEngineering/productSeries1" },
  { name: "重点工程", path: "/productEngineering/keyProject1" },
]);
</script>
<style lang="less" scoped>
.header {
  background-image: url("../../assets/imgs/_4_productEngineeringImgs/头部轮播-04.png");
  width: 100%;
  aspect-ratio: 1916/611;
  background-size: cover;
}
.right_button {
  position: absolute;
  top: 1400px;
  right: 0;
  z-index: 1001;
}
@media (max-width: 900px) {
  .header {
    width: 100%;
    aspect-ratio: 748/401;
    background-image: url("@/assets/imgs/_4_productEngineeringImgs/moveHeaderBg.png");
    background-size: cover;
  }
  .right_button {
    display: none;
  }
}
</style>
