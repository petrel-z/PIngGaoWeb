<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "平高集团平台",
  },
  title1: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div class="total">
    <div class="top">
      <span class="icon iconfont icon-right">&#xe778;</span>
      <div class="h">
        {{ props.title }}
        <br />
        {{ props.title1 }}
      </div>

    </div>
    <div class="framework">
      <div class="left"></div>
      <div class="right">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.framework {
  width: 100%;
  border-top: 0.2rem solid #006fc1;
  padding-top: 2.875rem;
  padding-bottom: 2.25rem;
  display: flex;
  min-height: 18.75rem;
}
.top {
  height: 5rem;
  display: flex;
  margin-bottom: 1rem;
}
.icon-right {
  font-size: 4.9375rem;
  color: #006fc1;
  margin-left: 0.9375rem;
  width: 4.25rem;
  height: 4.25rem;
  line-height: 5rem;
  transform: rotate(90deg);
}
.h {
  font-size: 3rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(0, 111, 193);
  line-height: 5rem;
  margin-left: 2rem;
}


</style>
