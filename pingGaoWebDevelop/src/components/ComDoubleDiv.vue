<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '标题',
  },
  content: {
    type: String,
    default: '内容',
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
  justify-content: space-between;
  align-items: center;
  height: 101px;
  width: 641px;
}
.left {
  width: 116px;
  height: 101px;
  font-size: 20px;
  font-family: 'AlibabaPuHuiTi_2_75_SemiBold';
  color: rgb(0, 111, 193);
  font-weight: bold;
  line-height: 101px;
  text-align: center;
  position: relative;
  z-index: 146;
  background-color: #def1fb;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}
.right {
  background-color: #def1fb;
  width: 521px;
  height: 101px;
  font-size: 20px;
  font-family: 'AlibabaPuHuiTi_2_55_Regular';
  color: rgb(89, 87, 87);
  line-height: 101px;
  text-align: center;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}
</style>
