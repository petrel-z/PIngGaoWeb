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
});
</script>

<template>
  <div class="item">
    <div
      class="left"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
      :style="{ backgroundColor: hover ? hoverColor : '#def1fb' }"
    >
      <span class="month">{{ props.month }}</span>
      <span class="year">{{ props.year }}</span>
    </div>
    <div
      class="right"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
      :style="{ backgroundColor: hover ? hoverColor : '#def1fb' }"
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
  border-bottom: 2px solid #ffffff;
}
.item:hover .month,
.item:hover .year,
.item:hover .right .title,
.item:hover .right .text {
  color: #ffffff;
}

.month {
  font-size: 3rem;
  font-family: "Avenir";
  color: rgb(0, 55, 146);
  line-height: 1.85;
  text-align: right;
  border-bottom: 2px solid #1c4e9f; /* 底部蓝色线条 */
  display: block;
}

.year {
  font-size: 1.59rem;
  font-family: "Avenir";
  color: rgb(0, 55, 146);
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
  font-size: 1.75rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(35, 24, 21);
  line-height: 1.75;
  text-align: left;
}
.text {
  font-size: 1.25rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(89, 87, 87);
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
