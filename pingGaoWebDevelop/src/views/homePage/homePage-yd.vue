<script setup>
import ComHeader from "@/components/ComHeader.vue";
import Footer from "@/components/Footer.vue";
import router from "@/router/index.js";
import HttpUtils from "@/utils/httpUtils.js";
import {onMounted, onUnmounted, nextTick, ref} from "vue";
import {useRouter} from 'vue-router';

const router1 = useRouter();

const redirectToMobileVersion = () => {
  try {
    const isMobile = window.matchMedia('(max-device-width: 900px)').matches;

    // 避免重复跳转
    const currentPath = router1.currentRoute.value.path;
    const targetPath = isMobile
      ? '/homePage-yd'
      : '/homePage-pc';

    if (currentPath !== targetPath) {
      router1.push(targetPath);
    }
  } catch (error) {
    console.error('路由跳转失败:', error);
    // 可添加回退方案
    router1.push('/error-page');
  }
};
onMounted(() => {
  // 确保只在客户端执行
  if (typeof window !== 'undefined') {
    redirectToMobileVersion();
  }
});
document.title = "平高集团有限公司";

// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from "swiper/vue";
import {Navigation, Pagination} from "swiper/modules";

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

function moreNews(url) {
  const target = router.resolve(url);
  window.open(target.href, "_blank");
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
  let visibleItems = 1; // 初始值

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
    const translateX = -currentIndex * (100 / visibleItems / 1);
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

// 格式化时间戳为 YYYY-MM-DD 格式
function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

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

function toDetail(newsId) {
  if (newsId) {
    const target = router.resolve({
      name: "newsDetail",
      params: {
        id: newsId,
      },
    });

    window.open(target.href, "_blank");
  }
}

function toProduct(item) {
  if (item) {
    const target = router.resolve({
      name: "productSeries2",
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
        <ComHeader :isfooter="false" :onlyHeaderFlag="true"></ComHeader>
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
          poster="https://www.pinggaogroup.com/videos/carousel.png"
          :src="image.src"
        ></video>
        <img v-else-if="image.type === 'image'" :src="image.src" alt=""/>
      </swiper-slide>
    </swiper>
    <!-- 轮播图下面的导航栏 -->
    <div class="nav">
      <div class="nav_content">
        <div class="nav_introduction">
          <router-link class="p" to="/aboutPinggao">集团简介</router-link>
        </div>
        <div class="nav_introduction">
          <router-link class="p" to="/informationCenter">集团新闻</router-link>
        </div>
        <div class="nav_introduction" v-if="false">
          <router-link class="p" to="/partyBuilding">党的精神</router-link>
        </div>
        <div class="nav_introduction">
          <router-link class="p" to="/productEngineering">产品工程</router-link>
        </div>
        <div class="nav_introduction">
          <router-link class="p" to="/productEngineering/keyProject">重点工程</router-link>
        </div>
      </div>
    </div>
    <!-- 最新公告 -->
    <div class="announcement">
      <div class="announcement_icon"><span class="icon iconfont">&#xe506;</span></div>
      <div class="announcement_title">最新公告</div>
      <div class="announcement_text">
        <div ref="scrollDiv" class="scroll-container">
          <div ref="scrollBegin" class="scroll-content">
            <span class="pad_right">
              平高集团隶属于中国电气装备集团有限公司，始建于1970年，是我国电工行业重大技术装备支柱企业，具备世界领先的规模化高端电力装备研发制造实力及行业领先的能源系统集成解决方案提供能力。是国家级高新技术企业、国家级创新型企业，先后荣获全国五一劳动奖状、中国机械工业100强企业、装备中国功勋企业、全国文明单位、国家技能人才培育突出贡献单位、中国储能产业最具影响力企业等荣誉称号。经过50余年的发展，平高集团已形成了涵盖输配电设备研发、设计、制造、销售、检测、运维等服务及相关设备成套、电力工程总承包、全过程工程咨询、综合能源服务、电力储能、智慧电网装备、充换电设施的业务格局。构建了以中原腹地为中心，触角遍布京津冀、长三角、环渤海等经济区的产业布局。积极拓展“一带一路”市场，产品覆盖东欧、东南亚、中东、非洲、南美洲、大洋洲等70多个国家和地区。平高集团坚持自主创新，掌握了交直流、全系列、全电压等级开关产品研发制造技术，搭建了“五院三中心一基地”新型研发体系，研制了一系列引领我国开关发展、打破国外垄断、提升民族装备水平的首台套产品，特别是在特高压交直流开关、直流穿墙套管、环保型开关电力储能等产品领域达到世界领先水平。产品广泛应用于我国重点电力工程，先后为我国第-条500千伏高压交流输电工程、第一条750千伏超高压交流输电工程、世界首条投入商业运行的1000千伏交流示范工程、世界输送容量最大的苏通GIL综合管廊工程、国内首个百兆瓦级电网侧储能项目等国家重点工程项目提供了成套设备和技术服务。平高集团以世界一流智慧电气装备集团战略目标为统领，紧紧围绕“智慧电气、系统服务高效能源”总体布局，聚焦电力装备制造及能源系统解决方案，争当电气技术引领者、能源革命推动者、绿色发展践行者，努力为全面建设社会主义现代化国家贡献智慧和力量。
            </span>
          </div>
          <div ref="scrollEnd" class="scroll-content"></div>
        </div>
      </div>
    </div>
    <hr style="border: 0.0625rem solid #80b7e0"/>
    <div class="product_content">
      <div class="product_box">
        <div class="product_detail product_detail_1" @click="toProduct('高压电器产业')">
          <div class="product_topImg">
            <img src="@/assets/imgs/_10_homePageImgs/product1.png" alt=""/>
          </div>
          <div class="product_h">高压电器产业</div>
          <div class="product_hr"></div>
          <div class="product_p">复合式组合电器、罐式六氟化硫断路器、高压六氟化硫断路器…</div>
          <div class="product_button"><span>查看详情</span></div>
        </div>
        <div class="product_detail" @click="toProduct('运维检修业务')">
          <div class="product_topImg">
            <img src="@/assets/imgs/_10_homePageImgs/product2.png" alt=""/>
          </div>
          <div class="product_h">运维检修业务</div>
          <div class="product_hr"></div>
          <div class="product_p">罩式馈线自动化终端、箱式馈线自动化终端、配电自动化站所终端…</div>
          <div class="product_button"><span>查看详情</span></div>
        </div>
        <div class="product_detail" @click="toProduct('零部件制造产业')">
          <div class="product_topImg">
            <img src="@/assets/imgs/_10_homePageImgs/product3.png" alt=""/>
          </div>
          <div class="product_h">零部件制造产业</div>
          <div class="product_hr"></div>
          <div class="product_p">气体回收净化业务、集中供气站、混气比检测仪、密度继电器校验仪…</div>
          <div class="product_button">
            <span>查看详情</span>
          </div>
        </div>
        <div class="product_detail" @click="toProduct('电力储能业务')">
          <div class="product_topImg">
            <img src="@/assets/imgs/_10_homePageImgs/product5.png" alt=""/>
          </div>
          <div class="product_h">电力储能业务</div>
          <div class="product_hr"></div>
          <div class="product_p">罩式馈线自动化终端、箱式馈线自动化终端、配电自动化站所终端…</div>
          <div class="product_button"><span>查看详情</span></div>
        </div>
        <div class="product_detail" @click="toProduct('配电网产业')">
          <div class="product_topImg">
            <img src="@/assets/imgs/_10_homePageImgs/product6.png" alt=""/>
          </div>
          <div class="product_h">配电网产业</div>
          <div class="product_hr"></div>
          <div class="product_p">气体回收净化业务、集中供气站、混气比检测仪、密度继电器校验仪…</div>
          <div class="product_button"><span>查看详情</span></div>
        </div>
        <div class="product_detail" @click="toProduct('系统集成业务')">
          <div class="product_topImg">
            <img src="@/assets/imgs/_10_homePageImgs/product7.png" alt=""/>
          </div>
          <div class="product_h">系统集成业务</div>
          <div class="product_hr"></div>
          <div class="product_p">复合式组合电器、罐式六氟化硫断路器、高压六氟化硫断路器…</div>
          <div class="product_button"><span>查看详情</span></div>
        </div>
        <div class="product_detail" @click="toProduct('智慧配用电业务')">
          <div class="product_topImg">
            <img src="@/assets/imgs/_10_homePageImgs/product8.png" alt=""/>
          </div>
          <div class="product_h">智慧配用电业务</div>
          <div class="product_hr"></div>
          <div class="product_p">罩式馈线自动化终端、箱式馈线自动化终端、配电自动化站所终端…</div>
          <div class="product_button">
            <span>查看详情</span>
          </div>
        </div>
        <div class="product_detail" @click="toProduct('综合能源服务业务')">
          <div class="product_topImg">
            <img src="@/assets/imgs/_10_homePageImgs/product9.png" alt=""/>
          </div>
          <div class="product_h">综合能源服务业务</div>
          <div class="product_hr"></div>
          <div class="product_p">气体回收净化业务、集中供气站、混气比检测仪、密度继电器校验仪…</div>
          <div class="product_button">
            <span>查看详情</span>
          </div>
        </div>
      </div>
      <div class="left_icon"><span class="icon iconfont">&#xe607;</span></div>
      <div class="right_icon"><span class="icon iconfont">&#xe606;</span></div>
    </div>
    <div class="company_introduction">
      <div class="bg_img">
        <img src="@/assets/imgs/_10_homePageImgs/company-introduction.png" alt=""/>
      </div>
      <div class="introduction_title">赋能智慧电气 创引绿色能源</div>
      <div class="introduction_small_title">公司介绍</div>
      <div class="introduction_content">
        <div class="text_left">
          <div class="p p1">
            平高集团隶属于中国电气装备集团有限公司,始建于1970年，是我国电工行业重大技术装备支柱企业,具备世界领先的规模化高端电力装备研发制造实力及行业领先的能源系统集成解决方案提供能力。是国家级高新技术企业、国家级创新型企业,先后荣获全国五一劳动奖状、中国机械工业100强企业、装备中国功勋企业、全国文明单位、国家技能人才培育突出贡献单位、中国储能产业最具影响力企业等荣誉称号。
          </div>
        </div>
        <div class="img_right">
          <video
            controls
            poster="https://www.pinggaogroup.com/videos/video_poster.png"
            src="https://www.pinggaogroup.com/videos/pinggao.mp4"
          />
        </div>
      </div>
      <div class="introduction_honor">
        <div class="honor_info">
          <div class="p">国家级</div>
          <div class="p">高新技术企业</div>
        </div>
        <div class="honor_info">
          <div class="p">国家级</div>
          <div class="p">创新型企业</div>
        </div>
        <div class="honor_info honor_info_last">
          <div class="p">全国</div>
          <div class="p">五一劳动奖状</div>
        </div>
        <div class="honor_info">
          <div class="p">中国</div>
          <div class="p">机械工业100强</div>
        </div>
        <div class="honor_info">
          <div class="p">装备</div>
          <div class="p">中国功勋企业</div>
        </div>
        <div class="honor_info honor_info_last">
          <div class="p">全国</div>
          <div class="p">文明单位</div>
        </div>
      </div>
    </div>
    <div class="great_flag">
      <div class="great_flag_title">
        <div class="title_left">
          <div class="h">高举中国特色社会主义伟大旗帜</div>
        </div>
        <div class="title_right">
          <div class="p" @click="moreNews('/informationCenter/headquartersDynamicsIndex')">
            总部动态
          </div>
          <div class="p" @click="moreNews('/informationCenter/groupNewsIndex')">集团新闻</div>
          <div class="p" @click="moreNews('/informationCenter/mediaFocusIndex')">媒体聚焦</div>
        </div>
      </div>
      <div class="great_flag_content">
        <div
          class="content_detail"
          v-for="top in topNews"
          :key="top.id"
          :title="top.title"
          @click="toDetail(top.id)"
        >
          <div class="top_img"><img :src="top.headerImage" :alt="top.title"/></div>
          <div class="bottom_text">
            <div class="time">{{ formatTimestamp(top.publishTime) }}</div>
            <div class="hr"/>
            <div class="p1 text-ellipsis">
              {{ top.title }}
            </div>
            <div class="p" v-html="top.description"></div>
          </div>
        </div>
        <div class="content_detail_text">
          <div v-for="news in homepageNews" :key="news.id" class="text" @click="toDetail(news.id)">
            <div class="title text-ellipsis">{{ news.title }}</div>
            <div class="line"/>
            <div class="time">{{ formatTimestamp(news.publishTime) }}</div>
          </div>
        </div>
      </div>
      <div class="great_flag_button">
        <router-link to="/informationCenter/headquartersDynamicsIndex" style="display: flex">
          <div class="button_left">了解更多</div>
          <div class="button_right"><span class="icon iconfont">&#xe6a3;</span></div>
        </router-link>
      </div>
      <div class="great_flag_footer">
        <img src="@/assets/imgs/_10_homePageImgs/footer.png" alt=""/>
      </div>
    </div>
  </div>
  <div>
    <Footer/>
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
  // height: 68vh;
  // min-width: 120rem;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 101;
}

.my_carousel .carousel video {
  width: 100%;
  height: 61.875rem;
}

.nav {
  width: 100%;
  height: 6.4375rem;
  background-color: #45b3e0;
  padding: 1.875rem 10.25rem;
}

.nav_content {
  width: 100%;
  height: 2.5rem;
  border-right: 0.0625rem solid #fff;
  display: flex;
  justify-content: space-between;
  margin: auto;
}

.nav_introduction {
  width: 100%;
  height: 2.5rem;
  border-left: 0.0625rem solid #fff;
  text-align: center;
  margin: auto;
}

.nav_introduction .p {
  display: block;
  font-size: 1.5rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular";
  color: rgb(255, 255, 255);
  // text-align: center;
  transition: 0.3s;
}

.announcement {
  display: flex;
  height: 4.875rem;
  line-height: 4.875rem;
  margin-left: 10rem;
}

.announcement_icon {
  color: #338bcd;
  line-height: 4.875rem;
}

.announcement_icon .iconfont {
  font-size: 1.8125rem;
  font-weight: 600;
}

@media (min-width: 200px) and (max-width: 400px) {
  .announcement_icon .iconfont {
    display: block;
    margin-top: 0rem;
  }
}

@media (max-width: 500px) {
  .swiper{
	  --swiper-navigation-size: 20px;/* 设置按钮大小 */
  }
}


.announcement_title {
  font-size: 1.375rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular";
  color: rgb(0, 111, 193);
  margin-left: 0.375rem;
  margin-right: 0.75rem;
}

.announcement_text {
  flex: 0.908;
  overflow: hidden;
}

.scroll-container {
  width: 100%;
  white-space: nowrap;
  display: flex;
  font-size: 1.375rem;
  font-family: "AlibabaPuHuiTi_2_45_Light";
  color: rgb(89, 87, 87);
}

.scroll-content {
  display: inline-flex;
  animation: marquee 140s linear infinite;
}

.pad_right {
  padding-right: 3.125rem; /* 创建间隔避免文字粘连 */
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

/* 鼠标悬停暂停动画 */
.scroll-container:hover .scroll-content {
  animation-play-state: paused;
}

.product_content {
  width: 100%;
  height: 90.625rem;
  display: flex;
  padding-top: 5rem;
  position: relative;
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
  width: 100%;
  display: flex;
}

.product_detail {
  flex-shrink: 0;
  width: 100%;
  /* 每个图标占据三分之一的视口宽度 */
  height: 43.75rem;
  color: white;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  animation: scaleIn 1s ease-in-out;
  // transform: scale(2);
  position: relative;
}

.product_topImg {
  margin: auto;
  width: 40.25rem;
  height: 40.25rem;
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
  font-size: 5rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular";
  color: rgb(0, 111, 193);
  text-align: center;
}

.product_hr {
  width: 10rem;
  height: 0.125rem;
  background-color: #2081c9;
  text-align: center;
  margin: 1.25rem 0rem;
  margin: auto;
  margin-top: 0.625rem;
  margin-bottom: 0.9375rem;
}

.product_p {
  width: 40.625rem;
  height: 4.5rem;
  font-size: 2rem;
  font-family: "AlibabaPuHuiTi_2_45_Light";
  color: rgb(89, 87, 87);
  text-align: center;
  margin: auto;
}

.product_button {
  position: relative;
  width: 12.6875rem;
  height: 4rem;
  margin: auto;
  text-align: center;
  background-image: url("@/assets/imgs/_10_homePageImgs/button.png");
  background-size: contain;
  margin-top: 2.875rem;
  transition: all 0.3s ease;
  cursor: pointer;
  background-repeat: no-repeat;
  white-space: nowrap;
}

.product_button:hover {
  transform: scale(1.1);
  /* translate(0, -0.3125rem) 使文字在Y轴方向向上移动0.3125rem，scale(1.1) 使文字放大到原来的1.1倍 */
  color: #58ffa9;
  /* 改变文字颜色 */
}

.product_button span {
  position: absolute;
  top: 0;
  left: 2.6rem;
  font-size: 1.9rem;
  line-height: 3rem;
  font-family: "AlibabaPuHuiTi_2_45_Light";
  color: rgb(0, 111, 193);
}

.left_icon .icon {
  top: 25rem;
  left: 3.75rem;
  position: absolute;
  font-size: 8rem;
  color: #006fc1;
  z-index: 100;
  cursor: pointer;
}

.right_icon .icon {
  position: absolute;
  font-size: 8rem;
  top: 25rem;
  right: 3.125rem;
  color: #006fc1;
  z-index: 100;
  cursor: pointer;
}

.company_introduction {
  position: relative;
  height: 159.25rem;
  width: 100%;
  padding: 6.25rem 10rem;
  background-size: cover; /* 实现图片等比例缩放 */
  background-repeat: no-repeat;
}

.company_introduction .bg_img {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 159.25rem;
  z-index: -100;
}

.company_introduction .bg_img img {
  width: 100%;
  height: 159.25rem;
}

.introduction_title {
  font-size: 3.5rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(0, 0, 0);
  margin-bottom: 4.0625rem;
  width: 100%;
}

.introduction_small_title {
  font-size: 2.55rem;
  margin-bottom: 0.625rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(0, 0, 0);
  width: 100%;
}

.introduction_content {
  width: 100%;
  object-fit: cover;
}

.introduction_content .text_left {
  width: 100%;
  border-top: 0.0625rem solid #313a3d;
  padding-top: 0.8125rem;
}

.introduction_content .img_right {
  width: 100%;
  height: 50rem;
}

.introduction_content .img_right video {
  width: 100%;
  height: 50rem;
  object-fit: cover;
}

.introduction_content .p {
  font-size: 3.5rem;
  font-family: "AlibabaPuHuiTi_2_45_Light";
  color: rgb(89, 87, 87);
  line-height: 1.7;
}

.introduction_content .p1 {
  margin-bottom: 1.875rem;
}

.introduction_honor {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  bottom: 5rem;
  width: 84%;
  left: 50%;
  transform: translateX(-50%);
}

.introduction_honor .honor_info {
  width: 33%;
  border-left: 0.0625rem solid #fff;
  text-align: center;
  margin-bottom: 5rem;
}

.honor_info_last {
  border-right: 0.0625rem solid #fff;
}

.introduction_honor .honor_info .p {
  font-size: 2.5rem;
  font-family: "AlibabaPuHuiTi_2_45_Light";
  color: rgb(255, 255, 255);
  margin-top: -0.625rem;
}

.great_flag {
  position: relative;
  padding: 7.5rem 5.75rem 26.25rem 7.5rem;
  background-color: #def1fb;
  width: 100%;
}

.great_flag_title {
  justify-content: space-between;
  margin-bottom: 6.25rem;
}

.great_flag_title .h {
  font-size: 5rem;
  text-align: center;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: rgb(35, 24, 21);
}

.great_flag_title .title_right {
  display: flex;
  line-height: 4.375rem;
  width: 100%;
  justify-content: space-between;
  margin: auto;
  margin-top: 5rem;
  padding: 0 2rem;
  padding-bottom: 2rem;
  border-bottom: 0.2rem solid rgb(71, 71, 71);
}

.great_flag_title .p {
  font-size: 5.1rem;
  font-weight: 500;
  font-family: "AlibabaPuHuiTi_2_55_Regular", sans-serif;
  color: rgb(35, 24, 21);
}

.great_flag_title .p:hover {
  color: #006fc1;
  cursor: pointer;
}

.great_flag_content {
  width: 100%;
  margin-bottom: 4.5625rem;
  // height: 300rem;
  flex-direction: column;
  justify-content: space-evenly;
}

.great_flag_content .content_detail {
  width: 100%;
  background-color: #ffffff;
  transition: 0.5s;
  cursor: pointer;
  overflow: hidden;
}

.great_flag_content .content_detail:hover {
  transform: scale(0.99);
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.286); /* 悬浮时显示黑色阴影 */
}

.great_flag_content .content_detail .top_img {
  display: flex;
  align-items: center;
  justify-content: center;
}

.great_flag_content .content_detail .top_img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.great_flag_content .bottom_text {
  padding: 2.25rem 2.5rem;
}

.great_flag_content .bottom_text .time {
  font-size: 4rem;
  font-family: "AvenirNext";
  color: rgb(34, 56, 147);
}

.great_flag_content .bottom_text .hr {
  width: 9.6875rem;
  height: 0.325rem;
  background-color: rgb(34, 56, 147);
  margin: 0.5rem 0rem;
}

.great_flag_content .bottom_text .p {
  font-size: 3.375rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular", sans-serif;
  color: rgb(89, 87, 87);
}

.great_flag_content .bottom_text .p1 {
  font-size: 3.375rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular", sans-serif;
  color: #223893;
}

.great_flag_button {
  margin: auto;
  width: 12.25rem;
  height: 2.9375rem;
  background-color: #ffffff;
  display: flex;
  transition: transform 0.3s ease;
}

.button_left {
  width: 9.375rem;
  height: 100%;
  line-height: 2.9375rem;
  font-size: 1.125rem;
  font-family: "AlibabaPuHuiTi_2_45_Light";
  background-color: #006fc1;
  color: #fff;
  text-align: center;
  cursor: pointer;
}

.great_flag_button:hover {
  transform: scale(1.05);
}

.button_right {
  width: 10%;
  height: 100%;
  color: rgb(255, 255, 255);
  line-height: 2.9375rem;
  text-align: center;
}

.great_flag_button .icon {
  font-size: 1.875rem;
  color: #006fc1;
  margin-left: 0.5rem;
}

.great_flag_footer {
  width: 100%;
  position: absolute;
  bottom: -1rem;
  left: 0;
}

.great_flag_footer img {
  height: 26.25rem;
  width: 100%;
  height: 100%;
}

.great_flag_content .content_detail_text {
  margin-top: 3rem;
  width: 100%;
  background-color: #fff;
  padding: 3rem 2.5rem;
  transition: 0.5s;
  cursor: pointer;
}

.great_flag_content .content_detail_text:hover {
  transform: scale(0.99);
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.286); /* 悬浮时显示黑色阴影 */
}

.great_flag .top_img img {
  height: 23.25rem;
  background-size: cover;
}

.great_flag_content .content_detail_text .text .title {
  font-size: 3.375rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular";
  color: rgb(89, 87, 87);
}

.great_flag_content .content_detail_text .text .title:hover {
  color: rgb(34, 56, 147);
}

.great_flag_content .content_detail_text .text .line {
  width: 9.6875rem;
  height: 0.325rem;
  background-color: rgb(34, 56, 147);
  margin: 0.25rem 0rem;
}

.great_flag_content .content_detail_text .time {
  font-size: 4rem;
  font-family: "AvenirNext";
  color: rgb(34, 56, 147);
  margin-bottom: 1.75rem;
}

@media (min-width: 300px) and (max-width: 400px) {
  .product_content {
    height: 77.625rem;
    padding-top: 6rem;
    margin-bottom: 2.5rem;
  }

  .product_topImg {
    width: 44.25rem;
    height: 44.25rem;
  }

  .product_h {
    font-size: 4.5rem;
  }

  .product_hr {
    width: 10rem;
    height: 0.125rem;
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 1.2rem;
  }

  .product_p {
    width: 34.625rem;
    height: 4.5rem;
    font-size: 2rem;
    margin: auto;
	height: fit-content;
  }

//   .product_button {
//     width: 19.6875rem;
//     margin-top: 3rem;
//   }

//   .product_button span {
// 	top: 5px;
//     font-size: 1.3rem;
//     line-height: 2.5rem;
//   }
	.product_button{
		margin-top: 0;
		background-image: none;
		width: fit-content;
		height: fit-content;
	}
	.product_button span{
		background-image: url("@/assets/imgs/_10_homePageImgs/button.png");
		background-position: center;
		background-size: 100%;
		background-repeat: no-repeat;
		padding: 5px 15px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: static;
	}
}

@media (min-width: 380px) and (max-width: 500px) {
  .button_right span {
    display: block;
    line-height: -1rem !important;
    // vertical-align: middle;
  }
}

@media (min-width: 500px) and (max-width: 600px) {
  .company_introduction {
    position: relative;
    height: 135.25rem;
    width: 100%;
    padding: 6.25rem 6rem;
    background-size: cover; /* 实现图片等比例缩放 */
    background-repeat: no-repeat;
  }

  .company_introduction .bg_img {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 135.25rem;
    z-index: -100;
  }

  .company_introduction .bg_img img {
    width: 100%;
    height: 135.25rem;
  }

  .great_flag .great_flag_title .h {
    font-size: 4rem;
  }

  .great_flag .great_flag_title .p {
    font-size: 4rem;
  }

  .great_flag .great_flag_content .time {
    font-size: 3.5rem;
  }

  .great_flag .great_flag_content .p1 {
    font-size: 3rem;
  }

  .great_flag .great_flag_content .p {
    font-size: 2.7rem;
  }

  .great_flag .great_flag_content .text .title {
    font-size: 2.7rem;
  }

  .introduction_title {
    font-size: 3.5rem;
    font-family: "AlibabaPuHuiTi_2_65_Medium";
    color: rgb(0, 0, 0);
    margin-bottom: 4.0625rem;
    width: 100%;
  }

  .introduction_small_title {
    font-size: 2.55rem;
  }

  .introduction_content .text_left {
    width: 100%;
    padding-top: 0.8125rem;
  }

  .introduction_content .img_right {
    width: 100%;
    height: 35rem;
  }

  .introduction_content .img_right video {
    width: 100%;
    height: 35rem;
    object-fit: cover;
  }

  .introduction_content .p {
    font-size: 3rem;
    font-family: "AlibabaPuHuiTi_2_45_Light";
    color: rgb(89, 87, 87);
    line-height: 1.7;
  }

  .introduction_content .p1 {
    margin-bottom: 1.875rem;
  }

  .button_right span {
    display: block;
    line-height: -1rem !important;
    // vertical-align: middle;
  }
}

@media (min-width: 600px) and (max-width: 700px) {
  .company_introduction {
    position: relative;
    height: 135.25rem;
    width: 100%;
    padding: 6.25rem 6rem;
    background-size: cover; /* 实现图片等比例缩放 */
    background-repeat: no-repeat;
  }

  .company_introduction .bg_img {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 135.25rem;
    z-index: -100;
  }

  .company_introduction .bg_img img {
    width: 100%;
    height: 135.25rem;
  }

  .great_flag .great_flag_title .h {
    font-size: 4rem;
  }

  .great_flag .great_flag_title .p {
    font-size: 4rem;
  }

  .great_flag .great_flag_content .time {
    font-size: 3.5rem;
  }

  .great_flag .great_flag_content .p1 {
    font-size: 3rem;
  }

  .great_flag .great_flag_content .p {
    font-size: 2.7rem;
  }

  .great_flag .great_flag_content .text .title {
    font-size: 2.7rem;
  }

  .introduction_title {
    font-size: 3.5rem;
    font-family: "AlibabaPuHuiTi_2_65_Medium";
    color: rgb(0, 0, 0);
    margin-bottom: 4.0625rem;
    width: 100%;
  }

  .introduction_small_title {
    font-size: 2.55rem;
  }

  .introduction_content .text_left {
    width: 100%;
    padding-top: 0.8125rem;
  }

  .introduction_content .img_right {
    width: 100%;
    height: 35rem;
  }

  .introduction_content .img_right video {
    width: 100%;
    height: 35rem;
    object-fit: cover;
  }

  .introduction_content .p {
    font-size: 2.5rem;
    font-family: "AlibabaPuHuiTi_2_45_Light";
    color: rgb(89, 87, 87);
    line-height: 1.7;
  }

  .introduction_content .p1 {
    margin-bottom: 1.875rem;
  }

  .product_content {
    height: 65.625rem;
    padding-top: 6rem;
    margin-bottom: 2.5rem;
  }

  .product_topImg {
    width: 30.25rem;
    height: 30.25rem;
  }

  .product_h {
    font-size: 4rem;
  }

  .product_hr {
    width: 10rem;
    height: 0.125rem;
    margin: 1.25rem 0rem;
    margin: auto;
    margin-top: 0.625rem;
    margin-bottom: 0.9375rem;
  }

  .product_p {
    width: 30.625rem;
    height: 4.5rem;
    font-size: 1.5rem;
    margin: auto;
  }

  .product_button {
    width: 9.6875rem;
    margin-top: 2rem;
  }

  .product_button span {
    font-size: 1.3rem;
    line-height: 2.2rem;
  }

  .left_icon .icon {
    top: 25rem;
    left: 3.75rem;
    font-size: 6rem;
  }

  .right_icon .icon {
    font-size: 6rem;
    top: 25rem;
    right: 3.125rem;
  }
}

@media (min-width: 700px) and (max-width: 800px) {
  .company_introduction {
    position: relative;
    height: 135.25rem;
    width: 100%;
    padding: 6.25rem 6rem;
    background-size: cover; /* 实现图片等比例缩放 */
    background-repeat: no-repeat;
  }

  .company_introduction .bg_img {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 135.25rem;
    z-index: -100;
  }

  .company_introduction .bg_img img {
    width: 100%;
    height: 135.25rem;
  }

  .great_flag .great_flag_title .h {
    font-size: 4rem;
  }

  .great_flag .great_flag_title .p {
    font-size: 4rem;
  }

  .great_flag .great_flag_content .time {
    font-size: 3.5rem;
  }

  .great_flag .great_flag_content .p1 {
    font-size: 3rem;
  }

  .great_flag .great_flag_content .p {
    font-size: 2.7rem;
  }

  .great_flag .great_flag_content .text .title {
    font-size: 2.7rem;
  }

  .introduction_title {
    font-size: 3.5rem;
    font-family: "AlibabaPuHuiTi_2_65_Medium";
    color: rgb(0, 0, 0);
    margin-bottom: 4.0625rem;
    width: 100%;
  }

  .introduction_small_title {
    font-size: 2.55rem;
  }

  .introduction_content .text_left {
    width: 100%;
    padding-top: 0.8125rem;
  }

  .introduction_content .img_right {
    width: 100%;
    height: 35rem;
  }

  .introduction_content .img_right video {
    width: 100%;
    height: 35rem;
    object-fit: cover;
  }

  .introduction_content .p {
    font-size: 2.5rem;
    font-family: "AlibabaPuHuiTi_2_45_Light";
    color: rgb(89, 87, 87);
    line-height: 1.7;
  }

  .introduction_content .p1 {
    margin-bottom: 1.875rem;
  }

  .product_content {
    height: 65.625rem;
    padding-top: 6rem;
    margin-bottom: 2.5rem;
  }

  .product_topImg {
    width: 30.25rem;
    height: 30.25rem;
  }

  .product_h {
    font-size: 4rem;
  }

  .product_hr {
    width: 10rem;
    height: 0.125rem;
    margin: 1.25rem 0rem;
    margin: auto;
    margin-top: 0.625rem;
    margin-bottom: 0.9375rem;
  }

  .product_p {
    width: 30.625rem;
    height: 4.5rem;
    font-size: 1.5rem;
    margin: auto;
  }

  .product_button {
    width: 9.6875rem;
    margin-top: 2rem;
  }

  .product_button span {
    font-size: 1.3rem;
    line-height: 2.2rem;
  }

  .left_icon .icon {
    top: 25rem;
    left: 3.75rem;
    font-size: 6rem;
  }

  .right_icon .icon {
    font-size: 6rem;
    top: 25rem;
    right: 3.125rem;
  }
}

@media (min-width: 800px) and (max-width: 900px) {
  .company_introduction {
    position: relative;
    height: 135.25rem;
    width: 100%;
    padding: 6.25rem 6rem;
    background-size: cover; /* 实现图片等比例缩放 */
    background-repeat: no-repeat;
  }

  .company_introduction .bg_img {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 135.25rem;
    z-index: -100;
  }

  .company_introduction .bg_img img {
    width: 100%;
    height: 135.25rem;
  }

  .great_flag .great_flag_title .h {
    font-size: 4rem;
  }

  .great_flag .great_flag_title .p {
    font-size: 4rem;
  }

  .great_flag .great_flag_content .time {
    font-size: 3.5rem;
  }

  .great_flag .great_flag_content .p1 {
    font-size: 3rem;
  }

  .great_flag .great_flag_content .p {
    font-size: 2.7rem;
  }

  .great_flag .great_flag_content .text .title {
    font-size: 2.7rem;
  }

  .introduction_title {
    font-size: 3.5rem;
    font-family: "AlibabaPuHuiTi_2_65_Medium";
    color: rgb(0, 0, 0);
    margin-bottom: 4.0625rem;
    width: 100%;
  }

  .introduction_small_title {
    font-size: 2.55rem;
  }

  .introduction_content .text_left {
    width: 100%;
    padding-top: 0.8125rem;
  }

  .introduction_content .img_right {
    width: 100%;
    height: 35rem;
  }

  .introduction_content .img_right video {
    width: 100%;
    height: 35rem;
    object-fit: cover;
  }

  .introduction_content .p {
    font-size: 2.5rem;
    font-family: "AlibabaPuHuiTi_2_45_Light";
    color: rgb(89, 87, 87);
    line-height: 1.7;
  }

  .introduction_content .p1 {
    margin-bottom: 1.875rem;
  }

  .product_content {
    width: 100%;
    height: 65.625rem;
    display: flex;
    padding-top: 6rem;
    position: relative;
    margin-bottom: 2.5rem;
  }

  .product_topImg {
    width: 30.25rem;
    height: 30.25rem;
  }

  .product_h {
    font-size: 4rem;
  }

  .product_hr {
    width: 10rem;
    height: 0.125rem;
    margin: 1.25rem 0rem;
    margin: auto;
    margin-top: 0.625rem;
    margin-bottom: 0.9375rem;
  }

  .product_p {
    width: 30.625rem;
    height: 4.5rem;
    font-size: 1.5rem;
    margin: auto;
  }

  .product_button {
    width: 9.6875rem;
    margin-top: 2rem;
  }

  .product_button span {
    font-size: 1.3rem;
    line-height: 2.2rem;
  }

  .left_icon .icon {
    top: 25rem;
    left: 3.75rem;
    font-size: 6rem;
  }

  .right_icon .icon {
    font-size: 6rem;
    top: 25rem;
    right: 3.125rem;
  }
}
</style>
