<template>
  <div class="header">
    <ComHeader language="en-US"></ComHeader>
  </div>
  <RouterView />
  <div style="width: auto">
    <Footer />
  </div>
</template>
<script setup>
import { defineComponent } from "vue";
defineComponent({
  name: "NewsPage",
});
</script>

<style lang="less" scoped>
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
  .right_button {
    display: none;
  }
}
</style>
