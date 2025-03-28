import aboutPinggao from "@/views/_1_aboutPinggao/myIndex.vue";
import approachPinggao from "@/views/_1_aboutPinggao/approachPinggao/myIndex.vue";
import groupProfile from "@/views/_1_aboutPinggao/groupProfile/myIndex.vue";
import lesadingMember from "@/views/_1_aboutPinggao/lesadingMember/myIndex.vue";
import organizationalStructure from "@/views/_1_aboutPinggao/organizationalStructure/myIndex.vue";
import seniorHonor from "@/views/_1_aboutPinggao/seniorHonor/myIndex.vue";
import partyBuilding from "@/views/_3_partyBuilding/index.vue";

import productSeriseEng from "@/views/_4_productEngineering/productSeriesEng/myIndex.vue";
import productSeriesDetailEng
  from "@/views/_4_productEngineering/productSeriesDetailEng/myIndex.vue";
import productEngineering from "@/views/_4_productEngineering/index.vue";
import keyProject from "@/views/_4_productEngineering/keyProject/myIndex.vue";
import productSeries from "@/views/_4_productEngineering/productSeries/myIndex.vue";
import productSeriesDetail from "@/views/_4_productEngineering/productSeriesDetail/myIndex.vue";
import qualityAssurance from "@/views/_6_qualityAssurance/index.vue";
import manufacturing from "@/views/_6_qualityAssurance/manufacturing/index-1.vue";
import productTesting from "@/views/_6_qualityAssurance/productTesting/index-1.vue";
import qualitySystem from "@/views/_6_qualityAssurance/qualitySystem/index-1.vue";
import scientificResearchCenter from "@/views/_7_scientificResearchCenter/index.vue";
import scientificResearchAchievement
  from "@/views/_7_scientificResearchCenter/scientificResearchAchievement/myIndex.vue";
import scientificResearchSystem
  from "@/views/_7_scientificResearchCenter/scientificResearchSystem/myIndex.vue";
import testSystem from "@/views/_7_scientificResearchCenter/testSystem/myIndex.vue";
import addressTelephone from "@/views/_9_contactUs/addressTelephone/index-1.vue";
import becomePartner from "@/views/_9_contactUs/becomePartner/index-1.vue";
import businessConsulting from "@/views/_9_contactUs/businessConsulting/index-1.vue";
import contactUs from "@/views/_9_contactUs/index.vue";
import purchaseByBidding from "@/views/_9_contactUs/purchaseByBidding/index-1.vue";
import homePage_1 from "@/views/homePage/homePage-1.vue";

import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/homePage-1",
    },
    {
      path: "/homePage-1",
      component: homePage_1,
    },
    {
      path: "/homePage-2",
      component: () => import("@/views/homePage/homePage-2.vue"),
    },
    {
      path: "/aboutPinggao",
      redirect: "/aboutPinggao/groupProfile", // 这里重定向到 /aboutPinggao 下的 groupProfile
      component: aboutPinggao,
      children: [
        {
          path: "groupProfile",
          component: groupProfile,
        },
        {
          path: "lesadingMember",
          component: lesadingMember,
        },
        {
          path: "organizationalStructure",
          component: organizationalStructure,
        },
        {
          path: "seniorHonor",
          component: seniorHonor,
        },
        {
          path: "approachPinggao",
          component: approachPinggao,
        },
      ],
    },
    {
      path: "/informationCenter",
      redirect: "/informationCenter/headquartersDynamicsIndex",
      component: () => import("@/views/_2_informationCenter/index.vue"),
      children: [
        {
          path: "headquartersDynamicsIndex",
          component: () => import("@/views/_2_informationCenter/headquartersDynamics/index.vue"),
        },
        {
          path: "headquartersDynamicsMore",
          component: () => import("@/views/_2_informationCenter/headquartersDynamics/more.vue"),
        },
        {
          path: "groupNewsIndex",
          component: () => import("@/views/_2_informationCenter/groupNews/index.vue"),
        },
        {
          path: "groupNewsMore",
          component: () => import("@/views/_2_informationCenter/groupNews/more.vue"),
        },
        {
          path: "mediaFocusIndex",
          component: () => import("@/views/_2_informationCenter/mediaFocus/index.vue"),
        },
        {
          path: "mediaFocusMore",
          component: () => import("@/views/_2_informationCenter/mediaFocus/more.vue"),
        },
        {
          path: "hotVideo",
          component: () => import("@/views/_2_informationCenter/hotVideo/index.vue"),
        },
        {
          path: "latestAnnouncementIndex",
          component: () => import("@/views/_2_informationCenter/latestAnnouncement/index.vue"),
        },
        {
          name: "newsDetail",
          path: "detail-:id",
          component: () => import("@/views/_2_informationCenter/articleDetail.vue"),
        },
      ],
    },
    {
      path: "/partyBuilding",
      component: partyBuilding,
      redirect: "/partyBuilding/partySpirit/index",
      children: [
        {
          path: "partySpirit/index",
          component: () => import("@/views/_3_partyBuilding/partySpirit/index.vue"),
        },
        {
          path: "partySpirit/more",
          component: () => import("@/views/_3_partyBuilding/partySpirit/more.vue"),
        },
        {
          path: "pinggaoPartyBuilding/index",
          component: () => import("@/views/_3_partyBuilding/pinggaoPartyBuilding/index.vue"),
        },
        {
          path: "PinggaoPartyBuilding/more",
          component: () => import("@/views/_3_partyBuilding/pinggaoPartyBuilding/more.vue"),
        },
        {
          name: "pbDetail",
          path: "detail-:id",
          component: () => import("@/views/_3_partyBuilding/articleDetail.vue"),
        },
      ],
    },
    {
      path: "/productEngineering",
      redirect: "/productEngineering/productSeries", // 这里的重定向路径是相对于父路径的
      component: productEngineering,
      children: [
        {
          path: "keyProject",
          component: keyProject,
        },
        {
          name: "productDetail",
          path: "productSeries/detail-:id",
          component: productSeriesDetail,
        },
        {
          name: "productSeries",
          path: "productSeries",
          component: productSeries,
        },
        {
          path: "productSeriesEng",
          name: "engProductSeries",
          component: productSeriseEng,
        },
        {
          path: "productSeriesDetailEng-:id",
          name: "engProductDetail",
          component: productSeriesDetailEng,
        },
      ],
    },
    {
      path: "/marketingService",
      redirect: "/marketingService/performancePledge",
      component: () => import("@/views/_5_marketingService/index.vue"),
      children: [
        {
          path: "performancePledge",
          component: () => import("@/views/_5_marketingService/performancePledge/index-1.vue"),
        },
        {
          path: "markingOrganization",
          component: () => import("@/views/_5_marketingService/markingOrganization/index-1.vue"),
        },
        {
          path: "serviceNetWork",
          component: () => import("@/views/_5_marketingService/serviceNetWork/index-1.vue"),
        },
      ],
    },
    {
      path: "/qualityAssurance",
      component: qualityAssurance,
      redirect: "/qualityAssurance/qualitySystem",
      children: [
        {
          path: "qualitySystem",
          component: qualitySystem,
        },
        {
          path: "manufacturing",
          component: manufacturing,
        },
        {
          path: "productTesting",
          component: productTesting,
        },
      ],
    },
    {
      path: "/scientificResearchCenter",
      redirect: "/scientificResearchCenter/scientificResearchSystem", // 这里的重定向路径是相对于父路径的
      component: scientificResearchCenter,
      children: [
        {
          path: "scientificResearchAchievement",
          component: scientificResearchAchievement,
        },
        {
          path: "scientificResearchSystem",
          component: scientificResearchSystem,
        },
        {
          path: "testSystem",
          component: testSystem,
        },
      ],
    },
    {
      path: "/humanResources",
      redirect: "/humanResources/talentTeam",
      component: () => import("@/views/_8_humanResources/index.vue"),
      children: [
        {
          path: "talentTeam",
          component: () => import("@/views/_8_humanResources/talentTeam/index-1.vue"),
        },
        {
          path: "talentDevelopment",
          component: () => import("@/views/_8_humanResources/talentDevelopment/index-1.vue"),
        },
        {
          path: "talentRecruitment",
          component: () => import("@/views/_8_humanResources/talentRecruitment/index-1.vue"),
        },
        {
          name: "talentRecruitmentDetail",
          path: "talentRecruitment/detail-:id",
          component: () => import("@/views/_8_humanResources/talentRecruitment/index-2.vue"),
        },
        {
          path: "postdoctoralWorkstation",
          component: () => import("@/views/_8_humanResources/postdoctoralWorkstation/index-1.vue"),
        },
      ],
    },
    {
      path: "/contactUs",
      component: contactUs,
      redirect: "/contactUs/purchaseByBidding",
      children: [
        {
          path: "purchaseByBidding",
          component: purchaseByBidding,
        },
        {
          path: "becomePartner",
          component: becomePartner,
        },
        {
          path: "businessConsulting",
          component: businessConsulting,
          beforeEnter: () => {
            window.location.href = "http://pg.pinggao.com:20062/EClient/?appId=PGWeb";
          },
        },
        {
          path: "addressTelephone",
          component: addressTelephone,
        },
      ],
    },
    {
      path: "/news",
      component: () => import("@/views/news/index.vue"),
      children: [
        {
          path: "news",
          name: "engNews",
          component: () => import("@/views/news/news/index.vue"),
        },
        {
          path: "newsDetail-:id",
          name: "engNewsDetail",
          component: () => import("@/views/news/newsDetail/index.vue"),
        },
      ],
    },
    {
      path: "/aboutUs",
      component: () => import("@/views/aboutUs/index.vue"),
    },
    {
      path: "/contactUsEn",
      component: () => import("@/views/contactUs/index.vue"),
    },
    {
      path: "/home",
      component: () => import("@/views/Home/index.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // 定义需要回到顶部的路由路径数组
    const scrollToTopPaths = [
      "/aboutPinggao/groupProfile",
      "/informationCenter/headquartersDynamicsIndex",
      "/partyBuilding/partySpirit/index",
      "/productEngineering/productSeries",
      "/marketingService/performancePledge",
      "/qualityAssurance/qualitySystem",
      "/scientificResearchCenter/scientificResearchSystem",
      "/humanResources/talentTeam",
      "/contactUs/purchaseByBidding",
    ];

    // 检查目标路由是否在需要回到顶部的路径数组中
    if (scrollToTopPaths.includes(to.path)) {
      return {top: 0, behavior: "smooth"};
    }

    // 如果有 savedPosition，即浏览器返回操作，则滚动到原来的位置
    if (savedPosition) {
      return savedPosition;
    }

    // 默认情况下，不处理滚动位置
    return {};
  },
});

export default router;
