<script setup>
import MyTitle from "@/components/MyTitle.vue";
import { ref, nextTick } from "vue";
import httpUtils from "@/utils/httpUtils.js";

const imgRef = ref(null);
const isVisible = ref(null);
// 创建交叉观察器
const createObserver = (refElement, isVisible) => {
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
      threshold: 0,
    },
  );

  if (refElement.value) {
    refElement.value.forEach((el) => {
      observer.observe(el);
    });
  }
};
// 初始化所有的观察器
const initializeObservers = () => {
  createObserver(imgRef, isVisible);
};

const imageList = ref([]);

async function getData () {
  const response = await httpUtils.get("/cms/banner/about/list");
  const { data } = await response.json();
  console.log(data);
  imageList.value = data;
  await nextTick();
  initializeObservers();
}

getData();
</script>

<template>
  <div class="approachPinggao">
    <MyTitle title="走进平高" english="ENTERING PINGGAO"></MyTitle>
    <div class="pics">
      <img v-for="(image,index) in imageList" :key="image.id" :src="image.images" :alt="image.name"
           class="grid_item" ref="imgRef"
           :class="{ 'scale-up': isVisible, ['grid-item'+(index+1)]:true}" />
    </div>
  </div>
</template>

<style scoped>
.approachPinggao {
  position: relative;
  margin: auto;
  width: 100%;
  padding: 4rem 11%;
  border-radius: 1.25rem;
  background-color: #fff;
  z-index: -100;
}

.pics {
  margin-top: 3.75rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3列 */
  gap: 0.625rem;
  grid-template-areas:
    "a b c"
    "d d e"
    "d d f"
    "g h i"
    "j o i"
    "j p q";
}

.grid_item {
  transform: scale(0.5); /* 初始缩小 */
  opacity: 0;
  visibility: hidden;
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.grid_item.scale-up {
  transform: scale(1);
  opacity: 1;
  visibility: visible;
}

/* 正确绑定 grid-area */
.grid-item1 {
  grid-area: a;
}

.grid-item2 {
  grid-area: b;
}

.grid-item3 {
  grid-area: c;
}

.grid-item4 {
  grid-area: d;
}

.grid-item5 {
  grid-area: e;
}

.grid-item6 {
  grid-area: f;
}

.grid-item7 {
  grid-area: g;
}

.grid-item8 {
  grid-area: h;
}

.grid-item9 {
  grid-area: i;
}

.grid-item10 {
  grid-area: j;
}

.grid-item11 {
  grid-area: o;
}

.grid-item12 {
  grid-area: p;
}

.grid-item13 {
  grid-area: q;
}

/* 让图片填满格子 */
.pics img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
}

.footer {
  margin-top: 6.875rem;
  text-align: center;
}

.footer .myButton {
  margin: auto;
}
</style>
