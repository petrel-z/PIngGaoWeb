<script setup>
defineOptions({
  name: "marketing-serviceIndex",
});

import { ref } from "vue";
import ComHeader from "@/components/ComHeader.vue";
import Footer from "@/components/Footer.vue";
import imgPath from "@/assets/imgs/_5_marketingServiceImgs/头部轮播-05.png";

const content = ref({
  title: "营销服务",
  content: "始于客户需求·为客户创造价值",
  footer: "PG GROUP",
  imgPath: imgPath,
});
const footer = ref([
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
]);
</script>

<template>
  <div>
    <div class="header">
      <div style="padding-top: 32px; height: 100%">
        <ComHeader :content="content" :footer="footer" />
      </div>
    </div>
    <router-view />
    <div>
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.header {
  height: 735px;
  width: 1920px;
  background-image: url("@/assets//imgs/_5_marketingServiceImgs/headerBg.png");
  background-size: cover;
}
</style>
