<script setup>
import { ref, onMounted } from "vue";

const isVisibleWordLeft = ref(false);
const isVisibleWordRight = ref(false);
const wordLeftRef = ref(null);
const wordRightRef = ref(null);
const imgRef = ref(null);
const isVisibleImg = ref(false);
const wordTopRef = ref(null)
const isVisibleWordTop = ref(false)
const parameterRef = ref(null)
const isVisibleParameter = ref(false)
// 创建交叉观察器
const createObserver = (refElement, isVisible) => {
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
};
// 初始化所有的观察器
const initializeObservers = () => {
  createObserver(wordLeftRef, isVisibleWordLeft);
  createObserver(wordRightRef, isVisibleWordRight);
  createObserver(imgRef, isVisibleImg);
  createObserver(wordTopRef, isVisibleWordTop);
  createObserver(parameterRef, isVisibleParameter);
};
onMounted(initializeObservers); // 在组件挂载时调用
</script>
<template>
  <div class="productSeriesDetail">
    <div class="detail_page">
      <div class="header">
        <div class="detail_title">
          <div class="img">
            <img src="@/assets/imgs/_4_productEngineeringImgs/dot.png" alt="" />
          </div>
          <div class="title">高压电器产业</div>
        </div>
        <div class="detail_text">
          <div class="text" ref="wordLeftRef" :class="{ 'move-left': isVisibleWordLeft }">
            ZHW1-252（L）/T4000-50型复合式组合电器
          </div>
          <div class="button" ref="wordRightRef" :class="{ 'move-right': isVisibleWordRight }">
            <div class="p" @click="this.$router.go(-1)" @mousedown="console.log(111)">
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
          src="@/assets/imgs/_4_productEngineeringImgs/product-img.png"
          alt=""
        />
      </div>
      <div class="special">
        <div class="special_header">
          <div class="h">技术特点</div>
        </div>
        <div class="special_word">
          <div class="special_word_move" >
            <ul class="introduction" ref="wordTopRef" :class="{ 'move-top': isVisibleWordTop }">
              <li>
                1.一次设备独立模块化设计。可满足典型设计方案中的各种主接线要求，适合发电厂、变电站的新建、扩建或改造工程及铁道电气化建设，特别适用于老旧变电站升级改造，减少施工难度和投资规模。
              </li>
              <li>
                2.紧凑型、小型化、轻量化设计，可实现整机运输，节省占地面积，占地面积仅为常规敞开开关式开关站的45%左右。
              </li>
              <li>3.高可靠性、少维护，现场布置灵活。</li>
              <li>4.工厂化整机预装、测试，减少现场安装、调试环节。</li>
              <li>
                5.灭弧室为双动自能式结构，操作功小，可有效降低分合闸操作对传动及本体的冲击。断路器配备弹簧操动机构，分相操作，性能可达到E2
                - M2 - C2级。
              </li>
              <li>
                6.三工位隔离-接地开关动触头为直线往复运动，采用齿轮齿条传动，传动平稳，同期性好，机械寿命可达M2级。
              </li>
              <li>
                7.三工位隔离开关母线转换电流高达1600A/300V/100次，三工位接地开关具备A类感应电流开合能力。
              </li>
              <li>
                8.进出线通过套管或电缆与其他设备相连，与GIS相比，省去了封闭母线，SF6气体用量少，符合绿色环保的发展趋势。
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="main_parameter">
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
.detail_title img{
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
  overflow: hidden;
  height: 100%;
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
