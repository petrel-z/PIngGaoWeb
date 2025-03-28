<script setup>
import peopleBg from "@/assets/imgs/_1_aboutPinggaoImgs/peoplebg.png";
import MyTitle from "@/components/MyTitle.vue";
import httpUtils from "@/utils/httpUtils.js";
import { nextTick, ref, watch } from "vue";

const imgRef = ref(null);
const isVisible = ref(null);

const leaders = ref([]);

async function getData() {
  const response = await httpUtils.get("/cms/leaders/list");
  const { data } = await response.json();
  data.forEach((i) => {
    i.titles = i.title.split("、");
  });
  leaders.value = data;
}

// 创建交叉观察器
function createObserver(refElement, isVisible) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const { intersectionRatio } = entry;
        // 设置触发条件：元素进入视口 50% 以上时触发
        if (intersectionRatio >= 0) {
          isVisible.value = true;
          observer.disconnect(); // 元素可见后停止观察
        }
      });
    },
    {
      root: null, // 使用浏览器视口作为根元素
      rootMargin: "0px", // 无额外的边距
      threshold: 0, // 当元素的 50% 进入视口时触发
    }
  );
  if (refElement.value) {
    refElement.value.forEach((el) => {
      observer.observe(el);
    });
  }
}

getData();

watch(leaders, async () => {
  await nextTick();
  createObserver(imgRef, isVisible);
});
</script>

<template>
  <div class="lesadingMember">
    <MyTitle title="领导成员" english="LENDING MEMBERS" />
    <div class="content1">
      <div
        v-for="leader in leaders"
        ref="imgRef"
        :key="leader.id"
        class="info"
        :class="{ 'scale-up': isVisible }"
      >
        <img :src="leader.images ?? peopleBg" :alt="leader.name" />
        <div class="h">
          {{ leader.name }}
        </div>
        <div class="hr" />
        <div v-for="(title, index) in leader.titles" :key="index" :class="`p${index + 1}`">
          {{ title }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.lesadingMember {
  position: relative;
  margin: auto;
  width: 100%;
  padding: 4rem 11%;
  border-radius: 1.25rem;
  background-color: #f7f8f8;
  z-index: -100;
}

.content1 {
  width: 100%;
  margin-top: 3.125rem;
  grid-gap: 1rem;
}

.content1 .info {
  position: relative;
  background-size: cover;
  margin-bottom: 0.625rem;
  transform: scale(0.5);
  opacity: 0;
  visibility: hidden;
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.content1 .info.scale-up {
  transform: scale(1); /* 放大到原始大小 */
  opacity: 1; /* 可见 */
  visibility: visible; /* 可见 */
}

.content1 .info img {
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
}

.info .h {
  top: 3.625rem;
  left: 4rem;
  position: absolute;
  font-size: 4rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(0, 111, 193);
}

.info .hr {
  width: 40%;
  height: 0.2rem;
  left: 4rem;
  background-color: #4093d1;
  top: 10.3125rem;
  position: absolute;
}

.info .p1 {
  top: 12rem;
  position: absolute;
  left: 4rem;
  font-size: 3rem;
  font-family: "AlibabaPuHuiTi_2_45_Light";
  color: rgb(89, 87, 87);
}

.info .p2 {
  top: 17.375rem;
  position: absolute;
  left: 4rem;
  font-size: 3rem;
  font-family: "AlibabaPuHuiTi_2_45_Light";
  color: rgb(89, 87, 87);
}

.info .p3 {
  top: 22.125rem;
  position: absolute;
  left: 4rem;
  font-size: 3rem;
  font-family: "AlibabaPuHuiTi_2_45_Light";
  color: rgb(89, 87, 87);
}

@media (min-width: 200px) and (max-width: 300px) {
  .content .info {
    width: 33%;
    margin-bottom: 0.625rem;
    transform: scale(0.5);
  }
  .info .h {
    top: 3.625rem;
    left: 4rem;
    font-size: 4rem;
  }

  .info .hr {
    width: 40%;
    height: 0.2rem;
    left: 4rem;
    top: 10.3125rem;
  }

  .info .p1 {
    top: 12rem;
    left: 4rem;
    font-size: 2.7rem;
  }

  .info .p2 {
    top: 17.375rem;
    left: 4rem;
    font-size: 2.7rem;
  }

  .info .p3 {
    top: 22.125rem;
    left: 4rem;
    font-size: 2.7rem;
  }
}
@media (min-width: 300px) and (max-width: 400px) {
  .content .info {
    width: 33%;
    margin-bottom: 0.625rem;
    transform: scale(0.5);
  }
  .info .h {
    top: 3.625rem;
    left: 4rem;
    font-size: 4rem;
  }

  .info .hr {
    width: 40%;
    height: 0.2rem;
    left: 4rem;
    top: 10.3125rem;
  }

  .info .p1 {
    top: 12rem;
    left: 4rem;
    font-size: 2.7rem;
  }

  .info .p2 {
    top: 17.375rem;
    left: 4rem;
    font-size: 2.7rem;
  }

  .info .p3 {
    top: 22.125rem;
    left: 4rem;
    font-size: 2.7rem;
  }
}
@media (min-width: 400px) and (max-width: 500px) {
  .content .info {
    width: 33%;
    margin-bottom: 0.625rem;
    transform: scale(0.5);
  }
  .info .h {
    top: 3.625rem;
    left: 4rem;
    font-size: 4rem;
  }

  .info .hr {
    width: 40%;
    height: 0.2rem;
    left: 4rem;
    top: 10.3125rem;
  }

  .info .p1 {
    top: 12rem;
    left: 4rem;
    font-size: 2.7rem;
  }

  .info .p2 {
    top: 17.375rem;
    left: 4rem;
    font-size: 2.7rem;
  }

  .info .p3 {
    top: 22.125rem;
    left: 4rem;
    font-size: 2.7rem;
  }
}
@media (min-width: 500px) and (max-width: 600px) {
  .content .info {
    width: 33%;
    margin-bottom: 0.625rem;
    transform: scale(0.5);
  }
  .info .h {
    top: 3.625rem;
    left: 3rem;
    font-size: 3rem;
  }

  .info .hr {
    width: 40%;
    height: 0.2rem;
    left: 3rem;
    top: 7.9125rem;
  }

  .info .p1 {
    top: 9rem;
    left: 3rem;
    font-size:2rem;
  }

  .info .p2 {
    top: 11.6rem;
    left: 3rem;
    font-size: 2rem;
  }

  .info .p3 {
    top: 14rem;
    left: 3rem;
    font-size: 2rem;
  }
}

@media (min-width: 600px) and (max-width: 700px) {
  .content .info {
    width: 33%;
    margin-bottom: 0.625rem;
    transform: scale(0.5);
  }
  .info .h {
    top: 3.625rem;
    left: 3rem;
    font-size: 2.6rem;
  }

  .info .hr {
    width: 40%;
    height: 0.2rem;
    left: 3rem;
    top: 7.9125rem;
  }

  .info .p1 {
    top: 9rem;
    left: 3rem;
    font-size: 1.6rem;
  }

  .info .p2 {
    top: 11.6rem;
    left: 3rem;
    font-size: 1.6rem;
  }

  .info .p3 {
    top: 14rem;
    left: 3rem;
    font-size: 1.6rem;
  }
}

@media (min-width: 700px) and (max-width: 800px) {
  .content .info {
    width: 33%;
    margin-bottom: 0.625rem;
    transform: scale(0.5);
  }
  .info .h {
    top: 3.625rem;
    left: 3rem;
    font-size: 2.6rem;
  }

  .info .hr {
    width: 40%;
    height: 0.2rem;
    left: 3rem;
    top: 7.9125rem;
  }

  .info .p1 {
    top: 9rem;
    left: 3rem;
    font-size: 1.6rem;
  }

  .info .p2 {
    top: 11.6rem;
    left: 3rem;
    font-size: 1.6rem;
  }

  .info .p3 {
    top: 14rem;
    left: 3rem;
    font-size: 1.6rem;
  }
}
@media (min-width: 800px) and (max-width: 900px) {
  .content .info {
    width: 33%;
    margin-bottom: 0.625rem;
    transform: scale(0.5);
  }
  .info .h {
    top: 3.625rem;
    left: 3rem;
    font-size: 2.6rem;
  }

  .info .hr {
    width: 40%;
    height: 0.2rem;
    left: 3rem;
    top: 7.9125rem;
  }

  .info .p1 {
    top: 9rem;
    left: 3rem;
    font-size: 1.6rem;
  }

  .info .p2 {
    top: 11.6rem;
    left: 3rem;
    font-size: 1.6rem;
  }

  .info .p3 {
    top: 14rem;
    left: 3rem;
    font-size: 1.6rem;
  }
}
@media (min-width: 900px) and (max-width: 1000px) {
  .content .info {
    width: 33%;
    margin-bottom: 0.625rem;
    transform: scale(0.5);
  }
  .info .h {
    top: 3.625rem;
    left: 4rem;
    font-size: 4rem;
  }

  .info .hr {
    width: 40%;
    height: 0.2rem;
    left: 4rem;
    top: 10.3125rem;
  }

  .info .p1 {
    top: 12rem;
    left: 4rem;
    font-size: 3rem;
  }

  .info .p2 {
    top: 17.375rem;
    left: 4rem;
    font-size: 3rem;
  }

  .info .p3 {
    top: 22.125rem;
    left: 4rem;
    font-size: 3rem;
  }
}
@media (min-width: 1000px) and (max-width: 1200px) {
  .content .info {
    position: relative;
    width: 33%;
    height: 100%;
    background-size: cover;
    margin-bottom: 0.625rem;
    transform: scale(0.5);
  }
  .info .h {
    top: 3.625rem;
    left: 4rem;
    position: absolute;
    font-size: 4rem;
    font-family: "AlibabaPuHuiTi_2_65_Medium";
    color: rgb(0, 111, 193);
  }

  .info .hr {
    width: 40%;
    height: 0.2rem;
    left: 4rem;
    background-color: #4093d1;
    top: 10.3125rem;
    position: absolute;
  }

  .info .p1 {
    top: 12rem;
    position: absolute;
    left: 4rem;
    font-size: 3.4rem;
    font-family: "AlibabaPuHuiTi_2_45_Light";
    color: rgb(89, 87, 87);
  }

  .info .p2 {
    top: 17.375rem;
    position: absolute;
    left: 4rem;
    font-size: 3.4rem;
    font-family: "AlibabaPuHuiTi_2_45_Light";
    color: rgb(89, 87, 87);
  }

  .info .p3 {
    top: 22.125rem;
    position: absolute;
    left: 4rem;
    font-size: 3.4rem;
    font-family: "AlibabaPuHuiTi_2_45_Light";
    color: rgb(89, 87, 87);
  }
}
@media (min-width: 1200px) and (max-width: 1400px) {
  .content .info {
    position: relative;
    width: 33%;
    height: 100%;
    background-size: cover;
    margin-bottom: 0.625rem;
    transform: scale(0.5);
  }
  .info .h {
    top: 3.625rem;
    left: 4rem;
    position: absolute;
    font-size: 4rem;
    font-family: "AlibabaPuHuiTi_2_65_Medium";
    color: rgb(0, 111, 193);
  }

  .info .hr {
    width: 40%;
    height: 0.2rem;
    left: 4rem;
    background-color: #4093d1;
    top: 10.3125rem;
    position: absolute;
  }

  .info .p1 {
    top: 12rem;
    position: absolute;
    left: 4rem;
    font-size: 2.6rem;
    font-family: "AlibabaPuHuiTi_2_45_Light";
    color: rgb(89, 87, 87);
  }

  .info .p2 {
    top: 16.375rem;
    position: absolute;
    left: 4rem;
    font-size: 2.6rem;
    font-family: "AlibabaPuHuiTi_2_45_Light";
    color: rgb(89, 87, 87);
  }

  .info .p3 {
    top: 20.125rem;
    position: absolute;
    left: 4rem;
    font-size: 2.6rem;
    font-family: "AlibabaPuHuiTi_2_45_Light";
    color: rgb(89, 87, 87);
  }
}
@media (min-width: 1400px) and (max-width: 1500px) {
  .content .info {
    position: relative;
    width: 33%;
    height: 100%;
    background-size: cover;
    margin-bottom: 0.625rem;
    transform: scale(0.5);
  }
  .info .h {
    top: 3.625rem;
    left: 4rem;
    position: absolute;
    font-size: 4rem;
    font-family: "AlibabaPuHuiTi_2_65_Medium";
    color: rgb(0, 111, 193);
  }

  .info .hr {
    width: 40%;
    height: 0.2rem;
    left: 4rem;
    background-color: #4093d1;
    top: 10.3125rem;
    position: absolute;
  }

  .info .p1 {
    top: 12rem;
    position: absolute;
    left: 4rem;
    font-size: 2.6rem;
    font-family: "AlibabaPuHuiTi_2_45_Light";
    color: rgb(89, 87, 87);
  }

  .info .p2 {
    top: 16.375rem;
    position: absolute;
    left: 4rem;
    font-size: 2.6rem;
    font-family: "AlibabaPuHuiTi_2_45_Light";
    color: rgb(89, 87, 87);
  }

  .info .p3 {
    top: 20.125rem;
    position: absolute;
    left: 4rem;
    font-size: 2.6rem;
    font-family: "AlibabaPuHuiTi_2_45_Light";
    color: rgb(89, 87, 87);
  }
}
@media (min-width: 2100px) and (max-width: 2300px) {
  .content .info {
    position: relative;
    width: 33%;
    height: 100%;
    background-size: cover;
    margin-bottom: 0.625rem;
    transform: scale(0.5);
  }
  .info .h {
    top: 3.625rem;
    left: 4rem;
    position: absolute;
    font-size: 4rem;
    font-family: "AlibabaPuHuiTi_2_65_Medium";
    color: rgb(0, 111, 193);
  }

  .info .hr {
    width: 40%;
    height: 0.2rem;
    left: 4rem;
    background-color: #4093d1;
    top: 10.3125rem;
    position: absolute;
  }

  .info .p1 {
    top: 12rem;
    position: absolute;
    left: 4rem;
    font-size: 3rem;
    font-family: "AlibabaPuHuiTi_2_45_Light";
    color: rgb(89, 87, 87);
  }

  .info .p2 {
    top: 17.375rem;
    position: absolute;
    left: 4rem;
    font-size: 3rem;
    font-family: "AlibabaPuHuiTi_2_45_Light";
    color: rgb(89, 87, 87);
  }

  .info .p3 {
    top: 22.125rem;
    position: absolute;
    left: 4rem;
    font-size: 3rem;
    font-family: "AlibabaPuHuiTi_2_45_Light";
    color: rgb(89, 87, 87);
  }
}
</style>
