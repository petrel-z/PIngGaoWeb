<script setup>
import { ref } from "vue";
import MyTitle from "@/components/MyTitle.vue";

// 使用 ref 存储图片路径，并处理路径
const imageSrc = ref(
  new URL("@/assets/imgs/_4_productEngineeringImgs/bg-product1.png", import.meta.url).href
);

// 处理 imgs 数组中的路径
const imgs = ref(
  [
    new URL("@/assets/imgs/_4_productEngineeringImgs/bg-product1.png", import.meta.url).href,
    new URL("@/assets/imgs/_4_productEngineeringImgs/bg-product2.png", import.meta.url).href,
    new URL("@/assets/imgs/_4_productEngineeringImgs/bg-product3.png", import.meta.url).href,
    new URL("@/assets/imgs/_4_productEngineeringImgs/bg-product4.png", import.meta.url).href,
    new URL("@/assets/imgs/_4_productEngineeringImgs/bg-product5.png", import.meta.url).href,
    new URL("@/assets/imgs/_4_productEngineeringImgs/bg-product6.png", import.meta.url).href,
    new URL("@/assets/imgs/_4_productEngineeringImgs/bg-product7.png", import.meta.url).href,
    new URL("@/assets/imgs/_4_productEngineeringImgs/bg-product8.png", import.meta.url).href,
    new URL("@/assets/imgs/_4_productEngineeringImgs/bg-product9.png", import.meta.url).href,
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
    "@/assets/imgs/_4_productEngineeringImgs/bg-product1.png",
    import.meta.url
  ).href; // 恢复默认图片
  console.log("鼠标离开，恢复默认图片");
  // 鼠标离开时，将 activeIndex 重置为 -1
  activeIndex.value = 0;
};
</script>

<template>
  <div class="productSeries">
    <div class="img">
      <img :src="imageSrc" />
    </div>
    <MyTitle
      h="产品系列"
      English="PRODUCT SERIES"
      title-color="#fff"
      line-color="#fff"
      engColor="#fff"
    ></MyTitle>
    <div class="detail_content">
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
        <span>电力储能业务</span>
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
      <div class="detail_page_content">
        <div class="detail_page_info" style="border-top: 1px solid #1078c5">
          <div class="h">01</div>
          <div class="p1">ZHW1-252（L）/T4000-50型</div>
          <div class="p2">复合式组合电器</div>
        </div>
        <div class="detail_page_info" style="border-top: 1px solid #1078c5">
          <div class="h">02</div>
          <div class="p1">ZHW1-145(L)/T3150-40型</div>
          <div class="p2">复合式组合电器</div>
        </div>
        <div class="detail_page_info" style="border-top: 1px solid #1078c5">
          <div class="h">03</div>
          <div class="p1">ZHW1-126（L）/T4000-50型</div>
          <div class="p2">复合式组合电器</div>
        </div>
        <div class="detail_page_info">
          <div class="h">04</div>
          <div class="p1">ZHW1-72.5(L)/T3150-40型</div>
          <div class="p2">复合式组合电器</div>
        </div>
        <div class="detail_page_info">
          <div class="h">05</div>
          <div class="p1">LW55-72.5/T3150-31.5型</div>
          <div class="p2">罐式六氟化硫断路器</div>
        </div>
        <div class="detail_page_info">
          <div class="h">06</div>
          <div class="p1">LW35A-72.5/T3150-31.5型</div>
          <div class="p2">高压六氟化硫断路器</div>
        </div>
        <div class="detail_page_info">
          <div class="h">07</div>
          <div class="p1">LW35-126/T3150-40型</div>
          <div class="p2">自能式六氟化硫断路器</div>
        </div>
        <div class="detail_page_info">
          <div class="h">08</div>
          <div class="p1">GXL5-1100(L) 型</div>
          <div class="p2">刚性气体绝缘输电线路</div>
        </div>
        <div class="detail_page_info">
          <div class="h">09</div>
          <div class="p1">GXL5-550(L) 型</div>
          <div class="p2">刚性气体绝缘输电线路</div>
        </div>
        <div class="detail_page_info">
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
  padding: 64px 11%;
}
.detail_content {
  width: 1080px;
  height: 271px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 66px;
  position: relative;
}
.productSeries .img {
  left: 0;
  top: 0;
  width: 100%;
  height: 614px;
  position: absolute;
  z-index: -100;
  transition: 0.2s;
}
.productSeries img {
  height: 614px;
  width: 100%;
  transition: 0.1s;
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
  z-index: -100;
}
.active {
  border: none !important;
  background-color: #45b3e0;
}
.active span {
  color: #ffffff;
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
