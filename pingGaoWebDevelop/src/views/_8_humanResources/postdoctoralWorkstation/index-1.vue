<script setup>
import MyTitle from "@/components/MyTitle.vue";
import { ref, onMounted } from "vue";

const items = ref(null);
onMounted(() => {
  // 获取目标元素容器
  const targetContainer = items.value;
  if (targetContainer) {
    // 监听页面滚动事件
    window.addEventListener("scroll", () => {
      if (!targetContainer) return;
      // 获取元素顶部距离页面顶部的距离
      const elementTop = targetContainer.getBoundingClientRect().top;
      // 获取窗口的高度
      const windowHeight = window.innerHeight;

      // 判断元素是否进入可视区域
      if (elementTop < windowHeight) {
        targetContainer.classList.add("show");
      } else {
        targetContainer.classList.remove("show");
      }
    });
  }
});
</script>

<template>
  <div style="width: 100%; position: relative; min-height: 1605px">
    <div class="content-title">
      <MyTitle title="博士后工作站" English="POSTDOCTORAL WORKSTATION" />
    </div>
    <div class="center">
      <div
        style="border-left: 2px solid rgb(0, 111, 193); border-right: 2px solid rgb(0, 111, 193)"
      >
        2008年6月<br />
        国家人力资源与社会保障部批准设立
      </div>
      <div>
        连续四次被授予<br />
        河南省优秀博士后工作站
      </div>
      <div
        style="border-left: 2px solid rgb(0, 111, 193); border-right: 2px solid rgb(0, 111, 193)"
      >
        累计接收12名博士<br />
        进站开展科研工作
      </div>
    </div>
    <div ref="items" class="content">
      <div class="text">
        <p>
          平高集团有限公司博士后科研工作站（以下简称“工作站”）于2008年6月经国家人力资源与
          社会保障部批准设立。先后与武汉大学、大连理工大学、华中科技大学、西安交通大学等国
          内一流高校建立战略合作关系，现已发展成为集团设备先进、技术雄厚、人才荟萃的科研基
          地，曾连续四次被授予“河南省优秀博士后工作站”。
        </p>
        <p>
          工作站依托平高集团有限公司，拥有完备的科技创新平台，包括河南省高压开关重点实验
          室、机械工业特高压GIS工程实验室、机械工业交流高压开关设备工程技术研究中心等十大技
          术创新平台，建立了完善的技术保障体系。重大技术创新项目涵盖智能化开关设备、直流场
          成套设备技术、特高压GIS自主化开关设备研制、低操作功灭弧室技术、电弧仿真技术、电机
          驱动断路器操作技术、先进储能技术等领域。截至目前，已累计接收12名博士进站开展科研
          工作，研究课题涉及技术研发、经营管理、产业规划等多个方面。
        </p>
        <p>
          为切实提高集团科技水平和市场竞争力，平高集团注重人才引进，加强人才队伍建设，培育“尊重劳动、尊重知识、尊重人才、尊重创新”管理氛围，树立“以人为本、人才先行”发展理念，大力实施“人才强企”战略。平高集团博士后工作站热忱欢迎广大博士进站合作。
        </p>
      </div>
      <div class="img">
        <img src="../../../assets/imgs/_8_humanResourcesImgs/divBg-3.png" alt="" />
      </div>
    </div>

    <div class="bottom-bg">
      <img src="../../../assets/imgs/_8_humanResourcesImgs/bg-1.png" alt="" />
    </div>
  </div>
</template>

<style scoped>
.content-title {
  padding: 65px 11% 0 11%;
}

.center {
  width: 100%;
  height: 233px;
  background-color: #e8f5fc;
  display: flex;
  align-items: center;
  margin-top: 55px;
  padding: 0 11%;
  display: flex;
  justify-content: center;
}

.center > div {
  width: 33%;
  height: auto;
  font-size: 26px;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(0, 111, 193);
  text-align: center;
}

.content {
  width: 100%;
  margin-top: 45px;
  height: auto;
  display: flex;
  padding: 0 11%;
  overflow: hidden;
  /* justify-content: space-between; */
}

.text {
  width: 50%;
  position: relative;
  left: -100%;
  transition: left 0.8s ease-in-out;
}

.text > p {
  font-size: 1.25rem;
  font-family: "AlibabaPuHuiTi_2_45_Light";
  color: rgb(89, 87, 87);
  text-align: left;
  margin-bottom: 2em;
}

.img {
  position: relative;
  right: -100%;
  transition: right 0.8s ease-in-out;
  width: 48%;
  margin-left: 2%;
  cursor: pointer;
}

.img img:hover {
  transform: scale(1.05);
  transition: all 0.5s ease-in-out;
}

.img img {
  width: 100%;
  height: auto;
}

.show .text {
  left: 0;
}

.show .img {
  right: 0;
}

.bottom-bg {
  background-size: cover;
  width: 100%;
  position: absolute;
  bottom: -10px;
  z-index: -1;
}

.bottom-bg img {
  width: 100%;
  height: auto;
}
</style>
