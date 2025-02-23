<script setup>
import MyTitle from "@/components/MyTitle.vue";
import { ref,onMounted } from "vue";
const isVisibleWordLeft = ref(false)
const isVisibleWordRight = ref(false)
const wordLeftRef = ref(null)
const wordRightRef = ref(null)
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
  createObserver(wordLeftRef,isVisibleWordLeft)
  createObserver(wordRightRef,isVisibleWordRight)
}
onMounted(initializeObservers); // 在组件挂载时调用
</script>
<template>
  <div class="keyProject">
    <MyTitle title="重点工程" English="KEY PROJECTS"></MyTitle>
    <div class="project_content">
      <div class="content_left" ref="wordLeftRef"
      :class="{ 'move-left': isVisibleWordLeft}" >
        <div class="top_button">
          <div class="p">国内重点工程</div>
        </div>
        <div class="bottom_button">
          <div class="p">国外重点工程</div>
        </div>
      </div>
      <div class="content_right"  ref="wordRightRef"
      :class="{ 'move-right': isVisibleWordRight}">
        <div class="pic_content">
          <div class="pic">
            <img src="@/assets/imgs/_4_productEngineeringImgs/project-pic1.png" alt="" />
          </div>
          <div class="bg_black">
            <div class="p">中国首台自主研发的ZF27-800（L）型GIS在青海管亭变电站投入运行</div>
          </div>
        </div>
        <div class="pic_content">
          <div class="pic">
            <img src="@/assets/imgs/_4_productEngineeringImgs/project-pic2.png" alt="" />
          </div>
          <div class="bg_black">
            <div class="p">中国首台自主研发的ZF27-800（L）型GIS在青海管亭变电站投入运行</div>
          </div>
        </div>
        <div class="pic_content">
          <div class="pic">
            <img src="@/assets/imgs/_4_productEngineeringImgs/project-pic3.png" alt="" />
          </div>
          <div class="bg_black">
            <div class="p">中国首台自主研发的ZF27-800（L）型GIS在青海管亭变电站投入运行</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_img">
      <img src="@/assets/imgs/_4_productEngineeringImgs/project-footer.png" alt="" />
    </div>
  </div>
</template>
<style scoped>
.keyProject {
  position: relative;
  margin: auto;
  width: 100%;
  height: 2380px;
  padding: 64px 210px;
  border-radius: 20px;
  background-color: #fff;
  z-index: -100;
}
.project_content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 1580px;
  margin-top: 60px;
}
.content_left {
  width: 20.5%;
  margin-right: 23px;
  transform: translateX(-100%); /* 初始位置在左边 */
  visibility: hidden;
  transition: transform 1s ease, opacity 0.5s ease; /* 过渡效果 */
}
.content_left.move-left {
  opacity: 1;
  transform: translateX(0);
  visibility: visible;
}
.top_button {
  width: 100%;
  height: 100px;
  border-radius: 10px;
  background-color: #006fc1;
  margin-bottom: 10px;
}
.bottom_button {
  width: 100%;
  height: 100px;
  border-radius: 10px;
  background-color: #fff;
}
.top_button .p {
  font-size: 32px;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: rgb(255, 255, 255);
  text-align: center;
  line-height: 100px;
  margin-bottom: 5px;
}
.bottom_button .p {
  font-size: 32px;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: #006fc1;
  text-align: center;
  line-height: 100px;
}
.content_right {
  width: 79%;
  height: 1560px;
  transform: translateX(100%); /* 初始位置在左边 */
  visibility: hidden;
  transition: transform 1s ease, opacity 0.5s ease; /* 过渡效果 */
}

.content_right.move-right {
  opacity: 1;
  transform: translateX(0);
  visibility: visible;
}

.pic_content {
  position: relative;
  width: 100%;
  height: 500px;
  margin-bottom: 30px;
}
.pic_content .pic {
  width: 100%;
  height: 500px;
}
.pic_content .pic img{
  width: 100%;
  height: 500px;
  background-size: cover;
}
.pic_content .bg_black {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 83px;
  background-color: #38383859;
  border-radius: 6px;
  line-height: 83px;
  text-align: center;
}
.pic_content .bg_black .p {
  font-size: 26px;
  font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
  color: rgb(255, 255, 255);
}
.footer_img {
  position: absolute;
  bottom: -10px;
  left: 0;
  z-index: -10;
  width: 100%;

}
.footer_img img {
  width: 100%;
  height: 100%;
}
</style>
