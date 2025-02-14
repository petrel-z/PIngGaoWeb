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
const info = ref({
  title: "科研中心",
  content: "电工行业重大技术装备支柱企业",
  footer: "PG GROUP",
  imgPath: imgPath,
});

const footer = ref([
  { name: "科研体系", path: "/scientificResearchCenter/scientificResearchSystem" },
  { name: "科研成果", path: "/scientificResearchCenter/scientificResearchAchievement" },
  { name: "试验体系", path: "/scientificResearchCenter/testSystem" },
]);
</script>
<style lang="less" scoped>
.header {
  background-image: url("../../assets/imgs/_7_scientificResearchCenterImgs/头部轮播-07.png");
  padding-top: 32px;
  width: auto;
  height: 610px;
  background-size: cover;
}
</style>
