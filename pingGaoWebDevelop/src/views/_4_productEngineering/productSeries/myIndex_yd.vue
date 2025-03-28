<script setup>
import MyTitle from "@/components/MyTitle.vue";
import httpUtils from "@/utils/httpUtils.js";
import { onMounted, ref } from "vue";
import router from "@/router/index.js";
import MyButton from "@/components/MyButton.vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
const router1 = useRouter();

const redirectToMobileVersion = () => {
  try {
    const isMobile = window.matchMedia("(max-device-width: 900px)").matches;

    // 避免重复跳转
    const currentPath = router1.currentRoute.value.path;
    const targetPath = isMobile
    ? '/productEngineering/productSeries2'
    : '/productEngineering/productSeries1';
    if (currentPath !== targetPath) {
      router1.push(targetPath);
    }
  } catch (error) {
    console.error("路由跳转失败:", error);
    // 可添加回退方案
    router1.push("/error-page");
  }
};

onMounted(() => {
  // 确保只在客户端执行
  if (typeof window !== "undefined") {
    redirectToMobileVersion();
  }
});
const boxRef = ref(null);
const isVisibleBox = ref(false);
const infoRef = ref(null);
const isVisibleInfo = ref(true);

const categoryList = ref([]);
const categoryItems = ref([]);

const type = useRoute().query.type;

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

const currentCategory = ref({});
const pageNo = ref(1);
const pageSize = ref(9);
const hasMore = ref(true);

async function getData() {
  const queryString = new URLSearchParams({
    pageNo: pageNo.value,
    pageSize: pageSize.value,
  }).toString();

  const categoryId = currentCategory.value.id;
  const response = await httpUtils.get(
    `/cms/category/${categoryId}/news?${queryString.toString()}`
  );
  const result = await response.json();
  const data = result.data.page;

  if (pageNo.value === 1) {
    categoryItems.value = [...data.list];
  } else {
    categoryItems.value = [...categoryItems.value, ...data.list];
  }

  if (data.list.length < pageSize.value) {
    hasMore.value = false;
  } else {
    pageNo.value = pageNo.value + 1;
  }
}

function handleClick() {
  if (hasMore.value) {
    getData();
  }
}

async function getCategory() {
  const res = await httpUtils.get(`/cms/category/23/list`);
  const result = await res.json();

  categoryList.value = result.data;

  const queryCategory = result.data.find((i) => i.name === type);
  if (queryCategory) {
    currentCategory.value = queryCategory;
  } else {
    currentCategory.value = result.data[0];
  }

  await getData();
}

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

function toDetail(newsId) {
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

function setActive(category, index) {
  currentCategory.value = category;
  imageSrc.value = imgs.value[index % 9];
  pageNo.value = 1;
  getData();
}
</script>

<template>
  <div class="productSeries">
    <div class="img"></div>
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
        :style="{
          'background-color': currentCategory.id === category.id ? '#45b3e0' : 'transparent',
        }"
        @click="setActive(category, index)"
      >
        <span>{{ category.name }}</span>
      </div>
    </div>
    <div v-if="categoryList.length !== 0" class="detail_page">
      <div class="detail_page_title">
        {{ currentCategory.name }}
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
          <div class="p2">
            {{ currentCategory.name }}
          </div>
        </div>
      </div>
      <div class="button-container">
        <MyButton v-if="hasMore" @child-button="handleClick" />
        <p v-else style="font-size: 24px">没有更多了</p>
      </div>
    </div>
    <div class="footer_img">
      <img src="@/assets/imgs/_4_productEngineeringImgs/bg-footimg.png" alt="" />
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
  padding: 2rem 8rem;
}

.button-container {
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 20px;
  position: relative;
  z-index: 101;
}

.detail_content {
  width: 100%;
  height: 16.9375rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 16px;
  margin-top: 3rem !important;
  position: relative;
  transform: translateX(-100%); /* 初始位置在左边 */
  visibility: hidden;
  transition: transform 1s ease, opacity 0.5s ease; /* 过渡效果 */
  margin: auto;
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
  height: 60.375rem;
  position: absolute;
  z-index: -100;
  transition: 0.5s ease-in-out; /* 添加过渡效果 */
  opacity: 1; /* 初始透明度 */
  background-color: #3182c4;
}

.productSeries .img img {
  height: 54.375rem;
  width: 100%;
  transition: 0.5s ease-in-out; /* 添加过渡效果 */
  opacity: 1; /* 初始透明度 */
}

.detail_content .detail_product {
  border: 0.0625rem #4ba6db solid;
  border-radius: 1rem;
  width: 40%;
  height: 7.8125rem;
  margin-bottom: 1.5625rem;
  text-align: center;
  line-height: 4.6875rem;
  z-index: 100;
  cursor: pointer;
  transition: 0.1s;
}

.detail_product span {
  display: block;
  font-size: 2rem;
  font-family: "AlibabaPuHuiTi_2_35_Thin";
  color: #ffffff;
  z-index: -100;
  line-height: 7.8125rem;
}

.detail_page {
  margin-top: 35.375rem;
  margin-bottom: 30rem;
}

.detail_page_title {
  font-size: 4rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(0, 111, 193);
  text-align: center;
  margin-bottom: 3.9375rem;
}

.detail_page_content {
  display: flex;
  flex-wrap: wrap;
  gap: 2%;
  justify-content: start;
  border-top: 0.0625rem solid rgb(36, 129, 235);
}

.detail_page_info {
  width: 100%;
  height: 24.0625rem;
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
  font-size: 4rem;
  font-family: "AlibabaPuHuiTi_2_85_Bold";
  color: rgb(0, 111, 193);
  margin-top: 1.875rem;
}

.detail_page_info .p1 {
  font-size: 3.5rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular";
  color: rgb(89, 87, 87);
}

.detail_page_info .p2 {
  font-size: 3.5rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular";
  color: rgb(89, 87, 87);
}

.footer_img {
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
}

.footer_img img {
  width: 100%;
  margin-bottom: -0.5rem;
}

@media (min-width: 400px) and (max-width: 500px) {
  .productSeries .img {
    height: 70.375rem;
  }

  .detail_page {
    margin-top: 45.375rem;
    margin-bottom: 30rem;
  }
}

@media (min-width: 300px) and (max-width: 400px) {
  .productSeries .img {
    height: 75.375rem;
  }

  .detail_page {
    margin-top: 50.375rem;
    margin-bottom: 30rem;
  }
}

@media (min-width: 200px) and (max-width: 300px) {
  .productSeries .img {
    height: 83.375rem;
  }

  .detail_page {
    margin-top: 58.375rem;
    margin-bottom: 30rem;
  }
}

@media (min-width: 100px) and (max-width: 200px) {
  .productSeries .img {
    height: 90.375rem;
  }

  .detail_page {
    margin-top: 58.375rem;
    margin-bottom: 30rem;
  }
}

@media (min-width: 500px) and (max-width: 600px) {
  .productSeries .img {
    height: 68.375rem;
  }

  .detail_page {
    margin-top: 40.375rem;
    margin-bottom: 30rem;
  }
}

@media (min-width: 700px) and (max-width: 800px) {
  .productSeries .img {
    height: 68.375rem;
  }

  .detail_page {
    margin-top: 40.375rem;
    margin-bottom: 30rem;
  }
}

@media (min-width: 800px) and (max-width: 900px) {
  .productSeries .img {
    height: 68.375rem;
  }

  .detail_page {
    margin-top: 40.375rem;
    margin-bottom: 30rem;
  }
}

.detail_product span {
  font-size: 2.8rem;
}
</style>
