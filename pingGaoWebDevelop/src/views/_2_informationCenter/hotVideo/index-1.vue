<script setup>
defineOptions({
  name: "NewsCenterIndex4-1",
});
import { ref } from "vue";
import MyTitle from "@/components/MyTitle.vue";
import MyButton from "@/components/MyButton.vue";
const flag = ref(false);
</script>

<template>
  <div>
    <div class="bodyBg">
      <div class="bodyBg1"></div>
      <div class="body">
        <div>
          <div style="padding-top: 64px">
            <my-title title="热点视频" English="HOT VIDEOS" />
          </div>
        </div>

        <div class="content">
          <div class="video-box" v-for="i in 6" :key="i">
            <div class="video-item" @click="flag = true">
              <img src="" alt="video图片" />
            </div>
            <div class="video-name">
              <span>视频名称</span>
            </div>
          </div>
        </div>
        <div class="button-container">
          <myButton @childButton="handleClick" />
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
}

.bodyBg {
  width: 100%;
  position: relative;
  background-size: cover;
  background-image: url("../../../assets/imgs/_2_informationCenterImgs/videosBg.png");
}

.content {
  padding-top: 1em;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 35px;
  height: auto;
}

.video-box {
  text-align: center;
  background-color: red;
  border-radius: 10px;
}

.video-item {
  width: 100%;
  height: 426px;
  border-radius: 10px;
}
.button-container {
  width: 100%;
  height: 276px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-name {
  font-size: 26px;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(0, 111, 193);
  line-height: 1.423;
  text-align: center;
  padding: 1em;
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
</style>
