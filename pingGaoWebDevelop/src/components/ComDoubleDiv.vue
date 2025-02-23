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
  bgColor: {
    type: String,
    default: "#def1fb",
  },
  leftFontColor: {
    type: String,
    default: "#006fc1",

  },
  rightFontColor: {
    type: String,
    default: "#595757",
  }
});
</script>

<template>
  <div class="com-double-div"
    :style="{ '--bgColor': props.bgColor, '--leftFontColor': props.leftFontColor, '--rightFontColor': props.rightFontColor }">
    <div class="left">{{ props.title }}</div>
    <div class="right">{{ props.content }}</div>
  </div>
</template>

<style scoped>
.com-double-div {
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100%;
}

.left,
.right {
  height: 100%;
  font-size: 1.1rem;
  background-color: var(--bgColor);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  display: flex;
  align-items: center;
}

.left {
  width: 20%;
  padding: 7% 6%;
  font-family: "AlibabaPuHuiTi_2_75_SemiBold";
  color: var(--leftFontColor);
  font-weight: bold;
  position: relative;
  z-index: 146;
  text-align: center;
  margin-right: 2%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}

.right {
  width: 78%;
  padding: 7% 3%;
  font-family: "AlibabaPuHuiTi_2_55_Regular";
  color: var(--rightFontColor);
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
}

</style>
