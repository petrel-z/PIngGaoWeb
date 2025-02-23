<script setup>
import MyTitle from "@/components/MyTitle.vue";
import MyContent from "@/components/F6_MyContent.vue";
import { ref,onMounted } from "vue";
const isVisibleWordRight1 = ref(false)
const isVisibleWordRight2 = ref(false)
const wordRightRef1 = ref(null)
const wordRightRef2 = ref(null)
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
      rootMargin: '0px', // 无额外的边距
      threshold: 0, // 当元素的 50% 进入视口时触发
    }
  );
  if (refElement.value) {
    observer.observe(refElement.value);
  }
};
// 初始化所有的观察器
const initializeObservers = () => {
  createObserver(wordRightRef1,isVisibleWordRight1)
  createObserver(wordRightRef2,isVisibleWordRight2)
}
onMounted(initializeObservers); // 在组件挂载时调用
</script>
<template>
  <div class="scientificResearchSystem">
    <MyTitle title="科研体系" English="SCIENTIFIC RESEARCH SYSTEM"></MyTitle>
    <div class="content">
      <MyContent title="三院两所两中心一基地">
      <div class="content1"  ref="wordRightRef1"
      :class="{ 'move-right': isVisibleWordRight1}">
      <div class="text">
          平高集团已建成从前端研发、成果孵化、产业培育到市场推广的“三院两所两中心一基地”新型科研体系，初步形成各研发机构协同配合、有序竞争的研发新格局，有效缩短新技术向新产品、新市场的转化周期。
        </div>
        <div class="text">
          “三院”定位为前沿技术研发中心，包含:清华平高联合研究中心，重点围绕电机驱动技术、电力电子设备、能量交直流传输技术等开展研究工作;平高西交大研究院，重点围绕新型电力系统开展数字装备、智能传感、数字孪生、柔性配网、智能微网、清洁能源、直流技术、真空环保技术等研究:平高大连交大研究院，重点围绕铁路电气化技术，开展智能牵引供电系统研究及核心设备研制，高铁牵引供电系统的健康管理和故障预警技术研究。
        </div>
        <div class="text">
          “两所”
          定位为专项技术支撑，包含:储能研究所，重点围绕储能新技术、新产品、新工艺开展研究工作，跟踪氢能、飞轮储能、岩穴储能等前瞻技术;综合能源研究所，主要开展综合能效系统、多能互补技术、智慧能源综合服务等技术研究，为集团提供智慧能源一站式解决方案及核心设备。
        </div>
        <div class="text">
          “两中心”定位为传统主业技术高地，包含:集团技术中心，主要服务集团高压产业，重点开展高压、超高压、特高压交直流、全系列开关设备更新换代、补全市场特殊需求;配网技术中心，构建和管理配网产业统一技术平台，牵头开展通用型产品升级换代、技术源头降成本，补全市场特殊需求。
        </div>
        <div class="text">
          “一基地”定位为新技术试制、产业服务、推广平台，即中试基地，以试制厂为基础，针对新兴技术需求进行扩项，对内解决量产的工艺问题，对外为高校、科研院所、小微企业等提供中试和产业化配套协作服务，打造开放、共享的综合性中试基地。
        </div>
      </div>
      </MyContent>
      <MyContent  title="科技创新平台">
      <div class="content2"  ref="wordRightRef2"
      :class="{ 'move-right': isVisibleWordRight2}">
      <div class="text">
          作为我国开关行业领军企业之一，平高集团研发实力雄厚，技术创新能力强，拥有国家认定企业技术中心，河南省高压开关重点实验室等12个国家及省部级创新平台，覆盖高压、配网、材料等方向。
        </div>
        <div class="text">
          12大研发科技创新平台即:国家认定企业技术中心、河南省高压开关重点实验室、河南省高压交流输变电设备工程技术研究中心、河南省配网设备及自动化工程研究中心、河南省电工绝缘材料工程研究中心、河南省高压开关设备工程研究中心、机械工业特高压GIS重点实验室、机械工业交流高压开关设备工程技术研究中心、河南省环保型智能开关工程技术研究中心、河南省气体绝缘高压开关设备工程研究中心、气体绝缘高压开关设备河南省工程实验室。
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
.scientificResearchSystem {
  position: relative;
  margin: auto;
  width: 100%;
  height: 122.5rem;
  padding: 4rem 11%;
  border-radius: 1.25rem;
  background-color: #fff;
  z-index: -100;
}
.content {
  margin-top: 2.875rem;
  border-bottom: 0.0625rem solid #006fc1;
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
.text {
  font-size: 1.25rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular", sans-serif;
  color: rgb(89, 87, 87);
  line-height: 1.56;
  margin-bottom: 1.5rem;
}
.footer_img {
  position: absolute;
  width: 100%;
  height: 66.5rem;
  bottom: 0;
  left: 0;
  z-index: -20;
}
.footer_img img {
  width: 100%;
  height: 100%;
}
</style>
