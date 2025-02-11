<template>
  <!-- <div class="aboutPinggao">
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
import { ref } from "vue";

const info = ref({
  title: "关于平高",
  content: "赋能智慧电气·创引绿色能源",
  footer: "PG GROUP",
  imgPath: imgPath,
});

const footer = ref([
  { name: "集团简介", path: "/aboutPinggao/groupProfile" },
  { name: "领导成员", path: "/aboutPinggao/lesadingMember" },
  { name: "组织结构", path: "/aboutPinggao/organizationalStructure" },
  { name: "资质荣誉", path: "/aboutPinggao/seniorHonor" },
  { name: "走进平高", path: "/aboutPinggao/approachPinggao" },
]);

import ComHeader from "@/components/ComHeader.vue";
import imgPath from "@/assets/imgs/_1_aboutPinggaoImgs/头部轮播-01.png";
import Footer from "@/components/Footer.vue";
</script>
<style lang="less" scoped>
.header {
  background-image: url("../../assets//imgs/_1_aboutPinggaoImgs/top-bg.png");

  width: auto;
  height: 67vh;
  background-size: cover;
}
</style>
