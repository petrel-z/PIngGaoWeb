<script setup>
import { ref, onMounted } from "vue";

defineOptions({
  name: "marketing-serviceIndex1-1",
});

import MyTitle from "@/components/MyTitle.vue";
import MyContent from "@/components/MyContent.vue";

const contentBox = ref(null);
const processBox = ref(null);
onMounted(() => {
  if (contentBox.value && processBox.value) {
    // 监听页面滚动事件
    window.addEventListener("scroll", () => {
      if (!contentBox.value || !processBox.value) return;
      // 获取元素顶部距离页面顶部的距离
      const contentTop = contentBox.value.getBoundingClientRect().top;
      const processTop = processBox.value.getBoundingClientRect().top;
      // 获取窗口的高度
      const windowHeight = window.innerHeight;

      // 判断元素是否进入可视区域
      if (contentTop < windowHeight) {
        contentBox.value.classList.add("show");
      } else {
        contentBox.value.classList.remove("show");
      }
      if (processTop < windowHeight) {
        processBox.value.classList.add("show");
      } else {
        processBox.value.classList.remove("show");
      }
    });
  }
});
</script>

<template>
  <div>
    <div style="position: relative">
      <div class="body-content">
        <div class="bodyBg"></div>
        <div>
          <MyTitle title="服务网络" english="SERVICE PROCESS" />
        </div>
        <div ref="contentBox" style="margin-top: 3.7rem">
          <MyContent
            class="content"
            title="始终以支撑电网安全稳定运行为使命"
            content1="坚持以客户为中心，以客户满意和价值提升为目标，完善服务功能、健全服务标准、创新服务模式、多样化服务保障，不断提升客户"
            content2="服务水平，全力打造建设现代企业客户服务体系，切实提升客户满意度、获得感，为集团高质量跨越发展提供有力支撑。"
          />
        </div>
        <div ref="processBox">
          <div class="process-box">
            <div class="process-title">服务流程图</div>
            <div class="process">
              <img src="../../../assets/imgs/_5_marketingServiceImgs/process.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bg">
        <img src="@/assets/imgs/_5_marketingServiceImgs/serviceBg1.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.bodyBg {
  background-color: #def1fb;
  width: 100%;
  height: 50vh;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
}
.body-content {
  margin: 0 11%;
  padding: 4.0625rem 0;
  padding-bottom: 50rem;
  height: auto;
  overflow: hidden;
}

.footer-bg {
  width: 100%;
  height: auto;
  position: absolute;
  left: 0px;
  bottom: -2rem;
  z-index: -1;
}

.footer-bg img {
  width: 100%;
  height: auto;
}

.process-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  left: -200%;
  transition: left 0.5s ease;
}

.process-title {
  font-size: 2.5rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(69, 179, 224);
  line-height: 1.156;
  text-align: center;
  padding-top: 4rem;
  padding-bottom: 2.9375rem;
}

.process {
  width: 100%;
}

.process img {
  width: 100%;
  height: auto;
}

.show .content {
  right: 0;
}

.show .process-box {
  left: 0;
}

.content {
  position: relative;
  right: -200%;
  transition: right 0.5s ease;
}
</style>
