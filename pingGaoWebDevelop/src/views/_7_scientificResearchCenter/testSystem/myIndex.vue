<script setup>
import MyTitle from "@/components/MyTitle.vue";
import MyContent from "@/components/F6_MyContent.vue";
import { ref, onMounted } from "vue";
const isVisibleWordRight1 = ref(false);
const isVisibleWordRight2 = ref(false);
const wordRightRef1 = ref(null);
const wordRightRef2 = ref(null);
// 创建交叉观察器
const createObserver = (refElement, isVisible) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const { intersectionRatio } = entry;
        // 设置触发条件：元素进入视口 50% 以上时触发
        if (intersectionRatio >= 0.0001) {
          isVisible.value = true;
          observer.disconnect(); // 元素可见后停止观察
        }
      });
    },
    {
      root: null, // 使用浏览器视口作为根元素
      rootMargin: "0px", // 无额外的边距
      threshold: 0, // 当元素的 50% 进入视口时触发
    }
  );
  if (refElement.value) {
    observer.observe(refElement.value);
  }
};
// 初始化所有的观察器
const initializeObservers = () => {
  createObserver(wordRightRef1, isVisibleWordRight1);
  createObserver(wordRightRef2, isVisibleWordRight2);
};
onMounted(initializeObservers); // 在组件挂载时调用
</script>
<template>
  <div class="testSystem">
    <MyTitle title="试验体系" English="TEST SYSTEM"></MyTitle>
    <div class="content">
      <MyContent class="my_content" title="三院两所两中心一基地">
        <div class="content1"  ref="wordRightRef1"
        :class="{ 'move-right': isVisibleWordRight1}">
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
        </div>
      </MyContent>
      <MyContent title="科技创新平台">
        <div class="content2"  ref="wordRightRef2"
        :class="{ 'move-right': isVisibleWordRight2}">
          <div class="text">
            高压开关设备绝缘实验室、金属材料成型及热处理实验室、煤接技术及压力容实验室，表面处理及金属防高实验室，拥有自主开发，集低压直流配用电、低压动模仿真、直流用电展示等功能于一体智慧物联直流共享试验室。势发布研究、试验、成果等资源，推动科技资源在公司内的充分共享:提高实验室研究能力，储全实验率协作配合，探罗建立有偿共享和对外开故的商业化梗式。
          </div>
        </div>
      </MyContent>
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
  padding: 64px 11%;
  border-radius: 20px;
  background-color: #fff;
  z-index: -100;
}
.content {
  margin-top: 46px;
  border-bottom: 1px solid #006fc1;
}
.content1{
  width: 100%;
  transform: translateX(100%); /* 初始位置在左边 */
  visibility: hidden;
  transition: transform 1s ease, opacity 0.5s ease; /* 过渡效果 */
}
.content1.move-right {
  opacity: 1;
  transform: translateX(0);
  visibility: visible;
}
.content2{
  width: 100%;
  transform: translateX(100%); /* 初始位置在左边 */
  visibility: hidden;
  transition: transform 1s ease, opacity 0.5s ease; /* 过渡效果 */
}
.content2.move-right {
  opacity: 1;
  transform: translateX(0);
  visibility: visible;
}
.content .my_content {
  position: relative;
}
.content .right {
  position: absolute;
  left: 68%;
  top: 0px;
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
  height: 1064px;
  bottom: 0;
  left: 0;
  z-index: -20;
}
.footer_img img {
  height: 1064px;
  width: 100%;
}
.content .left {
  width: 430px;
}
.content .right {
  width: 420px;
}
</style>
