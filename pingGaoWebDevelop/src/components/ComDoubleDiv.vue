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
  },
  leftPath: {
    type: String,
    default: "",
  },
  rightPath: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div
    class="com-double-div"
    :style="{
      '--bgColor': props.bgColor,
      '--leftFontColor': props.leftFontColor,
      '--rightFontColor': props.rightFontColor,
    }"
  >
    <router-link :to="props.leftPath" class="leftLink">
      <div class="left">{{ props.title }}</div>
    </router-link>
    <router-link :to="props.rightPath" class="rightLink">
      <div class="right">{{ props.content }}</div>
    </router-link>
  </div>
</template>

<style scoped>
.com-double-div {
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.leftLink,
.rightLink {
  font-size: 1.4rem;
  background-color: var(--bgColor);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
}

.left,
.right {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.leftLink {
  width: 20%;
  padding: 4rem 2rem;
  font-family: "AlibabaPuHuiTi_2_75_SemiBold";
  color: var(--leftFontColor);
  font-weight: bold;
  position: relative;
  z-index: 146;
  text-align: center;
  margin-right: 2%;
  border-top-left-radius: 0.9rem;
  border-bottom-left-radius: 0.9rem;
}

.rightLink {
  width: 78%;
  padding: 4rem 3rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular";
  color: var(--rightFontColor);
  border-top-right-radius: 0.9rem;
  border-bottom-right-radius: 0.9rem;
}
</style>
