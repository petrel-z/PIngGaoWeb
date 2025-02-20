<script setup>
defineOptions({
  name: "NewsCenterIndex",
});
import ComHeader from "@/components/ComHeader.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="header">
    <ComHeader></ComHeader>
  </div>

  <RouterView />

  <div style="width: auto">
    <Footer />
  </div>
</template>

<style scoped>
.header {
  /* height: 611px; */
  height: 32vw;
  /* min-width: 1920px; */
  width: auto;
  background-image: url("@/assets/imgs/_2_informationCenterImgs/头部轮播-02.png");
  background-size: cover;
}

@media (max-width: 900px) {
  .header {
    height: 53vw;
    width: auto;
    background-image: url("@/assets/imgs/_2_informationCenterImgs/moveHeaderBg.png");
    background-size: cover;
  }
}
</style>
