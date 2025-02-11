<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "平高集团平台"
  },
  title1: {
    type: String,
    default: ""
  }
})
</script>
<template>
  <div class="framework">
    <div class="left">
      <div class="h">
        {{ props.title }}
        <br>
        {{ props.title1 }}
      </div>
      <span class="icon iconfont icon-right">&#xe778;</span>
    </div>
    <div class="right">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="less" scoped>
.framework {
  width: 1500px;
  border-top: 1px solid #006fc1;
  padding-top: 46px;
  padding-bottom: 36px;
  display: flex;
  min-height: 280px;
}

.left {
  width: 480px;
  position: relative;

  .icon-right {
    font-size: 79px;
    color: #006fc1;
    margin-left: 15px;
    position: absolute;
    width: 68px;
    height: 68px;
    margin-top: 45px;
  }
}


.left .h {
  font-size: 32px;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: rgb(0, 111, 193);
}

.right {
  width: 1010px;
  margin-left: 20px;
}
</style>