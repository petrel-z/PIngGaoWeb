<script setup>
import { onMounted, ref } from "vue";
let hover = ref(false);
const props = defineProps({
  month: {
    type: String,
    default: "01.14",
  },
  year: {
    type: String,
    default: "2025",
  },
  title: {
    type: String,
    default: "中国电气装备召开一届二次职工代表大会暨2025年工作会议",
  },
  text: {
    type: String,
    default: `1月13日至14日，中国电气装备集团有限公司第一届职工代表大会第二次会议暨2025年工作会议在沪召开。会议以习近平新
        时代中国特色社会主义思想为指导，深...`,
  },
  hoverColor: {
    type: String,
    default: "#003792",
  },
  bgColor: {
    type: String,
  },
  // css
  titleFont: {
    type: String,
    default: "AlibabaPuHuiTi_2_65_Medium",
  },
  textFont: {
    type: String,
    default: "AlibabaPuHuiTi_2_45_Light",
  },
  titleFontColor: {
    type: String,
    default: "#231815",
  },
  textFontColor: {
    type: String,
    default: "#595757",
  },
  bgColor1: {
    type: String,
    default: "#def1fb", // 默认背景为淡蓝色
  },
  bgColor2: {
    type: String,
    default: "#003792", // 默认悬停背景为蓝色
  },
  leftFontColor: {
    type: String,
    default: "#003792", // 默认 左侧字体为蓝色
  },
  leftFontColorHover: {
    type: String,
    default: "#fff", // 默认 左侧字体悬停颜色为白色
  },
  rightFontColor: {
    type: String,
    default: "#fff",
  },
  rightFontColorHover: {
    type: String,
    default: "#fff", // 默认 右侧字体悬停颜色为白色
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
      '--bgColor1': props.bgColor1,
      '--bgColor2': props.bgColor2,
      '--leftFontColor': props.leftFontColor,
      '--leftFontColorHover': props.leftFontColorHover,
      '--rightFontColorHover': props.rightFontColorHover,
      '--titleFont': props.titleFont,
      '--textFont': props.textFont,
      '--titleFontColor': props.titleFontColor,
      '--textFontColor': props.textFontColor,
    }"
  >
    <div
      class="left"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
      :style="{ backgroundColor: hover ? 'var(--bgColor2)' : 'var(--bgColor1)' }"
    >
      <span class="month">{{ props.month }}</span>
      <span class="year">{{ props.year }}</span>
    </div>
    <div
      class="right"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
      :style="{ backgroundColor: hover ? 'var(--bgColor2)' : 'var(--bgColor1)' }"
    >
      <div class="title">
        {{ props.title }}
      </div>
      <div class="text">
        {{ props.text }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  cursor: pointer;
  margin-bottom: 1%;
  width: 100%;
  height: 100%;
}

/* 元素进入可视区域时的样式 */
.show .left {
  left: 0;
}

.show .right {
  right: 0;
}

.item:hover .month {
  border-bottom: 0.1rem solid var(--leftFontColorHover);
}

.item:hover .month,
.item:hover .year {
  color: var(--leftFontColorHover);
}

.item:hover .month,
.item:hover .year,
.item:hover .right .title,
.item:hover .right .text {
  color: var(--leftFontColorHover);
}

/* .item:hover .right .title,
.item:hover .right .text {
  color: var(--rightFontColorHover);
} */
.item:hover .right,
.item:hover .left {
  background-color: var(--bgColor2);
}

.month {
  font-family: "Avenir Black";
  color: var(--leftFontColor);
  font-size: 2.5rem;
  line-height: 1.85;
  text-align: right;
  border-bottom: 0.125rem solid var(--leftFontColor);
  /*底部蓝色线条*/
  display: block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}

.year {
  font-family: "Avenir Black";
  color: var(--leftFontColor);
  font-size: 1.59rem;
  line-height: 1.85;
  text-align: right;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}

.left {
  position: relative;
  left: -100%;
  /* top: 0; */
  transition: left 1s ease;
  width: 18%;
  height: auto;
  margin-right: 2%;
  background-color: #def1fb;
  border-radius: 0.625rem;
  text-align: right;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.right {
  position: relative;
  right: -100%;
  /* top: 0; */
  transition: right 1s ease;
  width: 80%;
  height: auto;
  background-color: #def1fb;
  border-radius: 0.625rem;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  /* font-size: 28px; */
  font-family: var(--titleFont);
  color: var(--titleFontColor);
  font-size: 1.75rem;
  line-height: 1.75;
  text-align: left;
}

.text {
  /* font-size: 20px; */
  font-family: var(--textFont);
  color: var(--textFontColor);
  font-size: 1.25rem;
  line-height: 1.498;
  text-align: left;
  width: 100%;
  height: auto;
}

@media screen and (max-width: 1500px) {
  .left {
    text-align: center;
  }

  .month {
    text-align: center;
  }

  .year {
    text-align: center;
  }
}

@media (max-width: 900px) {
  .left {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
    width: 20%;
    margin: 0;
  }
  .right {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    width: 80%;
    margin: 0;
  }
  .title {
    font-size: 3.1rem;
  }
  .text {
    font-size: 2.5rem;
  }
  .month {
    font-size: 3.2rem;
  }
  .year {
    font-size: 1.8rem;
  }
}

@media (max-width: 500px) {
  .month {
    font-size: 4rem;
  }
  .year {
    font-size: 2rem;
  }
}
</style>
