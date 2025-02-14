<script setup>
defineOptions({
  name: "marketing-serviceIndex1-1",
});
import MyTitle from "@/components/MyTitle.vue";
import MyContent from "@/components/MyContent.vue";
</script>

<template>
  <div style="position: relative; min-height: 1120px">
    <div class="bodyBg"></div>
    <div class="body-content">
      <div>
        <MyTitle title="服务承诺" English="SERVICE COMMITMENT" />
      </div>
      <div style="margin-top: 55px">
        <MyContent />
      </div>
    </div>
  </div>
</template>

<style scoped>
.bodyBg {
  background-image: url("../../../assets/imgs/_5_marketingServiceImgs/serviceBg1.png");
  background-size: cover;
  width: 100%;
  min-height: 811px;
  position: absolute;
  top: 310px;
  z-index: -1;
}
.body-content {
  margin: 0 11%;
  padding-top: 65px;
}
</style>
