<script setup>
import MyTitle from "@/components/MyTitle.vue";
import httpUtils from "@/utils/httpUtils.js";
import { onMounted, ref, watch } from "vue";
import router from "@/router/index.js";

const boxRef = ref(null);
const isVisibleBox = ref(false);
const infoRef = ref(null);
const isVisibleInfo = ref(true);

const categoryList = ref([]);
const categoryItems = ref([]);

// 处理 imgs 数组中的路径
const imgs = ref(
  [
    new URL("@/assets/imgs/_4_productEngineeringImgs/product-1.png", import.meta.url).href,
    new URL("@/assets/imgs/_4_productEngineeringImgs/product-2.png", import.meta.url).href,
    new URL("@/assets/imgs/_4_productEngineeringImgs/product-3.png", import.meta.url).href,
    new URL("@/assets/imgs/_4_productEngineeringImgs/product-4.png", import.meta.url).href,
    new URL("@/assets/imgs/_4_productEngineeringImgs/product-5.png", import.meta.url).href,
    new URL("@/assets/imgs/_4_productEngineeringImgs/product-6.png", import.meta.url).href,
    new URL("@/assets/imgs/_4_productEngineeringImgs/product-7.png", import.meta.url).href,
    new URL("@/assets/imgs/_4_productEngineeringImgs/product-8.png", import.meta.url).href,
    new URL("@/assets/imgs/_4_productEngineeringImgs/product-9.png", import.meta.url).href,
  ].map((path) => new URL(path, import.meta.url).href)
);
// 使用 ref 存储图片路径，并处理路径
const imageSrc = ref(
  new URL("@/assets/imgs/_4_productEngineeringImgs/product-1.png", import.meta.url).href
);

const activeIndex = ref(0);

// 格式化时间戳为 YYYY-MM-DD 格式
function formatTimestamp (timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}.${day}`;
}

// 格式化时间戳为 YYYY-MM-DD 格式
function formatTimestampObj (timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return {
    year: `${year}`,
    month: `${month}.${day}`,
  };
}

async function getData () {
  const categoryId = categoryList.value[activeIndex.value].id;
  const queryString = new URLSearchParams({
    pageNo: 1,
    pageSize: 999,
  }).toString();

  console.log("获取数据", queryString);
  const response = await httpUtils.get(`/cms/category/${categoryId}/news?${queryString.toString()}`);
  const { data } = await response.json();
  const page = data.page;
  page.list.forEach((i) => {
    i.publishTime = formatTimestamp(i.publishTime);
    i.timeObj = formatTimestampObj(i.publishTime);
  });
  categoryItems.value = page.list;
  console.log(page.list);
}

async function getCategory () {
  const res = await httpUtils.get(`/cms/category/23/list`);
  const result = await res.json();

  categoryList.value = result.data;
}

const handleMouse = (event) => {
  const boxs = document.querySelectorAll(".detail_product");
  const clickedDiv = event.currentTarget;
  const index = Array.from(boxs).indexOf(clickedDiv);

  boxs.forEach((div) => {
    div.classList.remove("active");
  });

  if (index >= 0 && index < imgs.value.length) {
    imageSrc.value = imgs.value[index];
    console.log(`你点击了第 ${index + 1} 个 div`);
    // 更新 activeIndex 的值
    activeIndex.value = index;
  }
};

// 处理鼠标离开事件，恢复默认图片
const handleMouseLeave = () => {
  // imageSrc.value = new URL(
  //   "@/assets/imgs/_4_productEngineeringImgs/product-1.png",
  //   import.meta.url
  // ).href; // 恢复默认图片
  // console.log("鼠标离开，恢复默认图片");
  // // 鼠标离开时，将 activeIndex 重置为 -1
  // activeIndex.value = 0;
};
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
      threshold: 0.1, // 当元素的 50% 进入视口时触发
    }
  );
  if (refElement.value) {
    observer.observe(refElement.value);
  }
};
// 初始化所有的观察器
const initializeObservers = () => {
  createObserver(boxRef, isVisibleBox);
  createObserver(infoRef, isVisibleInfo);
};
onMounted(initializeObservers); // 在组件挂载时调用

getCategory();

let timeout = null;

function toDetail (newsId) {
  if (newsId) {
    const target = router.resolve({
      name: "productDetail",
      params: {
        id: newsId,
      },
    });
    window.open(target.href, "_blank");
  }
}

watch(activeIndex, () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    getData(activeIndex.value);
  }, 500);
});
</script>

<template>
  <div class="productSeries">
    <div class="img">
      <img :src="imageSrc" alt="产品系列">
    </div>
    <MyTitle
      title="产品系列"
      english="PRODUCT SERIES"
      title-color="#fff"
      line-color="#fff"
      eng-color="#fff"
    />
    <div class="detail_content" ref="boxRef" :class="{ 'move-left': isVisibleBox }">
      <div
        v-for="(category, index) in categoryList"
        :key="category.id"
        class="detail_product"
        :style="{ 'background-color': index === activeIndex ? '#45b3e0' : 'transparent' }"
        @mouseover="handleMouse"
        @mouseleave="handleMouseLeave"
      >
        <span>{{ category.name }}</span>
      </div>
    </div>
    <div v-if="categoryList.length !== 0" class="detail_page">
      <div class="detail_page_title">
        {{ categoryList[activeIndex].name }}
      </div>
      <div class="detail_page_content">
        <div
          v-for="(item, index) in categoryItems"
          :key="item.id"
          ref="infoRef"
          class="detail_page_info"
          style="border-top: 0.0625rem solid #1078c5"
          :class="{ 'scale-up': isVisibleInfo }"
          @click="toDetail(item.id)"
        >
          <div class="h">
            {{ index + 1 }}
          </div>
          <div class="p1">
            {{ item.title }}
          </div>
          <div class="p2" v-html="item.description"/>
        </div>
      </div>
    </div>
    <div class="footer_img">
      <img src="@/assets/imgs/_4_productEngineeringImgs/bg-footimg.png" alt=""/>
    </div>
  </div>
</template>

<style scoped>
.productSeries {
  position: relative;
  margin: auto;
  width: 100%;
  border: 0.0625rem solid rgb(177, 177, 177);
  border-radius: 1.25rem;
  background-color: #fff;
  z-index: 100;
  padding: 4rem 13.125rem;
}

.detail_content {
  width: 67.5rem;
  height: 16.9375rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 4.125rem;
  position: relative;
  transform: translateX(-100%); /* 初始位置在左边 */
  visibility: hidden;
  transition: transform 1s ease, opacity 0.5s ease; /* 过渡效果 */
}

.detail_page_info {
  cursor: pointer;
}

.detail_content.move-left {
  opacity: 1;
  transform: translateX(0);
  visibility: visible;
}

.productSeries .img {
  left: 0;
  top: 0;
  width: 100%;
  height: 38.375rem;
  position: absolute;
  z-index: -100;
  transition: 0.5s ease-in-out; /* 添加过渡效果 */
  opacity: 1; /* 初始透明度 */
}

.productSeries .img img {
  height: 38.375rem;
  width: 100%;
  transition: 0.5s ease-in-out; /* 添加过渡效果 */
  opacity: 1; /* 初始透明度 */
}

.detail_content .detail_product {
  border: 0.0625rem #1e8dce solid;
  border-radius: 0.625rem;
  width: 21.375rem;
  height: 4.8125rem;
  margin-bottom: 1.5625rem;
  text-align: center;
  line-height: 4.6875rem;
  z-index: 100;
  cursor: pointer;
  transition: 0.1s;
}

.detail_product span {
  display: block;
  font-size: 1.875rem;
  font-family: "AlibabaPuHuiTi_2_35_Thin", sans-serif;
  color: #ffffff;
  z-index: -100;
}

@media (min-width: 400px) and (max-width: 500px) {
  .detail_product span {
    font-size: 1.575rem;
  }

  .detail_page_info .h {
    font-size: 1.85rem !important;
    margin-top: 1.875rem;
  }

  .detail_page_info .p1 {
    font-size: 1.225rem !important;
  }

  .detail_page_info .p2 {
    font-size: 1.225rem !important;
  }

  .detail_page_info {
    width: 32%;
    height: 10.0625rem !important;
  }
}

@media (min-width: 600px) and (max-width: 700px) {
  .detail_product span {
    font-size: 1.575rem;
  }

  .detail_page_info .h {
    font-size: 1.75rem !important;
    margin-top: 1.875rem;
  }

  .detail_page_info .p1 {
    font-size: 1.025rem !important;
  }

  .detail_page_info .p2 {
    font-size: 1.025rem !important;
  }

  .detail_page_info {
    width: 32%;
    height: 10.0625rem !important;
  }

  .detail_content {
    width: 50rem;
  }

  .detail_content .detail_product {
    width: 16.375rem;
    height: 4.4125rem;
  }

  .detail_product span {
    display: block;
    font-size: 1.475rem;
  }

  .productSeries {
    padding: 4rem 10.125rem;
  }

  .detail_content {
    width: 50rem;
  }

  .detail_content .detail_product {
    width: 16.375rem;
    height: 4.4125rem;
  }

  .detail_product span {
    display: block;
    font-size: 1.475rem;
  }

  .productSeries {
    padding: 4rem 10.125rem;
  }
}

@media (min-width: 700px) and (max-width: 800px) {
  .detail_product span {
    font-size: 1.575rem;
  }

  .detail_page_info .h {
    font-size: 1.85rem !important;
    margin-top: 1.875rem;
  }

  .detail_page_info .p1 {
    font-size: 1.225rem !important;
  }

  .detail_page_info .p2 {
    font-size: 1.225rem !important;
  }

  .detail_page_info {
    width: 32%;
    height: 10.0625rem !important;
  }

  .detail_content {
    width: 50rem;
  }

  .detail_content .detail_product {
    width: 16.375rem;
    height: 4.4125rem;
  }

  .detail_product span {
    display: block;
    font-size: 1.475rem;
  }

  .productSeries {
    padding: 4rem 10.125rem;
  }
}

@media (min-width: 1500px) and (max-width: 1600px) {
  .detail_product span {
    font-size: 1.575rem;
  }

  .detail_page_info .h {
    font-size: 1.75rem !important;
    margin-top: 1.875rem;
  }

  .detail_page_info .p1 {
    font-size: 1.025rem !important;
  }

  .detail_page_info .p2 {
    font-size: 1.025rem !important;
  }

  .detail_page_info {
    width: 32%;
    height: 10.0625rem !important;
  }

  .detail_content {
    width: 50rem;
  }

  .detail_content .detail_product {
    width: 16.375rem;
    height: 4.4125rem;
  }

  .detail_product span {
    display: block;
    font-size: 1.475rem;
  }

  .productSeries {
    padding: 4rem 10.125rem;
  }
}

.detail_page {
  margin-top: 9.375rem;
  height: 108.375rem;
}

.detail_page_title {
  font-size: 2rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: rgb(0, 111, 193);
  text-align: center;
  margin-bottom: 3.9375rem;
}

.detail_page_content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.detail_page_info {
  width: 32%;
  height: 14.0625rem;
  border-bottom: 0.0625rem #1078c5 solid;
  z-index: 100;
  transform: scale(0.3); /* 初始缩小 */
  opacity: 0; /* 初始不可见 */
  visibility: hidden; /* 初始隐藏 */
  transition: transform 0.5s ease, opacity 0.5s ease; /* 过渡效果 */
}

.detail_page_info.scale-up {
  transform: scale(1); /* 放大到原始大小 */
  opacity: 1; /* 可见 */
  visibility: visible; /* 可见 */
}

.detail_page_info .h {
  font-size: 2.25rem;
  font-family: "AlibabaPuHuiTi_2_85_Bold", sans-serif;
  color: rgb(0, 111, 193);
  margin-top: 1.875rem;
}

.detail_page_info .p1 {
  font-size: 1.625rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular", sans-serif;
  color: rgb(89, 87, 87);
}

.detail_page_info .p2 {
  font-size: 1.625rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular", sans-serif;
  color: rgb(89, 87, 87);
}

.footer_img {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
}

.footer_img img {
  width: 100%;
  margin-bottom: -0.5rem;
}
</style>
