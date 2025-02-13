<script setup>
defineOptions({
  name: "NewsCenterIndex",
});
import ComHeader from "@/components/ComHeader.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div style="width: auto">
    <div class="header">
      <div style="height: 100%; width: auto">
        <ComHeader />
      </div>
    </div>

    <RouterView />

    <div style="width: auto">
      <Footer />
    </div>
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
</style>
