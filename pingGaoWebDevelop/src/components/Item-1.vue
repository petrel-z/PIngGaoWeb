<script setup>
import { ref } from "vue";
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
    default: 'AlibabaPuHuiTi_2_65_Medium',
  },
  textFont: {
    type: String,
    default: 'AlibabaPuHuiTi_2_45_Light'
  },
  titleFontColor: {
    type: String,
    default: '#231815'
  },
  textFontColor: {
    type: String,
    default: '#595757'
  },
  bgColor1: {
    type: String,
    default: '#def1fb',// 默认背景为淡蓝色
  },
  bgColor2: {
    type: String,
    default: '#003792', // 默认悬停背景为蓝色
  },
  leftFontColor: {
    type: String,
    default: '#003792', // 默认 左侧字体为蓝色
  },
  leftFontColorHover: {
    type: String,
    default: '#fff',  // 默认 左侧字体悬停颜色为白色
  },
  rightFontColor: {
    type: String,
    default: '#fff', 
  },
  rightFontColorHover: {
    type: String,
    default: '#fff',   // 默认 右侧字体悬停颜色为白色
  },
});
</script>

<template>
  <div class="item"
  :style="{'--bgColor1': props.bgColor1,'--bgColor2': props.bgColor2,
   '--leftFontColor': props.leftFontColor, '--leftFontColorHover': props.leftFontColorHover,
    '--rightFontColorHover': props.rightFontColorHover,
    '--titleFont': props.titleFont, '--textFont': props.textFont,
    '--titleFontColor': props.titleFontColor, '--textFontColor': props.textFontColor
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
  margin-bottom: 1em;
  width: 100%;
}

.item:hover .month {
  border-bottom: 2px solid var(--leftFontColorHover);
}

.item:hover .month,
.item:hover .year{
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

  font-family: 'Avenir Black';
  color: var(--leftFontColor);
  font-size: 3rem;
  line-height: 1.85;
  text-align: right;
  border-bottom: 2px solid var(--leftFontColor); /*底部蓝色线条*/
  display: block;
}

.year {
  font-family: 'Avenir Black';
  color: var(--leftFontColor);
  font-size: 1.59rem;
  line-height: 1.85;
  text-align: right;
}

.left {

  width: 18%;
  height: auto;
  margin-right: 2%;
  background-color: #def1fb;
  border-radius: 10px;
  text-align: right;
  padding: 0 2em;
}

.right {

  width: 80%;
  height: auto;
  background-color: #def1fb;
  border-radius: 10px;
  padding: 2em 3em;
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


</style>
