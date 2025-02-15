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
  name: "ProductEngineering",
});
import { ref } from "vue";
import ComHeader from "@/components/ComHeader.vue";
import Footer from "@/components/Footer.vue";
import imgPath from "@/assets/imgs/_4_productEngineeringImgs/头部轮播-04.png";
const info = ref({
  title: "产品工程",
  content: "建设世界一流智慧电气装备集团",
  footer: "PG GROUP",
  imgPath: imgPath,
});

const footer = ref([
  { name: "产品系列", path: "/productEngineering/productSeries" },
  { name: "重点工程", path: "/productEngineering/keyProject" },
]);
</script>
<style lang="less" scoped>

.header {
  background-image: url("../../assets/imgs/_4_productEngineeringImgs/头部轮播-04.png");
  width: auto;
  height: 610px;
  background-size: cover;
  // padding-top: 32px;
}
</style>
