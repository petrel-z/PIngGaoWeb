<script setup>
import peopleBg from "@/assets/imgs/_1_aboutPinggaoImgs/peoplebg.png";
import MyTitle from "@/components/MyTitle.vue";
import httpUtils from "@/utils/httpUtils.js";
import { nextTick, ref, watch, onMounted } from "vue";
import { useRouter } from 'vue-router';
const router = useRouter();

const redirectToMobileVersion = () => {
  try {
    const isMobile = window.matchMedia('(max-device-width: 900px)').matches;

    // 避免重复跳转
    const currentPath = router.currentRoute.value.path;
    const targetPath = isMobile
      ? '/aboutPinggao/lesadingMember2'
      : '/aboutPinggao/lesadingMember1';

    if (currentPath !== targetPath) {
      router.push(targetPath);
    }
  } catch (error) {
    console.error('路由跳转失败:', error);
    // 可添加回退方案
    router.push('/error-page');
  }
};
onMounted(() => {
  // 确保只在客户端执行
  if (typeof window !== 'undefined') {
    redirectToMobileVersion();
  }
});
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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

.content2 {
  width: 100%;
  margin-top: 3.125rem;
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;
}

.content2 .info {
  position: relative;
  width: 31%;
  height: 100%;
  background-size: cover;
  margin-bottom: 0.625rem;
  transform: scale(0.5); /* 初始缩小 */
  opacity: 0; /* 初始不可见 */
  visibility: hidden; /* 初始隐藏 */
  transition: transform 0.5s ease, opacity 0.5s ease; /* 过渡效果 */
  margin-right: 2rem;
}

.content2 .info.scale-up {
  transform: scale(1); /* 放大到原始大小 */
  opacity: 1; /* 可见 */
  visibility: visible; /* 可见 */
}

.content2 .info img {
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
}

.info .h {
  top: 2.625rem;
  left: 2rem;
  position: absolute;
  font-size: 1.6125rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: rgb(0, 111, 193);
}

.info .hr {
  width: 40%;
  height: 0.0625rem;
  left: 2rem;
  background-color: #4093d1;
  top: 5.3125rem;
  position: absolute;
}

.info .p1 {
  top: 5.5rem;
  position: absolute;
  left: 2rem;
  font-size: 1.05rem;
  font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
  color: rgb(89, 87, 87);
}

.info .p2 {
  top: 7.375rem;
  position: absolute;
  left: 2rem;
  font-size: 1.05rem;
  font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
  color: rgb(89, 87, 87);
}

.info .p3 {
  top: 9.125rem;
  position: absolute;
  left: 2rem;
  font-size: 1.05rem;
  font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
  color: rgb(89, 87, 87);
}

@media (min-width: 200px) and (max-width: 300px) {
  .content1 .info {
    position: relative;
    background-size: cover;
    margin-bottom: 0.625rem;
    transform: scale(0.5);
    opacity: 0;
    visibility: hidden;
    transition: transform 0.5s ease, opacity 0.5s ease;
  }
  .content1 .info img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .info .h {
    top: 2.625rem;
    left: 2rem;
    position: absolute;
    font-size: 1.6125rem;
    font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
    color: rgb(0, 111, 193);
  }

  .info .hr {
    width: 40%;
    height: 0.027rem !important;
    left: 2rem;
    background-color: #4093d1;
    top: 5.3125rem;
    position: absolute;
  }

  .info .p1 {
    top: 5.5rem;
    position: absolute;
    left: 2rem;
    font-size: 0.9rem;
    font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
    color: rgb(89, 87, 87);
  }

  .info .p2 {
    top: 6.9rem;
    position: absolute;
    left: 2rem;
    font-size: 0.9rem;
    font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
    color: rgb(89, 87, 87);
  }

  .info .p3 {
    top: 8.3rem;
    position: absolute;
    left: 2rem;
    font-size: 0.9rem;
    font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
    color: rgb(89, 87, 87);
  }
}
@media (min-width: 300px) and (max-width: 400px) {
  .content1 .info {
    position: relative;
    background-size: cover;
    margin-bottom: 0.625rem;
    transform: scale(0.5);
    opacity: 0;
    visibility: hidden;
    transition: transform 0.5s ease, opacity 0.5s ease;
  }
  .content1 .info img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .info .h {
    top: 2.625rem;
    left: 2rem;
    position: absolute;
    font-size: 1.6125rem;
    font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
    color: rgb(0, 111, 193);
  }

  .info .hr {
    width: 40%;
    height: 0.027rem !important;
    left: 2rem;
    background-color: #4093d1;
    top: 5.3125rem;
    position: absolute;
  }

  .info .p1 {
    top: 5.5rem;
    position: absolute;
    left: 2rem;
    font-size: 0.8rem;
    font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
    color: rgb(89, 87, 87);
  }

  .info .p2 {
    top: 6.7rem;
    position: absolute;
    left: 2rem;
    font-size: 0.8rem;
    font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
    color: rgb(89, 87, 87);
  }

  .info .p3 {
    top: 8.1rem;
    position: absolute;
    left: 2rem;
    font-size: 0.8rem;
    font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
    color: rgb(89, 87, 87);
  }
}
@media (min-width: 400px) and (max-width: 500px) {
  .content1 .info {
    position: relative;
    background-size: cover;
    margin-bottom: 0.625rem;
    transform: scale(0.5);
    opacity: 0;
    visibility: hidden;
    transition: transform 0.5s ease, opacity 0.5s ease;
  }
  .content1 .info img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .info .h {
    top: 2.625rem;
    left: 2rem;
    position: absolute;
    font-size: 1.6125rem;
    font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
    color: rgb(0, 111, 193);
  }

  .info .hr {
    width: 40%;
    height: 0.0625rem;
    left: 2rem;
    background-color: #4093d1;
    top: 5.3125rem;
    position: absolute;
  }

  .info .p1 {
    top: 5.5rem;
    position: absolute;
    left: 2rem;
    font-size: 0.85rem;
    font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
    color: rgb(89, 87, 87);
  }

  .info .p2 {
    top: 6.9rem;
    position: absolute;
    left: 2rem;
    font-size: 0.85rem;
    font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
    color: rgb(89, 87, 87);
  }

  .info .p3 {
    top: 8.3rem;
    position: absolute;
    left: 2rem;
    font-size: 0.85rem;
    font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
    color: rgb(89, 87, 87);
  }
}
@media (min-width: 500px) and (max-width: 600px) {
  .content1 .info {
    position: relative;
    background-size: cover;
    margin-bottom: 0.625rem;
    transform: scale(0.5);
    opacity: 0;
    visibility: hidden;
    transition: transform 0.5s ease, opacity 0.5s ease;
  }
  .content1 .info img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .info .h {
    top: 2.225rem;
    left: 1.5rem;
    position: absolute;
    font-size: 1.4125rem;
    font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
    color: rgb(0, 111, 193);
  }

  .info .hr {
    width: 40%;
    height: 0.0625rem;
    left: 1.5rem;
    background-color: #4093d1;
    top: 4.6125rem;
    position: absolute;
  }

  .info .p1 {
    top: 4.9rem;
    position: absolute;
    left: 1.5rem;
    font-size: 0.7rem;
    font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
    color: rgb(89, 87, 87);
  }

  .info .p2 {
    top: 6rem;
    position: absolute;
    left: 1.5rem;
    font-size: 0.7rem;
    font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
    color: rgb(89, 87, 87);
  }

  .info .p3 {
    top: 7rem;
    position: absolute;
    left: 1.5rem;
    font-size: 0.7rem;
    font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
    color: rgb(89, 87, 87);
  }
}

@media (min-width: 600px) and (max-width: 700px) {
  .content1 .info {
    position: relative;
    background-size: cover;
    margin-bottom: 0.625rem;
    transform: scale(0.5);
    opacity: 0;
    visibility: hidden;
    transition: transform 0.5s ease, opacity 0.5s ease;
  }
  .content1 .info img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .info .h {
    top: 2.225rem;
    left: 1.5rem;
    position: absolute;
    font-size: 1.3125rem;
    font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
    color: rgb(0, 111, 193);
  }

  .info .hr {
    width: 40%;
    height: 0.0625rem;
    left: 1.5rem;
    background-color: #4093d1;
    top: 4.3125rem;
    position: absolute;
  }

  .info .p1 {
    top: 4.5rem;
    position: absolute;
    left: 1.5rem;
    font-size: 0.63rem;
    font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
    color: rgb(89, 87, 87);
  }

  .info .p2 {
    top: 5.5rem;
    position: absolute;
    left: 1.5rem;
    font-size: 0.63rem;
    font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
    color: rgb(89, 87, 87);
  }

  .info .p3 {
    top: 6.5rem;
    position: absolute;
    left: 1.5rem;
    font-size: 0.63rem;
    font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
    color: rgb(89, 87, 87);
  }
}

@media (min-width: 700px) and (max-width: 800px) {
  .content1 .info {
    position: relative;
    background-size: cover;
    margin-bottom: 0.625rem;
    transform: scale(0.5);
    opacity: 0;
    visibility: hidden;
    transition: transform 0.5s ease, opacity 0.5s ease;
  }
  .content1 .info img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .info .h {
    top: 2.825rem;
    left: 2rem;
    position: absolute;
    font-size: 1.6125rem;
    font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
    color: rgb(0, 111, 193);
  }

  .info .hr {
    width: 40%;
    height: 0.0625rem;
    left: 2rem;
    background-color: #4093d1;
    top: 5.3125rem;
    position: absolute;
  }

  .info .p1 {
    top: 5.5rem;
    position: absolute;
    left: 2rem;
    font-size: 0.64rem;
    font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
    color: rgb(89, 87, 87);
  }

  .info .p2 {
    top: 6.4rem;
    position: absolute;
    left: 2rem;
    font-size: 0.65rem;
    font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
    color: rgb(89, 87, 87);
  }

  .info .p3 {
    top: 7.425rem;
    position: absolute;
    left: 2rem;
    font-size: 0.64rem;
    font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
    color: rgb(89, 87, 87);
  }
}

@media (min-width: 800px) and (max-width: 900px) {
  .content .info {
    position: relative;
    width: 33%;
    height: 100%;
    background-size: cover;
    margin-bottom: 0.625rem;
    transform: scale(0.5); /* 初始缩小 */
    opacity: 0; /* 初始不可见 */
    visibility: hidden; /* 初始隐藏 */
    transition: transform 0.5s ease, opacity 0.5s ease; /* 过渡效果 */
  }

  .content .info img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .info .h {
    top: 1.8rem !important;
    left: 1.5rem;
    position: absolute;
    font-size: 1rem !important;
    font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
    color: rgb(0, 111, 193);
  }

  .info .hr {
    width: 40%;
    height: 0.0625rem;
    left: 1.5rem;
    background-color: #4093d1;
    top: 3.4rem;
    position: absolute;
  }

  .info .p1 {
    top: 3.5rem;
    position: absolute;
    left: 1.5rem;
    font-size: 0.55rem;
    font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
    color: rgb(89, 87, 87);
  }

  .info .p2 {
    top: 4.4rem;
    position: absolute;
    left: 1.5rem;
    font-size: 0.55rem;
    font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
    color: rgb(89, 87, 87);
  }

  .info .p3 {
    top: 5.325rem;
    position: absolute;
    left: 1.5rem;
    font-size: 0.55rem;
    font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
    color: rgb(89, 87, 87);
  }
}
@media (min-width: 900px) and (max-width: 1000px) {
  .content1 .info {
    position: relative;
    background-size: cover;
    margin-bottom: 0.625rem;
    transform: scale(0.5);
    opacity: 0;
    visibility: hidden;
    transition: transform 0.5s ease, opacity 0.5s ease;
  }
  .content1 .info img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .info .h {
    top: 2.625rem;
    left: 2rem;
    position: absolute;
    font-size: 1.6125rem;
    font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
    color: rgb(0, 111, 193);
  }

  .info .hr {
    width: 40%;
    height: 0.0625rem;
    left: 2rem;
    background-color: #4093d1;
    top: 5.3125rem;
    position: absolute;
  }

  .info .p1 {
    top: 5.5rem;
    position: absolute;
    left: 2rem;
    font-size: 1rem;
    font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
    color: rgb(89, 87, 87);
  }

  .info .p2 {
    top: 6.8rem;
    position: absolute;
    left: 2rem;
    font-size: 1rem;
    font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
    color: rgb(89, 87, 87);
  }

  .info .p3 {
    top: 8rem;
    position: absolute;
    left: 2rem;
    font-size: 1rem;
    font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
    color: rgb(89, 87, 87);
  }
}

@media (min-width: 1000px) and (max-width: 1200px) {
  .content1 .info {
    position: relative;
    background-size: cover;
    margin-bottom: 0.625rem;
    transform: scale(0.5);
    opacity: 0;
    visibility: hidden;
    transition: transform 0.5s ease, opacity 0.5s ease;
  }
  .content1 .info img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .info .h {
    top: 2.625rem;
    left: 2rem;
    position: absolute;
    font-size: 1.6125rem;
    font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
    color: rgb(0, 111, 193);
  }

  .info .hr {
    width: 40%;
    height: 0.0625rem;
    left: 2rem;
    background-color: #4093d1;
    top: 5.3125rem;
    position: absolute;
  }

  .info .p1 {
    top: 5.5rem;
    position: absolute;
    left: 2rem;
    font-size: 1.1rem;
    font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
    color: rgb(89, 87, 87);
  }

  .info .p2 {
    top: 7.3rem;
    position: absolute;
    left: 2rem;
    font-size: 1.1rem;
    font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
    color: rgb(89, 87, 87);
  }

  .info .p3 {
    top: 9rem;
    position: absolute;
    left: 2rem;
    font-size: 1.1rem;
    font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
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
    transform: scale(0.5); /* 初始缩小 */
    opacity: 0; /* 初始不可见 */
    visibility: hidden; /* 初始隐藏 */
    transition: transform 0.5s ease, opacity 0.5s ease; /* 过渡效果 */
  }

  .content .info img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .info .h {
    top: 2.625rem;
    left: 2rem;
    position: absolute;
    font-size: 1.7125rem !important;
    font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
    color: rgb(0, 111, 193);
  }

  .info .hr {
    width: 40%;
    height: 0.06rem;
    left: 2rem;
    background-color: #4093d1;
    top: 5.3125rem;
    position: absolute;
  }

  .info .p1 {
    top: 5.5rem;
    position: absolute;
    left: 2rem;
    font-size: 0.9rem;
    font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
    color: rgb(89, 87, 87);
  }

  .info .p2 {
    top: 6.8rem;
    position: absolute;
    left: 2rem;
    font-size: 0.9rem;
    font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
    color: rgb(89, 87, 87);
  }

  .info .p3 {
    top: 8.125rem;
    position: absolute;
    left: 2rem;
    font-size: 0.9rem;
    font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
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
    transform: scale(0.5); /* 初始缩小 */
    opacity: 0; /* 初始不可见 */
    visibility: hidden; /* 初始隐藏 */
    transition: transform 0.5s ease, opacity 0.5s ease; /* 过渡效果 */
  }

  .content .info img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .info .h {
    top: 2.625rem;
    left: 2rem;
    position: absolute;
    font-size: 1.7125rem !important;
    font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
    color: rgb(0, 111, 193);
  }

  .info .hr {
    width: 40%;
    height: 0.06rem;
    left: 2rem;
    background-color: #4093d1;
    top: 5.3125rem;
    position: absolute;
  }

  .info .p1 {
    top: 5.5rem;
    position: absolute;
    left: 2rem;
    font-size: 0.9rem;
    font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
    color: rgb(89, 87, 87);
  }

  .info .p2 {
    top: 6.8rem;
    position: absolute;
    left: 2rem;
    font-size: 0.9rem;
    font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
    color: rgb(89, 87, 87);
  }

  .info .p3 {
    top: 8.125rem;
    position: absolute;
    left: 2rem;
    font-size: 0.9rem;
    font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
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
    transform: scale(0.5); /* 初始缩小 */
    opacity: 0; /* 初始不可见 */
    visibility: hidden; /* 初始隐藏 */
    transition: transform 0.5s ease, opacity 0.5s ease; /* 过渡效果 */
  }

  .content .info img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .info .h {
    top: 2.625rem;
    left: 2rem;
    position: absolute;
    font-size: 1.6125rem !important;
    font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
    color: rgb(0, 111, 193);
  }

  .info .hr {
    width: 40%;
    height: 0.0625rem;
    left: 2rem;
    background-color: #4093d1;
    top: 5.3125rem;
    position: absolute;
  }

  .info .p1 {
    top: 5.5rem;
    position: absolute;
    left: 2rem;
    font-size: 1rem;
    font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
    color: rgb(89, 87, 87);
  }

  .info .p2 {
    top: 6.8rem;
    position: absolute;
    left: 2rem;
    font-size: 1rem;
    font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
    color: rgb(89, 87, 87);
  }

  .info .p3 {
    top: 8.125rem;
    position: absolute;
    left: 2rem;
    font-size: 1rem;
    font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
    color: rgb(89, 87, 87);
  }
}
</style>
