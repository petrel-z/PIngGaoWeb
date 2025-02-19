<script setup>
import { ref } from "vue";
import ComHeader from "@/components/ComHeader.vue";
import Footer from "@/components/Footer.vue";
import imgPath from "@/assets/imgs/_6_qualityAssuranceImgs/头部轮播-06.png";
import RightButton from "@/components/RightButton.vue";
import footerBg from "@/assets/imgs/_6_qualityAssuranceImgs/t6_topBar.png";

defineOptions({
  name: "PartyBuilding",
});
const content = ref({
  title: "品质保障",
  content: "追求卓越·争创一流",
  footer: "PG GROUP",
  imgPath: imgPath,
  footerBg: footerBg,
});
const footer = ref([
  {
    name: "质量体系",
    path: "/qualityAssurance/qualitySystem",
  },
  {
    name: "生产制造",
    path: "/qualityAssurance/manufacturing",
  },
  {
    name: "产品检测",
    path: "/qualityAssurance/productTesting",
  },
]);
</script>

<template>
  <div class="header">
    <ComHeader :content="content" :footer="footer" />
  </div>

  <RouterView />
  <div class="right_button"> <RightButton></RightButton> </div>
  <div style="width: auto">
    <Footer />
  </div>
</template>

<style lang="less" scoped>
.header {
  /* height: 611px; */
  height: 68.3vh;
  /* min-width: 1920px; */
  width: auto;
  background-image: url("@/assets/imgs/_6_qualityAssuranceImgs/头部轮播-06.png");
  background-size: cover;
}
.right_button {
 position: absolute;
 top: 1400px;
 right: 0;
 z-index: 1001;
}
</style>
