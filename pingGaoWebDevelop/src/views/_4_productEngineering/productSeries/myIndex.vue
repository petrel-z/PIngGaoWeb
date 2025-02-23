<script setup>
import MyTitle from "@/components/MyTitle.vue";
import { ref,onMounted } from "vue";
const boxRef = ref(null)
const isVisibleBox = ref(false)
const infoRef = ref(null)
const isVisibleInfo = ref(null)


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

const activeIndex = ref(0);

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
  imageSrc.value = new URL(
    "@/assets/imgs/_4_productEngineeringImgs/product-1.png",
    import.meta.url
  ).href; // 恢复默认图片
  console.log("鼠标离开，恢复默认图片");
  // 鼠标离开时，将 activeIndex 重置为 -1
  activeIndex.value = 0;
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
      rootMargin: '0px', // 无额外的边距
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
// 使用 ref 存储图片路径，并处理路径
const imageSrc = ref(
  new URL("@/assets/imgs/_4_productEngineeringImgs/product-1.png", import.meta.url).href
);
</script>

<template>
  <div class="productSeries">
    <div class="img">
      <img :src="imageSrc" />
    </div>
    <MyTitle
      title="产品系列"
      English="PRODUCT SERIES"
      title-color="#fff"
      line-color="#fff"
      engColor="#fff"
    ></MyTitle>
    <div class="detail_content" ref="boxRef"
    :class="{ 'move-left': isVisibleBox}" >
      <div
        class="detail_product"
        :style="{ 'background-color': activeIndex === 0 ? '#45b3e0' : 'transparent' }"
        @mouseover="handleMouse"
        @mouseleave="handleMouseLeave"
        data-image="@/assets/imgs/_4_productEngineeringImgs/bg-protect.png"
      >
        <router-link to="/productEngineering/productSeriesDetail"
          ><span>高压电器产业</span>
        </router-link>
      </div>
      <div
        class="detail_product"
        :style="{ 'background-color': activeIndex === 1 ? '#45b3e0' : 'transparent' }"
        @mouseover="handleMouse"
        @mouseleave="handleMouseLeave"
      >
        <span>系统集成业务</span>
      </div>
      <div
        class="detail_product"
        :style="{ 'background-color': activeIndex === 2 ? '#45b3e0' : 'transparent' }"
        @mouseover="handleMouse"
        @mouseleave="handleMouseLeave"
      >
        <span >电力储能业务</span>
      </div>
      <div
        class="detail_product"
        :style="{ 'background-color': activeIndex === 3 ? '#45b3e0' : 'transparent' }"
        @mouseover="handleMouse"
        @mouseleave="handleMouseLeave"
      >
        <span>配电网产业</span>
      </div>
      <div
        class="detail_product"
        :style="{ 'background-color': activeIndex === 4 ? '#45b3e0' : 'transparent' }"
        @mouseover="handleMouse"
        @mouseleave="handleMouseLeave"
      >
        <span>运维检修业务</span>
      </div>
      <div
        class="detail_product"
        :style="{ 'background-color': activeIndex === 5 ? '#45b3e0' : 'transparent' }"
        @mouseover="handleMouse"
        @mouseleave="handleMouseLeave"
      >
        <span>电锅炉及热储能业务</span>
      </div>
      <div
        class="detail_product"
        :style="{ 'background-color': activeIndex === 6 ? '#45b3e0' : 'transparent' }"
        @mouseover="handleMouse"
        @mouseleave="handleMouseLeave"
      >
        <span>零部件制造产业</span>
      </div>
      <div
        class="detail_product"
        :style="{ 'background-color': activeIndex === 7 ? '#45b3e0' : 'transparent' }"
        @mouseover="handleMouse"
        @mouseleave="handleMouseLeave"
      >
        <span>综合能源服务业务</span>
      </div>
      <div
        class="detail_product"
        :style="{ 'background-color': activeIndex === 8 ? '#45b3e0' : 'transparent' }"
        @mouseover="handleMouse"
        @mouseleave="handleMouseLeave"
      >
        <span>智慧配用电业务</span>
      </div>
    </div>
    <div class="detail_page">
      <div class="detail_page_title">高压电器产业</div>
      <div class="detail_page_content" >
        <div class="detail_page_info" style="border-top: 1px solid #1078c5" ref="infoRef"
        :class="{ 'scale-up': isVisibleInfo}">
          <div class="h">01</div>
          <div class="p1">ZHW1-252（L）/T4000-50型</div>
          <div class="p2">复合式组合电器</div>
        </div>
        <div class="detail_page_info" style="border-top: 1px solid #1078c5" ref="infoRef"
        :class="{ 'scale-up': isVisibleInfo}">
          <div class="h">02</div>
          <div class="p1">ZHW1-145(L)/T3150-40型</div>
          <div class="p2">复合式组合电器</div>
        </div>
        <div class="detail_page_info" style="border-top: 1px solid #1078c5" ref="infoRef"
        :class="{ 'scale-up': isVisibleInfo}">
          <div class="h">03</div>
          <div class="p1">ZHW1-126（L）/T4000-50型</div>
          <div class="p2">复合式组合电器</div>
        </div>
        <div class="detail_page_info"  ref="infoRef"
        :class="{ 'scale-up': isVisibleInfo}" >
          <div class="h">04</div>
          <div class="p1">ZHW1-72.5(L)/T3150-40型</div>
          <div class="p2">复合式组合电器</div>
        </div>
        <div class="detail_page_info"  ref="infoRef"
        :class="{ 'scale-up': isVisibleInfo}">
          <div class="h">05</div>
          <div class="p1">LW55-72.5/T3150-31.5型</div>
          <div class="p2">罐式六氟化硫断路器</div>
        </div>
        <div class="detail_page_info"  ref="infoRef"
        :class="{ 'scale-up': isVisibleInfo}">
          <div class="h">06</div>
          <div class="p1">LW35A-72.5/T3150-31.5型</div>
          <div class="p2">高压六氟化硫断路器</div>
        </div>
        <div class="detail_page_info"  ref="infoRef"
        :class="{ 'scale-up': isVisibleInfo}">
          <div class="h">07</div>
          <div class="p1">LW35-126/T3150-40型</div>
          <div class="p2">自能式六氟化硫断路器</div>
        </div>
        <div class="detail_page_info"  ref="infoRef"
        :class="{ 'scale-up': isVisibleInfo}">
          <div class="h">08</div>
          <div class="p1">GXL5-1100(L) 型</div>
          <div class="p2">刚性气体绝缘输电线路</div>
        </div>
        <div class="detail_page_info"  ref="infoRef"
        :class="{ 'scale-up': isVisibleInfo}">
          <div class="h">09</div>
          <div class="p1">GXL5-550(L) 型</div>
          <div class="p2">刚性气体绝缘输电线路</div>
        </div>
        <div class="detail_page_info"  ref="infoRef"
        :class="{ 'scale-up': isVisibleInfo}">
          <div class="h">10</div>
          <div class="p1">GXL5-252(L) 型</div>
          <div class="p2">刚性气体绝缘输电线路</div>
        </div>
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
  border: 1px solid rgb(177, 177, 177);
  border-radius: 20px;
  background-color: #fff;
  z-index: 100;
  padding: 64px 210px;
}

.detail_content {
  width: 1080px;
  height: 271px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 66px;
  position: relative;
  transform: translateX(-100%); /* 初始位置在左边 */
  visibility: hidden;
  transition: transform 1s ease, opacity 0.5s ease; /* 过渡效果 */
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
  height: 614px;
  position: absolute;
  z-index: -100;
  transition: 0.5s ease-in-out; /* 添加过渡效果 */
  opacity: 1; /* 初始透明度 */
}

.productSeries .img img {
  height: 614px;
  width: 100%;
  transition: 0.5s ease-in-out; /* 添加过渡效果 */
  opacity: 1; /* 初始透明度 */
}
.detail_content .detail_product {
  border: 1px #1e8dce solid;
  border-radius: 10px;
  width: 342px;
  height: 77px;
  margin-bottom: 25px;
  text-align: center;
  line-height: 75px;
  z-index: 100;
  cursor: pointer;
  transition: 0.1s;
}
.detail_product span {
  display: block;
  font-size: 30px;
  font-family: "AlibabaPuHuiTi_2_35_Thin", sans-serif;
  color: #ffffff;
  z-index:-100;
}

.detail_page {
  margin-top: 150px;
  height: 1734px;
}
.detail_page_title {
  font-size: 32px;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: rgb(0, 111, 193);
  text-align: center;
  margin-bottom: 63px;
}
.detail_page_content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.detail_page_info {
  width: 32%;
  height: 225px;
  border-bottom: 1px #1078c5 solid;
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
  font-size: 36px;
  font-family: "AlibabaPuHuiTi_2_85_Bold", sans-serif;
  color: rgb(0, 111, 193);
  margin-top: 30px;
}
.detail_page_info .p1 {
  font-size: 26px;
  font-family: "AlibabaPuHuiTi_2_55_Regular", sans-serif;
  color: rgb(89, 87, 87);
}
.detail_page_info .p2 {
  font-size: 26px;
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
  margin-bottom: -8px;
}
</style>
