<script setup>
const props = defineProps({
  title: String,
});
import imgPath from "@/assets/imgs/_1_aboutPinggaoImgs/line.png";
</script>
<template>
  <div class="title">{{ props.title }}</div>
  <div class="img"><img :src="imgPath" alt="" /></div>
</template>
<style scoped>
.title {
  font-size: 1.625rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: rgb(0, 111, 193);
  font-weight: 500;
  z-index: 139;
}
.img {
  width: 100%;
  background-size: contain;
}
.img img {
  width: 100%;
}
</style>
