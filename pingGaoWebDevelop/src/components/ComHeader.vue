<script setup>
import { ref } from "vue";

import imgPath from "@/assets/imgs/common/headerHoverBg-1.png";
import imgPath1 from "@/assets/imgs/_1_aboutPinggaoImgs/头部轮播-01.png";
import imgPath2 from "@/assets/imgs/_2_informationCenterImgs/头部轮播-02.png";
import imgPath3 from "@/assets/imgs/_3_partyBuildingImgs/头部轮播-03.png";
import imgPath4 from "@/assets/imgs/_4_productEngineeringImgs/头部轮播-04.png";
import imgPath5 from "@/assets/imgs/_5_marketingServiceImgs/头部轮播-05.png";
import imgPath6 from "@/assets/imgs/_6_qualityAssuranceImgs/头部轮播-06.png";
import imgPath7 from "@/assets/imgs/_7_scientificResearchCenterImgs/头部轮播-07.png";
import imgPath8 from "@/assets/imgs/_8_humanResourcesImgs/头部轮播-08.png";
import imgPath9 from "@/assets/imgs/_9_contactUsImgs/头部轮播-09.png";
import footerBg from "@/assets/imgs/_6_qualityAssuranceImgs/t6_topBar.png";

let hidden = ref(true);
let hoverFlag = ref(false);
let inputFlag = ref(false);
let searchFlag = ref(false);
const header = ref([
  { name: "关于平高", path: "/aboutPingGao" },
  { name: "资讯中心", path: "/informationCenter" },
  { name: "党的建设", path: "/partyBuilding" },
  { name: "产品工程", path: "/productEngineering" },
  { name: "营销服务", path: "/marketingService" },
  { name: "品质保障", path: "/qualityAssurance" },
  { name: "科研中心", path: "/scientificResearchCenter" },
  { name: "人力资源", path: "/humanResources" },
  { name: "联系我们", path: "/contactUs" },
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
      { name: "总部动态", path: "/informationCenter/headquartersDynamics-1" },
      { name: "集团新闻", path: "/informationCenter/groupNews-1" },
      { name: "媒体聚焦", path: "/informationCenter/mediaFocus-1" },
      { name: "热点视频", path: "/informationCenter/hotVideo" },
      { name: "最新公告", path: "/informationCenter/latestAnnouncement-1" },
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
      { name: "总部动态", path: "/informationCenter/headquartersDynamics-1" },
      { name: "集团新闻", path: "/informationCenter/groupNews-1" },
      { name: "媒体聚焦", path: "/informationCenter/mediaFocus-1" },
      { name: "热点视频", path: "/informationCenter/hotVideo" },
      { name: "最新公告", path: "/informationCenter/latestAnnouncement-1" },
    ],
  },
  {
    content: {
      title: "党的建设",
      content: "高举中国特色社会主义伟大旗帜",
      footer: "PG GROUP",
      imgPath: imgPath3,
    },
    footer: [
      {
        name: "党的精神",
        path: "/partyBuilding/partyspirit",
      },
      {
        name: "平高党建",
        path: "/partyBuilding/pinggaoPartyBuilding",
      },
    ],
  },
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
        path: "/humanResources/talentRecruitment-1",
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
    { name: "总部动态", path: "/informationCenter/headquartersDynamics-1" },
    { name: "集团新闻", path: "/informationCenter/groupNews-1" },
    { name: "媒体聚焦", path: "/informationCenter/mediaFocus-1" },
    { name: "热点视频", path: "/informationCenter/hotVideo" },
    { name: "最新公告", path: "/informationCenter/latestAnnouncement-1" },
  ],
});
function hoverContent(name) {
  hoverFlag.value = true;
  hidden.value = false;
  allContent.value.forEach((item) => {
    if (item.content.title === name) {
      hoverText.value = item;
    }
  });
}

const props = defineProps({
  content: {
    type: Object,
    default: () => ({
      title: "资讯中心",
      content: "电气技术引领者·能源革命推动者·绿色发展践行者",
      footer: "PG GROUP",
      imgPath: imgPath2,
      footerBg: footerBg,
    }),
  },
  footer: {
    type: Array,
    default: () => [
      { name: "总部动态", path: "/informationCenter/headquartersDynamics-1" },
      { name: "集团新闻", path: "/informationCenter/groupNews-1" },
      { name: "媒体聚焦", path: "/informationCenter/mediaFocus-1" },
      { name: "热点视频", path: "/informationCenter/hotVideo" },
      { name: "最新公告", path: "/informationCenter/latestAnnouncement-1" },
    ],
  },
  onlyHeaderFlag: {
    type: Boolean,
    default: false,
  },
  footerImg: {
    type: String,
    default: '',
  },
  css: {
    type: Object,
    default: () => ({
      fontColor: '#fff',
      footerColor: '#fff'
    }),
  }
});
</script>

<template>
  <div id="header" :style="{'--footerImg': props.footerImg, '--fontColor': props.css.fontColor , '--footerImg': props.footerImg, '--footerColor': props.css.footerColor }">
    <div id="header-nav">
      <div id="header-nav-top">
        <ul>
          <li v-for="item in header" :key="item.name">
            <router-link
              @mouseenter="hoverContent(item.name)"
              @mouseleave="hidden = true"
              :to="item.path"
              >{{ item.name }}</router-link
            >
          </li>
        </ul>
      </div>
      <img id="header-nav-logo" src="../assets/imgs/common/logoImgAll.png" alt="" />
      <div id="header-nav-bottom">
        <div @mouseleave="inputFlag = false" v-show="inputFlag" class="header-nav-bottom-item">
          <i class="iconfont icon-sousuo"></i>
          <input
            @blur="inputFlag = false"
            class="header-nav-bottom-input"
            type="text"
            @keydown.enter="searchFlag = true"
            placeholder="输入关键词"
          />
        </div>
        <div v-show="!inputFlag" @mouseenter="inputFlag = true" class="header-nav-bottom-item">
          搜索
          <i class="iconfont icon-sousuo" style="font-size: 1.125rem; color: #fff" />
        </div>

        <div class="header-nav-bottom-item">
          邮箱
          <i class="iconfont icon-youxiang" style="font-size: 1.125rem; color: #fff" />
        </div>
        <div class="header-nav-bottom-item">
          CN
          <i class="iconfont icon-repeat" style="font-size: 1.125rem"></i>
        </div>
      </div>
    </div>
    <div
      @mouseenter="hidden = !hoverFlag"
      @mouseleave="hidden = true"
      class="header-nav-hover-content"
      :class="{ hidden: hidden }"
    >
      <div
        style="width: 100%; height: 100%; background-size: cover; display: flex"
        :style="{ 'background-image': `url(${imgPath})` }"
      >
        <div class="header-nav-hover-content-left">
          <div class="header-nav-hover-content-title">
            {{ hoverText.content.title }}
          </div>
          <hr style="display: inline-block; width: 58px; border: 2px solid rgb(35, 24, 21)" />
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
          <div
            class="right-right"
            :style="{ 'background-image': `url(${hoverText.content.imgPath})` }"
          ></div>
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
          <div class="header-nav-search-content-title">搜索结果</div>
          <hr style="display: inline-block; width: 58px; border: 2px solid rgb(35, 24, 21)" />
          <div class="header-nav-search-content-text">
            {{ hoverText.content.content }}
          </div>
          <div class="header-nav-search-content-english">
            {{ hoverText.content.footer }}
          </div>
        </div>
        <div class="header-nav-search-content-right">
          <div class="header-nav-search-content-right-title">
            <ul>
              <li>全部</li>
              <li>新闻</li>
              <li>产品</li>
              <li>招聘</li>
            </ul>
          </div>
          <div class="header-nav-search-content-right-content">
            <ul>
              <li>平高集团1家企业荣获2024年全国质量标杆奖</li>
              <li>平高集团亮相CIGRE 2024 绿色智能产品吸引全球电力行业目光</li>
              <li>共青团平高集团有限公司、河南平高电气股份有限公司第二...</li>
              <li>平高集团亮相CIGRE 2024 绿色智能产品吸引全球电力行业目光</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!props.onlyHeaderFlag" style="margin: 0 100px">
      <div class="header-body">
        <div class="header-body-title">{{ props.content.title }}</div>
        <hr class="header-body-hr" style="width: 50px; " />
        <div class="header-body-content">{{ props.content.content }}</div>
        <div class="header-body-footer">{{ props.content.footer }}</div>
      </div>
      <div
        class="header-footer"
        :style="{ 'background-image': `url('${props.content.footerBg}') ` }"
      >
        <ul>
          <li v-for="item in footer" :key="item.name">
            <router-link active-class="active-border" :to="item.path">{{ item.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
#header-nav-logo {
  width: 100%;
}
#header {
  position: relative;
  width: auto;
  height: 100%;
  font-size: 1rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular";
}
#header-nav {
  position: relative;
  height: 90px;
  margin: 0 5em;
}

#header-nav-top {
  text-align: right;
  transform: translateY(100%);
}

#header-nav-top ul {
  display: inline-flex;
  margin: 0;
  padding: 0;
  align-items: center;
}

#header-nav-top li {
  width: auto;
  flex: 0 0 auto;
}

#header-nav-top li:last-child {
  margin-right: 0;
}

#header-nav-top a {
  display: block;
  text-align: right;
  padding: 0 0 0 15px;
  /* height: 100%; */
  color: #fff;
  /* text-decoration: none; */
  transition: all 0.3s ease;
}

#header-nav-top a:hover {
  color: #409eff;
}

#header-nav-bottom {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: auto;
  transform: translateY(-100%);
  position: relative;
  z-index: 1000;
}

.header-nav-bottom-item {
  color: #fff;
  padding: 0 1rem;
  width: auto;
  text-align: center;
  margin-left: 20px;
  cursor: pointer;
  border: 1px solid #fff;
  border-radius: 20px;
  font-family: "AlibabaPuHuiTi_2_45_Light";
  font-size: 1.125rem;
  transition: all 0.3s ease;
  flex: 0 0 auto;
}

.header-nav-bottom-input {
  background-color: transparent;
  border: none;
  padding: 8px;
  color: #fff;
}

.header-nav-bottom-input::placeholder {
  color: #fff;
}

.header-nav-bottom-input:focus {
  outline: none;
}
.header-nav-bottom-item > i {
  font-size: 0.9375rem;
  color: #fff;
}

.header-nav-hover-content,
.header-nav-search-content {
  position: absolute;
  top: auto;
  width: 100%;
  height: auto;
  padding-top: 3em;
  margin-top: -30px;
  z-index: 999;
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
  flex: 1 1 50%;
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
  flex: 1 1 50%;
  background-image: url("../assets/imgs/common/headerHoverBg-2.png");
  background-size: cover;
  padding-left: 2.5%;
  padding-top: 3em;
  padding-bottom: 5%;
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
  font-family: "AlibabaPuHuiTi_2_55_Regular";
  color: rgb(128, 127, 127);
  line-height: 1.87;
  border-radius: 5px;
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
  border-bottom: 2px solid gainsboro;
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
}

.right-right {
  margin-left: 7.5%;
  width: 624px;
  height: 198px;
  background-size: cover;
  border-radius: 10px;
}

.header-body {
  margin-top: 9em;
  margin-left: 7em;
  color: var(--fontColor);
}
.header-body-hr {
  border: 1px solid var(--fontColor)
 }
.header-body-title {
  margin-bottom: 10px;
  font-size: 3.125rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: var(--fontColor);
  line-height: 1.2;
}

.header-body-content {
  margin-top: 10px;
  font-size: 2.125rem;
  font-family: "AlibabaPuHuiTi_2_45_Light";
  color: var(--fontColor);
  line-height: 1.2;
}
.header-body-footer {
  font-size: 1.25;
  font-family: "Avenir";
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  line-height: 1.2;
}

.header-footer {
  position: absolute;
  bottom: 0;
  left: 65%;
  font-size: 1.4375rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular";
  color: rgb(255, 255, 255);
  background-image: url("../assets/imgs/_6_qualityAssuranceImgs/t6_topBar.png");
  background-size: cover;
  width: 35%;
  padding: 0.5em 0;
  padding-left: 3em;
}

.header-footer ul {
  display: flex;
  justify-content: start;
  align-items: center;
}

.header-footer ul li {
  margin-right: 1.5em;
}

.header-footer ul li a {
  color: var(--footerColor);
}

.hidden {
  height: 0px;
  overflow: hidden;
}

.active-border {
  border-bottom: 1px solid var(--footerColor);
}

.active-color {
  color: rgb(69, 179, 224);
}
</style>
