<script setup>
import { ref } from "vue";
import ComHeader from "@/components/ComHeader.vue";
import Footer from "@/components/Footer.vue";
import imgPath from "@/assets/imgs/_6_qualityAssuranceImgs/头部轮播-06.png";

defineOptions({
  name: "PartyBuilding",
});
const content = ref({
  title: "品质保障",
  content: "追求卓越·争创一流",
  footer: "PG GROUP",
  imgPath: imgPath,
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
  <div style="width: auto">
    <div class="header">
      <div style="height: 100%; width: auto">
        <ComHeader :content="content" :footer="footer" />
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
  /* height: 611px; */
  height: 68.3vh;
  /* min-width: 1920px; */
  width: auto;
  background-image: url("@/assets/imgs/_6_qualityAssuranceImgs/t6_p1_titleBg.png");
  background-size: cover;
}
</style>
