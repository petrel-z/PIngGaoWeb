<script setup>
import footerBg from "@/assets/imgs/_6_qualityAssuranceImgs/t6_topBar.png";
import imgPath from "@/assets/imgs/_8_humanResourcesImgs/头部轮播-08.png";
import ComHeader from "@/components/ComHeader.vue";
import Footer from "@/components/Footer.vue";
import RightButton from "@/components/RightButton.vue";
import { ref } from "vue";

defineOptions({
  name: "MarketingServiceIndex",
});

const content = ref({
  title: "人力资源",
  content: "人才强企战略是集团发展战略之一",
  footer: "PG GROUP",
  imgPath: imgPath,
  footerBg: footerBg,
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
    path: "/humanResources/talentRecruitment",
  },
  {
    name: "博士后工作站",
    path: "/humanResources/postdoctoralWorkstation",
  },
]);
</script>

<template>
  <div class="header">
    <ComHeader :content="content" :footer="footer" />
  </div>
  <router-view />
  <div class="right_button">
    <RightButton />
  </div>
  <div>
    <Footer />
  </div>
</template>

<style scoped>
.header {
  height: 32vw;
  min-width: 100%;
  background-image: url("@/assets/imgs/_8_humanResourcesImgs/头部轮播-08.png");
  background-size: cover;
}

.right_button {
  position: absolute;
  top: 1400px;
  right: 0;
  z-index: 1001;
}

@media (max-width: 900px) {
  .header {
    height: 53vw;
    width: 100%;
    background-image: url("@/assets/imgs/_8_humanResourcesImgs/moveHeaderBg.png");
    background-size: cover;
  }

  .right_button {
    display: none;
  }
}
</style>
