<script setup>
defineOptions({
  name: "NewsCenterIndex",
});
import ComHeader from "@/components/ComHeader.vue";
import Footer from "@/components/Footer.vue";
import RightButton from "@/components/RightButton.vue";
</script>

<template>
  <div class="header">
    <ComHeader></ComHeader>
  </div>

  <RouterView />

  <div class="right_button"> <RightButton></RightButton> </div>
  <div style="width: auto">
    <Footer />
  </div>
</template>

<style scoped>
.header {
  /* height: 611px; */
  height: 68.3vh;
  /* min-width: 1920px; */
  width: auto;
  background-image: url("@/assets/imgs/_2_informationCenterImgs/头部轮播-02.png");
  background-size: cover;
}
.right_button {
 position: absolute;
 top: 1400px;
 right: 0;
 z-index: 1001;
}
</style>
