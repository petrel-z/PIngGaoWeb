<script setup>
defineOptions({
  name: "NewsCenterIndex4-1",
});
import { ref, onMounted } from "vue";
import MyTitle from "@/components/MyTitle.vue";
import MyButton from "@/components/MyButton.vue";
import hotVideoImg from "@/assets/imgs/_2_informationCenterImgs/hotVideoImg.png";
const flag = ref(false);

const videos = ref([
  { videoUrl: hotVideoImg, videoName: "视频名称" },
  { videoUrl: hotVideoImg, videoName: "视频名称" },
  { videoUrl: hotVideoImg, videoName: "视频名称" },
  { videoUrl: hotVideoImg, videoName: "视频名称" },
  { videoUrl: hotVideoImg, videoName: "视频名称" },
  { videoUrl: hotVideoImg, videoName: "视频名称" },
]);
let text = ref("加载更多");
function addVideos() {
  if (videos.value.length >= 18) {
    return;
  }
  for (let i = 0; i < 6; i++) {
    videos.value.push({ videoUrl: hotVideoImg, videoName: "视频名称" });
  }
  if (videos.value.length >= 18) {
    text.value = "没有更多了";
  }
}

const items = ref(null);
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
            <my-title title="热点视频" english="HOT VIDEOS" />
          </div>
        </div>

        <div class="content" ref="items">
          <div
            class="video-box"
            v-for="(i, index) in videos"
            :class="(index + 1) % 2 == 0 ? 'right' : 'left'"
            :key="i"
          >
            <div class="video-item" @click="flag = true">
              <img class="video-img" :src="i.videoUrl" alt="video图片" />
            </div>
            <div class="video-name">
              <span>{{ i.videoName }}</span>
            </div>
          </div>
        </div>
        <div class="button-container">
          <myButton :text="text" @click="addVideos" />
        </div>
      </div>
    </div>
    <div v-if="flag" class="video" @click="flag = false">
      <video @click.stop src="" style="width: 80vw; height: 80vh; background-color: #fff"></video>
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
