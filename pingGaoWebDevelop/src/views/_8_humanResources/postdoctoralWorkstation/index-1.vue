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
  <div style="width: 100%; position: relative; overflow: hidden">
    <div class="content-title">
      <MyTitle title="博士后工作站" english="POSTDOCTORAL WORKSTATION" />
    </div>
    <div class="center">
      <div class="center-left">
        {{ `2008年6月\n国家人力资源与社会保障部批准设立` }}
      </div>
      <div class="center-center">
        {{ `连续四次被授予\n河南省优秀博士后工作站` }}
      </div>
      <div class="center-right">
        {{ `累计接收12名博士\n进站开展科研工作` }}
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
  padding: 4.5rem 11% 0 11%;
}

.center {
  width: 100%;
  background-color: #e8f5fc;
  display: flex;
  align-items: center;
  margin-top: 4rem;
  padding: 4% 11%;
  display: flex;
  justify-content: center;
}

.center-center,
.center-left,
.center-right {
  width: 33%;
  height: 100%;
  font-size: 1.9rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(0, 111, 193);
  text-align: center;
  white-space: pre;
}

.center-left {
  border-left: 0.18rem solid rgb(0, 111, 193);
  border-right: 0.18rem solid rgb(0, 111, 193);
}

.center-right {
  border-left: 0.18rem solid rgb(0, 111, 193);
  border-right: 0.18rem solid rgb(0, 111, 193);
}

.content {
  width: 100%;
  margin-top: 3.5rem;
  height: auto;
  display: flex;
  padding: 0 11%;
  overflow: hidden;
  /* justify-content: space-between; */
  padding-bottom: 28%;
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
  margin-bottom: 3rem;
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

@media (max-width: 1600px) {
  .center-center,
  .center-left,
  .center-right {
    font-size: 1.5rem;
  }
}

@media (max-width: 900px) {
  .content-title {
    padding: 4.5rem 7% 0 7%;
  }

  .center {
    padding: 0 7%;
    display: flex;
    flex-direction: column;
  }

  .center-center,
  .center-left,
  .center-right {
    width: 100%;
    white-space: nowrap;
    border: none;
    padding: 4% 0;
    font-size: 3rem;
  }

  .center-center {
    border-top: 0.18rem solid rgb(0, 111, 193);
    border-bottom: 0.18rem solid rgb(0, 111, 193);
  }

  .content {
    padding: 0 7%;
    flex-direction: column;
    padding-bottom: 35%;
  }

  .text {
    width: 100%;
    margin: 0;
  }

  .text > p {
    font-size: 3rem;
  }

  .img {
    width: 100%;
    margin: 0;
  }
}

@media (max-width: 480px) {
  .center-center,
  .center-left,
  .center-right {
    width: 100%;
    white-space: nowrap;
    border: none;
    padding: 4% 0;
    font-size: 4.5rem;
  }

  .center-center {
    border-top: 0.18rem solid rgb(0, 111, 193);
    border-bottom: 0.18rem solid rgb(0, 111, 193);
  }

  .text > p {
    font-size: 4rem;
  }
}
</style>
