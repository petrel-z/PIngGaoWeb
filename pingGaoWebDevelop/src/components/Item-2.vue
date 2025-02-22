<script setup>
import { ref, onMounted } from "vue";

const props = defineProps({
  time: {
    type: String,
    default: "2025.01.14",
  },
  text: {
    type: String,
    default: `中国电气装备召开一届二次职工代表大会暨2025年工作会议`,
  },
  bgColor: {
    type: String,
    default: "#fff",
  },
  timeColor: {
    type: String,
    default: "#003792",
  },
  textColor: {
    type: String,
    default: "#231815",
  },
  textFontFamily: {
    type: String,
    default: "AlibabaPuHuiTi_2_55_Regular",
  },
});

const items = ref(null);
onMounted(() => {
  // 获取目标元素容器
  const targetContainer = items.value;
  if (targetContainer) {
    // 监听页面滚动事件
    window.addEventListener("scroll", () => {
      if (!targetContainer) return;
      // 获取元素顶部距离页面顶部的距离
      const elementTop = targetContainer.getBoundingClientRect().top;
      // 获取窗口的高度
      const windowHeight = window.innerHeight;

      // 判断元素是否进入可视区域
      if (elementTop < windowHeight) {
        targetContainer.classList.add("show");
      } else {
        targetContainer.classList.remove("show");
      }
    });
  }
});
</script>

<template>
  <div
    ref="items"
    class="item"
    :style="{
      '--timeColor': props.timeColor,
      '--textColor': props.textColor,
      '--textFontFamily': props.textFontFamily,
    }"
  >
    <div
      class="left"
      :style="{
        '--background-color': props.bgColor,
      }"
    >
      <span class="time">{{ props.time }}</span>
    </div>
    <div
      class="right"
      :style="{
        '--background-color': props.bgColor,
      }"
    >
      <div class="text">
        {{ props.text }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.item {
  width: 100%;
  display: flex;
  cursor: pointer;
  margin-bottom: 1em;
}
.time {
  font-size: 1.5rem;
  font-family: "Avenir";
  color: var(--timeColor);
  line-height: 1.68;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.left {
  position: relative;
  left: -200%;
  transition: left 0.5s ease-in-out;
  margin-right: 1%;
  background-color: var(--background-color);
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  text-align: right;
  padding: 35px 1em;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* transition: all 0.3s ease-in-out; */
}

.right {
  position: relative;
  right: -200%;
  transition: right 0.5s ease-in-out;
  background-color: var(--background-color);
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  padding: 45px 36px;
  width: 79%;
  /* transition: all 0.3s ease-in-out; */
}

.item:hover .left,
.item:hover .right {
  background-color: #003792;
}

.item:hover .time,
.item:hover .text {
  color: #fff;
}

.show .left {
  left: 0;
}

.show .right {
  right: 0;
}

.text {
  font-size: 1.3rem;
  font-family: var(--textFontFamily);
  color: var(--textColor);
  line-height: 1.25;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
