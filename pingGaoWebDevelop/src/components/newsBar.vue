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
      <span class="icon iconfont" :style="{ color: props.color }">&#xe62e;</span>
      <span class="icon iconfont" :style="{ color: props.color }">&#xe61a;</span>
      <span class="icon iconfont" :style="{ color: props.color }">&#xe674;</span>
      <span class="icon iconfont" :style="{ color: props.color }">&#xe654;</span>
      <span class="icon iconfont" :style="{ color: props.color }">&#xe655;</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.news-bar {
  display: flex;
  justify-content: space-between;
  height: 6.6rem;
  line-height: 6.6rem;
  border-top: 1px solid;
  border-bottom: 1px solid;

  font-size: 1.6rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular";
  color: rgb(165, 22, 23);
  text-align: justifyLeft;

  .bar-left {
    display: flex;
    justify-content: start;

    .left-browse {
      margin-left: 7.6rem;
    }
  }

  .bar-right {
    display: flex;
    align-items: center;

    .icon {
      margin-left: 1.5rem;
      font-size: 3.5rem;
    }
  }
}
@media (max-width: 1500px) {
  .news-bar {
    height: 5rem;
    line-height: 5rem;
    font-size: 1.2rem;
    .bar-left {
      .left-browse {
        margin-left: 7rem;
      }
    }
  }
}

@media (max-width: 1400px) {
  .news-bar {
    .bar-left {
      .left-browse {
        margin-left: 7rem;
      }
    }
  }
}

@media (max-width: 900px) {
  .news-bar {
    height: 5rem;
    line-height: 5rem;
    font-size: 1.3rem;
    .bar-left {
      .left-browse {
        margin-left: 2rem;
      }
    }
    .bar-right {
      .icon {
        margin-left: 1rem;
        font-size: 2rem;
      }
    }
  }
}
</style>
