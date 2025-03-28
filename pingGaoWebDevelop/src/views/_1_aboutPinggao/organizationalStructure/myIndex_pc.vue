
<script setup>
import MyTitle from "@/components/MyTitle.vue";
import headLine from "@/components/MyHeadLine.vue";
import { ref, onMounted } from "vue";
import { useRouter } from 'vue-router';
const router = useRouter();

const redirectToMobileVersion = () => {
  try {
    const isMobile = window.matchMedia('(max-device-width: 900px)').matches;

    // 避免重复跳转
    const currentPath = router.currentRoute.value.path;
    const targetPath = isMobile
      ? '/aboutPinggao/organizationalStructure2'
      : '/aboutPinggao/organizationalStructure1';

    if (currentPath !== targetPath) {
      router.push(targetPath);
    }
  } catch (error) {
    console.error('路由跳转失败:', error);
    // 可添加回退方案
    router.push('/error-page');
  }
};
onMounted(() => {
  // 确保只在客户端执行
  if (typeof window !== 'undefined') {
    redirectToMobileVersion();
  }
});
const infoRef = ref(null);
const isVisibleInfo = ref(false);
const infoRef1 = ref(null);
const isVisibleInfo1 = ref(false);
const wordLeftRef = ref(null);
const isVisibleWordLeft = ref(false);
const wordRightRef = ref(null);
const isVisibleWordRight = ref(false);
const wordLeftRef1 = ref(null);
const isVisibleWordLeft1 = ref(false);
const wordRightRef1 = ref(null);
const isVisibleWordRight1 = ref(false);
// 创建交叉观察器
const createObserver = (refElement, isVisible) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const { intersectionRatio } = entry;
        // 设置触发条件：元素进入视口 50% 以上时触发
        if (intersectionRatio >= 0) {
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
  createObserver(infoRef, isVisibleInfo);
  createObserver(infoRef1, isVisibleInfo1);
  createObserver(wordLeftRef, isVisibleWordLeft);
  createObserver(wordLeftRef1, isVisibleWordLeft1);
  createObserver(wordRightRef, isVisibleWordRight);
  createObserver(wordRightRef1, isVisibleWordRight1);
};
onMounted(initializeObservers); // 在组件挂载时调用
</script>
<template>
  <!-- 组织结构 -->
  <div class="organizationalStructure">
    <MyTitle class="mytitle" title="组织机构" english="organization structure"></MyTitle>
    <div class="organization">
      <div class="organization_title">平高集团有限公司</div>
      <div class="detail">
        <div class="introduce">
          <div class="info" ref="infoRef" :class="{ 'scale-up': isVisibleInfo }">
            <div class="info_top">12</div>
            <div class="info_bottom">全资子公司<span>/</span>家</div>
          </div>
        </div>
        <div class="introduce">
          <div class="info" ref="infoRef" :class="{ 'scale-up': isVisibleInfo }">
            <div class="info_top">6</div>
            <div class="info_bottom">投股子公司<span>/</span>家</div>
          </div>
        </div>
        <div class="introduce">
          <div class="info" ref="infoRef" :class="{ 'scale-up': isVisibleInfo }">
            <div class="info_top">1</div>
            <div class="info_bottom">合营公司<span>/</span>家</div>
          </div>
        </div>
        <div class="introduce">
          <div class="info" ref="infoRef" :class="{ 'scale-up': isVisibleInfo }">
            <div class="info_top">11</div>
            <div class="info_bottom">本部部门<span>/</span>家</div>
          </div>
        </div>
        <div class="introduce">
          <div class="info" ref="infoRef" :class="{ 'scale-up': isVisibleInfo }">
            <div class="info_top">2</div>
            <div class="info_bottom">分公司<span>/</span>家</div>
          </div>
        </div>
        <div class="introduce">
          <div class="info" ref="infoRef" :class="{ 'scale-up': isVisibleInfo }">
            <div class="info_top">1</div>
            <div class="info_bottom">支撑平台<span>/</span>家</div>
          </div>
        </div>
      </div>
    </div>
    <div class="component">
      <div class="content_top1" ref="wordLeftRef" :class="{ 'move-left': isVisibleWordLeft }">
        <div class="left">
          <headLine title="本部部门"></headLine>
          <ul class="parts">
            <li>办公室(党委办公室、董事会办公室)</li>
            <li>发展策划部</li>
            <li>财务资产部(资本管理部)</li>
            <li>党委组织部(人力资源部、全面深化改革办公室)</li>
            <li>科信部</li>
            <li>纪委（党委巡察办）</li>
            <li>合规管理部（审计部）</li>
            <li>党委工作部(党委宣传部、工会、团委)</li>
            <li>市场运营部</li>
            <li>安全质量部</li>
            <li>生产物资部</li>
          </ul>
        </div>
        <div class="middle">
          <headLine title="全资子公司"></headLine>
          <ul class="parts">
            <li>北京平高清大科技发展有限公司</li>
            <li>河南平高祥和电气有限公司</li>
            <li>平高集团(河南)电力器材科技有限公司</li>
            <li>平高集团物链科技有限公司</li>
            <li>平高集团电力检修工程有限公司</li>
            <li>西安平高智慧能源有限公司</li>
            <li>雄安平高新能源科技有限公司</li>
            <li>平高综合能源服务有限公司</li>
            <li>平高集团智能电气有限公司</li>
            <li>南京平高信息通信技术有限公司</li>
            <li>河南平高电力设备有限公司</li>
          </ul>
        </div>
        <div class="right">
          <headLine title="控股子公司"></headLine>
          <ul class="parts">
            <li>天津平高易电科技有限公司</li>
            <li>江苏平高泰事达电气有限公司</li>
            <li>平高集团智能电力科技有限公司</li>
            <li>平高集团华生电力设计有限公司</li>
            <li>湖南平高开关有限公司</li>
            <li>上海平高智联科技有限公司</li>
          </ul>
        </div>
      </div>

      <div class="content_middle1" ref="wordRightRef" :class="{ 'move-right': isVisibleWordRight }">
        <div class="left">
          <headLine title="支撑平台"></headLine>
          <ul class="parts">
            <li>平高集团工程项目管理中心</li>
          </ul>
        </div>
        <div class="middle">
          <headLine title="营销平台"></headLine>
          <ul class="parts">
            <li>平高集团营销服务中心</li>
          </ul>
        </div>
        <div class="right">
          <headLine title="营销平台"></headLine>
          <ul class="parts">
            <li>平高东芝(河南)开关零部件制造有限公司</li>
          </ul>
        </div>
      </div>
      <div class="content_bottom1" ref="wordLeftRef" :class="{ 'move-left': isVisibleWordLeft }">
        <div class="left">
          <headLine title="分公司"></headLine>
          <ul class="parts">
            <li>平高集团有限公司综合能源服务分公司</li>
            <li>平高集团电力储能事业部</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="organization_2">
      <div class="organization_title">平高集团控股子公司</div>
      <div class="detail">
        <div class="introduce">
          <div class="info" ref="infoRef1" :class="{ 'scale-up': isVisibleInfo1 }">
            <div class="info_top">6</div>
            <div class="info_bottom">全资子公司<span>/</span>家</div>
          </div>
        </div>
        <div class="introduce">
          <div class="info" ref="infoRef1" :class="{ 'scale-up': isVisibleInfo1 }">
            <div class="info_top">6</div>
            <div class="info_bottom">投股子公司<span>/</span>家</div>
          </div>
        </div>
        <div class="introduce">
          <div class="info" ref="infoRef1" :class="{ 'scale-up': isVisibleInfo1 }">
            <div class="info_top">1</div>
            <div class="info_bottom">合营公司<span>/</span>家</div>
          </div>
        </div>
        <div class="introduce">
          <div class="info" ref="infoRef1" :class="{ 'scale-up': isVisibleInfo1 }">
            <div class="info_top">9</div>
            <div class="info_bottom">本部部门<span>/</span>家</div>
          </div>
        </div>
        <div class="introduce">
          <div class="info" ref="infoRef1" :class="{ 'scale-up': isVisibleInfo1 }">
            <div class="info_top">12</div>
            <div class="info_bottom">直属分公司<span>/</span>家</div>
          </div>
        </div>
        <div class="introduce">
          <div class="info" ref="infoRef1" :class="{ 'scale-up': isVisibleInfo1 }">
            <div class="info_top">4</div>
            <div class="info_bottom">支撑平台<span>/</span>家</div>
          </div>
        </div>
      </div>
    </div>
    <div class="component_2">
      <div class="content_top_2" ref="wordLeftRef1" :class="{ 'move-left': isVisibleWordLeft1 }">
        <div class="content_left_2">
          <headLine title="本部部门"></headLine>
          <ul class="parts">
            <li>综合管理部(党建工作部、纪委办公室)</li>
            <li>人劳部</li>
            <li>财务部</li>
            <li>证券部</li>
            <li>审计部</li>
            <li>科技管理部(发展策划部)</li>
            <li>生产物资部</li>
            <li>安全质量部</li>
            <li>平高集团客户服务中心</li>
          </ul>
        </div>
        <div class="content_middle_2">
          <headLine title="全资子公司"></headLine>
          <ul class="parts">
            <li>平高集团国际工程有限公司</li>
            <li>平高集团有限公司波兰分公司</li>
            <li>河南平高通用电气有限公司</li>
            <li>天津平高智能电气有限公司</li>
            <li>平高集团威海高压电器有限公司</li>
            <li>四川平高高压开关维修有限公司</li>
            <li>天津平高电气设备检修有限公司</li>
          </ul>
        </div>
        <div class="content_right_2">
          <headLine title="投股子公司"></headLine>
          <ul class="parts">
            <li>河南平芝高压开关有限公司</li>
            <li>上海平高天灵开关有限公司</li>
            <li>一希捷爱斯(上海)电气有限公司</li>
            <li>上海雷泽灵电气有限公司</li>
            <li>广州平高电力技术有限公司</li>
            <li>平高帕拉特(河南)能源科技有限公司</li>
            <li>平高集团印度电力有限公司</li>
            <li>平高新松电力智能装备(河南)有限公司</li>
          </ul>
        </div>
      </div>
      <div
        class="content_bottom_2"
        ref="wordRightRef1"
        :class="{ 'move-right': isVisibleWordRight1 }"
      >
        <div class="content_left_2">
          <headLine title="合营公司"></headLine>
          <ul class="parts">
            <li>平高东芝(廊坊)避雷器有限公司</li>
          </ul>
        </div>
        <div class="content_middle_2">
          <headLine title="支撑平台"></headLine>
          <ul class="parts">
            <li>工程技术中心(计量中心)</li>
            <li>市场营销中心</li>
            <li>综合运行中心</li>
            <li>特高压管理中心</li>
          </ul>
        </div>
        <div class="content_right_2">
          <headLine title="分厂 ，事业部"></headLine>
          <div class="two_parts">
            <ul class="parts">
              <li>超特高压事业部</li>
              <li>组合电器事业部</li>
              <li>高压电器事业部</li>
              <li>机构事业部</li>
              <li>机械制造事业部</li>
              <li>电力组件事业部</li>
            </ul>
            <ul class="parts">
              <li>绝缘分厂</li>
              <li>电镀分厂</li>
              <li>复合绝缘子事业部</li>
              <li>电控环保装备事业部</li>
              <li>管廊工程公司</li>
              <li>新能源事业部</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.organizationalStructure {
  position: relative;
  margin: auto;
  width: 100%;
  padding: 4rem 11%;
  border-radius: 1.25rem;
  background-color: #fff;
  z-index: -100;
}
.organization {
  position: relative;
  margin-top: 3.75rem;
  width: 100%;
  height: 20.25rem;
  background-color: #006fc1;
  border-radius: 0.9375rem;
}

.organization .organization_title {
  margin: auto;
  position: absolute;
  top: 3.75rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: rgb(255, 255, 255);
  font-size: 2rem;
  left: 50%;
  transform: translate(-50%, -50%);
}
.organization .detail {
  position: absolute;
  display: flex;
  bottom: 4.6875rem;
  width: 100%;
}
.organization .introduce {
  width: 16.7%;
  height: 7rem;
  border-right: 0.0625rem solid #2291d0;
  color: #fff;
  padding-bottom: 0.3125rem;
}

.organization .info {
  position: relative;
  transform: scale(0.3); /* 初始缩小 */
  opacity: 0; /* 初始不可见 */
  visibility: hidden; /* 初始隐藏 */
  transition: transform 0.5s ease, opacity 0.5s ease; /* 过渡效果 */
}

.organization .info.scale-up {
  transform: scale(1); /* 放大到原始大小 */
  opacity: 1; /* 可见 */
  visibility: visible; /* 可见 */
}

.organization .info .info_top {
  top: -0.0625rem;
  position: absolute;
  font-size: 3.75rem;
  font-family: "Avenir-black-4", sans-serif;
  color: rgb(255, 255, 255);
  z-index: 129;
  top: 1.875rem;
  left: 50%;
  transform: translate(-50%, -50%);
}
.organization .info .info_bottom {
  position: absolute;
  white-space: nowrap;
  display: flex;
  font-size: 1.625rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: rgb(255, 255, 255);
  top: 5.625rem;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (min-width: 600px) and (max-width: 700px) {
  .organization .info .info_top {
    font-size: 3.25rem !important;
  }
  .organization .info .info_bottom {
    font-size: 1.2rem !important;
  }
  .organization .info .info_bottom span {
    font-size: 1.3rem !important;
    display: block;
    margin: 0.0325rem;
  }
  .organization_2 .info .info_top {
    font-size: 3.25rem !important;
  }
  .organization_2 .info .info_bottom {
    font-size: 1.2rem !important;
    transform: translate(-50%, -50%);
  }
  .organization_2 .info .info_bottom span {
    font-size: 1.3rem !important;
    margin: 0.0625rem;
  }
  // .component .content_top .content_middle .bottom_2 {
  //   margin-top: 2.9rem !important;
  // }
}
@media (min-width: 701px) and (max-width: 800px) {
  .organization .info .info_top {
    font-size: 3.25rem;
  }
  .organization .info .info_bottom {
    font-size: 1.55rem;
  }
  .organization .info .info_bottom span {
    font-size: 1.5rem !important;
    margin: 0.0325rem;
  }
  .organization_2 .info .info_top {
    font-size:3.25rem !important;
  }
  .organization_2 .info .info_bottom {
    font-size: 1.55rem !important;
  }
  .organization_2 .info .info_bottom span {
    font-size: 1.5rem !important;
    margin: 0.0325rem;
  }
  .component li{
    font-size: 0.9rem !important;
  }
  .component_2 li{
    font-size: 0.9rem !important;
  }
}
.organization .info .info_bottom span {
  font-size: 1.6rem;
  display: block;
  margin: 0.0625rem;
}
.component {
  margin-top: 2.75rem;
}
@media (min-width: 600px) and (max-width: 700px) {
  .component li {
    font-size: 0.9rem !important;
  }
  .component_2 li {
    font-size: 0.9rem !important;
  }

}
.component .content_top1,.component .content_bottom1{
  display: flex;
  justify-content: space-between;
  transform: translateX(-100%); /* 初始位置在左边 */
  visibility: hidden;
  transition: transform 1s ease, opacity 0.5s ease; /* 过渡效果 */
  margin-bottom: 4rem;
}
.component .content_middle1{
  display: flex;
  justify-content: space-between;
  transform: translateX(100%); /* 初始位置在左边 */
  visibility: hidden;
  transition: transform 1s ease, opacity 0.5s ease; /* 过渡效果 */
  margin-bottom: 4rem;
}
.component .content_top1.move-left {
  opacity: 1;
  transform: translateX(0);
  visibility: visible;
}
.component .content_bottom1.move-left {
  opacity: 1;
  transform: translateX(0);
  visibility: visible;
}
.component  .content_middle1.move-right{
  opacity: 1;
  transform: translateX(0);
  visibility: visible;
}
.component .content_top1 .left .middle .right{
  width: 32%;
}

.component .content_top1 .left{
  width: 33%;
  margin-right: 2rem;
}
.component .content_top1 .middle{
  width: 33%;
  margin-right: 2rem;
}
.component .content_top1 .right{
  width: 33%;
}


.component .content_middle1 .left{
  margin-right: 2rem;
  width: 33%;
}
.component .content_middle1 .middle{
  margin-right: 2rem;
  width: 33%;
}
.component .content_middle1 .right{
  width: 33%;
}

.component .content_bottom1 .left{
  width: 32.2%;
}

.organization_2 {
  position: relative;
  margin-top: 3.75rem;
  width: 100%;
  height: 21.375rem;
  background-color: #45b3e0;
  border-radius: 0.9375rem;
}

.organization_2 .organization_title {
  margin: auto;
  position: absolute;
  top: 3.75rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: rgb(255, 255, 255);
  font-size: 2rem;
  left: 50%;
  transform: translate(-50%, -50%);
}
.organization_2 .detail {
  position: absolute;
  display: flex;
  bottom: 4.6875rem;
  width: 100%;
}
.organization_2 .introduce {
  width: 16.7%;
  height: 7rem;
  border-right: 0.0625rem solid #2291d0;
  color: #fff;
  padding-bottom: 0.3125rem;
}
.organization_2 .info {
  position: relative;
  transform: scale(0.3); /* 初始缩小 */
  opacity: 0; /* 初始不可见 */
  visibility: hidden; /* 初始隐藏 */
  transition: transform 0.5s ease, opacity 0.5s ease; /* 过渡效果 */
}

.organization_2 .info.scale-up {
  transform: scale(1); /* 放大到原始大小 */
  opacity: 1; /* 可见 */
  visibility: visible; /* 可见 */
}
.organization_2 .info .info_top {
  top: -0.0625rem;
  position: absolute;
  font-size: 3.75rem;
  font-family: "Avenir-black-4", sans-serif;
  color: rgb(255, 255, 255);
  z-index: 129;
  top: 1.875rem;
  left: 50%;
  transform: translate(-50%, -50%);
}
.organization_2 .info .info_bottom {
  position: absolute;
  white-space: nowrap;
  display: flex;
  font-size: 1.625rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: rgb(255, 255, 255);
  top: 5.625rem;
  left: 50%;
  transform: translate(-50%, -50%);
}
.organization_2 .info .info_bottom span {
  font-size: 1.5rem;
  display: block;
  margin: 0.0625rem;
}
.organization_2 .pic {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 5.9375rem;
}
.organization_2 .text {
  position: absolute;
  font-size: 1.75rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular", sans-serif;
  color: rgb(255, 255, 255);
  left: 50%;
  transform: translateX(-50%);
  top: 7.5rem;
}
.component_2 {
  margin-top: 3.75rem;
}
.component_2 .content_top_2 {
  display: flex;
  justify-content: space-between;
  transform: translateX(-100%); /* 初始位置在左边 */
  visibility: hidden;
  transition: transform 1s ease, opacity 0.5s ease; /* 过渡效果 */
}
.component_2 .content_top_2.move-left {
  opacity: 1;
  transform: translateX(0);
  visibility: visible;
}
.component_2 .content_bottom_2 {
  justify-content: space-between;
  display: flex;
  margin-top: -4.375rem;
  transform: translateX(100%); /* 初始位置在左边 */
  visibility: hidden;
  transition: transform 1s ease, opacity 0.5s ease; /* 过渡效果 */
}
.component_2 .content_bottom_2.move-right {
  opacity: 1;
  transform: translateX(0);
  visibility: visible;
}
.component_2 .content_top_2 .content_left_2 {
  width: 33%;
  height: 33.125rem;
}
.component_2 .content_top_2 .content_middle_2 {
  margin-left: 0.75rem;
  width: 33%;
  height: 33.125rem;
}
.component_2 .content_top_2 .content_right_2 {
  margin-left: 0.8125rem;
  width: 33%;
  height: 33.125rem;
}
.component_2 .content_bottom_2 .content_left_2 {
  width: 33%;
  height: 33.125rem;
}
.component_2 .content_bottom_2 .content_middle_2 {
  margin-left: 0.75rem;
  width: 33%;
  height: 33.125rem;
}
.component_2 .content_bottom_2 .content_right_2 {
  margin-left: 0.8125rem;
  width: 33%;
  height: 33.125rem;
}
.component_2 .content_bottom_2 .content_right_2 .two_parts {
  display: flex;
}
.parts {
  width: 31.25rem;
  margin-top: -0.25rem;
}
.parts li {
  font-size: 1.125rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular", sans-serif;
  color: rgb(89, 87, 87);
  text-decoration: none;
  list-style: none;
  line-height: 2.058;
}
</style>
