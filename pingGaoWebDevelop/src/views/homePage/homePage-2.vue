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
  const visibleItems = 3;
  let currentIndex = 0;
  let isAnimating = false;

  // 确保元素存在
  if (!container || !leftIcon || !rightIcon) {
    console.error("One or more required elements not found.");
    return;
  }

  // 添加CSS过渡
  container.style.transition = "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)";

  function updateCarousel() {
    if (isAnimating) return;
    isAnimating = true;

    // 计算位移百分比（每个项目占33.333%）
    const translateX = -currentIndex * (100 / visibleItems / 1.07);
    container.style.transform = `translateX(${translateX}%)`;

    // 重置动画状态
    setTimeout(() => {
      isAnimating = false;
    }, 500);
  }

  function nextSlide1() {
    if (currentIndex >= itemCount - visibleItems) {
      // 到达最后时回到第一个
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    updateCarousel();
    console.log(111); // 确保这行代码能够执行
  }

  function prevSlide1() {
    if (currentIndex <= 0) {
      // 到达第一个时跳到最后
      currentIndex = itemCount - visibleItems;
    } else {
      currentIndex--;
    }
    updateCarousel();
  }

  // 添加按钮事件
  rightIcon.addEventListener("click", nextSlide1);
  leftIcon.addEventListener("click", prevSlide1);
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
    // 当滚动距离超过第一个容器的宽度时重置
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
      <ComHeader :onlyHeaderFlag="true"></ComHeader>
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
    <hr style="border: 1px solid #80b7e0" />
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
        <div class="button_left">了解更多</div>
        <div class="button_right"><span class="icon iconfont">&#xe6a3;</span></div>
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
  width: 100%;
  z-index: 10;
  position: relative;
}

.header {
  height: 68vh;
  // min-width: 1920px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
}
.my_carousel {
  width: 100%;
  height: 990px;
  position: relative;
}
.my_carousel .carousel {
  width: 100%;
  height: 990px;
  overflow: hidden;
}
.my_carousel .carousel img {
  width: 100%;
  height: 990px;
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
  bottom: 30px;
  width: 100%;
  align-items: center;
}
.dots li {
  width: 118px;
  height: 3px;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
}
.dots .active {
  background-color: rgb(189, 206, 255);
}
.nav {
  width: 100%;
  height: 103px;
  background-color: #45b3e0;
  padding: 30px 164px;
}
.nav_content {
  width: 100%;
  height: 40px;
  border-right: 1px solid #fff;
  display: flex;
  justify-content: space-between;
  margin: auto;
}
.nav_introduction {
  width: 100%;
  height: 40px;
  border-left: 1px solid #fff;
  text-align: center;
  margin: auto;
}

.nav_introduction .p {
  font-size: 24px;
  font-family: "AlibabaPuHuiTi_2_55_Regular";
  color: rgb(255, 255, 255);
  // text-align: center;
  transition: 0.3s;
}
.nav_introduction .p:hover {
  font-size: 26px;
}
.announcement {
  display: flex;
  height: 78px;
  line-height: 78px;
  margin-left: 160px;
}
.announcement_icon {
  color: #338bcd;
}
.announcement_icon .iconfont {
  font-size: 29px;
  font-weight: 600;
}
.announcement_title {
  font-size: 22px;
  font-family: "AlibabaPuHuiTi_2_55_Regular", sans-serif;
  color: rgb(0, 111, 193);
  margin-left: 6px;
  margin-right: 12px;
}
.announcement_text {
  flex: 0.908;
  overflow: hidden;
}

.scroll-container {
  width: 100%;
  white-space: nowrap;
  display: flex;
  font-size: 22px;
  font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
  color: rgb(89, 87, 87);
}

.scroll-content {
  display: inline-flex;
  animation: marquee 140s linear infinite;
}

.pad_right {
  padding-right: 50px; /* 创建间隔避免文字粘连 */
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
  height: 922px;
  display: flex;
  padding-top: 80px;
  position: relative;
  justify-content: space-evenly;
  margin-bottom: 40px;
}

.product_box {
  /* overflow: hidden; */
  width: 94%;
  min-width: 1920px;
  margin: auto;
  padding-left: 30px;
  padding-right: 70px;
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
  height: 700px;
  margin: 10px;
  color: white;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.product_topImg {
  position: relative;
  width: 420px;
  height: 420px;
  margin: auto;
  cursor: pointer;
  z-index: 1000;
}
.product_topImg img {
  margin-left: -5px;
  margin: auto;
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
  font-size: 40px;
  font-family: "AlibabaPuHuiTi_2_55_Regular", sans-serif;
  color: rgb(0, 111, 193);
  text-align: center;
}

.product_hr {
  width: 106px;
  height: 2px;
  background-color: #2081c9;
  text-align: center;
  margin: 20px 0px;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 15px;
}

.product_p {
  width: 346px;
  height: 72px;
  font-size: 20px;
  font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
  color: rgb(89, 87, 87);
  text-align: center;
  margin: auto;
}

.product_button {
  width: 139px;
  height: 32px;
  margin: auto;
  text-align: center;
  background-image: url("@/assets/imgs/_10_homePageImgs/button.png");
  margin-top: 30px;
  transition: all 0.3s ease;
  cursor: pointer;
}
.product_button:hover {
  transform: scale(1.1);
  /* translate(0, -5px) 使文字在Y轴方向向上移动5px，scale(1.1) 使文字放大到原来的1.1倍 */
  color: #58ffa9;
  /* 改变文字颜色 */
}
.product_button span {
  font-size: 18px;
  line-height: 32px;
  font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
  color: rgb(0, 111, 193);
}
.left_icon .icon {
  top: 320px;
  left: 60px;
  position: absolute;
  font-size: 70px;
  color: #006fc1;
  z-index: 100;
  cursor: pointer;
}
.right_icon .icon {
  position: absolute;
  font-size: 70px;
  top: 320px;
  right: 50px;
  color: #006fc1;
  z-index: 100;
  cursor: pointer;
}
.company_introduction {
  position: relative;
  height: 1140px;
  width: 100%;
  padding: 100px 160px;
  background-size: cover; /* 实现图片等比例缩放 */
  background-repeat: no-repeat;
}
.company_introduction .bg_img {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 1140px;
  z-index: -100;
}
.company_introduction .bg_img img {
  width: 100%;
  height: 1140px;
}
.introduction_title {
  font-size: 44px;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(0, 0, 0);
  margin-bottom: 65px;
  width: 100%;
}
.introduction_small_title {
  font-size: 36px;
  margin-bottom: 10px;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(0, 0, 0);
  width: 100%;
}
.introduction_content {
  width: 100%;
  height: 510px;
  display: flex;
  margin-bottom: 140px;
  object-fit: cover;
}
.introduction_content .text_left {
  width: 45%;
  height: 510px;
  margin-right: 100px;
  border-top: 1px solid #313a3d;
  padding-top: 13px;
}
.introduction_content .img_right {
  width: 55%;
  height: 100%;
  min-width: 400px;
}
.introduction_content .img_right img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 实现图片等比例缩放 */
  min-width: 400px;
}
.introduction_content .p {
  font-size: 20px;
  font-family: "AlibabaPuHuiTi_2_45_Light";
  color: rgb(89, 87, 87);
  line-height: 1.7;
}
.introduction_content .p1 {
  margin-bottom: 30px;
}

.introduction_honor {
  margin-bottom: 118px;
  display: flex;
  width: 100%;
  height: 57px;
  border-right: 1px solid #fff;
}
.introduction_honor .honor_info {
  width: 100%;
  border-left: 1px solid #fff;
  text-align: center;
  margin: auto;
}
.introduction_honor .honor_info .p {
  font-size: 26px;
  font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
  color: rgb(255, 255, 255);
  margin-top: -10px;
}
.great_flag {
  position: relative;
  padding: 152px 156px;
  background-color: #def1fb;
  height: 1474px;
  width: 100%;
}
.great_flag_title {
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
}
.great_flag_title .h {
  font-size: 44px;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: rgb(35, 24, 21);
}
.great_flag_title .title_right {
  display: flex;
  line-height: 70px;
}
.great_flag_title .p {
  font-size: 24px;
  font-family: "AlibabaPuHuiTi_2_55_Regular", sans-serif;
  color: #595757;
  margin-right: 20px;
}
.great_flag_title .p:hover {
  color: #006fc1;
  cursor: pointer;
}
.great_flag_content {
  width: 100%;
  height: 579px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 73px;
}
.great_flag_content .content_detail {
  width: 32%;
  height: 575px;
  background-color: #ffffff;
  transition: 0.5s;
  cursor: pointer;
}
.great_flag_content .content_detail:hover {
  transform: scale(0.99);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.286); /* 悬浮时显示黑色阴影 */
}

.great_flag_content .bottom_text {
  padding: 36px 40px;
}
.great_flag_content .bottom_text .time {
  font-size: 20px;
  font-family: "AvenirNext";
  color: rgb(34, 56, 147);
}
.great_flag_content .bottom_text .hr {
  width: 43px;
  height: 2px;
  background-color: rgb(34, 56, 147);
  margin: 4px 0px;
}
.great_flag_content .bottom_text .p {
  font-size: 22px;
  font-family: "AlibabaPuHuiTi_2_55_Regular", sans-serif;
  color: rgb(89, 87, 87);
}
.great_flag_button {
  margin: auto;
  width: 196px;
  height: 47px;
  background-color: #ffffff;
  display: flex;
  transition: transform 0.3s ease;
}
.button_left {
  width: 150px;
  height: 100%;
  line-height: 47px;
  font-size: 18px;
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
  line-height: 47px;
  text-align: center;
}
.great_flag_button .icon {
  font-size: 30px;
  color: #006fc1;
  margin-left: 8px;
}
.great_flag_footer {
  width: 100%;
  position: absolute;
  bottom: -7px;
  left: 0;
}
.great_flag_footer img {
  height: 420px;
  width: 100%;
}
.great_flag_content .content_detail_text {
  width: 33%;
  height: 575px;
  background-color: #fff;
  padding-top: 48px;
  padding-left: 40px;
  transition: 0.5s;
  cursor: pointer;
}
.great_flag_content .content_detail_text:hover {
  transform: scale(0.99);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.286); /* 悬浮时显示黑色阴影 */
}
.great_flag .top_img img {
  width: 100%;
  height: 372px;
  background-size: cover;
}
.great_flag_content .content_detail_text .text .title {
  font-size: 22px;
  font-family: "AlibabaPuHuiTi_2_55_Regular";
  color: rgb(89, 87, 87);
}
.great_flag_content .content_detail_text .text .line {
  width: 43px;
  height: 2px;
  background-color: rgb(34, 56, 147);
  margin: 4px 0px;
}
.great_flag_content .content_detail_text .time {
  font-size: 20px;
  font-family: "AvenirNext";
  color: rgb(34, 56, 147);
  margin-bottom: 28px;
}
</style>
