<script setup>
import { onMounted, ref } from "vue";

import imgPath from "@/assets/imgs/common/headerHoverBg-1.png";
import imgPath1 from "@/assets/imgs/_1_aboutPinggaoImgs/头部轮播-01.png";
import imgPath2 from "@/assets/imgs/_2_informationCenterImgs/头部轮播-02.png";
// import imgPath3 from "@/assets/imgs/_3_partyBuildingImgs/头部轮播-03.png";
import imgPath4 from "@/assets/imgs/_4_productEngineeringImgs/头部轮播-04.png";
import imgPath5 from "@/assets/imgs/_5_marketingServiceImgs/头部轮播-05.png";
import imgPath6 from "@/assets/imgs/_6_qualityAssuranceImgs/头部轮播-06.png";
import imgPath7 from "@/assets/imgs/_7_scientificResearchCenterImgs/头部轮播-07.png";
import imgPath8 from "@/assets/imgs/_8_humanResourcesImgs/头部轮播-08.png";
import imgPath9 from "@/assets/imgs/_9_contactUsImgs/头部轮播-09.png";
import footerBg from "@/assets/imgs/_6_qualityAssuranceImgs/t6_topBar.png";
import logoBig1 from "@/assets/imgs/common/logoImgAll.png";
import logoBig2 from "@/assets/imgs/common/logoImgAllBlack.png";
import logoSmall1 from "@/assets/imgs/common/logoImg.png";
import logoSmall2 from "@/assets/imgs/common/logoImgBlack.png";
import { useLanguageStore } from "@/stores/languageStores";
import { storeToRefs } from "pinia";

let hidden = ref(true);
let inputFlag = ref(false);
let searchFlag = ref(false);
let headerBottomFlag = ref(false);
let showText = ref(false);
let imgFixed = ref(false);
let logoImg1 = ref(logoBig1);
let logoImg2 = ref(logoBig2);

let moveFlag = ref(false);

const header = ref([
  { name: "关于平高", path: "/aboutPingGao" },
  { name: "资讯中心", path: "/informationCenter" },
  // { name: "党的建设", path: "/partyBuilding" },
  { name: "产品工程", path: "/productEngineering" },
  { name: "营销服务", path: "/marketingService" },
  { name: "品质保障", path: "/qualityAssurance" },
  { name: "科研中心", path: "/scientificResearchCenter" },
  { name: "人力资源", path: "/humanResources" },
  { name: "联系我们", path: "/contactUs" },
]);

const headerEnglish = ref([
  { name: "HOME", path: "/home" },
  { name: "CORE PRODUCTS", path: "/productEngineering/productSeriesEng" },
  { name: "ABOUT US", path: "/aboutUs" },
  { name: "NEWS", path: "/news/news" },
  { name: "CONTACT US", path: "/contactUsEn" },
]);

const allContent = ref([
  {
    content: {
      title: "关于平高",
      content: "赋能智慧电气·创引绿色能源",
      footer: "PG GROUP",
      imgPath: imgPath1,
    },
    footer: [
      { name: "集团简介", path: "/aboutPinggao/groupProfile" },
      { name: "领导成员", path: "/aboutPinggao/lesadingMember" },
      { name: "组织机构", path: "/aboutPinggao/organizationalStructure" },
      { name: "资质荣誉", path: "/aboutPinggao/seniorHonor" },
      { name: "走进平高", path: "/aboutPinggao/approachPinggao" },
    ],
  },
  {
    content: {
      title: "资讯中心",
      content: "电气技术引领者·能源革命推动者·绿色发展践行者",
      footer: "PG GROUP",
      imgPath: imgPath2,
    },
    footer: [
      { name: "总部动态", path: "/informationCenter/headquartersDynamicsIndex" },
      { name: "集团新闻", path: "/informationCenter/groupNewsIndex" },
      { name: "媒体聚焦", path: "/informationCenter/mediaFocusIndex" },
      { name: "热点视频", path: "/informationCenter/hotVideo" },
      { name: "最新公告", path: "/informationCenter/latestAnnouncementIndex" },
    ],
  },
  // {
  //   content: {
  //     title: "党的建设",
  //     content: "高举中国特色社会主义伟大旗帜",
  //     footer: "PG GROUP",
  //     imgPath: imgPath3,
  //   },
  //   footer: [
  //     {
  //       name: "党的精神",
  //       path: "/partyBuilding/partySpirit/index",
  //     },
  //     {
  //       name: "平高党建",
  //       path: "/partyBuilding/pinggaoPartyBuilding/index",
  //     },
  //   ],
  // },
  {
    content: {
      title: "产品工程",
      content: "建设世界一流智慧电气装备集团",
      footer: "PG GROUP",
      imgPath: imgPath4,
    },
    footer: [
      { name: "产品系列", path: "/productEngineering/productSeries" },
      { name: "重点工程", path: "/productEngineering/keyProject" },
    ],
  },
  {
    content: {
      title: "营销服务",
      content: "始于客户需求·为客户创造价值",
      footer: "PG GROUP",
      imgPath: imgPath5,
    },
    footer: [
      {
        name: "服务承诺",
        path: "/marketingService/performancePledge",
      },
      {
        name: "营销组织",
        path: "/marketingService/markingOrganization",
      },
      {
        name: "服务网络",
        path: "/marketingService/serviceNetWork",
      },
    ],
  },
  {
    content: {
      title: "品质保障",
      content: "追求卓越·争创一流",
      footer: "PG GROUP",
      imgPath: imgPath6,
    },
    footer: [
      {
        name: "质量体系",
        path: "/qualityAssurance/qualitySystem",
      },
      {
        name: "生产制造",
        path: "/qualityAssurance/manufacturing",
      },
      {
        name: "产品检测",
        path: "/qualityAssurance/productTesting",
      },
    ],
  },
  {
    content: {
      title: "科研中心",
      content: "电工行业重大技术装备支柱企业",
      footer: "PG GROUP",
      imgPath: imgPath7,
    },
    footer: [
      { name: "科研体系", path: "/scientificResearchCenter/scientificResearchSystem" },
      { name: "科研成果", path: "/scientificResearchCenter/scientificResearchAchievement" },
      { name: "试验体系", path: "/scientificResearchCenter/testSystem" },
    ],
  },
  {
    content: {
      title: "人力资源",
      content: "人才强企战略是集团发展战略之一",
      footer: "PG GROUP",
      imgPath: imgPath8,
    },
    footer: [
      {
        name: "人才队伍",
        path: "/humanResources/talentTeam",
      },
      {
        name: "人才开发",
        path: "/humanResources/talentDevelopment",
      },
      {
        name: "人才招聘",
        path: "/humanResources/talentRecruitment",
      },
      {
        name: "博士后工作站",
        path: "/humanResources/postdoctoralWorkstation",
      },
    ],
  },
  {
    content: {
      title: "联系我们",
      content: "改革·创新·团结·奋斗·实干",
      footer: "PG GROUP",
      imgPath: imgPath9,
    },
    footer: [
      {
        name: "招标采购",
        path: "/contactUs/purchaseByBidding",
      },
      {
        name: "成为伙伴",
        path: "/contactUs/becomePartner",
      },
      {
        name: "业务咨询",
        path: "/contactUs/businessConsulting",
      },
      {
        name: "地址电话",
        path: "/contactUs/addressTelephone",
      },
    ],
  },
]);
let hoverText = ref({
  content: {
    title: "关于平高",
    content: "赋能智慧电气·创引绿色能源",
    footer: "PG GROUP",
    imgPath: imgPath1,
  },
  footer: [
    { name: "总部动态", path: "/informationCenter/headquartersDynamicsIndex" },
    { name: "集团新闻", path: "/informationCenter/groupNewsIndex" },
    { name: "媒体聚焦", path: "/informationCenter/mediaFocusIndex" },
    { name: "热点视频", path: "/informationCenter/hotVideo" },
    { name: "最新公告", path: "/informationCenter/latestAnnouncementIndex" },
  ],
});
// 悬浮下框内容显示
function hoverContent(name) {
  hidden.value = false;
  allContent.value.forEach((item) => {
    if (item.content.title === name) {
      hoverText.value = item;
    }
  });
}

// let moveNavBodyItemUl = ref(null);
// function changeMoveNavBodyItemUl(name) {
//   allContent.value.forEach((item) => {
//     if (item.content.title === name) {
//       moveNavBodyItemUl.value = item.footer;
//     }
//   });
// }

let moveShowUl = ref([]);
function changeMoveShowUl(index) {
  moveShowUl.value[index] = !moveShowUl.value[index];
}

const props = defineProps({
  content: {
    type: Object,
    default: () => ({
      title: "资讯中心",
      titleEn: "NEWS",
      content: "电气技术引领者·能源革命推动者·绿色发展践行者",
      contentEn:
        "Electrical technology leader, energy revolution promoter, and green development practitioner",
      footer: "PG GROUP",
      imgPath: imgPath2,
      footerBg: footerBg,
    }),
  },
  footer: {
    type: Array,
    default: () => [
      { name: "总部动态", path: "/informationCenter/headquartersDynamicsIndex" },
      { name: "集团新闻", path: "/informationCenter/groupNewsIndex" },
      { name: "媒体聚焦", path: "/informationCenter/mediaFocusIndex" },
      { name: "热点视频", path: "/informationCenter/hotVideo" },
      { name: "最新公告", path: "/informationCenter/latestAnnouncementIndex" },
    ],
  },
  onlyHeaderFlag: {
    type: Boolean,
    default: false,
  },
  footerImg: {
    type: String,
    default: "",
  },
  css: {
    type: Object,
    default: () => ({
      fontColor: "#fff",
      footerColor: "#fff",
    }),
  },
  footerBgColor: {
    type: String,
    default: "#1dc2ff",
  },
});

// 语言切换
const langStore = useLanguageStore();
const { currentLang: language } = storeToRefs(langStore);

// 切换语言跳转相应首页
const goHome = (type = 0) => {
  if (type === 0) {
    langStore.toggleLanguage(language.value === "zh-CN" ? "en-US" : "zh-CN");
  }
  const homePath = language.value === "zh-CN" ? "/homePage-2" : "/home";
  window.location.href = homePath; // 这会完全刷新页面
};

const headerNavBottomRightBox = ref(null);
const moveNav = ref(null);

onMounted(() => {
  function handleResize() {
    if (window.innerWidth < 900) {
      // 如果窗口宽度小于900px，切换到小图片
      logoImg1.value = logoSmall1;
      logoImg2.value = logoSmall2;
      // 隐藏导航栏底部
      if (headerNavBottomRightBox.value) headerNavBottomRightBox.value.style.display = "none";
    } else {
      // 否则，切换回大图片
      logoImg1.value = logoBig1;
      logoImg2.value = logoBig2;
      // 显示导航栏底部
      if (headerNavBottomRightBox.value) headerNavBottomRightBox.value.style.display = "flex";
      // 隐藏移动端导航栏
      if (moveNav.value) moveNav.value.style.display = "none";
    }
  }

  // 模拟延迟显示，触发过渡效果
  setTimeout(() => {
    showText.value = true;
  }, 0);

  // 获取导航栏元素
  const navbar = document.getElementById("header-nav");
  // 定义滚动距离阈值
  const scrollThreshold = 5;

  // 监听窗口滚动事件
  window.addEventListener("scroll", function () {
    // 获取当前滚动距离
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    // 判断滚动距离是否超过阈值
    if (scrollTop > scrollThreshold) {
      // 超过阈值则添加固定类名
      navbar.classList.add("background-white");
      imgFixed.value = true;
    } else {
      // 未超过阈值则移除固定类名
      if (hidden.value && !headerBottomFlag.value) navbar.classList.remove("background-white");
      imgFixed.value = false;
    }
    console.log(imgFixed.value);
  });

  //监听窗口大小变化事件
  handleResize();
  window.addEventListener("resize", handleResize);
});
</script>

<template>
  <div
    id="header"
    :style="{
      '--footerImg': props.footerImg,
      '--fontColor': props.css.fontColor,
      '--footerColor': props.css.footerColor,
    }"
  >
    <div class="header-nav-box">
      <div
        id="header-nav"
        @mouseenter="headerBottomFlag = true"
        @mouseleave="headerBottomFlag = false"
        :class="{ 'background-white': imgFixed || headerBottomFlag || !hidden }"
      >
        <div class="log-img">
          <div class="logo-link" @click="goHome(1)">
            <img
              ref="logo1"
              v-show="!headerBottomFlag && !imgFixed && hidden"
              :src="logoImg1"
              alt=""
            />
            <img
              ref="logo2"
              v-show="imgFixed || headerBottomFlag || !hidden"
              :src="logoImg2"
              alt=""
            />
          </div>

          <div id="header-nav-top">
            <!-- <div class="log-title">
            <div class="log-title-text">中国电气装备</div>
            <div class="log-title-english">China Electrical Equipment</div>
            </div> -->
            <div class="header-nav-top-bar">
              <i
                class="iconfont icon-liebiao2 bar-icon"
                @click="moveFlag = !moveFlag"
                v-show="!moveFlag"
              ></i>
              <ul class="header-nav-top-bar-ul">
                <li v-for="item in language === 'zh-CN' ? header : headerEnglish" :key="item.name">
                  <router-link
                    active-class="active-color"
                    @mouseenter="hoverContent(item.name)"
                    :to="item.path"
                    >{{ item.name }}</router-link
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="header-nav-bottom">
            <!-- <div id="header-nav-bottom-left">
            <div class="log-bottom-text">平 高 集 团 有 限 公 司</div>
            <div class="log-bottom-english">PINGGAO GROUP CO.,LTD.</div>
          </div> -->
            <div
              v-if="language === 'zh-CN'"
              ref="headerNavBottomRightBox"
              id="header-nav-bottom-right"
            >
              <div
                @mouseleave="inputFlag = false"
                v-show="inputFlag"
                class="header-nav-bottom-item"
              >
                <i class="iconfont icon-sousuo"></i>
                <input
                  class="header-nav-bottom-input"
                  type="text"
                  @keydown.enter="searchFlag = true"
                  placeholder="输入关键词"
                />
              </div>
              <div
                v-show="!inputFlag"
                @mouseenter="
                  () => {
                    inputFlag = true;
                    // hidden = true;
                  }
                "
                class="header-nav-bottom-item"
              >
                搜索
                <i class="iconfont icon-sousuo" style="font-size: 1.125rem" />
              </div>
              <router-link active-class="active-border" to="/contactUs/addressTelephone">
                <div class="header-nav-bottom-item">
                  邮箱
                  <i class="iconfont icon-youxiang" style="font-size: 1.125rem" />
                </div>
              </router-link>

              <div class="header-nav-bottom-item" @click="goHome(0)">
                CN
                <i class="iconfont icon-repeat" style="font-size: 1.125rem"></i>
              </div>
            </div>
            <div
              v-else-if="language === 'en-US'"
              ref="headerNavBottomRightBox"
              id="header-nav-bottom-right"
            >
              <div
                @mouseleave="inputFlag = false"
                v-show="inputFlag"
                class="header-nav-bottom-item"
              >
                <i class="iconfont icon-sousuo"></i>
                <input
                  class="header-nav-bottom-input"
                  type="text"
                  @keydown.enter="searchFlag = true"
                  placeholder="Enter keywords"
                />
              </div>
              <div
                v-show="!inputFlag"
                @mouseenter="
                  () => {
                    inputFlag = true;
                    // hidden = true;
                  }
                "
                class="header-nav-bottom-item"
              >
                Search
                <i class="iconfont icon-sousuo" style="font-size: 1.125rem" />
              </div>
              <router-link active-class="active-border" to="/contactUs/addressTelephone">
                <div class="header-nav-bottom-item">
                  Email
                  <i class="iconfont icon-youxiang" style="font-size: 1.125rem" />
                </div>
              </router-link>

              <div class="header-nav-bottom-item" @click="goHome(0)">
                EN
                <i class="iconfont icon-repeat" style="font-size: 1.125rem"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="header-nav-hover-box">
        <div
          @mouseleave="hidden = true"
          class="header-nav-hover-content"
          :class="{ hidden: language === 'en-US' || hidden }"
        >
          <div
            style="width: 100%; height: 100%; background-size: cover; display: flex"
            :style="{ 'background-image': `url(${imgPath})` }"
          >
            <div class="header-nav-hover-content-left">
              <div class="header-nav-hover-content-title">
                {{ hoverText.content.title }}
              </div>
              <hr style="display: inline-block; width: 5%; border: 0.1rem solid rgb(35, 24, 21)" />
              <div class="header-nav-hover-content-text">
                {{ hoverText.content.content }}
              </div>
              <div class="header-nav-hover-content-english">
                {{ hoverText.content.footer }}
              </div>
            </div>
            <div class="header-nav-hover-content-right">
              <div class="right-left">
                <ul>
                  <li v-for="item in hoverText.footer" :key="item.name">
                    <router-link active-class="active-color" :to="item.path">{{
                      item.name
                    }}</router-link>
                  </li>
                </ul>
              </div>
              <div class="right-right">
                <div>
                  <img :src="hoverText.content.imgPath" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="header-nav-search-content"
          @mouseleave="searchFlag = false"
          :class="{ hidden: !searchFlag }"
        >
          <div
            style="width: 100%; height: 100%; background-size: cover; display: flex"
            :style="{ 'background-image': `url(${imgPath})` }"
          >
            <div class="header-nav-search-content-left">
              <div class="header-nav-search-content-title">
                {{ language === "zh-CN" ? "搜索结果" : "SEARCH RESULT" }}
              </div>
              <hr style="display: inline-block; width: 5%; border: 0.1rem solid rgb(35, 24, 21)" />
              <div class="header-nav-search-content-text">
                {{
                  language === "zh-CN"
                    ? hoverText.content.content
                    : "Empowering Smart Electrical and"
                }}
              </div>
              <div class="header-nav-search-content-english">
                {{ language === "zh-CN" ? hoverText.content.footer : "Creating Green Energy" }}
              </div>
            </div>
            <div class="header-nav-search-content-right">
              <div class="header-nav-search-content-right-title">
                <ul>
                  <li>{{ language === "zh-CN" ? "全部" : "ALL" }}</li>
                  <li>{{ language === "zh-CN" ? "新闻" : "NEWS" }}</li>
                  <li>{{ language === "zh-CN" ? "产品" : "PRODUCT" }}</li>
                  <li v-show="language === 'zh-CN'">招聘</li>
                </ul>
              </div>
              <div class="header-nav-search-content-right-content">
                <ul>
                  <li>
                    {{
                      language === "zh-CN"
                        ? "平高集团1家企业荣获2024年全国质量标杆奖"
                        : "One enterprise of Pinggao Group won the 2024 National Quality Benchmark Award"
                    }}
                  </li>
                  <li>
                    {{
                      language === "zh-CN"
                        ? "平高集团1家企业荣获2024年全国质量标杆奖"
                        : "One enterprise of Pinggao Group won the 2024 National Quality Benchmark Award"
                    }}
                  </li>
                  <li>
                    {{
                      language === "zh-CN"
                        ? "平高集团1家企业荣获2024年全国质量标杆奖"
                        : "One enterprise of Pinggao Group won the 2024 National Quality Benchmark Award"
                    }}
                  </li>
                  <li>
                    {{
                      language === "zh-CN"
                        ? "平高集团1家企业荣获2024年全国质量标杆奖"
                        : "One enterprise of Pinggao Group won the 2024 National Quality Benchmark Award"
                    }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="!props.onlyHeaderFlag" class="header-body-box">
      <transition name="fade-float">
        <div v-if="showText" class="header-body">
          <div class="header-body-title">
            {{ language === "zh-CN" ? props.content.title : props.content.titleEn }}
          </div>
          <hr class="header-body-hr" style="width: 5%" />
          <div class="header-body-content">
            {{ language === "zh-CN" ? props.content.content : props.content.contentEn }}
          </div>
          <div v-show="language === 'zh-CN'" class="header-body-footer">
            {{ props.content.footer }}
          </div>
        </div>
      </transition>

      <div
        class="header-footer"
        v-show="language === 'zh-CN'"
        :style="{
          '--backgroundImg': `url(${props.content.footerBg})`,
          '--footerBgColor': props.footerBgColor,
        }"
      >
        <ul>
          <li v-for="item in footer" :key="item.name">
            <router-link active-class="active-border" :to="item.path">{{ item.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div v-show="moveFlag" class="moveNav-box" ref="moveNav">
      <div class="moveNav-box-bg"></div>
      <div class="moveNav">
        <div class="moveNav-header">
          <div class="moveNav-header-back-btn" @click="moveFlag = false">
            <i class="iconfont icon-xiangzuo"></i>
            {{ language === "zh-CN" ? "返回" : "BACK" }}
          </div>
        </div>
        <ul class="moveNav-body">
          <li v-if="language === 'zh-CN'" class="moveNav-body-item">
            <router-link to="/homePage-2">首页</router-link>
          </li>
          <li
            class="moveNav-body-item"
            v-for="(item1, index) in language == 'zh-CN' ? header : headerEnglish"
            :key="item1.name"
          >
            <div class="moveNav-body-item-ul-top">
              <router-link :to="item1.path">{{ item1.name }}</router-link>
              <i
                v-if="language == 'zh-CN'"
                class="iconfont icon-lineleft moveNav-body-item-ul-icon"
                @click="changeMoveShowUl(index)"
                :class="{ 'icon-rotate': moveShowUl[index] }"
              ></i>
            </div>
            <ul class="moveNav-body-item-ul" v-show="moveShowUl[index]">
              <li v-for="item2 in allContent[index].footer" :key="item2.path">
                <router-link :to="item2.path">{{ item2.name }}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bar-icon {
  display: none;
  font-size: 1.5rem;
  position: relative;
  bottom: 0;
  /* transform: translateY(-50%); */
  right: 0;
}

#header {
  position: relative;
  display: flex;
  flex-direction: column;
  width: auto;
  height: 100%;
  font-size: 0.8rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular";
}

.header-nav-box {
  position: fixed;
  width: 100%;
  height: auto;
  z-index: 9999;
}

#header-nav {
  position: relative;
  padding: 1% 5% 0 5%;
  display: flex;
  box-sizing: content-box;
  cursor: pointer;
  height: auto;
  flex-direction: column;
}

#header-nav:hover {
  background: #fff;
}

#header-nav:hover .header-nav-bottom-item,
#header-nav:hover .header-nav-bottom-input,
#header-nav:hover .header-nav-top-bar a,
#header-nav:hover .log-title-text,
#header-nav:hover .log-title-english,
#header-nav:hover .log-bottom-text,
#header-nav:hover .log-bottom-english,
#header-nav:hover .header-nav-bottom-input::placeholder,
#header-nav:hover i {
  color: black;
}

#header-nav:hover #header-nav-top,
#header-nav:hover .header-nav-bottom-input,
#header-nav:hover .header-nav-bottom-item {
  border-color: black;
}

#header-nav-top {
  position: absolute;
  right: 0;
  top: 0;
  text-align: right;
  height: 45%;

  /* transform: translateY(150%); */
  display: flex;
  /* border-bottom: 0.05rem solid #fff; */
  padding-bottom: 0.3%;
  flex: 1 1 auto;
  align-items: center;
  /* transform: translateY(100%); */
  border: none;
  z-index: 9999999;
}

.logo-link {
  position: relative;
  display: block;
  width: 80%;
  border: none;
  cursor: pointer;
}

.logo-link img {
  border: none;
  width: 100%;
  height: auto;
}

.log-img {
  position: relative;
  width: 100%;
}

.log-img img {
  height: auto;
  width: 25%;
}

.log-title {
  text-align: start;
}

.log-title-text {
  color: #fff;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  font-size: 1.91rem;
  line-height: 1.2;
  text-align: start;
}

.log-title-english {
  color: #fff;
  font-family: "Avenir";
  font-size: 0.763rem;
  line-height: 1.5;
  font-size: 0.8rem;
  text-align: start;
}

.header-nav-top-bar {
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.header-nav-top-bar-ul {
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: flex-end;
}

#header-nav-top li {
  width: auto;
  flex: 0 0 auto;
}

#header-nav-top li:last-child {
  margin-right: 0;
}

.header-nav-top-bar a {
  display: block;
  text-align: right;
  padding: 0 0 0 1rem;
  /* height: 100%; */
  color: #fff;
  /* text-decoration: none; */
  transition: all 0.3s ease;
  font-size: 1.3rem;
}

#header-nav .header-nav-top-bar a:hover {
  color: #409eff;
}

.header-nav-bottom {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 45%;
  display: flex;
  align-items: start;
  transition: all 0.3s ease;
  overflow: hidden;
}

#header-nav-bottom-left {
  text-align: start;
}

.log-bottom-text {
  font-size: 1.5rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular";
  color: #fff;
  line-height: 1.2;
  text-align: start;
}

.log-bottom-english {
  font-size: 1.05rem;
  font-family: "Avenir";
  color: rgba(255, 0.6);
  line-height: 1.2;
  color: #fff;
}

#header-nav-bottom-right {
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1000;
}

.header-nav-bottom-item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  padding: 0 1rem;
  width: auto;
  text-align: center;
  margin-left: 1rem;
  cursor: pointer;
  border: 0.05rem solid #fff;
  border-radius: 1.2rem;
  font-family: "AlibabaPuHuiTi_2_45_Light";
  font-size: 1.3rem;
  transition: all 0.3s ease;
  flex: 0 0 auto;
  height: 1.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.header-nav-bottom-input {
  background-color: transparent;
  border: none;
  box-sizing: border-box; /* padding: 0.05rem; */
  color: #fff;
  width: 10rem;
  height: 1rem;
  display: flex;
  align-items: center;
}

.header-nav-bottom-input::placeholder {
  position: absolute;
  top: 0;
  color: #fff;
  vertical-align: middle;
  font-size: 0.8rem;
  font-family: "AlibabaPuHuiTi_2_45_Light";
}

.header-nav-bottom-input:focus {
  outline: none;
}
.header-nav-bottom-item > i {
  font-size: 0.9375rem;
  color: #fff;
}

.header-nav-hover-box {
  position: relative;
}

.header-nav-hover-content,
.header-nav-search-content {
  position: absolute;
  top: -0.2vh;
  width: 100%;
  height: auto;
  z-index: 999999;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  white-space: nowrap;
}

.header-nav-search-content {
  height: auto;
}

.header-nav-hover-content-left,
.header-nav-search-content-left {
  flex: 1 1 40%;
  text-align: right;
  padding-right: 3%;
  padding-top: 3em;
}

.header-nav-hover-content-title,
.header-nav-search-content-title {
  font-size: 1.91rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(35, 24, 21);
  line-height: 1.2;
  text-align: right;
}

.header-nav-hover-content-text,
.header-nav-search-content-text {
  font-size: 1.298rem;
  font-family: "AlibabaPuHuiTi_2_45_Light";
  color: rgb(35, 24, 21);
  line-height: 1.2;
  text-align: right;
}

.header-nav-hover-content-english,
.header-nav-search-content-english {
  font-size: 0.763rem;
  font-family: "Avenir";
  color: rgba(35, 24, 21, 0.6);
  text-transform: uppercase;
  line-height: 1.2;
  text-align: right;
}

.header-nav-hover-content-right,
.header-nav-search-content-right {
  flex: 1 1 60%;
  background-image: url("../assets/imgs/common/headerHoverBg-2.png");
  background-size: cover;
  padding-left: 2.5%;
  padding-top: 3em;
  padding-bottom: 3%;
}

.header-nav-hover-content-right {
  display: flex;
}

.header-nav-search-content-right-title ul {
  display: flex;
  justify-content: start;
  padding: 1.5em 0;
}

.header-nav-search-content-right-title ul li {
  padding: 0 2em;
  font-size: 1.4375rem;
  white-space: nowrap;
  font-family: "AlibabaPuHuiTi_2_55_Regular";
  color: rgb(128, 127, 127);
  line-height: 1.87;
  border-radius: 0.4rem;
  background-color: rgb(201, 202, 202);
  margin-right: 1em;
  cursor: pointer;
}

.header-nav-search-content-right-title ul li:hover {
  background-color: rgb(0, 217, 255);
  color: rgb(212, 248, 255);
}

.header-nav-search-content-right-content ul li {
  font-size: 1.298rem;
  font-family: "AlibabaPuHuiTi_2_45_Light";
  color: rgb(35, 24, 21);
  line-height: 1.2;
  text-align: left;
  padding: 1em 0;
  border-bottom: 0.1rem solid gainsboro;
}
.header-nav-search-content-right-content ul li:hover {
  color: rgb(69, 179, 224);
  cursor: pointer;
}

.right-left > ul > li a:hover {
  color: rgb(69, 179, 224);
}

.right-left {
  font-size: 1.4375rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular";
  color: #e3e8ea;
  line-height: 1.87;
  flex: 1 1 auto;
}

.right-right {
  margin-left: 7.5%;
  flex: 1 1 auto;
  height: 100%;
  background-size: cover;
}

.right-right > div {
  width: 80%;
}

.right-right img {
  width: 100%;
  height: auto;
  border-radius: 0.6rem;
}

.header-body-box {
  position: relative;
  /* height: 77%; */
  flex: 1 1 auto;
  padding: 11% 0 0 11%;
}

.header-body {
  color: var(--fontColor);
}
.header-body-hr {
  border: 0.05rem solid var(--fontColor);
}
.header-body-title {
  margin-bottom: 2%;
  font-size: 3.125rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: var(--fontColor);
  line-height: 1.2;
}

.header-body-content {
  margin-top: 2%;
  font-size: 2.125rem;
  font-family: "AlibabaPuHuiTi_2_45_Light";
  color: var(--fontColor);
  line-height: 1.2;
  max-width: 40%;
  text-align: left;
}

.header-body-footer {
  font-size: 2.125rem;
  font-family: "Avenir";
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  line-height: 1.2;
}
/* 定义过渡类 */
.fade-float-enter-active {
  animation: fadeFloatIn 1s ease;
}

@keyframes fadeFloatIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.header-footer {
  position: absolute;
  bottom: 0;
  left: 60%;
  width: 40%;
  font-size: 1.2rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular";
  color: rgb(255, 255, 255);
  background-image: var(
    --backgroundImg,
    url("../assets/imgs/_6_qualityAssuranceImgs/t6_topBar.png")
  );
  background-size: cover;
  padding: 0.5rem 0;
  padding-left: 4%;
  white-space: nowrap;
}

.header-footer ul {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-wrap: nowrap;
}

.header-footer ul li {
  margin-right: 1.5rem;
}

.header-footer ul li a {
  color: var(--footerColor);
}

.hidden {
  height: 0px;
  overflow: hidden;
}

.background-white .header-nav-bottom-item,
.background-white .header-nav-bottom-input,
.background-white .header-nav-top-bar a,
.background-white .log-title-text,
.background-white .log-title-english,
.background-white .log-bottom-text,
.background-white .log-bottom-english,
.background-white .header-nav-bottom-input::placeholder,
.background-white i {
  color: black;
}

.background-white #header-nav-top,
.background-white .header-nav-bottom-input,
.background-white .header-nav-bottom-item {
  border-color: black;
}

.background-white {
  background-color: #fff;
}

.active-border {
  border-bottom: 0.05rem solid var(--footerColor);
}

#header-nav #header-nav-top .header-nav-top-bar .active-color {
  color: #409eff;
}

@media (max-width: 900px) {
  #header-nav {
    padding: 1% 4% 0 4%;
  }
  .header-body-box {
    padding: 20% 0 0 7%;
  }
  .bar-icon {
    display: inline-block;
    /* width: auto;
    height: auto;
    padding: 0;
    margin: 0; */
    font-size: 5rem;
    color: #fff;
  }

  .header-nav-bottom {
    height: auto;
  }
  #header-nav-bottom-left {
    border-top: 0.05rem solid #fff;
  }
  .header-footer {
    background-image: none;
    width: 100%;
    left: 0;
    background-color: var(--footerBgColor, #1dc2ff);
    padding: 2% 10%;
  }

  .header-footer ul {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header-footer ul li {
    font-size: 2rem;
    margin-right: 3rem;
  }

  .log-img img {
    width: 35%;
  }

  #header-nav-top {
    height: auto;
  }

  .header-nav-top-bar-ul {
    display: none;
  }

  .moveNav-box {
    width: 100vw;
    height: 100vh;
  }

  .moveNav-box-bg {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .moveNav-box {
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999999999;
    color: #fff;
  }

  .moveNav-box-bg {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .moveNav {
    position: absolute;
    top: 0;
    right: 0;
    width: 45vw;
    height: 100vh;
    background-color: rgb(51, 51, 51);
    padding: 0 1.5%;
    overflow: auto;
  }

  .moveNav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .moveNav-header {
    display: flex;
    padding: 6% 0;
    border-bottom: 0.05rem solid #727171;
  }

  .moveNav-header-back-btn {
    display: flex;
    align-items: center;
    flex: 0 0 auto;
    color: #727171;
    font-size: 2rem;
    font-family: "AalibabaPuHuiTi_2_55_Regular";
    border: 0.05rem solid #727171;
    border-radius: 2rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
  }

  .moveNav-header-back-btn i {
    font-size: 2rem;
  }

  .moveNav-body-item {
    padding: 4% 0;
    border-bottom: 0.05rem solid #727171;
    font-size: 2rem;
    position: relative;
  }

  .moveNav-body-item a {
    color: #fff;
  }

  .moveNav-body-item i {
    font-size: 1.3rem;
    display: inline-block;
    transform: rotate(90deg);
    transform-origin: center;
    position: absolute;
    right: 5%;
    transition: all 0.3s ease;
  }

  .moveNav-body-item-ul a {
    font-size: 1.2rem;
    color: #9fa0a0;
  }

  .moveNav-body-item-ul li {
    padding-left: 2%;
  }

  .moveNav-body-item-ul-icon {
    cursor: pointer;
  }

  .moveNav-body-item-ul-top .icon-rotate {
    transform: rotate(270deg);
  }

  .logo-link {
    width: 90%;
  }
}

@media (max-width: 700px) {
  .logo-link {
    width: 100%;
  }

  .moveNav {
    width: 50vw;
  }

  .moveNav-header-back-btn {
    font-size: 3rem;
    padding: 0.2rem 1rem;
  }

  .moveNav-header-back-btn i {
    font-size: 3rem;
  }

  .moveNav-body-item i {
    font-size: 3rem;
  }

  .moveNav-body-item-ul a {
    font-size: 2.5rem;
  }

  .moveNav-body-item {
    padding: 4% 0;
    font-size: 3rem;
  }

  .header-body-title {
    font-size: 4.5rem;
  }

  .header-body-content {
    font-size: 2.5rem;
  }

  .header-body-footer {
    font-size: 2.5rem;
  }

  .header-footer ul li {
    font-size: 2.8rem;
  }
}

@media (max-width: 500px) {
  .moveNav {
    width: 70vw;
  }

  .moveNav-header-back-btn {
    font-size: 5rem;
    padding: 0.2rem 1rem;
  }

  .moveNav-header-back-btn i {
    font-size: 5rem;
  }

  .moveNav-body-item i {
    font-size: 5rem;
  }

  .moveNav-body-item-ul a {
    font-size: 4rem;
  }

  .moveNav-body-item {
    padding: 4% 0;
    font-size: 5rem;
  }

  .header-body-title {
    font-size: 5rem;
  }

  .header-body-content {
    font-size: 3.2rem;
  }

  .header-body-footer {
    font-size: 3.2rem;
  }

  .header-footer ul li {
    font-size: 3.5rem;
  }
}
</style>
