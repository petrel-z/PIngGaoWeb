<script setup>
import hotVideoImg from "@/assets/imgs/_2_informationCenterImgs/hotVideoImg.png";
import MyButton from "@/components/MyButton.vue";
import MyTitle from "@/components/MyTitle.vue";
import httpUtils from "@/utils/httpUtils.js";
import { onMounted, ref } from "vue";

defineOptions({
  name: "NewsCenterIndex4-1",
});
const flag = ref(false);
const items = ref(null);

document.title = "热点视频";
const pageNo = ref(1);
const pageSize = ref(6);
const videoList = ref([]);
const videoSrc = ref("");
const hasMore = ref(true);

async function getData () {
  const queryString = new URLSearchParams({
    pageNo: pageNo.value,
    pageSize: pageSize.value,
  }).toString();

  console.log("获取数据", queryString);
  const response = await httpUtils.get(`/cms/video/list?${queryString.toString()}`);
  const { data } = await response.json();

  if (pageNo.value === 1) {
    videoList.value = [...data.list];
  } else {
    videoList.value = [...videoList.value, ...data.list];
  }

  if (data.list.length < pageSize.value) {
    hasMore.value = false;
  } else {
    pageNo.value = pageNo.value + 1;
  }
}

getData();

function handleClick () {
  if (hasMore.value) {
    getData();
  }
}

function playVideo (item) {
  videoSrc.value = item.videoSrc;
  flag.value = true;
}

onMounted(() => {
  // 获取目标元素容器
  const targetContainer = items.value;
  if (targetContainer) {
    // 监听页面滚动事件
    window.addEventListener("scroll", () => {
      if (!targetContainer) return;
      // 获取元素顶部距离页面顶部的距离
      const elementTop = targetContainer.getBoundingClientRect().top;
      // 获取窗口的高度
      const windowHeight = window.innerHeight;

      // 判断元素是否进入可视区域
      if (elementTop < windowHeight) {
        targetContainer.classList.add("show");
      } else {
        targetContainer.classList.remove("show");
      }
    });
  }
});
</script>

<template>
  <div>
    <div class="bodyBg">
      <div class="bodyBg1"></div>
      <div class="body">
        <div>
          <div style="padding-top: 4rem">
            <MyTitle title="热点视频" english="HOT VIDEOS" />
          </div>
        </div>

        <div class="content" ref="items">
          <div
              v-for="(item, index) in videoList" :key="item.id"
              class="video-box" :class="index % 2 === 0 ? 'right' : 'left'"
          >
            <div class="video-item" @click="playVideo(item)">
              <img class="video-img" :src="hotVideoImg" :alt="item.videoName" />
            </div>
            <div class="video-name">
              <span>{{ item.videoName }}</span>
            </div>
          </div>
        </div>
        <div class="button-container">
          <MyButton v-if="hasMore" @child-button="handleClick" />
          <p v-else style="font-size: 24px;">
            没有更多了
          </p>
        </div>
      </div>
    </div>
    <div v-if="flag" class="video" @click="flag = false">
      <video controls :src="videoSrc" style="width: 80vw; height: 80vh; background-color: #fff" @click.stop />
    </div>
  </div>
</template>

<style scoped>
.body {
  padding: 0 11%;
  height: auto;
  overflow: hidden;
}

.bodyBg {
  width: 100%;
  height: auto;
  position: relative;
  background-size: cover;
  background-image: url("../../../assets/imgs/_2_informationCenterImgs/videosBg.png");
}

.content {
  padding-top: 2%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 3rem;
  height: auto;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}

.video-box {
  text-align: center;
  border-radius: 0.5rem;
  overflow: hidden;
  height: auto;
  transition: all 0.5s ease-in-out;
}

.video-item {
  width: 100%;
  height: 85%;
  border-radius: 0.5rem;
  overflow: hidden;
}

.video-img {
  width: 100%;
  height: auto;
  cursor: pointer;
}

.video-img:hover {
  transform: scale(1.1);
  transition: all 0.5s ease-in-out;
}

.button-container {
  width: 100%;
  height: auto;
  padding: 5% 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-name {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(0, 111, 193);
  line-height: 1.423;
  text-align: center;

  background-color: rgb(215, 244, 255);
  height: 15%;
}

.video {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
}

.show .left {
  left: 0;
}

.show .right {
  right: 0;
}

.left {
  position: relative;
  left: -200%;
  /* top: 0; */
  transition: left 1s ease;
}

.right {
  position: relative;
  right: -200%;
  /* top: 0; */
  transition: right 1s ease;
}

@media (max-width: 768px) {
  .body {
    padding: 0 7%;
  }

  .content {
    grid-template-columns: repeat(1, 1fr);
    gap: 4rem;
  }

  .video-name {
    font-size: 2.5rem;
  }
}

@media (max-width: 480px) {
  .video-name {
    font-size: 3rem;
  }

  .content {
    gap: 5rem;
  }
}
</style>
