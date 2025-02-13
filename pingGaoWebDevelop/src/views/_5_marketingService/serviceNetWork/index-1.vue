<script setup>
defineOptions({
  name: "marketing-serviceIndex1-1",
});

import MyTitle from "@/components/MyTitle.vue";
import MyContent from "@/components/MyContent.vue";
</script>

<template>
  <div>
    <div style="position: relative; min-height: 1120px">
      <div class="body-content">
        <div class="bodyBg"></div>
        <div>
          <MyTitle title="服务网络" English="SERVICE PROCESS" />
        </div>
        <div style="margin-top: 55px">
          <MyContent
            title="始终以支撑电网安全稳定运行为使命"
            content1="坚持以客户为中心，以客户满意和价值提升为目标，完善服务功能、健全服务标准、创新服务模式、多样化服务保障，不断提升客户"
            content2="服务水平，全力打造建设现代企业客户服务体系，切实提升客户满意度、获得感，为集团高质量跨越发展提供有力支撑。"
          />
        </div>
        <div class="process-title">服务流程图</div>
        <div class="process"></div>
      </div>
      <div class="footer-bg"></div>
    </div>
  </div>
</template>

<style scoped>
.bodyBg {
  background-color: #def1fb;
  width: 100%;
  min-height: 493px;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
}
.body-content {
  margin: 0 210px;
  padding-top: 65px;
  min-height: 2520px;
}

.footer-bg {
  width: 100%;
  height: 90vh;
  background-image: url("../../../assets/imgs/_5_marketingServiceImgs/serviceBg1.png");
  background-size: cover;
  position: absolute;
  left: 0px;
  bottom: 0px;
  z-index: -1;
}

.process-title {
  font-size: 32px;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(69, 179, 224);
  line-height: 1.156;
  text-align: center;
  padding-top: 62px;
  padding-bottom: 47px;
}

.process {
  width: 1360px;
  height: 1321px;
  background-image: url("../../../assets/imgs/_5_marketingServiceImgs/process.png");
  background-size: cover;
}
</style>
