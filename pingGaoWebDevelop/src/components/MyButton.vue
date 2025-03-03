<script setup>
import { ref } from "vue";

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
  padding: 1rem 5rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
  width: auto;
  height: auto;
  border-radius: 0.8rem;
}

.button i {
  font-size: 1.5rem;
}

.button:hover {
  transform: scale(1.1);
  transition: all 0.3s ease-in-out;
}

.button-text {
  width: 70%;
  font-size: 1.1rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular";
  color: rgb(255, 255, 255);
  line-height: 1.542;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 5% 0;
}
.iconfont {
  font-size: 1.1rem;
  width: 25%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.content-btn {
  font-family: "AlibabaPuHuiTi_2_45_Light";
  color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 143;
  background-color: var(--bgColor);
  width: 100%;
  height: auto;
  border-radius: 0.8rem;
  cursor: pointer;
}

.content-btn i {
  font-size: 1.5rem;
}

.content-btn:hover {
  transform: scale(1.1);
  transition: all 0.3s ease-in-out;
}

@media (max-width: 400px) {
  .button-text {
    font-size: 2rem;
  }

  .button i {
    font-size: 2rem;
  }

  .content-btn i {
    font-size: 2rem;
  }
}
</style>
