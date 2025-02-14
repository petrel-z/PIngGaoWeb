<script setup>
defineOptions({
  name: "NewsBar",
});
const props = defineProps({
  color: {
    type: String,
    default: "#ab2526",
    required: true,
  },
  time: {
    type: String,
    required: true,
    default: "2022-01-01",
  },
  browse: {
    type: Number,
    required: true,
    default: 0,
  },
});
</script>

<template>
  <div class="news-bar" :style="{ borderTopColor: props.color, borderBottomColor: props.color }">
    <div class="bar-left" :style="{ color: props.color }">
      <div class="left-time">发布时间：{{ props.time }}</div>
      <div class="left-browse">浏览：{{ props.browse }} 次</div>
    </div>
    <div class="bar-right" :style="{ color: props.color }">
      <span>分享:</span>
      <div class="icon-box">
        <span class="icon iconfont" :style="{ color: props.color }">&#xe62e;</span>
        <span class="icon iconfont" :style="{ color: props.color }">&#xe61a;</span>
        <span class="icon iconfont" :style="{ color: props.color }">&#xe674;</span>
        <span class="icon iconfont" :style="{ color: props.color }">&#xe654;</span>
        <span class="icon iconfont" :style="{ color: props.color }">&#xe655;</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import "@/assets/iconfont/icons/iconfont.css";
@font-face {
  font-family: "iconfont";
  src: url("iconfont.ttf?t=1738824929065") format("truetype");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 45px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.news-bar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
  line-height: 72px;
  border-top: 1px solid;
  border-bottom: 1px solid;

  font-size: 24px;
  font-family: "AlibabaPuHuiTi_2_55_Regular";
  color: rgb(165, 22, 23);
  text-align: left;

  .bar-left {
    display: flex;
    justify-content: start;
    align-items: center;
    white-space: nowrap;

    width: 50%;
    .left-time {
      width: 50%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .left-browse {
      width: 40%;
      margin-left: 10%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .bar-right {
    display: flex;
    align-items: center;
    justify-content: end;
    white-space: nowrap;
    width: 50%;
    overflow: hidden;
    text-overflow: ellipsis;
    .icon {
      margin-left: 19px;
    }
    .icon-box {
      width: 60%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    span:nth-of-type(1) {
      width: 20%;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
