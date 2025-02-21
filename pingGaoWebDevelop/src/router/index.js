import {createWebHistory} from "vue-router";
import {createRouter} from "vue-router";

import partyBuilding from "@/views/_3_partyBuilding/index.vue";
import qualityAssurance from "@/views/_6_qualityAssurance/index.vue";
import contactUs from "@/views/_9_contactUs/index.vue";

import partyspirit from "@/views/_3_partyBuilding/partySpirit/index-1.vue";
import partyspiritDetail from "@/views/_3_partyBuilding/partySpirit/index-2.vue";
import partyspiritMore from "@/views/_3_partyBuilding/partySpirit/index-3.vue";
import pinggaoPartyBuilding from "@/views/_3_partyBuilding/pinggaoPartyBuilding/index-1.vue";
import pinggaoPartyBuildingDetail from "@/views/_3_partyBuilding/pinggaoPartyBuilding/index-2.vue";
import PinggaoPartyBuildingMore from "@/views/_3_partyBuilding/pinggaoPartyBuilding/index-3.vue";

import qualitySystem from "@/views/_6_qualityAssurance/qualitySystem/index-1.vue";
import manufacturing from "@/views/_6_qualityAssurance/manufacturing/index-1.vue";
import productTesting from "@/views/_6_qualityAssurance/productTesting/index-1.vue";

import purchaseByBidding from "@/views/_9_contactUs/purchaseByBidding/index-1.vue";
import becomePartner from "@/views/_9_contactUs/becomePartner/index-1.vue";
import businessConsulting from "@/views/_9_contactUs/businessConsulting/index-1.vue";
import addressTelephone from "@/views/_9_contactUs/addressTelephone/index-1.vue";

import groupProfile from "@/views/_1_aboutPinggao/groupProfile/myIndex.vue";
import lesadingMember from "@/views/_1_aboutPinggao/lesadingMember/myIndex.vue";
import organizationalStructure from "@/views/_1_aboutPinggao/organizationalStructure/myIndex.vue";
import seniorHonor from "@/views/_1_aboutPinggao/seniorHonor/myIndex.vue";
import approachPinggao from "@/views/_1_aboutPinggao/approachPinggao/myIndex.vue";
import keyProject from "@/views/_4_productEngineering/keyProject/myIndex.vue";
import productSeriesDetail from "@/views/_4_productEngineering/productSeriesDetail/myIndex.vue";
import productSeries from "@/views/_4_productEngineering/productSeries/myIndex.vue";
import scientificResearchAchievement
  from "@/views/_7_scientificResearchCenter/scientificResearchAchievement/myIndex.vue";
import scientificResearchSystem
  from "@/views/_7_scientificResearchCenter/scientificResearchSystem/myIndex.vue";
import testSystem from "@/views/_7_scientificResearchCenter/testSystem/myIndex.vue";
import aboutPinggao from "@/views/_1_aboutPinggao/aboutPinggao.vue";
import productEngineering from "@/views/_4_productEngineering/index.vue";
import scientificResearchCenter from "@/views/_7_scientificResearchCenter/index.vue";
import homePage_1 from "@/views/homePage/homePage-1.vue";

const router = createRouter({
  history: createWebHistory(), // 使用哈希模式，适合单页面应用
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
          path: "groupProfile", component: groupProfile
        },
        {
          path: "lesadingMember", component: lesadingMember
        },
        {
          path: "organizationalStructure", component: organizationalStructure
        },
        {
          path: "seniorHonor", component: seniorHonor
        },
        {
          path: "approachPinggao", component: approachPinggao
        },
      ],
    },
    {
      path: "/informationCenter",
      redirect: "/informationCenter/headquartersDynamics-1",
      component: () => import("@/views/_2_informationCenter/index.vue"),
      children: [
        {
          path: "headquartersDynamics-1",
          component: () => import("@/views/_2_informationCenter/headquartersDynamics/index-1.vue"),
        },
        {
          path: "headquartersDynamics-2",
          component: () => import("@/views/_2_informationCenter/headquartersDynamics/index-2.vue"),
        },
        {
          path: "headquartersDynamics-3",
          component: () => import("@/views/_2_informationCenter/headquartersDynamics/index-3.vue"),
        },
        {
          path: "groupNews-1",
          component: () => import("@/views/_2_informationCenter/groupNews/index-1.vue"),
        },
        {
          path: "groupNews-2",
          component: () => import("@/views/_2_informationCenter/groupNews/index-2.vue"),
        },
        {
          path: "groupNews-3",
          component: () => import("@/views/_2_informationCenter/groupNews/index-3.vue"),
        },
        {
          path: "mediaFocus-1",
          component: () => import("@/views/_2_informationCenter/mediaFocus/index-1.vue"),
        },
        {
          path: "mediaFocus-2",
          component: () => import("@/views/_2_informationCenter/mediaFocus/index-2.vue"),
        },
        {
          path: "mediaFocus-3",
          component: () => import("@/views/_2_informationCenter/mediaFocus/index-3.vue"),
        },
        {
          path: "hotVideo",
          component: () => import("@/views/_2_informationCenter/hotVideo/index-1.vue"),
        },
        {
          path: "latestAnnouncement-1",
          component: () => import("@/views/_2_informationCenter/latestAnnouncement/index-1.vue"),
        },
        {
          path: "latestAnnouncement-2",
          component: () => import("@/views/_2_informationCenter/latestAnnouncement/index-2.vue"),
        },
      ],
    },
    {
      path: "/partyBuilding",
      component: partyBuilding,
      redirect: "/partyBuilding/partyspirit",
      children: [
        {path: "partyspirit", component: partyspirit},
        {path: "partyspiritDetail", component: partyspiritDetail},
        {path: "partyspiritMore", component: partyspiritMore},
        {path: "pinggaoPartyBuilding", component: pinggaoPartyBuilding},
        {
          path: "pinggaoPartyBuildingDetail",
          component: pinggaoPartyBuildingDetail,
        },
        {path: "PinggaoPartyBuildingMore", component: PinggaoPartyBuildingMore},
      ],
    },
    {
      path: "/productEngineering",
      redirect: "/productEngineering/productSeries", // 这里的重定向路径是相对于父路径的
      component: productEngineering,
      children: [
        {path: "keyProject", component: keyProject},
        {path: "productSeriesDetail", component: productSeriesDetail},
        {path: "productSeries", component: productSeries},
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
        {path: "qualitySystem", component: qualitySystem},
        {path: "manufacturing", component: manufacturing},
        {path: "productTesting", component: productTesting},
      ],
    },
    {
      path: "/scientificResearchCenter",
      redirect: "/scientificResearchCenter/scientificResearchSystem", // 这里的重定向路径是相对于父路径的
      component: scientificResearchCenter,
      children: [
        {path: "scientificResearchAchievement", component: scientificResearchAchievement},
        {path: "scientificResearchSystem", component: scientificResearchSystem},
        {path: "testSystem", component: testSystem},
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
          path: "talentRecruitment-1",
          component: () => import("@/views/_8_humanResources/talentRecruitment/index-1.vue"),
        },
        {
          path: "talentRecruitment-2",
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
        {path: "purchaseByBidding", component: purchaseByBidding},
        {path: "becomePartner", component: becomePartner},
        {path: "businessConsulting", component: businessConsulting},
        {path: "addressTelephone", component: addressTelephone},
      ],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // 定义需要回到顶部的路由路径数组
    const scrollToTopPaths = [
      '/aboutPinggao/groupProfile',
      '/informationCenter/headquartersDynamics-1',
      '/partyBuilding/partyspirit',
      '/productEngineering/productSeries',
      '/marketingService/performancePledge',
      '/qualityAssurance/qualitySystem',
      '/scientificResearchCenter/scientificResearchSystem',
      '/humanResources/talentTeam',
      '/contactUs/purchaseByBidding',
    ];

    // 检查目标路由是否在需要回到顶部的路径数组中
    if (scrollToTopPaths.includes(to.path)) {
      return { top: 0, behavior: 'smooth' };
    }

    // 如果有 savedPosition，即浏览器返回操作，则滚动到原来的位置
    if (savedPosition) {
      return savedPosition;
    }

    // 默认情况下，不处理滚动位置
    return {};
  }
});

export default router;
