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
});
</script>
<template>
  <div>
    <span class="h">{{ props.title }}</span>
    <div class="line"></div>
    <span class="English">{{ props.English }}</span>
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
  font-size: 38px;
  /* width: 1500px; */
  width: auto;
  font-family: "AlibabaPuHuiTi_2_75_SemiBold";
  color: rgb(0, 0, 0);
  z-index: 4;
  margin-top: 4px;
}
.line {
  top: 3px;
  position: relative;
  background-color: #70aedc;
  width: 66px;
  height: 3px;
  margin: 2px 0px;
}
.English {
  font-size: 29.497px;
  font-family: "Avenir-Medium-woff-7";
  color: rgb(159, 160, 160);
  text-transform: uppercase;
  z-index: 5;
}
</style>
