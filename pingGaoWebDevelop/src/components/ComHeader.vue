<script setup>
import { ref } from "vue";

import imgPath from "@/assets/imgs/common/headerHoverBg-1.png";
// import imgPath1 from '@/assets/imgs/头部轮播-01.png';
import imgPath2 from "@/assets/imgs/_2_informationCenterImgs/头部轮播-02.png";
// import imgPath3 from '@/assets/imgs/头部轮播-03.png';
// import imgPath4 from '@/assets/imgs/头部轮播-04.png';
// import imgPath5 from '@/assets/imgs/头部轮播-05.png';
// import imgPath6 from '@/assets/imgs/头部轮播-06.png';
// import imgPath7 from '@/assets/imgs/头部轮播-07.png';
// import imgPath8 from '@/assets/imgs/头部轮播-08.png';
// import imgPath9 from '@/assets/imgs/头部轮播-09.png';

let hidden = ref(true);
let hoverFlag = ref(false);
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
// const allContent = ref([
//   {
//     content: {
//       title: '关于平高',
//       content: '赋能智慧电气·创引绿色能源',
//       footer: 'PG GROUP',
//       imgPath: imgPath1,
//     },
//     footer: [
//       { name: '总部动态', path: '/informationCenter/headquartersDynamics-1' },
//       { name: '集团新闻', path: '/informationCenter/groupNews-1' },
//       { name: '媒体聚焦', path: '/informationCenter/mediaFocus-1' },
//       { name: '热点视频', path: '/informationCenter/hotVideo' },
//       { name: '最新公告', path: '/informationCenter/latestAnnouncement-1' },
//     ],
//   },
//   {
//     content: {
//       title: '资讯中心',
//       content: '电气技术引领者·能源革命推动者·绿色发展践行者',
//       footer: 'PG GROUP',
//       imgPath: imgPath2,
//     },
//     footer: [
//       { name: '总部动态', path: '/informationCenter/headquartersDynamics-1' },
//       { name: '集团新闻', path: '/informationCenter/groupNews-1' },
//       { name: '媒体聚焦', path: '/informationCenter/mediaFocus-1' },
//       { name: '热点视频', path: '/informationCenter/hotVideo' },
//       { name: '最新公告', path: '/informationCenter/latestAnnouncement-1' },
//     ],
//   },
// ]);

const props = defineProps({
  content: {
    type: Object,
    default: () => ({
      title: "资讯中心",
      content: "电气技术引领者·能源革命推动者·绿色发展践行者",
      footer: "PG GROUP",
      imgPath: imgPath2,
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
    default: true,
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
console.log(props.onlyHeaderFlag);
</script>

<template>
  <div id="header" :style="{'--footerImg': props.footerImg, '--fontColor': props.css.fontColor , '--footerImg': props.footerImg, '--footerColor': props.css.footerColor }">
    <div id="header-nav">
      <div id="header-nav-top">
        <ul>
          <li v-for="item in header" :key="item.name">
            <router-link
              @mouseenter="
                () => {
                  hidden = item.name !== props.content.title;
                  hoverFlag = item.name === props.content.title;
                }
              "
              @mouseleave="hidden = true"
              :to="item.path"
              >{{ item.name }}</router-link
            >
          </li>
        </ul>
      </div>
      <div id="header-nav-bottom">
        <div class="header-nav-bottom-item">
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
      <img id="header-nav-logo" src="../assets/imgs/common/logoImgAll.png" alt="" />
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
            {{ props.content.title }}
          </div>
          <hr style="display: inline-block; width: 58px; border: 2px solid rgb(35, 24, 21)" />
          <div class="header-nav-hover-content-text">
            {{ props.content.content }}
          </div>
          <div class="header-nav-hover-content-english">
            {{ props.content.footer }}
          </div>
        </div>
        <div class="header-nav-hover-content-right">
          <div class="right-left">
            <ul>
              <li v-for="item in props.footer" :key="item.name">
                <router-link active-class="active-color" :to="item.path">{{
                  item.name
                }}</router-link>
              </li>
            </ul>
          </div>
          <div
            class="right-right"
            :style="{ 'background-image': `url(${props.content.imgPath})` }"
          ></div>
        </div>
      </div>
    </div>
    <div v-if="props.onlyHeaderFlag" style="margin: 0 100px">
      <div class="header-body">
        <div class="header-body-title">{{ props.content.title }}</div>
        <hr class="header-body-hr" style="width: 50px; " />
        <div class="header-body-content">{{ props.content.content }}</div>
        <div class="header-body-footer">{{ props.content.footer }}</div>
      </div>
      <div class="header-footer" :style="{ 'background-image': `url(${props.footerImg})` }">
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
  margin: 0 100px;
}

#header-nav-top {
  position: absolute;
  top: 0px;
  right: 0px;
  transform: translateY(50%);
}

#header-nav-top ul {
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
}

#header-nav-top li {
  width: 100px;
  flex: 0 0 auto;
}

#header-nav-top li:last-child {
  margin-right: 0;
}

#header-nav-top a {
  display: block;
  text-align: right;
  padding: 0 0 0 15px;
  height: 100%;
  color: #fff;
  /* text-decoration: none; */
  transition: all 0.3s ease;
}

#header-nav-top a:hover {
  color: #409eff;
}

#header-nav-bottom {
  display: flex;
  position: absolute;
  bottom: 0px;
  right: 0px;
  justify-content: flex-end;
  align-items: center;
  height: 40px;
  flex: 0 0 auto;
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
}

.header-nav-bottom-item > i {
  /* margin-right: 5px; */
  font-size: 0.9375rem;
  color: #fff;
}

.header-nav-hover-content {
  position: absolute;
  top: auto;
  width: 100%;
  height: 361px;
  padding-top: 40px;
  margin-top: -40px;
  z-index: 999;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
}

.header-nav-hover-content-left {
  flex: 1 1 50%;
  text-align: right;
  padding-right: 3%;
  padding-top: 3em;
}

.header-nav-hover-content-title {
  font-size: 1.91rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(35, 24, 21);
  line-height: 1.2;
  text-align: right;
}

.header-nav-hover-content-text {
  font-size: 1.298rem;
  font-family: "AlibabaPuHuiTi_2_45_Light";
  color: rgb(35, 24, 21);
  line-height: 1.2;
  text-align: right;
}

.header-nav-hover-content-english {
  font-size: 0.763rem;
  font-family: "Avenir";
  color: rgba(35, 24, 21, 0.6);
  text-transform: uppercase;
  line-height: 1.2;
  text-align: right;
}

.header-nav-hover-content-right {
  flex: 1 1 50%;
  background-image: url("../assets/imgs/common/headerHoverBg-2.png");
  background-size: cover;
  padding-left: 2.5%;
  padding-top: 3em;
}

.header-nav-hover-content-right {
  display: flex;
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
  /* bottom: 0.5em; */
  bottom: 0;
  /* left: 65%; */
  right: 0;
  font-size: 1.4375rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular";
  color: var(--footerColor);
  width: 37%;
  height: 68px;
  line-height: 68px;
  background-repeat: no-repeat;
  background-size: cover;
  padding-left: 3%;
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
