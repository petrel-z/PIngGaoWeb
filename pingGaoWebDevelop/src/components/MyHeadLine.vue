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
  font-family: "AlibabaPuHuiTi_2_65_Medium";
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
@media (min-width: 300px) and (max-width: 400px) {
  .img{
    margin-top: -3rem;
  }
}
@media (min-width: 400px) and (max-width: 500px) {
  .img{
    margin-top: -2.5rem;
  }
}
@media (min-width: 500px) and (max-width: 600px) {
  .img{
    margin-top: -1.5rem;
  }
}
@media (min-width: 600px) and (max-width: 700px) {
  .img{
    margin-top: -0.8rem;
  }
}
@media (min-width: 600px) and (max-width: 800px) {
  .title{
    font-size: 1.325rem;
  }
  .img{
    margin-top: -0.5rem;
  }
}
@media (min-width: 900px) and (max-width: 1000px) {
  .img{
    margin-top: -0.5rem;
  }
}

</style>
