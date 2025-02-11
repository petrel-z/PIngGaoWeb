<script setup>
const props = defineProps({
  time: {
    type: String,
    default: '2025.01.14',
  },
  text: {
    type: String,
    default: `中国电气装备召开一届二次职工代表大会暨2025年工作会议`,
  },
  bgColor: {
    type: String,
    default: '#fff',
  },
  size: {
    type: String,
    default: 'small',
  },
});
</script>

<template>
  <div class="item">
    <div
      class="left"
      :class="[`${props.size}-left`]"
      :style="{
        'background-color': props.bgColor,
      }"
    >
      <span class="time">{{ props.time }}</span>
    </div>
    <div
      class="right"
      :class="[`${props.size}-right`]"
      :style="{
        'background-color': props.bgColor,
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
}
.time {
  font-size: 28px;
  font-family: 'Avenir';
  color: rgb(0, 55, 146);
  line-height: 1.68;
  text-align: right;
}
.small-left {
  width: 190px;
  height: 121px;
}

.small-right {
  width: 751px;
  height: 121px;
}

.big-left {
  width: 190px;
  height: 121px;
}

.big-right {
  width: 1300px;
  height: 121px;
}
.left {
  margin-right: 15px;
  background-color: #fff;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  text-align: right;
  padding: 35px 21px;
}

.right {
  background-color: #fff;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  padding: 45px 36px;
}

.text {
  font-size: 24px;
  font-family: 'AlibabaPuHuiTi_2_55_Regular';
  color: rgb(35, 24, 21);
  line-height: 1.25;
  text-align: justifyLeft;
}
</style>
