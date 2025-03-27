<script setup>
defineOptions({
  name: "HomeIndex",
});
import ComHeader from "@/components/ComHeader.vue";
import Footer_En from "@/components/Footer_En.vue";
import router from "@/router/index.js";
import HttpUtils from "@/utils/httpUtils.js";
import { onMounted, onUnmounted, nextTick, ref } from "vue";

document.title = "平高集团有限公司";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination } from "swiper/modules";

const modules = [Navigation, Pagination];
const swiperInstance = ref(null);
const onSwiper = (swiper) => {
  swiperInstance.value = swiper;
};

let timeout = null;

const onSlideChange = () => {
  if (swiperInstance.value) {
    clearTimeout(timeout);
    const activeSlide = swiperInstance.value.slides[swiperInstance.value.activeIndex];
    const video = activeSlide.querySelector("video");
    video.play().catch(() => {
      /* 处理自动播放失败 */
    });
  }
};

function handleVideoEnd() {
  if (swiperInstance.value) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      swiperInstance.value.slideNext(500); // 带过渡动画切换
    }, 2000);
  }
}

onMounted(() => {
  const container = document.querySelector(".product_box");
  const leftIcon = document.querySelector(".left_icon");
  const rightIcon = document.querySelector(".right_icon");
  const items1 = document.querySelectorAll(".product_detail");
  const itemCount = items1.length;
  let currentIndex = 0;
  let isAnimating = false;
  let autoSlideInterval;
  let visibleItems = 3; // 初始值

  // 初始化
  updateCarousel();

  // 监听视窗大小变化
  window.addEventListener("resize", () => {
    updateCarousel();
  });

  function updateCarousel() {
    if (isAnimating) return;
    isAnimating = true;

    // 计算位移百分比（每个项目占 1/visibleItems）
    const translateX = -currentIndex * (100 / visibleItems / 1.07);
    container.style.transform = `translateX(${translateX}%)`;
    container.style.transition = "1s";

    // 重置动画状态
    setTimeout(() => {
      isAnimating = false;
    }, 500);
  }

  function nextSlide1() {
    stopAutoSlide();
    if (currentIndex >= itemCount - visibleItems) {
      // 到达最后时回到第一个
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    updateCarousel();
    startAutoSlide();
  }

  function prevSlide1() {
    stopAutoSlide();
    if (currentIndex <= 0) {
      // 到达第一个时跳到最后
      currentIndex = itemCount - visibleItems;
    } else {
      currentIndex--;
    }
    updateCarousel();
    startAutoSlide();
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide1, 3000); // 每3秒切换一次
  }

  // 停止自动轮播的函数
  function stopAutoSlide() {
    if (autoSlideInterval) {
      clearInterval(autoSlideInterval);
      autoSlideInterval = null;
    }
  }

  // 添加按钮事件
  rightIcon.addEventListener("click", nextSlide1);
  leftIcon.addEventListener("click", prevSlide1);

  startAutoSlide();

  onUnmounted(() => {
    clearInterval(autoSlideInterval);
  });
});

const images = ref([]);
const topNews = ref([]);
const homepageNews = ref([]);

const scrollDiv = ref(null);
const scrollBegin = ref(null);
const scrollEnd = ref(null);

let MyMar = null;
const speed = 5; // 更流畅的滚动速度
const initMarquee = () => {
  if (
    !scrollBegin.value ||
    !document.contains(scrollBegin.value) ||
    !scrollEnd.value ||
    !document.contains(scrollEnd.value) ||
    !scrollDiv.value ||
    !document.contains(scrollDiv.value)
  )
    return;

  // 复制双份内容实现无缝衔接
  scrollEnd.value.innerHTML = scrollBegin.value.innerHTML;

  const Marquee = () => {
    if (!scrollDiv.value || !scrollBegin.value) return;
    if (scrollDiv.value.scrollLeft >= scrollBegin.value.offsetWidth) {
      scrollDiv.value.scrollLeft = 0;
    } else {
      scrollDiv.value.scrollLeft += 1;
    }
  };

  const startScroll = () => {
    MyMar = setInterval(Marquee, speed);
  };

  const stopScroll = () => {
    clearInterval(MyMar);
  };

  // 确保容器有内容后再启动
  startScroll();

  // 鼠标交互
  scrollDiv.value.addEventListener("mouseenter", stopScroll);
  scrollDiv.value.addEventListener("mouseleave", startScroll);
};

onMounted(() => {
  nextTick(() => {
    initMarquee();
  });
});

async function getData() {
  const res = await HttpUtils.get(`/cms/home/news`);
  const result = await res.json();
  const data = result.data;

  const banner = [];
  data.homeBanner.forEach((item) => {
    banner.push({
      type: item.type,
      src: item.images,
    });
  });
  images.value = [...banner];
  topNews.value = [...data.topNews];
  homepageNews.value = [...data.homepageNews];
}

function toProduct(item) {
  if (item) {
    const target = router.resolve({
      name: "productSeries",
      query: {
        type: item,
      },
    });

    window.open(target.href, "_blank");
  }
}

getData();
</script>

<template>
  <div class="home_page">
    <div class="header">
      <div>
        <ComHeader :isfooter="false" :onlyHeaderFlag="true" :language="'en-Us'"></ComHeader>
      </div>
    </div>
    <!-- 轮播主体 -->
    <swiper
      style="--swiper-navigation-sides-offset: 30px"
      v-if="images.length > 1"
      :modules="modules"
      :allowTouchMove="false"
      :loop="true"
      :slides-per-view="1"
      navigation
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(image, index) in images" :key="index">
        <video
          v-if="image.type === 'video'"
          muted
          autoplay
          disablepictureinpicture
          @ended="handleVideoEnd(index)"
          poster="http://218.28.22.50:8108/videos/carousel.png"
          :src="image.src"
        ></video>
        <img v-else-if="image.type === 'image'" :src="image.src" alt="" />
      </swiper-slide>
    </swiper>

    <!-- 轮播介绍 -->
    <div class="product_content">
      <div class="product_box">
        <div class="product_content_box">
          <div class="product_detail product_detail_1">
            <div class="product_topImg">
              <img src="@/assets/imgs/_10_homePageImgs/product1.png" alt="" />
            </div>
            <div class="product_h">
              High voltage electri-<br />
              cal industry
            </div>
            <div class="product_button" @click="toProduct('高压电器产业')">
              <img src="@/assets/imgs/_10_homePageImgs/button.png" alt="" />
              <span>View details</span>
            </div>
          </div>
          <div class="product_detail">
            <div class="product_topImg">
              <img src="@/assets/imgs/_10_homePageImgs/product2.png" alt="" />
            </div>
            <div class="product_h">
              Operation and main<br />
              tenance service
            </div>
            <div class="product_button" @click="toProduct('运维检修业务')">
              <img src="@/assets/imgs/_10_homePageImgs/button.png" alt="" />
              <span>View details</span>
            </div>
          </div>
          <div class="product_detail">
            <div class="product_topImg">
              <img src="@/assets/imgs/_10_homePageImgs/product3.png" alt="" />
            </div>
            <div class="product_h">
              Component manu-<br />
              facturing industry
            </div>
            <div class="product_button" @click="toProduct('零部件制造产业')">
              <img src="@/assets/imgs/_10_homePageImgs/button.png" alt="" />
              <span>View details</span>
            </div>
          </div>
          <div class="product_detail">
            <div class="product_topImg">
              <img src="@/assets/imgs/_10_homePageImgs/product5.png" alt="" />
            </div>
            <div class="product_h">
              Power storage<br />
              business
            </div>
            <div class="product_button" @click="toProduct('电力储能业务')">
              <img src="@/assets/imgs/_10_homePageImgs/button.png" alt="" />
              <span>View details</span>
            </div>
          </div>
          <div class="product_detail">
            <div class="product_topImg">
              <img src="@/assets/imgs/_10_homePageImgs/product6.png" alt="" />
            </div>
            <div class="product_h">
              Distribution network<br />
              industry
            </div>
            <div class="product_button" @click="toProduct('配电网产业')">
              <img src="@/assets/imgs/_10_homePageImgs/button.png" alt="" />
              <span>View details</span>
            </div>
          </div>
          <div class="product_detail">
            <div class="product_topImg">
              <img src="@/assets/imgs/_10_homePageImgs/product7.png" alt="" />
            </div>
            <div class="product_h">
              System integration<br />
              service
            </div>
            <div class="product_button" @click="toProduct('系统集成业务')">
              <img src="@/assets/imgs/_10_homePageImgs/button.png" alt="" />
              <span>View details</span>
            </div>
          </div>
          <div class="product_detail">
            <div class="product_topImg">
              <img src="@/assets/imgs/_10_homePageImgs/product8.png" alt="" />
            </div>
            <div class="product_h">
              Smart power distri-<br />
              bution business
            </div>
            <div class="product_button" @click="toProduct('智慧配用电业务')">
              <img src="@/assets/imgs/_10_homePageImgs/button.png" alt="" />
              <span>View details</span>
            </div>
          </div>
          <div class="product_detail">
            <div class="product_topImg">
              <img src="@/assets/imgs/_10_homePageImgs/product9.png" alt="" />
            </div>
            <div class="product_h">
              Integrated energy<br />
              services business
            </div>
            <div class="product_button" @click="toProduct('综合能源服务业务')">
              <img src="@/assets/imgs/_10_homePageImgs/button.png" alt="" />
              <span>View details</span>
            </div>
          </div>
        </div>
      </div>
      <div class="left_icon"><span class="icon iconfont">&#xe607;</span></div>
      <div class="right_icon"><span class="icon iconfont">&#xe606;</span></div>
    </div>

    <!-- News -->
    <div ref="news" class="news">
      <div class="introduction_title">
        news
        <span class="span"
          >MORE
          <span></span>
        </span>
      </div>
      <div class="content">
        <div class="item">
          <div class="date">
            01.14
            <span>2015</span>
          </div>
          <p>One enterprise of Pinggao Group won the 2024…</p>
          <div class="img">
            <img src="/src/assets/imgs/_10_homePageImgs/eng/news1.png" alt="" />
          </div>
          <div class="button-more">More</div>
        </div>

        <div class="item">
          <div class="date">
            01.14
            <span>2015</span>
          </div>
          <p>One enterprise of Pinggao Group won the 2024…</p>
          <div class="img">
            <img src="/src/assets/imgs/_10_homePageImgs/eng/news2.png" alt="" />
          </div>
          <div class="button-more">More</div>
        </div>

        <div class="item">
          <div class="date">
            01.14
            <span>2015</span>
          </div>
          <p>One enterprise of Pinggao Group won the 2024…</p>
          <div class="img">
            <img src="/src/assets/imgs/_10_homePageImgs/eng/news3.png" alt="" />
          </div>
          <div class="button-more">More</div>
        </div>
      </div>
    </div>

    <!-- 公司介绍 -->
    <div class="company_introduction">
      <div class="bg_img">
        <img src="@/assets/imgs/_10_homePageImgs/company-introduction.png" alt="" />
      </div>
      <div class="introduction_title">
        about us
        <span class="span"
          >MORE
          <!-- <img src="/src//assets/imgs/_1_aboutPinggaoImgs/eng/moreSpan.png" alt=""> -->
          <span></span>
        </span>
      </div>
      <div class="introduction_content">
        <div class="text_left">
          <div class="p p1">
            Pinggao Group is a subsidiary of China Electric Equipment Group Co., Ltd., founded in
            1970. It is a major technical equipment pillar enterprise in China's electrical
            industry, with world leading research and development capabilities for large-scale
            high-end power equipment and industry-leading energy system integration solutions. It is
            a national high-tech enterprise and a national innovative enterprise. It has
            successively won honors such as the National May Day Labor Award, China's Top 100
            Machinery Industry Enterprises, Equipment China Meritorious Enterprise, National
            Civilized Unit, Outstanding Contribution Unit for National Skill Talent Cultivation, and
            the Most Influential Enterprise in China's Energy Storage Industry.
          </div>
        </div>
        <div class="img_right">
          <video
            style="width: 100%; height: 100%; object-fit: cover"
            controls
            poster="http://218.28.22.50:8108/videos/video_poster.png"
            src="http://218.28.22.50:8108/videos/pinggao.mp4"
          />
        </div>
      </div>
    </div>
  </div>
  <div>
    <Footer_En />
  </div>
</template>

<style>
@import "swiper/css";
@import "swiper/css/pagination";
@import "swiper/css/navigation";

.swiper {
  width: 100vw;
  margin: 0;
  padding: 0;
}

.swiper .swiper-slide {
  height: 56.25vw;
}

.swiper-pagination .swiper-pagination-bullet {
  width: 5vw;
  height: 5px;
  border-radius: 5px;
}

.swiper .swiper-slide video,
.swiper .swiper-slideimg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

<style scoped lang="less">
.home_page {
  overflow: hidden;
  width: 100%;
  z-index: 10;
  position: relative;
}

.header {
  height: 68vh;
  // min-width: 120rem;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 101;
}

.product_content {
  width: 100%;
  height: 57.625rem;
  display: flex;
  padding-top: 5rem;
  position: relative;
  justify-content: space-evenly;
  margin-bottom: 2.5rem;
}

@keyframes scaleIn {
  from {
    transform: scale(0.5);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
}

.product_box {
  /* overflow: hidden; */
  width: 94%;
  min-width: 120rem;
  margin: auto;
  // padding-left: 1.875rem;
  // padding-right: 4.375rem;
}

.product_content_box {
  display: flex;
  width: 93%;
  margin: auto;
}

.product_detail {
  flex-shrink: 0;
  width: calc(33.333%);
  /* 每个图标占据三分之一的视口宽度 */
  height: 43.75rem;
  margin: 0.625rem;
  color: white;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  animation: scaleIn 1s ease-in-out;
}

.product_topImg {
  position: relative;
  width: 26.25rem;
  height: 26.25rem;
  margin: auto;
  cursor: pointer;
  z-index: 1000;
  animation: floatAnimation 3s ease-in-out infinite;
}

.product_topImg img {
  width: 100%;
  height: 100%;
  margin-left: -0.3125rem;
  margin: auto;
}

@keyframes floatAnimation {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-1.5625rem);
  }
}

.product_topImg:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: opacity 1s ease;
  /* 设置过渡效果 */
  opacity: 0.3;
  /* 默认透明 */
  z-index: -1;
  /* 确保在图片下方 */
}

.product_topImg:hover:before {
  background-image: url("@/assets/imgs/_10_homePageImgs/circle.png");
  /* 悬停时的背景图片 */
  opacity: 1;
}

.product_h {
  font-size: 2rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular";
  color: rgb(0, 111, 193);
  text-align: center;
  text-transform: uppercase;
}

.product_button {
  position: relative;
  width: 12rem;
  height: 2rem;
  margin: auto;
  margin-top: 1.875rem;
  transition: all 0.3s ease;
  cursor: pointer;
  background-repeat: no-repeat;
  text-align: center;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.product_button:hover {
  transform: scale(1.1);
  /* translate(0, -0.3125rem) 使文字在Y轴方向向上移动0.3125rem，scale(1.1) 使文字放大到原来的1.1倍 */
  color: #58ffa9;
  /* 改变文字颜色 */
}

.product_button span {
  width: 100%;
  font-size: 1.125rem;
  line-height: 2rem;
  font-family: "AlibabaPuHuiTi_2_45_Light";
  color: rgb(0, 111, 193);
  text-align: center;
  text-transform: uppercase;
}

.left_icon .icon {
  top: 20rem;
  left: 3.75rem;
  position: absolute;
  font-size: 4.375rem;
  color: #006fc1;
  z-index: 100;
  cursor: pointer;
}

.right_icon .icon {
  position: absolute;
  font-size: 4.375rem;
  top: 20rem;
  right: 3.125rem;
  color: #006fc1;
  z-index: 100;
  cursor: pointer;
}

.news {
  background-color: #f7f8f8;

  .content {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-between;

    .item {
      width: 30%;
      overflow: hidden;
      transition: all 0.3s ease;

      .date {
        width: 100%;
        border-bottom: 1px solid #006fc1;
        font-size: 4rem;
        font-family: "Avenir";
        color: #006fc1;

        span {
          font-size: 2rem;
          font-family: "Avenir";
          color: rgb(0, 111, 193);
        }
      }

      .img {
        height: 40%;
        overflow: hidden;

        img {
          width: 100%;
          transition: all 0.5s ease;
        }

        img:hover {
          scale: 1.1;
        }
      }

      p {
        margin: 2.3rem 0;
        font-size: 2.6rem;
        font-family: "Avenir";
        color: rgb(0, 0, 0);
        line-height: 1.263;
        text-align: left;
      }

      .button-more {
        // margin-top: 2.5rem;
        padding: 0.3rem 0;
        width: 20%;
        font-size: 1.3rem;
        font-family: "Avenir";
        color: rgb(0, 111, 193);
        text-transform: uppercase;
        text-align: center;
        border: 1px solid #006fc1;
        border-radius: 2rem;
        transition: all 0.5s ease;
      }

      .button-more:hover {
        cursor: pointer;
        border: 1px solid rgb(148, 201, 238);
        color: rgb(148, 201, 238);
      }
    }

    .item:hover {
      box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
      /* 外阴影 */
    }

    div:nth-child(3) {
      margin: 0;
    }
  }
}

.news,
.company_introduction {
  position: relative;
  height: 71.25rem;
  width: 100%;
  padding: 6.25rem 10rem;
  background-size: cover;
  /* 实现图片等比例缩放 */
  background-repeat: no-repeat;
}

.company_introduction .bg_img {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 71.25rem;
  z-index: -100;
}

.company_introduction .bg_img img {
  width: 100%;
  height: 71.25rem;
}

.introduction_title {
  font-size: 2.25rem;
  margin-bottom: 3.0625rem;
  width: 100%;
  text-transform: uppercase;
  border-bottom: 1px solid #000;
  position: relative;

  .span {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 65%;
    font-size: 1rem;
    font-family: "Avenir";
    color: rgb(0, 111, 193);
    text-transform: uppercase;
    line-height: 3.278;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;

    span {
      background-image: url(/src/assets/imgs/_1_aboutPinggaoImgs/eng/moreSpan.png);
      background-size: cover;
      background-repeat: no-repeat;
      display: inline-block;
      width: 9px;
      height: 11px;
    }
  }

  .span:hover {
    cursor: pointer;
    font-size: 1.1rem;
  }
}

@media (min-width: 900px) and (max-width: 1000px) {
  .company_introduction {
    position: relative;
    height: 56rem;
    width: 100%;
    padding: 3.25rem 7rem;
  }

  .company_introduction .bg_img {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 50.25rem;
    z-index: -100;
  }

  .company_introduction .bg_img img {
    width: 100%;
    height: 56.25rem;
  }

  .introduction_title {
    font-size: 2.25rem;
    margin-bottom: 3.0625rem;
    width: 100%;
  }

  .introduction_content {
    width: 100%;
    height: 31.875rem;
    margin-bottom: 8.75rem;
  }

  .introduction_content .text_left {
    height: 31.875rem;
    margin-right: 3.25rem;
  }

  .introduction_content .img_right {
    // min-width: 25rem;
    transition: ease 0.5s;
  }

  .introduction_content .p {
    font-size: 1.33rem;
    line-height: 1.7;
  }

  .introduction_content .p1 {
    margin-bottom: 0.875rem;
  }
}

@media (min-width: 1000px) and (max-width: 1200px) {
  .great_flag_content .content_detail {
    width: 32%;
    background-color: #ffffff;
    transition: 0.5s;
    cursor: pointer;
  }

  .introduction_content .text_left {
    height: 31.875rem;
    margin-right: 3.25rem;
  }

  .introduction_content .img_right {
    // min-width: 25rem;
    transition: ease 0.5s;
  }

  .introduction_content .p {
    font-size: 1.5rem;
    line-height: 1.7;
  }
}

@media (min-width: 1200px) and (max-width: 1400px) {
  .great_flag_content .content_detail {
    width: 32%;
    background-color: #ffffff;
    transition: 0.5s;
    cursor: pointer;
  }

  .introduction_content .text_left {
    height: 31.875rem;
    margin-right: 3.25rem;
  }

  .introduction_content .img_right {
    // min-width: 25rem;
    transition: ease 0.5s;
  }

  .introduction_content .p {
    font-size: 1.3rem;
    line-height: 1.7;
  }
}

@media (min-width: 1400px) and (max-width: 1900px) {
  .introduction_content .text_left {
    height: 31.875rem;
    margin-right: 3.25rem;
  }

  .introduction_content .img_right {
    transition: ease 0.5s;
  }

  .introduction_content .p {
    font-size: 1.4rem;
    line-height: 1.7;
  }

  .product_detail {
    // flex-shrink: 0;
    width: calc(33.3%);
    // /* 每个图标占据三分之一的视口宽度 */
    // height: 43.75rem;
    margin: 0rem;
    // color: white;
    // align-items: center;
    // justify-content: center;
    // transition: transform 0.3s ease;
    // animation: scaleIn 1s ease-in-out;
  }

  .product_box {
    /* overflow: hidden; */
    width: 94%;
    min-width: 111rem;
    margin: auto;
    // padding-left: 1.875rem;
    // padding-right: 4.375rem;
  }
}

.introduction_title {
  font-size: 2.75rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(0, 0, 0);
  margin-bottom: 4.0625rem;
  width: 100%;
}

.introduction_content {
  width: 100%;
  height: 31.875rem;
  display: flex;
  margin-bottom: 8.75rem;
  object-fit: cover;
}

.introduction_content .text_left {
  width: 45%;
  height: 31.875rem;
  margin-right: 6.25rem;
}

.introduction_content .img_right {
  flex: 1;
  height: 100%;
}

.introduction_content .p {
  font-size: 1.25rem;
  font-family: "AlibabaPuHuiTi_2_45_Light";
  color: rgb(89, 87, 87);
  line-height: 1.7;
}

.introduction_content .p1 {
  margin-bottom: 1.875rem;

  font-size: 1.4rem;
  font-family: "Avenir";
  color: rgb(89, 87, 87);
  line-height: 1.545;
  text-align: left;
}

@media (max-width: 900px) {
  .news {
    padding: 5% 5%;
    height: 180rem;

    .content {
      height: 90%;
      flex-direction: column;

      .item {
        width: 100%;
        height: auto;
        overflow: hidden;

        .date {
          width: 100%;
          height: 15%;
          border-bottom: 1px solid #006fc1;
        }

        .img {
          height: 45%; //
          img {
            max-width: 100%;
            height: auto;
            transition: all 0.5s ease;
            scale: 1.1;
          }

          img:hover {
            scale: 1.1;
          }
        }

        p {
          height: 15%;
        }

        .button-more {
          position: relative;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 2.5rem;
          padding: 0.3rem 0;
          width: 30%;
          height: 8%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      .item:hover {
        box-shadow: 0 0px 0px rgba(0, 0, 0, 0.2);
        /* 外阴影 */
      }
    }
  }

  .company_introduction {
    height: 90rem;
    padding: 5% 5%;
    .bg_img {
      height: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .introduction_content {
      height: 60rem;
      flex-direction: column;

      .text_left {
        width: 100%;
        height: 50%;

        .p {
          font-size: 1.6rem;
        }
      }
    }
  }
}

@media (max-width: 700px) {
  .product_box {
    width: 100%;
    min-width: 30rem;
  }

  .product_detail {
    width: calc(50%);
  }
  .news {
    height: 200rem;
    .introduction_title {
      height: 4%;
      font-size: 4rem;
      span {
        font-size: 2rem;
      }
    }
    .content {
      height: 95%;

      .item {
        p {
          height: 10%;
        }

        .img {
          height: 50%;
        }
        .button-more {
          height: 10%;
          font-size: 2rem;
        }
      }
    }
  }

  .company_introduction {
    height: 140rem;

    .bg_img {
      height: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .introduction_title {
      font-size: 4rem;
      span {
        font-size: 2rem;
      }
    }
    .introduction_content {
      height: 115rem;
      flex-direction: column;

      .text_left {
        width: 100%;
        height: auto;

        .p {
          font-size: 2.9rem;
        }
      }
    }
  }
}

@media (max-width: 500px) {
  .news {
    height: 280rem;
    .introduction_title {
      height: 4%;
      font-size: 6rem;
      span {
        font-size: 3rem;
      }
    }
    .content {
      height: 90%;
      .item {
        width: 100%;
        .date {
          height: 15%;
          font-size: 6rem;
        }

        .img {
          height: 55%;
        }

        p {
          height: 10%; //
          font-size: 4rem; //
        }

        .button-more {
          font-size: 4rem; //
        }
      }
    }
  }

  .company_introduction {
    height: 180rem; //

    .introduction_title {
      font-size: 5rem;
    }
    .introduction_title {
      font-size: 6rem;
      span {
        font-size: 3rem;
      }
    }
    .introduction_content {
      height: 100rem; //

      .text_left {
        .p {
          font-size: 4rem; //
        }
      }
    }
  }
}
</style>
