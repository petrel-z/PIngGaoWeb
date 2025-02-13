<script setup>
import { ref, defineEmits } from "vue";

const button = ref(null);
const emits = defineEmits(["childButton"]);
function handleClick() {
  emits("childButton", button.value);
}

const props = defineProps({
  text: {
    type: String,
    default: "加载更多",
  },
  type: {
    type: String,
    default: "more",
  },
  bgColor: {
    type: String,
    default: "#45b3e0",
  },
});
</script>

<template>
  <div
    :style="{ '--bgColor': props.bgColor }"
    :class="{ [props.type === 'more' ? 'button' : 'content-btn']: true }"
  >
    <span :class="{ 'button-text': true }" ref="button" @click="handleClick">{{ props.text }}</span>
    <i
      :class="{
        iconfont: true,
        [props.type === 'more' ? 'icon-a-MenuBar-show' : 'icon-chakanxiangqing-copy']: true,
      }"
      style="font-size: 24px; margin-left: 2em"
    ></i>
  </div>
</template>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bgColor);
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  width: auto;
  height: auto;
  border-radius: 30.5px;
}
.button-text {
  font-size: 24px;
  font-family: "AlibabaPuHuiTi_2_55_Regular";
  color: rgb(255, 255, 255);
  line-height: 1.542;
}
.content-btn {
  font-size: 20px;
  font-family: "AlibabaPuHuiTi_2_45_Light";
  color: rgb(255, 255, 255);
  line-height: 51px;
  text-align: center;
  position: relative;
  z-index: 143;
  background-color: var(--bgColor);
  width: 201px;
  min-height: 51px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
