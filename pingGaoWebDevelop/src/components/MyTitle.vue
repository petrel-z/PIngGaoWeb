<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "组织结构",
  },
  English: {
    type: String,
    default: "organization structure",
  },
  titleColor: {
    type: String,
    default: "#000",
  },
  lineColor: {
    type: String,
    default: "#70aedc",
  },
  engColor: {
    type: String,
    default: "#9fa0a0",
  },
});
</script>
<template>
  <div>
    <span class="h" :style="{ color: props.titleColor }">{{ props.title }}</span>
    <div class="line" :style="{ backgroundColor: props.lineColor }"></div>
    <span class="English" :style="{ color: props.engColor }">{{ props.English }}</span>
  </div>
</template>
<style scoped>
.groupProfile {
  margin: auto;
  /* width: 1500px; */
  width: auto;
  height: 3907px;
  border: 1px solid rgb(177, 177, 177);
  padding: 64px 210px;
  border-radius: 20px;
}
.h {
  display: block;
  font-weight: 550;
  font-size: 2.2rem;
  /* width: 1500px; */
  width: auto;
  font-family: "AlibabaPuHuiTi_2_75_SemiBold";
  color: #000000;
  z-index: 4;
  margin-top: 4px;
}
.line {
  top: 0.2rem;
  position: relative;
  background-color: #70aedc;
  width: 4rem;
  height: 0.2rem;
  margin: 0.15rem 0px;
}
.English {
  font-size: 1.7rem;
  font-family: "Avenir-Medium-woff-7";
  color: rgb(159, 160, 160);
  text-transform: uppercase;
  z-index: 5;
}
</style>
