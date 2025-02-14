<script setup>
import MyTitle from "@/components/MyTitle.vue";
import myContent from "@/components/F6_MyContent.vue";
import RightButton from "@/components/RightButton.vue";
</script>
<template>
  <div class="testSystem">
    <MyTitle title="试验体系" English="TEST SYSTEM"></MyTitle>
    <div class="content">
      <myContent class="my_content" title="三院两所两中心一基地">
        <span class="left">
          <div class="p">国家级企业技术中心</div>
          <div class="p">机械工业交流高压开关设备工程技术研究中心</div>
          <div class="p">机械工业特高压GI5工程实验空</div>
          <div class="p">橡胶绝缘密封材料河南省工程实验室</div>
          <div class="p">河南省高压开关重点实验窒</div>
          <div class="p">河南省高压交流输变电设备工程技术研究中心</div>
          <div class="p">高压开关设备河南省工程实验室</div>
        </span>
        <span class="right">
          <div class="p">六氧化硫河南省工程实验室</div>
          <div class="p">河南省配网设备及自动化工程研究中心</div>
          <div class="p">国家电网公司高压开关设备绝缘材料实验室</div>
          <div class="p">河南省环保型智能开关工程技术研究中心</div>
          <div class="p">河南省气体绝缘高压开关设备工程技术研究中心</div>
          <div class="p">河南省气体绝缘高压开关工程实验室</div>
        </span>
      </myContent>
      <myContent title="科技创新平台">
        <div class="text">
          高压开关设备绝缘实验室、金属材料成型及热处理实验室、煤接技术及压力容实验室，表面处理及金属防高实验室，拥有自主开发，集低压直流配用电、低压动模仿真、直流用电展示等功能于一体智慧物联直流共享试验室。势发布研究、试验、成果等资源，推动科技资源在公司内的充分共享:提高实验室研究能力，储全实验率协作配合，探罗建立有偿共享和对外开故的商业化梗式。
        </div>
      </myContent>
    </div>
    <div class="rightButton">
      <RightButton></RightButton>
    </div>
    <div class="footer_img">
      <img src="@/assets/imgs/_7_scientificResearchCenterImgs/science-footer.png" alt="" />
    </div>
  </div>
</template>
<style scoped>
.testSystem {
  position: relative;
  margin: auto;
  width: 100%;
  height: 1680px;
  /* border: 1px solid rgb(206, 206, 206); */
  padding: 64px 210px;
  border-radius: 20px;
  background-color: #fff;
  z-index: -100;
}
.rightButton {
  position: absolute;
  top: 520px;
  right: 0;
}
.content {
  margin-top: 46px;
  border-bottom: 1px solid #006fc1;
}
.content .my_content {
  position: relative;
}
.content .right {
  position: absolute;
  left: 966px;
  top: 50px;
}
.content .my_content .p {
  font-size: 20px;
  font-family: "AlibabaPuHuiTi_2_55_Regular", sans-serif;
  color: rgb(89, 87, 87);
}
.text {
  font-size: 20px;
  font-family: "AlibabaPuHuiTi_2_55_Regular", sans-serif;
  color: rgb(89, 87, 87);
  line-height: 1.56;
  margin-bottom: 24px;
}
.footer_img {
  position: absolute;
  width: 100%;
  height: 1040px;
  bottom: 0;
  left: 0;
  z-index: -20;
}
.footer_img img {
  width: 100%;
}
.content .left {
  width: 430px;
}
.content .right {
  width: 420px;
}
</style>
