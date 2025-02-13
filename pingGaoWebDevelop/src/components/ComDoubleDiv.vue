<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "标题",
  },
  content: {
    type: String,
    default: "内容",
  },
});
</script>

<template>
  <div class="com-double-div">
    <div class="left">{{ props.title }}</div>
    <div class="right">{{ props.content }}</div>
  </div>
</template>

<style scoped>
.com-double-div {
  display: flex;
  justify-content: start;
  align-items: center;
  height: auto;
  width: 100%;
  height: 100%;
}
.left {
  height: 100%;
  font-size: 20px;
  white-space: nowrap;
  font-family: "AlibabaPuHuiTi_2_75_SemiBold";
  color: rgb(0, 111, 193);
  font-weight: bold;
  line-height: 1.5;
  text-align: center;
  position: relative;
  z-index: 146;
  background-color: #def1fb;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  margin-right: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1.5em;
}
.right {
  height: 100%;
  background-color: #def1fb;
  font-size: 20px;
  font-family: "AlibabaPuHuiTi_2_55_Regular";
  color: rgb(89, 87, 87);
  line-height: 1.5;
  text-align: center;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5em;
}
</style>
