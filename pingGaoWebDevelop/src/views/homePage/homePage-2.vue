<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import ComHeader from "@/components/ComHeader.vue";
import Footer from "@/components/Footer.vue";
const items = ref([]);
const dots = ref([]);
const current = ref(0);
let timer = null;
import img1 from "@/assets/imgs/_10_homePageImgs/carousel.png";
import img2 from "@/assets/imgs/_10_homePageImgs/carousel.png";
import img3 from "@/assets/imgs/_10_homePageImgs/carousel.png";
import img4 from "@/assets/imgs/_10_homePageImgs/carousel.png";
import img5 from "@/assets/imgs/_10_homePageImgs/carousel.png";

const images = ref([img1, img2, img3, img4, img5]);
// 轮播图切换逻辑
const showSlide = () => {
  items.value.forEach((item) => {
    item.style.transform = `translateX(-${current.value * 100}%)`;
  });
};

// 上一张
const prevSlide = () => {
  current.value = current.value > 0 ? current.value - 1 : items.value.length - 1;
  showSlide();
};

// 下一张
const nextSlide = () => {
  current.value = current.value < items.value.length - 1 ? current.value + 1 : 0;
  showSlide();
};

// 切换到指定索引
const jumpToSlide = (index) => {
  current.value = index;
  showSlide();
};

// 定时器控制
const startTimer = () => {
  timer = setInterval(nextSlide, 3000);
};
const stopTimer = () => {
  clearInterval(timer);
};

// 组件挂载后执行 DOM 选择
onMounted(() => {
  items.value = document.querySelectorAll(".item");
  dots.value = document.querySelectorAll(".dots li");
  startTimer();
});

// 组件销毁时清除定时器
onUnmounted(() => {
  clearInterval(timer);
});
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
    container.style.transition = '1s';

    // 重置动画状态
    setTimeout(() => {
      isAnimating = false;
    }, 500);
  }

  function nextSlide1() {
    stopAutoSlide()
    if (currentIndex >= itemCount - visibleItems) {
      // 到达最后时回到第一个
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    updateCarousel();
    startAutoSlide()
  }

  function prevSlide1() {
    stopAutoSlide()
    if (currentIndex <= 0) {
      // 到达第一个时跳到最后
      currentIndex = itemCount - visibleItems;
    } else {
      currentIndex--;
    }
    updateCarousel();
    startAutoSlide()
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide1, 3000); // 每3秒切换一次
  }

    // 停止自动轮播的函数
    function stopAutoSlide() {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
        console.log('轮播已停止');
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
</script>

<template>
  <div class="home_page">
    <div class="header">
      <div>
        <ComHeader :isfooter="false" :onlyHeaderFlag="true"></ComHeader>
      </div>
    </div>
    <div class="my_carousel">
      <div class="carousel" id="carousel" @mouseover="stopTimer" @mouseout="startTimer">
        <div class="carousel-inner">
          <div class="item" v-for="(image, index) in images" :key="index">
            <img
              :src="image"
              :style="{
                backgroundColor: [
                  'pink',
                  'bisque',
                  'rgb(144, 255, 236)',
                  'rgb(248, 99, 124)',
                  'rgb(210, 161, 250)',
                ][index],
              }"
            />
          </div>
        </div>
        <div class="carousel-control left" @click="prevSlide">&lsaquo;</div>
        <div class="carousel-control right" @click="nextSlide">&rsaquo;</div>
        <ul class="dots">
          <li
            v-for="(_, index) in 5"
            :key="index"
            :class="{ active: index === current }"
            @click="jumpToSlide(index)"
          ></li>
        </ul>
      </div>
    </div>
    <!-- 轮播图下面的导航栏 -->
    <div class="nav">
      <div class="nav_content">
        <div class="nav_introduction">
          <router-link class="p" to="/aboutPinggao">集团简介</router-link>
        </div>
        <div class="nav_introduction">
          <router-link class="p" to="/informationCenter">集团新闻</router-link>
        </div>
        <div class="nav_introduction">
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
              平高集团隶属于中国电气装备集团有限公司，始建于1970年，是我国电工行业重大技术装备支柱企业，
              具备世界领先的规模化高端电力装备研发制造实力及行业领先的能源系统集成解决方案提供能力。是国
              家级高新技术企业、国家级创新型企业，先后荣获全国五一劳动奖状、中国机械工业100强企业、装备
              中国功勋企业、全国文明单位、国家技能人才培育突出贡献单位、中国储能产业最具影响力企业等荣誉
              称号。经过50余年的发展，平高集团已形成了涵盖输配电设备研发、设计、制造、销售、检测、运维等
              服务及相关设备成套、电力工程总承包、全过程工程咨询、综合能源服务、电力储能、电锅炉及热储能、
              海上风电并网装备、智慧电网装备、充换电设施的业务格局。构建了以中原腹地为中心，触角遍布京津
              冀、长三角、环渤海等经济区的产业布局。积极拓展“一带一路”市场，产品覆盖东欧、东南亚、中东、
              非洲、南美洲、大洋洲等70多个国家和地区。平高集团坚持自主创新，掌握了交直流、全系列、全电压
              等级开关产品研发制造技术，搭建了“五院三中心一基地”新型研发体系，研制了一系列引领我国开关发展
              、打破国外垄断、提升民族装备水平的首台套产品，特别是在特高压交直流开关、直流穿墙套管、环保型
              开关电力储能等产品领域达到世界领先水平。产品广泛应用于我国重点电力工程，先后为我国第-条500千
              伏高压交流输电工程、第一条750千伏超高压交流输电工程、世界首条投入商业运行的1000千伏交流示范
              工程、世界输送容量最大的苏通GIL综合管廊工程、国内首个百兆瓦级电网侧储能项目等国家重点工程项
              目提供了成套设备和技术服务。平高集团以世界一流智慧电气装备集团战略目标为统领，紧紧围绕“智慧
              电气、系统服务高效能源”总体布局，聚焦电力装备制造及能源系统解决方案，争当电气技术引领者、能
              源革命推动者、绿色发展践行者，努力为全面建设社会主义现代化国家贡献智慧和力量。</span
            >
          </div>
          <div ref="scrollEnd" class="scroll-content"></div>
        </div>
      </div>
    </div>
    <hr style="border: 0.0625rem solid #80b7e0" />
    <div class="product_content">
      <div class="product_box">
        <div class="product_content_box">
          <div class="product_detail product_detail_1">
            <div class="product_topImg">
              <img src="@/assets/imgs/_10_homePageImgs/product1.png" alt="" />
            </div>
            <div class="product_h">高压电器产业</div>
            <div class="product_hr"></div>
            <div class="product_p">复合式组合电器、罐式六氟化硫断路器、高压六氟化硫断路器…</div>
            <div class="product_button"><span>查看详情</span></div>
          </div>
          <div class="product_detail">
            <div class="product_topImg">
              <img src="@/assets/imgs/_10_homePageImgs/product2.png" alt="" />
            </div>
            <div class="product_h">运维检修业务</div>
            <div class="product_hr"></div>
            <div class="product_p">罩式馈线自动化终端、箱式馈线自动化终端、配电自动化站所终端…</div>
            <div class="product_button"><span>查看详情</span></div>
          </div>
          <div class="product_detail">
            <div class="product_topImg">
              <img src="@/assets/imgs/_10_homePageImgs/product3.png" alt="" />
            </div>
            <div class="product_h">零部件制造产业</div>
            <div class="product_hr"></div>
            <div class="product_p">
              气体回收净化业务、集中供气站、混气比检测仪、密度继电器校验仪…
            </div>
            <div class="product_button"><span>查看详情</span></div>
          </div>
          <div class="product_detail">
            <div class="product_topImg">
              <img src="@/assets/imgs/_10_homePageImgs/product4.png" alt="" />
            </div>
            <div class="product_h">电锅炉及热储能业务</div>
            <div class="product_hr"></div>
            <div class="product_p">复合式组合电器、罐式六氟化硫断路器、高压六氟化硫断路器…</div>
            <div class="product_button"><span>查看详情</span></div>
          </div>
          <div class="product_detail">
            <div class="product_topImg">
              <img src="@/assets/imgs/_10_homePageImgs/product5.png" alt="" />
            </div>
            <div class="product_h">电力储能业务</div>
            <div class="product_hr"></div>
            <div class="product_p">罩式馈线自动化终端、箱式馈线自动化终端、配电自动化站所终端…</div>
            <div class="product_button"><span>查看详情</span></div>
          </div>
          <div class="product_detail">
            <div class="product_topImg">
              <img src="@/assets/imgs/_10_homePageImgs/product6.png" alt="" />
            </div>
            <div class="product_h">配电网产业</div>
            <div class="product_hr"></div>
            <div class="product_p">
              气体回收净化业务、集中供气站、混气比检测仪、密度继电器校验仪…
            </div>
            <div class="product_button"><span>查看详情</span></div>
          </div>
          <div class="product_detail">
            <div class="product_topImg">
              <img src="@/assets/imgs/_10_homePageImgs/product7.png" alt="" />
            </div>
            <div class="product_h">系统集成业务</div>
            <div class="product_hr"></div>
            <div class="product_p">复合式组合电器、罐式六氟化硫断路器、高压六氟化硫断路器…</div>
            <div class="product_button"><span>查看详情</span></div>
          </div>
          <div class="product_detail">
            <div class="product_topImg">
              <img src="@/assets/imgs/_10_homePageImgs/product8.png" alt="" />
            </div>
            <div class="product_h">智慧配用电业务</div>
            <div class="product_hr"></div>
            <div class="product_p">罩式馈线自动化终端、箱式馈线自动化终端、配电自动化站所终端…</div>
            <div class="product_button"><span>查看详情</span></div>
          </div>
          <div class="product_detail">
            <div class="product_topImg">
              <img src="@/assets/imgs/_10_homePageImgs/product9.png" alt="" />
            </div>
            <div class="product_h">综合能源服务业务</div>
            <div class="product_hr"></div>
            <div class="product_p">
              气体回收净化业务、集中供气站、混气比检测仪、密度继电器校验仪…
            </div>
            <div class="product_button"><span>查看详情</span></div>
          </div>
        </div>
      </div>
      <div class="left_icon"><span class="icon iconfont">&#xe607;</span></div>
      <div class="right_icon"><span class="icon iconfont">&#xe606;</span></div>
    </div>
    <div class="company_introduction">
      <div class="bg_img">
        <img src="@/assets/imgs/_10_homePageImgs/company-introduction.png" alt="" />
      </div>
      <div class="introduction_title">赋能智慧电气 创引绿色能源</div>
      <div class="introduction_small_title">公司介绍</div>
      <div class="introduction_content">
        <div class="text_left">
          <div class="p p1">
            平高集团隶属于中国电气装备集团有限公司，始建于1970年，是我国电工行业重大技术装备支柱企业，具备世界领先的规模化高端电力装备研发制造实力及行业领先的能源系统集成解决方案提供能力。是国家级高新技术企业、国家级创新型企业，先后荣获全国五一劳动奖状、中国机械工业100强企业、
            装备中国功勋企业、全国文明单位、国家技能人才培育突出贡献单位、中国储能产业最具影响力企业等荣誉称号。
          </div>
          <div class="p">
            经过50余年的发展，平高集团已形成了涵盖输配电设备研发、设计、制造、销售、检测、运维等服务及相关设备成套、电力工程总承包、全过程工程咨询、综合能源服务、电力储能、电锅炉及热储能、海上风电并网装备、智慧电网装备充换电设施的业务格局。构建了以中原腹地为中心，触角遍布京津冀、长三角环渤海等经济区的产业布局。
            积极拓展“一带一路”市场，产品覆盖东欧、东南亚、中东、非洲、南美洲、大洋洲等70多个国家和地区。
          </div>
        </div>
        <div class="img_right">
          <img src="@/assets/imgs/_10_homePageImgs/shipin.png" alt="" />
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
        <div class="honor_info">
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
        <div class="honor_info">
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
          <div class="p">总部动态</div>
          <div class="p">集团新闻</div>
          <div class="p">媒体聚焦</div>
        </div>
      </div>
      <div class="great_flag_content">
        <div class="content_detail">
          <div class="top_img"><img src="@/assets/imgs/_10_homePageImgs/pic1.png" alt="" /></div>
          <div class="bottom_text">
            <div class="time">2023-02-28</div>
            <div class="hr"></div>
            <div class="p">平高集团入选</div>
            <div class="p">BNEF全球一级储能厂商榜</div>
          </div>
        </div>
        <div class="content_detail">
          <div class="top_img"><img src="@/assets/imgs/_10_homePageImgs/pic2.png" alt="" /></div>
          <div class="bottom_text">
            <div class="time">2023-02-28</div>
            <div class="hr"></div>
            <div class="p">平高集团入选</div>
            <div class="p">BNEF全球一级储能厂商榜</div>
          </div>
        </div>
        <div class="content_detail_text">
          <div class="text">
            <div class="title">平高集团入选BNEF全球一级储能厂商榜</div>
            <div class="line"></div>
            <div class="time">2023-02-28</div>
          </div>
          <div class="text">
            <div class="title">国际领先+1，平高1项新产品通过国家级鉴…</div>
            <div class="line"></div>
            <div class="time">2023-02-28</div>
          </div>
          <div class="text">
            <div class="title">中国电气装备党委书记、董事长到平…</div>
            <div class="line"></div>
            <div class="time">2023-02-28</div>
          </div>
          <div class="text">
            <div class="title">国际领先+1，平高1项新产品通过国家级鉴…</div>
            <div class="line"></div>
            <div class="time">2023-02-28</div>
          </div>
          <div class="text">
            <div class="title">平高集团入选BNEF全球一级储能厂商榜</div>
            <div class="line"></div>
            <div class="time">2023-02-28</div>
          </div>
        </div>
      </div>
      <div class="great_flag_button">
        <router-link :to="'/informationCenter/headquartersDynamics-1'" style="display: flex;">
          <div class="button_left">了解更多</div>
          <div class="button_right"><span class="icon iconfont">&#xe6a3;</span></div>
        </router-link>
      </div>
      <div class="great_flag_footer">
        <img src="@/assets/imgs/_10_homePageImgs/footer.png" alt="" />
      </div>
    </div>
  </div>
  <div>
    <Footer />
  </div>
</template>

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
.my_carousel {
  width: 100%;
  height: 61.875rem;
  position: relative;
}
.my_carousel .carousel {
  width: 100%;
  height: 61.875rem;
  overflow: hidden;
}
.my_carousel .carousel img {
  width: 100%;
  height: 61.875rem;
}
.carousel-inner {
  display: flex;
  transition: transform 0.5s ease-in-out;
}
.item {
  min-width: 100%;
}
.dots {
  position: absolute;
  display: flex;
  justify-content: center;
  z-index: 100;
  bottom: 1.875rem;
  width: 100%;
  align-items: center;
}
.dots li {
  width: 7.375rem;
  height: 0.1875rem;
  background-color: rgb(255, 255, 255);
  margin: 0 0.3125rem;
  cursor: pointer;
}
.dots .active {
  background-color: rgb(189, 206, 255);
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
.announcement_title {
  font-size: 1.375rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular", sans-serif;
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
  font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
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
  padding-left: 1.875rem;
  padding-right: 4.375rem;
}

.product_content_box {
  display: flex;
  width: 95%;
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
  font-size: 2.5rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular", sans-serif;
  color: rgb(0, 111, 193);
  text-align: center;
}

.product_hr {
  width: 6.625rem;
  height: 0.125rem;
  background-color: #2081c9;
  text-align: center;
  margin: 1.25rem 0rem;
  margin: auto;
  margin-top: 0.625rem;
  margin-bottom: 0.9375rem;
}

.product_p {
  width: 21.625rem;
  height: 4.5rem;
  font-size: 1.25rem;
  font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
  color: rgb(89, 87, 87);
  text-align: center;
  margin: auto;
}

.product_button {
  position: relative;
  width: 8.6875rem;
  height: 2rem;
  margin: auto;
  text-align: center;
  background-image: url("@/assets/imgs/_10_homePageImgs/button.png");
  background-size: contain;
  margin-top: 1.875rem;
  transition: all 0.3s ease;
  cursor: pointer;
  background-repeat: no-repeat;
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
  left: 2.1rem;
  font-size: 1.125rem;
  line-height: 2rem;
  font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
  color: rgb(0, 111, 193);
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
.company_introduction {
  position: relative;
  height: 71.25rem;
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
  height: 71.25rem;
  z-index: -100;
}
.company_introduction .bg_img img {
  width: 100%;
  height: 71.25rem;
}
@media (min-width: 400px) and (max-width: 500px) {
  .company_introduction {
    position: relative;
    height: 56.25rem;
    width: 100%;
    padding: 3.25rem 8rem !important;
  }
  .company_introduction .bg_img {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 56.25rem !important;
    z-index: -100;
  }
  .company_introduction .bg_img img {
    width: 100%;
    height: 56.25rem !important;
  }
  .introduction_title {
    font-size: 2.25rem !important;
    margin-bottom: 3.0625rem !important;
    width: 100%;
  }
  .introduction_small_title {
    font-size: 1.8rem !important;
    margin-bottom: 0.625rem;
    width: 100%;
  }
  .introduction_content {
    width: 100%;
    height: 31.875rem;
    margin-bottom: 8.75rem;
  }
  .introduction_content .text_left {
    width: 50% !important;
    height: 31.875rem;
    margin-right: 3.25rem !important;
    padding-top: 0.8125rem;
  }
  .introduction_content .img_right {
    width: 53% !important;
    height: 80% !important;
    min-width: 25rem;
    transition: ease 0.5s;
  }
  .introduction_content .img_right img {
    width: 100%;
    height: 100%;
  }
  .introduction_content .p {
    font-size: 1.2rem !important;
    line-height: 1.7;
  }
  .introduction_content .p1 {
    margin-bottom: 1rem !important;
  }

  .introduction_honor {
    display: flex;
    width: 100%;
    height: 3.5625rem;
    border-right: 0.0625rem solid #fff;
    position: absolute;
    bottom: -1rem;
    left: 0.4rem !important;
    transform: scale(0.9);
  }
  .introduction_honor .honor_info {
    width: 80%;
    margin: auto;
  }
  .introduction_honor .honor_info .p {
    font-size: 1.425rem !important;
    margin-top: -0.625rem;
  }
}
@media (min-width: 600px) and (max-width: 700px) {
  .company_introduction {
    position: relative;
    height: 56rem;
    width: 100%;
    padding: 3.25rem 7rem !important;
  }
  .company_introduction .bg_img {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 56.25rem !important;
    z-index: -100;
  }
  .company_introduction .bg_img img {
    width: 100%;
    height: 56.25rem !important;
  }
  .introduction_title {
    font-size: 2.25rem !important;
    margin-bottom: 3.0625rem !important;
    width: 100%;
  }
  .introduction_small_title {
    font-size: 1.8rem !important;
    margin-bottom: 0.625rem;
    width: 100%;
  }
  .introduction_content {
    width: 100%;
    height: 31.875rem;
    margin-bottom: 8.75rem;
  }
  .introduction_content .text_left {
    width: 50% !important;
    height: 31.875rem;
    margin-right: 3.25rem !important;
    padding-top: 0.8125rem;
  }
  .introduction_content .img_right {
    width: 53% !important;
    height: 60% !important;
    min-width: 25rem;
    transition: ease 0.5s;
  }
  .introduction_content .img_right img {
    width: 100%;
    height: 100%;
  }
  .introduction_content .p {
    font-size: 0.8rem !important;
    line-height: 1.7;
  }
  .introduction_content .p1 {
    margin-bottom: 0.875rem !important;
  }

  .introduction_honor {
    display: flex;
    width: 100%;
    height: 3.5625rem;
    border-right: 0.0625rem solid #fff;
    position: absolute;
    bottom: 0rem;
    left: 0.4rem !important;
    transform: scale(0.9);
  }
  .introduction_honor .honor_info {
    width: 80%;
    margin: auto;
  }
  .introduction_honor .honor_info .p {
    font-size: 1.425rem !important;
    margin-top: -0.625rem;
  }
  .great_flag_content .content_detail {
    width: 32%;
    height: 23.1875rem !important;
    background-color: #ffffff;
    transition: 0.5s;
    cursor: pointer;
  }
  .great_flag {
    position: relative;
    padding: 7.5rem 5.75rem !important;
    background-color: #def1fb;
    height: 74.125rem !important;
    width: 100%;
  }
  .great_flag_content .content_detail_text {
    width: 33%;
    height: 23.1875rem !important;
    background-color: #fff;
    padding-top: 1rem !important;
    padding-left: 1.5rem !important;
  }
  .great_flag_button {
    margin: auto;
    width: 12.25rem;
    height: 2.9375rem;
    position: absolute;
    top: 44rem;
    left: 50%;
    transform: translateX(-50%);
  }
  .great_flag_title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6.25rem;
  }
  .great_flag_title .h {
    font-size: 2rem !important;
  }
  .great_flag_title .title_right .p {
    display: flex;
    line-height: 4.375rem;
    font-size: 1.1rem !important;
  }
  .great_flag_title .p {
    font-size: 1.2rem !important;
    margin-right: 1.25rem;
  }
  .great_flag_content .bottom_text {
    padding: 1rem 2rem !important;
  }
  .great_flag_content .bottom_text .time {
    font-size: 1rem !important;
  }
  .great_flag_content .bottom_text .hr {
    width: 2.6875rem;
    height: 0.1rem !important;
    margin: 0.25rem 0rem;
  }
  .great_flag_content .bottom_text .p {
    font-size: 0.9rem !important;
  }
  .great_flag_content .content_detail_text .text .title {
    font-size: 1rem !important;
  }
  .great_flag_content .content_detail_text .text .line {
    width: 2.6875rem;
    height: 0.1rem !important;
    margin: 0.25rem 0rem;
  }
  .great_flag_content .content_detail_text .time {
    font-size: 0.9rem !important;
    margin-bottom: 0.7rem !important;
  }
  .great_flag_footer {
    width: 100%;
    position: absolute;
    bottom: -0.4375rem;
    left: 0;
  }
  .great_flag_footer img {
    height: 20rem !important;
    width: 100%;
  }
}
@media (min-width: 700px) and (max-width: 800px) {
  .company_introduction {
    position: relative;
    height: 52rem;
    width: 100%;
    padding: 3.25rem 7rem !important;
  }
  .company_introduction .bg_img {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 56.25rem !important;
    z-index: -100;
  }
  .company_introduction .bg_img img {
    width: 100%;
    height: 56.25rem !important;
  }
  .introduction_title {
    font-size: 2.25rem !important;
    margin-bottom: 3.0625rem !important;
    width: 100%;
  }
  .introduction_small_title {
    font-size: 1.8rem !important;
    margin-bottom: 0.625rem;
    width: 100%;
  }
  .introduction_content {
    width: 100%;
    height: 31.875rem;
    margin-bottom: 8.75rem;
  }
  .introduction_content .text_left {
    width: 50% !important;
    height: 31.875rem;
    margin-right: 3.25rem !important;
    padding-top: 0.8125rem;
  }
  .introduction_content .img_right {
    width: 53% !important;
    height: 60% !important;
    min-width: 25rem;
    transition: ease 0.5s;
  }
  .introduction_content .img_right img {
    width: 100%;
    height: 100%;
  }
  .introduction_content .p {
    font-size: 0.8rem !important;
    line-height: 1.7;
  }
  .introduction_content .p1 {
    margin-bottom: 0.875rem !important;
  }

  .introduction_honor {
    display: flex;
    width: 100%;
    height: 3.5625rem;
    border-right: 0.0625rem solid #fff;
    position: absolute;
    bottom: -4rem;
    left: 0.4rem !important;
    transform: scale(0.9);
  }
  .introduction_honor .honor_info {
    width: 80%;
    margin: auto;
  }
  .introduction_honor .honor_info .p {
    font-size: 1.425rem !important;
    margin-top: -0.625rem;
  }
  .great_flag_content .content_detail {
    width: 32%;
    height: 24.1875rem !important;
    background-color: #ffffff;
    transition: 0.5s;
    cursor: pointer;
  }
  .great_flag {
    position: relative;
    padding: 7.5rem 7.75rem !important;
    background-color: #def1fb;
    height: 74.125rem !important;
    width: 100%;
  }

  .great_flag_content .content_detail_text {
    width: 33%;
    height: 24.1875rem !important;
    background-color: #fff;
    padding-top: 1rem !important;
    padding-left: 1.5rem !important;
  }
  .great_flag_button {
    margin: auto;
    width: 12.25rem;
    height: 2.9375rem;
    position: absolute;
    top: 44rem;
    left: 50%;
    transform: translateX(-50%);
  }
  .great_flag_content{
    margin-bottom: 7rem !important;
  }
  .great_flag_title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6.25rem;
  }
  .great_flag_title .h {
    font-size: 2rem !important;
  }
  .great_flag_title .title_right .p {
    display: flex;
    line-height: 4.375rem;
    font-size: 1.1rem !important;
  }
  .great_flag_title .p {
    font-size: 1.2rem !important;
    margin-right: 1.25rem;
  }
  .great_flag_content .bottom_text {
    padding: 1rem 2rem !important;
  }
  .great_flag_content .bottom_text .time {
    font-size: 1rem !important;
  }
  .great_flag_content .bottom_text .hr {
    width: 2.6875rem;
    height: 0.1rem !important;
    margin: 0.25rem 0rem;
  }
  .great_flag_content .bottom_text .p {
    font-size:1rem !important;
  }
  .great_flag_content .content_detail_text .text .title {
    font-size:1rem !important;
  }
  .great_flag_content .content_detail_text .text .line {
    width: 2.6875rem;
    height: 0.1rem !important;
    margin: 0.25rem 0rem;
  }
  .great_flag_content .content_detail_text .time {
    font-size: 1rem !important;
    margin-bottom: 0.7rem !important;
  }
  .great_flag_footer {
    width: 100%;
    position: absolute;
    bottom: -0.4375rem;
    left: 0;
  }
  .great_flag_footer img {
    height: 20rem !important;
    width: 100%;
  }
}
@media (min-width: 800px) and (max-width: 1000px) {

}
@media (min-width: 1000px) and (max-width: 1200px) {
  .great_flag_content .content_detail {
    width: 32%;
    height: 39rem !important;
    background-color: #ffffff;
    transition: 0.5s;
    cursor: pointer;
  }
  .great_flag {
    position: relative;
    padding: 9.5rem 9.75rem;
    background-color: #def1fb;
    height: 101.125rem !important;
    width: 100%;
  }
  .great_flag_content .content_detail_text {
    width: 33%;
    height: 39rem !important;
    background-color: #fff;
    padding-top: 2rem;
    padding-left: 2.5rem;
  }
  .great_flag_content{
    margin-bottom: 7rem !important;
  }
  .great_flag_content .bottom_text .time {
    font-size: 1.4rem !important;
  }
  .great_flag_content .bottom_text .hr {
    width: 2.6875rem;
    height: 0.1rem !important;
    margin: 0.25rem 0rem;
  }
  .great_flag_content .bottom_text .p {
    font-size: 1.4rem !important;
  }
  .great_flag_content .content_detail_text .text .title {
    font-size: 1.4rem !important;
  }
  .great_flag_content .content_detail_text .text .line {
    width: 2.6875rem;
    height: 0.1rem !important;
    margin: 0.25rem 0rem;
  }
  .great_flag_content .content_detail_text .time {
    font-size: 1.4rem !important;
    margin-bottom: 1.4rem !important;
  }
}
@media (min-width: 1200px) and (max-width: 1400px) {
}
@media (min-width: 1400px) and (max-width: 1600px) {
  .great_flag_content .content_detail {
    width: 32%;
    height: 34rem !important;
    background-color: #ffffff;
    transition: 0.5s;
    cursor: pointer;
  }
  .great_flag {
    position: relative;
    padding: 9.5rem 9.75rem;
    background-color: #def1fb;
    height: 101.125rem !important;
    width: 100%;
  }
  .great_flag_content .content_detail_text {
    width: 33%;
    height: 34rem !important;
    background-color: #fff;
    padding-top: 2rem;
    padding-left: 2.5rem;
  }
  .great_flag_content{
    margin-bottom: 2rem !important;
  }
  .great_flag_content .bottom_text .time {
    font-size: 1。2rem !important;
  }
  .great_flag_content .bottom_text .hr {
    width: 2.6875rem;
    height: 0.1rem !important;
    margin: 0.25rem 0rem;
  }
  .great_flag_content .bottom_text .p {
    font-size: 1.3rem !important;
  }
  .great_flag_content .content_detail_text .text .title {
    font-size: 1.3rem !important;
  }
  .great_flag_content .content_detail_text .text .line {
    width: 2.6875rem;
    height: 0.1rem !important;
    margin: 0.25rem 0rem;
  }
  .great_flag_content .content_detail_text .time {
    font-size: 1.2rem !important;
    margin-bottom: 1.1rem !important;
  }
}
@media (min-width: 1600px) and (max-width: 1800px) {
  .great_flag_content .content_detail {
    width: 32%;
    height: 38rem !important;
    background-color: #ffffff;
    transition: 0.5s;
    cursor: pointer;
  }
  .great_flag {
    position: relative;
    padding: 9.5rem 9.75rem;
    background-color: #def1fb;
    height: 101.125rem !important;
    width: 100%;
  }
  .great_flag_content .content_detail_text {
    width: 33%;
    height: 38rem !important;
    background-color: #fff;
    padding-top: 2rem;
    padding-left: 2.5rem;
  }
  .great_flag_content{
    margin-bottom: 6rem !important;
  }
  .great_flag_content .bottom_text .time {
    font-size: 1。2rem !important;
  }
  .great_flag_content .bottom_text .hr {
    width: 2.6875rem;
    height: 0.1rem !important;
    margin: 0.25rem 0rem;
  }
  .great_flag_content .bottom_text .p {
    font-size: 1.3rem !important;
  }
  .great_flag_content .content_detail_text .text .title {
    font-size: 1.3rem !important;
  }
  .great_flag_content .content_detail_text .text .line {
    width: 2.6875rem;
    height: 0.1rem !important;
    margin: 0.25rem 0rem;
  }
  .great_flag_content .content_detail_text .time {
    font-size: 1.3rem !important;
    margin-bottom: 1 !important;
  }
}
@media (min-width: 2100px) and (max-width: 2300px) {
  .great_flag_content .content_detail {
    width: 32%;
    height: 32rem !important;
    background-color: #ffffff;
    transition: 0.5s;
    cursor: pointer;
  }
  .great_flag {
    position: relative;
    padding: 9.5rem 9.75rem;
    background-color: #def1fb;
    height: 101.125rem !important;
    width: 100%;
  }
  .great_flag_content .content_detail_text {
    width: 33%;
    height: 32rem !important;
    background-color: #fff;
    padding-top: 2rem;
    padding-left: 2.5rem;
  }
  .great_flag_content{
    margin-bottom: 2rem !important;
  }
  .great_flag_content .bottom_text .time {
    font-size: 1。2rem !important;
  }
  .great_flag_content .bottom_text .hr {
    width: 2.6875rem;
    height: 0.1rem !important;
    margin: 0.25rem 0rem;
  }
  .great_flag_content .bottom_text .p {
    font-size: 1.1rem !important;
  }
  .great_flag_content .content_detail_text .text .title {
    font-size: 1.1rem !important;
  }
  .great_flag_content .content_detail_text .text .line {
    width: 2.6875rem;
    height: 0.1rem !important;
    margin: 0.25rem 0rem;
  }
  .great_flag_content .content_detail_text .time {
    font-size: 1。2rem !important;
    margin-bottom: 0.8rem !important;
  }
}
@media (min-width: 5000px) and (max-width: 8000px) {
  .great_flag_content .content_detail {
    width: 32%;
    height: 40rem !important;
    background-color: #ffffff;
    transition: 0.5s;
    cursor: pointer;
  }
  .great_flag {
    position: relative;
    padding: 9.5rem 9.75rem;
    background-color: #def1fb;
    height: 101.125rem !important;
    width: 100%;

  }
  .great_flag_content{
    margin-bottom: 8rem !important;
  }
  .great_flag_content .content_detail_text {
    width: 33%;
    height: 40rem !important;
    background-color: #fff;
    padding-top: 3rem;
    padding-left: 2.5rem;
  }

}
@media (min-width: 2300px) and (max-width: 2600px) {
  .great_flag_content .content_detail {
    width: 32%;
    height: 36rem !important;
    background-color: #ffffff;
    transition: 0.5s;
    cursor: pointer;
  }
  .content_detail .bottom_text{
    padding: 1rem 2rem !important;
  }
  .great_flag {
    position: relative;
    padding: 9.5rem 9.75rem;
    background-color: #def1fb;
    height: 101.125rem !important;
    width: 100%;
  }
  .great_flag_content .content_detail_text {
    width: 33%;
    height: 36rem !important;
    background-color: #fff;
    padding-top: 3rem;
    padding-left: 2.5rem;
  }
  .great_flag_content{
    margin-bottom: 5rem !important;
  }
}
@media (min-width: 2600px) and (max-width: 3000px) {
  .great_flag_content .content_detail {
    width: 32%;
    height: 32rem !important;
    background-color: #ffffff;
    transition: 0.5s;
    cursor: pointer;
  }
  .content_detail .bottom_text{
    padding: 1rem 2rem !important;
  }
  .great_flag {
    position: relative;
    padding: 9.5rem 9.75rem;
    background-color: #def1fb;
    height: 101.125rem !important;
    width: 100%;
  }
  .great_flag_content .content_detail_text {
    width: 33%;
    height: 32rem !important;
    background-color: #fff;
    padding-top: 2rem;
    padding-left: 2.5rem;
  }
  .great_flag_content{
    margin-bottom: 5rem !important;
  }
  .great_flag_content .bottom_text .time {
    font-size: 1。2rem !important;
  }
  .great_flag_content .bottom_text .hr {
    width: 2.6875rem;
    height: 0.1rem !important;
    margin: 0.25rem 0rem;
  }
  .great_flag_content .bottom_text .p {
    font-size: 1.1rem !important;
  }
  .great_flag_content .content_detail_text .text .title {
    font-size: 1.1rem !important;
  }
  .great_flag_content .content_detail_text .text .line {
    width: 2.6875rem;
    height: 0.1rem !important;
    margin: 0.25rem 0rem;
  }
  .great_flag_content .content_detail_text .time {
    font-size: 1。2rem !important;
    margin-bottom: 0.8rem !important;
  }
}

.introduction_title {
  font-size: 2.75rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(0, 0, 0);
  margin-bottom: 4.0625rem;
  width: 100%;
}
.introduction_small_title {
  font-size: 2.25rem;
  margin-bottom: 0.625rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(0, 0, 0);
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
  border-top: 0.0625rem solid #313a3d;
  padding-top: 0.8125rem;
}
.introduction_content .img_right {
  width: 55%;
  height: 100%;
  min-width: 25rem;
  transition: ease 0.5s;
}
.introduction_content .img_right:hover {
  transform: scale(1.04);
  box-shadow: 0 0.375rem 0.625rem rgba(0, 0, 0, 0.488); /* 悬浮时显示黑色阴影 */
}
.introduction_content .img_right img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 实现图片等比例缩放 */
  min-width: 25rem;
}
.introduction_content .p {
  font-size: 1.25rem;
  font-family: "AlibabaPuHuiTi_2_45_Light";
  color: rgb(89, 87, 87);
  line-height: 1.7;
}
.introduction_content .p1 {
  margin-bottom: 1.875rem;
}

.introduction_honor {
  margin-bottom: 7.375rem;
  display: flex;
  width: 100%;
  height: 3.5625rem;
  border-right: 0.0625rem solid #fff;
}
.introduction_honor .honor_info {
  width: 100%;
  border-left: 0.0625rem solid #fff;
  text-align: center;
  margin: auto;
}
.introduction_honor .honor_info .p {
  font-size: 1.625rem;
  font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
  color: rgb(255, 255, 255);
  margin-top: -0.625rem;
}
.great_flag {
  position: relative;
  padding: 9.5rem 9.75rem;
  background-color: #def1fb;
  height: 92.125rem;
  width: 100%;
}
.great_flag_title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6.25rem;
}
.great_flag_title .h {
  font-size: 2.75rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: rgb(35, 24, 21);
}
.great_flag_title .title_right {
  display: flex;
  line-height: 4.375rem;
}
.great_flag_title .p {
  font-size: 1.5rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular", sans-serif;
  color: #595757;
  margin-right: 1.25rem;
}
.great_flag_title .p:hover {
  color: #006fc1;
  cursor: pointer;
}
.great_flag_content {
  width: 100%;
  height: 36.1875rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: 4.5625rem;
}
.great_flag_content .content_detail {
  width: 32%;
  height: 36.1875rem;
  background-color: #ffffff;
  transition: 0.5s;
  cursor: pointer;
  overflow: hidden;
}
.great_flag_content .content_detail:hover {
  transform: scale(0.99);
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.286); /* 悬浮时显示黑色阴影 */
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
  font-size: 1.25rem;
  font-family: "AvenirNext";
  color: rgb(34, 56, 147);
}
.great_flag_content .bottom_text .hr {
  width: 2.6875rem;
  height: 0.125rem;
  background-color: rgb(34, 56, 147);
  margin: 0.25rem 0rem;
}
.great_flag_content .bottom_text .p {
  font-size: 1.375rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular", sans-serif;
  color: rgb(89, 87, 87);
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
  bottom: -0.4375rem;
  left: 0;
}
.great_flag_footer img {
  height: 26.25rem;
  width: 100%;
}
.great_flag_content .content_detail_text {
  width: 33%;
  height: 35.9375rem;
  background-color: #fff;
  padding-top: 3rem;
  padding-left: 2.5rem;
  transition: 0.5s;
  cursor: pointer;
}
.great_flag_content .content_detail_text:hover {
  transform: scale(0.99);
  box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.286); /* 悬浮时显示黑色阴影 */
}
.great_flag .top_img img {
  height: 23.25rem;
  height: 23.25rem;
  background-size: cover;
}
.great_flag_content .content_detail_text .text .title {
  font-size: 1.375rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular";
  color: rgb(89, 87, 87);
}
.great_flag_content .content_detail_text .text .title:hover {
  color: rgb(34, 56, 147);
}
.great_flag_content .content_detail_text .text .line {
  width: 2.6875rem;
  height: 0.125rem;
  background-color: rgb(34, 56, 147);
  margin: 0.25rem 0rem;
}
.great_flag_content .content_detail_text .time {
  font-size: 1.25rem;
  font-family: "AvenirNext";
  color: rgb(34, 56, 147);
  margin-bottom: 1.75rem;
}
</style>
