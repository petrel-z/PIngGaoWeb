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

  .icon-right {
    font-size: 4.9375rem;
    color: #006fc1;
    margin-left: 0.9375rem;
    position: absolute;
    width: 4.25rem;
    height: 4.25rem;
    margin-top: 2.8125rem;
  }
}


.left .h {
  font-size: 2rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: rgb(0, 111, 193);
}

.right {
  width: 70%;
  margin-left: 1.25rem;
}

@media (min-width: 600px) and (max-width: 800px) {
  .left .h {
    font-size: 1.6rem;
    font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
    color: rgb(0, 111, 193);
  }

  .iconfont {
    font-size: 5rem !important;
  }
}

@media (min-width:2100px) and (max-width: 2300px) {
  .left .h {
    font-size: 1.54rem;
    font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
    color: rgb(0, 111, 193);
  }

  .iconfont {
    font-size: 4.5rem !important;
  }
}

@media (min-width:1100px) and (max-width: 1800px) {
  .left .h {
    font-size: 1.54rem !important;
    font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
    color: rgb(0, 111, 193);
  }

  .iconfont {
    font-size: 4.5rem !important;
  }
}
</style>
