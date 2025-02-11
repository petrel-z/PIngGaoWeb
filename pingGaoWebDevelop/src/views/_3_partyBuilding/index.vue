<script setup>
import { ref } from "vue";
import ComHeader from "@/components/ComHeader.vue";
import Footer from "@/components/Footer.vue";
import imgPath from "@/assets/imgs/_3_partyBuildingImgs/头部轮播-03.png";

defineOptions({
  name: "PartyBuilding",
});
const content = ref({
  title: "党的建设",
  content: "高举中国特色社会主义伟大旗帜",
  footer: "PG GROUP",
  imgPath: imgPath,
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
</script>

<template>
  <div style="width: auto">
    <div class="header">
      <div style="padding-top: 32px; height: 100%; width: auto">
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
  background-image: url("@/assets/imgs/_3_partyBuildingImgs/t3_p1_titleBg.png");
  background-size: cover;
}
</style>
