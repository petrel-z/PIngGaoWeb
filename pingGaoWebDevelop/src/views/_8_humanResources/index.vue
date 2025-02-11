<script setup>
defineOptions({
  name: "marketing-serviceIndex",
});

import { ref } from "vue";
import ComHeader from "@/components/ComHeader.vue";
import Footer from "@/components/Footer.vue";
import imgPath from "@/assets/imgs/_8_humanResourcesImgs/头部轮播-08.png";

const content = ref({
  title: "人力资源",
  content: "人才强企战略是集团发展战略之一",
  footer: "PG GROUP",
  imgPath: imgPath,
});
const footer = ref([
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
  height: 68vh;
  min-width: 1920px;
  background-image: url("@/assets//imgs/_8_humanResourcesImgs/headerBg.png");
  background-size: cover;
}
</style>
