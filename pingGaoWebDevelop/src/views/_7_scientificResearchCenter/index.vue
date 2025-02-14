<template>
  <!-- <div class="productEngineering">
    <div class="header-body">
      <div class="header-body-title">{{ info.title }}</div>
      <hr class="header-body-hr" />
      <div class="header-body-content">{{ info.content }}</div>
      <div class="header-body-footer">{{ info.footer }}</div>
    </div>
    <div class="header-footer">
      <ul>
        <li v-for="item in footer" :key="item.name">
          <router-link class="footer_text" :to="item.path">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
  </div> -->
  <div class="header">
    <ComHeader :content="info" :footer="footer"></ComHeader>
  </div>
  <router-view></router-view>

  <div style="width: auto">
    <Footer />
  </div>
</template>

<script setup>
defineOptions({
  name: "ScientificResearchCenter",
});
import { ref } from "vue";
import ComHeader from "@/components/ComHeader.vue";
import Footer from "@/components/Footer.vue";
import imgPath from "@/assets/imgs/_7_scientificResearchCenterImgs/头部轮播-07.png";
import footerBg from "@/assets/imgs/_6_qualityAssuranceImgs/t6_topBar.png";
const info = ref({
  title: "科研中心",
  content: "电工行业重大技术装备支柱企业",
  footer: "PG GROUP",
  imgPath: imgPath,
  footerBg: footerBg,
});

const footer = ref([
  { name: "科研体系", path: "/scientificResearchCenter/scientificResearchSystem" },
  { name: "科研成果", path: "/scientificResearchCenter/scientificResearchAchievement" },
  { name: "试验体系", path: "/scientificResearchCenter/testSystem" },
]);
</script>
<style lang="less" scoped>
// .productEngineering{
//   width: 1920px;
//   height: 610px;
//   background-image: url(src\\assets\\img1-1\\top-bg3.png);
//   z-index: 0;
//   padding-top: 170px;
// }
// .header-body {
//     margin-left: 12em;
//     color: #fff;
//     .header-body-title {
//       margin-top: 90px;
//       margin-bottom: 10px;
//       font-size: 50px;
//       font-family: "AlibabaPuHuiTi_2_65_Medium";
//       line-height: 1.2;
//     }
//     .header-body-hr {
//       width: 100px;
//       height: 1px;
//     }
//     .header-body-content {
//       margin-top: 10px;
//       font-size: 34px;
//       font-family: 'AlibabaPuHuiTi_2_45_Light';
//       line-height: 1.2;
//     }

//     .header-body-footer {
//       font-size: 20px;
//       font-family: 'Avenir-Medium-6',sans-serif;
//       color: #fff;
//       text-transform: uppercase;
//       line-height: 1.2;
//     }
//   }

//   .header-footer {
//     margin-left: 1200px;
//     margin-top: 134px;
//     font-size: 23px;
//     font-family: 'AlibabaPuHuiTi_2_55_Regular',sans-serif;
//     width: 707px;
//     height: 68px;
//     display: flex;
//     align-items: center;
//     padding-left: 60px;
//     ul {
//       display: flex;
//       justify-content: start;
//       align-items: center;
//       li {
//         margin-right: 0.5em;
//         a {
//           color: #fff;
//           z-index: 10000;
//         }
//       }

//     }
//   }
//   .footer_text{
//     cursor: pointer;
//   }
//   .footer_text:hover{
//    border-bottom: 1px solid rgb(255, 255, 255);
//   }
.header {
  background-image: url("../../assets/imgs/_7_scientificResearchCenterImgs/头部轮播-07.png");

  width: auto;
  height: 67vh;
  background-size: cover;
}
</style>
