<script setup>
import MyTitle from "@/components/MyTitle.vue";
import MyContent from "@/components/F6_MyContent.vue";
import { ref, onMounted } from "vue";
import { useRouter } from 'vue-router';
const router = useRouter();

const redirectToMobileVersion = () => {
  try {
    const isMobile = window.matchMedia('(max-device-width: 900px)').matches;

    // 避免重复跳转
    const currentPath = router.currentRoute.value.path;
    const targetPath = isMobile
      ? '/scientificResearchCenter/scientificResearchAchievement2'
      : '/scientificResearchCenter/scientificResearchAchievement1';

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
const isVisibleInfo = ref(false);
const infoRef = ref(null);
const wordRightRef1 = ref(null);
const isVisibleWordRight1 = ref(false);
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
  createObserver(infoRef, isVisibleInfo);
  createObserver(wordRightRef1, isVisibleWordRight1);
};
onMounted(initializeObservers); // 在组件挂载时调用
</script>
<template>
  <div class="scientificResearchAchievement">
    <MyTitle title="科研成果" english="SCIENTIFIC RESEARCH ACHIEVEMENTS"></MyTitle>
    <div class="achievement">
      <div class="info">
        <div class="achievement_detail detail_last">
          <div class="num">266</div>
          <div class="p">科技奖励/项</div>
        </div>
        <div class="achievement_detail  detail_last">
          <div class="num">6</div>
          <div class="p">中国专利优秀奖/项</div>
        </div>
        <div class="achievement_detail ">
          <div class="num">2350+</div>
          <div class="p">授权专利/项</div>
        </div>
        <div class="achievement_detail detail_last">
          <div class="num">1414+</div>
          <div class="p">其中发明专利/项</div>
        </div>
        <div class="achievement_detail detail_last">
          <div class="num">38</div>
          <div class="p">海外专利/项</div>
        </div>
        <div class="achievement_detail">
          <div class="num">138</div>
          <div class="p">软件著作权登记/项</div>
        </div>
        <div class="achievement_detail detail_last">
          <div class="num">266</div>
          <div class="p1">制（修）订</div>
          <div class="p2">科技奖励/项</div>
        </div>
        <div class="achievement_detail  detail_last">
          <div class="num">266</div>
          <div class="p1">制（修）订</div>
          <div class="p2">科技奖励/项</div>
        </div>
        <div class="achievement_detail">
          <div class="num">266</div>
          <div class="p1">制（修）订</div>
          <div class="p2">科技奖励/项</div>
        </div>
        <div
          class="achievement_detail detail_last"
          ref="infoRef"
          :class="{ 'scale-up': isVisibleInfo }"
        >
          <div class="num">266</div>
          <div class="p1">制（修）订</div>
          <div class="p2">科技奖励/项</div>
        </div>
        <div class="achievement_detail" style="border: none"></div>
      </div>
    </div>

    <div class="content">
      <MyContent title="电工行业重大技术装备支柱企业">
        <div class="content1" ref="wordRightRef1" :class="{ 'move-right': isVisibleWordRight1 }">
          <div class="text">
            作为我国电工行业重大技术装备支柱企业，平高集团在50多年的发展历程中，屡次突破行业技术瓶颈，不畏艰险，力同心，先后在国家重点工程中树立起一座座丰碑，创造了一个个国内第一、国际领先，推动并见证了我国电力技术的巨变。先后获得了特高压工程建设特别贡献奖和中国建设工程鲁班奖，占领了世界高压开关制高点，实现了特高压从“中国制造”到“中国创造”，最终到“中国引领”的转变，更使特高压成为一张闪亮的“国家名片”。
          </div>
          <div class="text">
            平高集团累计荣获科技奖励266项，其中省部级及以上科技奖励144项。参与完成的“特高压交流输电关键技术研究成套设备及工程应用“获得国家科技进步特等奖，参与完成的“输电等级单断口真空断路器关键技术及应用”获得国家技术发明二等奖。主持申报的“超高压及特高压直流隔离开关技术及应用"“高压开关装备电弧开断关键技术及应用”、“交流滤波器组断路器关键技术及工程应用”获得河南省科技进步一等奖。累计170项科技成果通过省部级鉴定，其中71项技术水平国际领先。126千伏无氟环保型气体绝缘金属封闭开关设备(GIS)、直流墙套管2项产品入选2021年度能源领域首台(套)重大技术装备项目。累计7种产品先后入选国家能源局能源领域首台(套)重大技术装备目录。
          </div>
          <div class="text">
            先后被评为河南省知识产权优势培育企业、河南省知识产权优势企业和河南省首批知识产权领军企业。“一种断路器及具有该断路器的系统”等6项专利荣获中国专利优秀奖。累计授权专利2350余项，其中发明专利1414余项;申报海外专利38项;完成软件著作权登记138项。累计参与制(修)订国家标准73项、行业标准52项、团体标准15项、国际标准1项。
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
.scientificResearchAchievement {
  position: relative;
  width: 100%;
  height: 220.5rem;
  /* border: 0.0625rem solid rgb(206, 206, 206); */
  background-color: #fff;
  padding: 4rem 11%;
  border-radius: 1.25rem;
  z-index: -10;
}
.content {
  margin-top: 82.525rem;
}
.content1 {
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
.text {
  font-size: 2.3rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular";
  color: rgb(89, 87, 87);
  line-height: 1.66;
  margin-bottom: 1.5rem;
}
.achievement {
  position: absolute;
  height: 70rem;
  background-color: #f4f4f4;
  padding: 4.875rem 13.125rem;
  left: 0;
  top: 19.375rem;
}
.info {
  display: flex;
  width: 100%;
  text-align: center;
  flex-wrap: wrap;
  justify-content: start;
}
.achievement_detail {
  width: 33%;
  height: 9rem;
  margin-bottom: 6rem;
}

.achievement_detail .p {
  font-size: 2.2rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(0, 111, 193);
  text-align: center;
  margin: auto;
  width: 15.625rem;
}

.achievement_detail .num {
  font-size: 4.5rem;
  font-family: "AlibabaPuHuiTi_2_95_ExtraBold";
  color: rgb(0, 111, 193);
  text-align: center;
  margin-top: -2rem;
}
.achievement_detail .p1 {
  font-size: 2.2rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(0, 111, 193);
  text-align: center;
  width: 15.625rem;
  margin: auto;
}
.achievement_detail .p2 {
  font-size: 2.2rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(0, 111, 193);
  text-align: center;
  margin: auto;
  width: 100%;
}
.detail_last {
  border-right: 0.225rem solid #6ba9d7;
}
.footer_img {
  position: absolute;
  width: 100%;
  height: 66.5rem;
  bottom: 0;
  left: 0;
  z-index: -1;
}
.footer_img img {
  width: 100%;
  height: 66.5rem;
}
</style>
