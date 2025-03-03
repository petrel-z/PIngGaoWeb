<script setup>
import HttpUtils from "@/utils/httpUtils.js";
import { nextTick, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const isVisibleWordLeft = ref(false);
const isVisibleWordRight = ref(false);
const wordLeftRef = ref(null);
const wordRightRef = ref(null);
const imgRef = ref(null);
const isVisibleImg = ref(false);
const wordTopRef = ref(null);
const isVisibleWordTop = ref(false);
const parameterRef = ref(null);
const isVisibleParameter = ref(false);

const router = useRouter();

// 创建交叉观察器
function createObserver (refElement, isVisible) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const { intersectionRatio } = entry;
        if (intersectionRatio >= 0.0001) {
          isVisible.value = true;
          observer.disconnect();
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    }
  );
  if (refElement.value) {
    observer.observe(refElement.value);
  }
}

// 初始化所有的观察器
function initializeObservers () {
  createObserver(wordLeftRef, isVisibleWordLeft);
  createObserver(wordRightRef, isVisibleWordRight);
  createObserver(imgRef, isVisibleImg);
  createObserver(wordTopRef, isVisibleWordTop);
  createObserver(parameterRef, isVisibleParameter);
}

const data = ref("");
const newsId = useRoute().params.id;

// 格式化时间戳为 YYYY-MM-DD 格式
function formatTimestamp (timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

async function getData () {
  const res = await HttpUtils.get(`/cms/news/detail?newsId=${newsId}`);
  const result = await res.json();
  // 格式化发布时间
  if (result?.data?.data?.publishTime) {
    result.data.data.publishTime = formatTimestamp(result.data.data.publishTime);
  }

  console.log(result.data.data.publishTime);
  data.value = result.data;
  document.title = data.value.data.title;

  console.log(data.value);

  await nextTick();

  initializeObservers();
}

getData();
</script>

<template>
  <div class="productSeriesDetail">
    <div v-if="data" class="detail_page">
      <div class="header">
        <div class="detail_title">
          <div class="img">
            <img src="@/assets/imgs/_4_productEngineeringImgs/dot.png" alt="">
          </div>
          <div class="title">
            {{ data.data.description }}
          </div>
        </div>
        <div class="detail_text">
          <div ref="wordLeftRef" class="text" :class="{ 'move-left': isVisibleWordLeft }">
            {{ data.data.title }}
          </div>
          <div ref="wordRightRef" class="button" :class="{ 'move-right': isVisibleWordRight }">
            <div
              class="p"
              @click="router.push('/productEngineering/productSeries')"
              @mousedown="console.log(111)">
              返回上一级
            </div>
          </div>
        </div>
        <div class="long_line"></div>
      </div>
      <div class="product_img">
        <img
          ref="imgRef"
          :class="{ 'scale-up': isVisibleImg }"
          :src="data.data.headerImage"
          alt=""
        />
      </div>
      <div class="special">
        <div class="special_header">
          <div class="h">技术特点</div>
        </div>
        <div
          ref="wordTopRef" class="special_word" :class="{ 'move-top': isVisibleWordTop }"
          v-html="data.data.content"
        ></div>
      </div>
      <div v-if="false" class="main_parameter">
        <div class="special_header">
          <div class="h">主要技术参数</div>
        </div>
        <div class="parameter_img">
          <img src="@/assets/imgs/_4_productEngineeringImgs/parameter.png" alt=""  ref="parameterRef"
          :class="{ 'scale-up': isVisibleParameter}"/>
        </div>
      </div>
    </div>
    <div class="footer_img">
      <img src="@/assets/imgs/_4_productEngineeringImgs/product-footer.png" alt="" />
    </div>
  </div>
</template>

<style scoped>
.productSeriesDetail {
  position: relative;
  margin: auto;
  width: 100%;
  padding: 0rem 13.125rem;
  border-radius: 1.25rem;
  background-color: #fff;
}

.detail_page {
  padding: 0rem 6.25rem;
  width: 100%;
  height: 125.625rem;
  padding-top: 5rem;
  background-color: #fff;
  z-index: 100;
}

.detail_page .header {
  width: 100%;
}

.detail_title {
  position: relative;
  height: 1.875rem;
  display: flex;
  margin-bottom: 1.875rem;
  width: 100%;
}

.detail_title .title {
  font-size: 2.1875rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: rgb(35, 24, 21);
  line-height: 1.875rem;
  margin-left: 0.3125rem;
}

.detail_title img {
  width: 2.2rem;
  margin-bottom: 2rem;
}

.detail_text {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 3.375rem;
  margin-bottom: 1.4375rem;
  z-index: 100;
}

.detail_text .text {
  font-size: 2.1875rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: rgb(0, 55, 146);
  transform: translateX(-100%); /* 初始位置在左边 */
  visibility: hidden;
  transition: transform 1s ease, opacity 0.5s ease; /* 过渡效果 */
}

.detail_text .text.move-left {
  opacity: 1;
  transform: translateX(0);
  visibility: visible;
}

.detail_text .button {
  width: 11.625rem;
  height: 3.375rem;
  background-color: #45b3e0;
  border-radius: 1.6875rem;
  cursor: pointer;
  transform: translateX(100%); /* 初始位置在左边 */
  visibility: hidden;
  transition: transform 1s ease, opacity 0.5s ease; /* 过渡效果 */
}

.detail_text .button.move-right {
  opacity: 1;
  transform: translateX(0);
  visibility: visible;
}

.detail_text .button .p {
  font-size: 1.3262rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular", sans-serif;
  color: rgb(255, 255, 255);
  text-align: center;
  line-height: 3.375rem;
  z-index: 1000;
}

.long_line {
  width: 100%;
  height: 0.25rem;
  background-color: #003792;
  margin-bottom: 3.75rem;
}

.product_img {
  width: 47.5rem;
  height: 29.625rem;
  margin: auto;
  margin-bottom: 3.125rem;
}

.product_img img {
  width: 47.5rem;
  height: 29.625rem;
  transform: scale(0.3); /* 初始缩小 */
  opacity: 0; /* 初始不可见 */
  visibility: hidden; /* 初始隐藏 */
  transition: transform 0.5s ease, opacity 0.5s ease; /* 过渡效果 */
}

.product_img img.scale-up {
  transform: scale(1); /* 放大到原始大小 */
  opacity: 1; /* 可见 */
  visibility: visible; /* 可见 */
}

.special {
  width: 100%;
  height: 23.75rem;
  margin-bottom: 3.375rem;
}

.special_header {
  width: 100%;
  height: 3.75rem;
  border-radius: 0.5rem;
  background-color: #006fc1;
  margin-bottom: 1.875rem;
  text-align: center;
}

.special_header .h {
  font-size: 1.5rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: rgb(255, 255, 255);
  line-height: 3.75rem;
}

.special .special_word {
  font-size: 16px;
  overflow: hidden;
  /* height: 100%;*/
}

.special_word_move {
  width: 100%;
  height: 100%;
}

.special_word .introduction.move-top {
  opacity: 1;
  transform: translateY(0%);
  visibility: visible;
}

.special_word .introduction {
  font-size: 1.25rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular", sans-serif;
  color: rgb(89, 87, 87);
  line-height: 1.498;
  transform: translateY(100%); /* 初始位置在下方 */
  visibility: hidden;
  opacity: 0; /* 初始透明度为 0 */
  transition: transform 0.5s ease, opacity 0.5s ease; /* 过渡效果 */
}

.parameter_img {
  width: 45.8125rem;
  height: 37.5rem;
  margin: auto;
}

.parameter_img img {
  width: 45.8125rem;
  height: 37.5rem;
  transform: scale(0.3); /* 初始缩小 */
  opacity: 0; /* 初始不可见 */
  visibility: hidden; /* 初始隐藏 */
  transition: transform 0.5s ease, opacity 0.5s ease; /* 过渡效果 */
}

.parameter_img img.scale-up {
  transform: scale(1); /* 放大到原始大小 */
  opacity: 1; /* 可见 */
  visibility: visible; /* 可见 */
}

.footer_img {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 120rem;
  height: 156.25rem;
  z-index: -10;
}

.footer_img img {
  width: 119.75rem;
}
</style>
