<script setup>
defineOptions({
  name: "PartySpirit",
});
import partyContentBar from "../partyContentBar.vue";
import partyContentDetail from "../partyContentDetail.vue";
</script>

<template>
  <div class="spiritSpan">
    <div class="spirit-top">
      <partyContentBar></partyContentBar>
    </div>
    <div class="footer-line"></div>
    <div class="spirit-content">
      <div class="bg-color"></div>
      <partyContentDetail></partyContentDetail>
      <div class="white-div"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.spiritSpan {
  position: relative;
  // margin-top: 100px;
  .spirit-top {
    // position: absolute;
  }
  height: auto;
  .footer-line {
    width: 100%;
    height: 10px;
    background-image: url("../../../assets/imgs/_3_partyBuildingImgs/t3_p1_line.png");
    background-size: cover;
    background-repeat: repeat;
    // transform: translateY(-3px);
    position: absolute;
    top: -3px;
  }
  .spirit-content {
    position: relative;
    .white-div {
      width: 100%;
      height: auto;
      background-color: #fff; // 白色背景 #fff
    }
    .bg-color {
      width: 100%;
      position: absolute;
      height: 70vh;
      background-color: #f8f1e5;
    }
  }
}
</style>
