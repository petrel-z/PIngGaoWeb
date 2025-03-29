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
});
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
  width: 100%;
  border-top: 0.0625rem solid #006fc1;
  padding-top: 2.875rem;
  padding-bottom: 2.25rem;
  display: flex;
  min-height: 18.75rem;
}

.left {
  width: 32%;
  position: relative;
}

.icon-right {
  font-size: 4.9375rem;
  color: #006fc1;
  margin-left: 0.9375rem;
  position: absolute;
  width: 4.25rem;
  height: 4.25rem;
  margin-top: 2.8125rem;
}

.left .h {
  font-size: 2rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(0, 111, 193);
}

.right {
  width: 70%;
  margin-left: 1.25rem;
}

@media (min-width: 680px) and (max-width: 800px) {
  .left .h {
    font-size: 1.6rem;
    font-family: "AlibabaPuHuiTi_2_65_Medium";
    color: rgb(0, 111, 193);
  }

  .iconfont {
    font-size: 5rem !important;
  }
}

@media (max-width: 900px) {
  .framework {
    border-top: none;
    flex-direction: column;
  }

  .left {
    width: 100%;
    height: 5rem;
    display: flex;
    flex-direction: row-reverse;
    justify-content: start;
    margin-bottom: 1.5rem;
    align-items: center;
  }

  .right {
    width: 100%;
    margin: 0;
    border-top: 0.2rem solid #006fc1;
    padding-top: 1.5rem;
  }

  .icon-right {
    font-size: 4.4rem;
    margin-left: 0;
    margin-top: 0;
    width: 4.25rem;
    height: 4.25rem;
    line-height: 4.25rem;
    transform: rotate(90deg);
    position: relative;
  }

  .left .h {
    font-size: 2.5rem;
    margin-left: 2rem;
  }
}
</style>
