<script setup>
import MyTitle from "@/components/MyTitle.vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const redirectToMobileVersion = () => {
  try {
    const isMobile = window.matchMedia("(max-device-width: 900px)").matches;

    // 避免重复跳转
    const currentPath = router.currentRoute.value.path;
    const targetPath = isMobile
    ? '/productEngineering/keyProject2'
    : '/productEngineering/keyProject1';

    if (currentPath !== targetPath) {
      router.push(targetPath);
    }
  } catch (error) {
    console.error("路由跳转失败:", error);
    // 可添加回退方案
    router.push("/error-page");
  }
};

onMounted(() => {
  // 确保只在客户端执行
  if (typeof window !== "undefined") {
    redirectToMobileVersion();
  }
});
const isVisibleWordLeft = ref(false);
const isVisibleWordRight = ref(false);
const wordLeftRef = ref(null);
const wordRightRef = ref(null);
let index = ref(1);
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
  createObserver(wordLeftRef, isVisibleWordLeft);
  createObserver(wordRightRef, isVisibleWordRight);
};
onMounted(initializeObservers); // 在组件挂载时调用
</script>
<template>
  <div class="keyProject">
    <MyTitle title="重点工程" english="KEY PROJECTS"></MyTitle>
    <div class="project_content">
      <div class="content_left" ref="wordLeftRef" :class="{ 'move-left': isVisibleWordLeft }">
        <div class="top_button" :class="{ active: index === 1 }" @click="index = 1">
          <div class="p">国内重点工程</div>
        </div>
        <div class="bottom_button" :class="{ active: index === 2 }" @click="index = 2">
          <div class="p">国外重点工程</div>
        </div>
      </div>
      <div
        class="content_right"
        ref="wordRightRef"
        v-if="index === 1"
        :class="{ 'move-right': isVisibleWordRight }"
      >
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
      <div
        class="content_right"
        ref="wordRightRef"
        v-if="index === 2"
        :class="{ 'move-right': isVisibleWordRight }"
      >
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
            <img src="@/assets/imgs/_4_productEngineeringImgs/project-pic3.png" alt="" />
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
  height: 148.75rem;
  padding: 4rem 13.125rem;
  border-radius: 1.25rem;
  background-color: #fff;
  z-index: 0;
}
.project_content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 98.75rem;
  margin-top: 3.75rem;
}
.content_left {
  width: 20.5%;
  margin-right: 1.4375rem;
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
  height: 6.25rem;
  border-radius: 0.625rem;
  margin-bottom: 0.625rem;
  cursor: pointer;
  background-color: #fff;
}

.bottom_button {
  width: 100%;
  height: 6.25rem;
  border-radius: 0.625rem;
  background-color: #fff;
  cursor: pointer;
}

.top_button .p {
  font-size: 2rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: #006fc1;
  text-align: center;
  line-height: 6.25rem;
  margin-bottom: 0.3125rem;
}
.bottom_button .p {
  font-size: 2rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: #006fc1;
  text-align: center;
  line-height: 6.25rem;
}
.active .p {
  color: #fff;
}
.active {
  background-color: #006fc1;
}
.content_right {
  width: 79%;
  height: 97.5rem;
  transform: translateX(100%); /* 初始位置在左边 */
  visibility: hidden;
  transition: transform 1s ease, opacity 0.5s ease; /* 过渡效果 */
  z-index: 100;
}
@media (min-width: 600px) and (max-width: 800px) {
  .top_button .p {
    font-size: 1.5rem;
  }
  .bottom_button .p {
    font-size: 1.5rem;
  }
  .top_button {
    width: 100%;
    height: 4.25rem;
    border-radius: 0.625rem;
    background-color: #006fc1;
    margin-bottom: 0.625rem;
  }
  .bottom_button {
    width: 100%;
    height: 4.25rem;
    border-radius: 0.625rem;
    background-color: #fff;
  }
  .top_button .p {
    font-size: 1.3rem;
    line-height: 4.25rem;
  }
  .bottom_button .p {
    font-size: 1.3rem;
    line-height: 4.25rem;
  }
}
@media (min-width: 1500px) and (max-width: 1600px) {
  .top_button .p {
    font-size: 1.5rem;
  }
  .bottom_button .p {
    font-size: 1.5rem;
  }
  .top_button {
    width: 100%;
    height: 4.25rem;
    border-radius: 0.625rem;
    background-color: #006fc1;
    margin-bottom: 0.625rem;
  }
  .bottom_button {
    width: 100%;
    height: 4.25rem;
    border-radius: 0.625rem;
    background-color: #fff;
  }
  .top_button .p {
    font-size: 1.4rem;
    line-height: 4.25rem;
  }
  .bottom_button .p {
    font-size: 1.4rem;
    line-height: 4.25rem;
  }
}
.content_right.move-right {
  opacity: 1;
  transform: translateX(0);
  visibility: visible;
}

.pic_content {
  position: relative;
  width: 100%;
  height: 31.25rem;
  margin-bottom: 1.875rem;
}
.pic_content .pic {
  width: 100%;
  height: 31.25rem;
}
.pic_content .pic img {
  width: 72.5rem;
  height: 31.25rem;
  background-size: cover;
}
.pic_content .bg_black {
  position: absolute;
  bottom: 0;
  width: 72.5rem;
  height: 5.1875rem;
  background-color: #38383859;
  border-radius: 0.375rem;
  line-height: 5.1875rem;
  text-align: center;
}
.pic_content .bg_black .p {
  font-size: 1.625rem;
  font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
  color: rgb(255, 255, 255);
}
.footer_img {
  position: absolute;
  bottom: -0.025rem;
  left: 0;
  z-index: -10;
  width: 100%;
  height: 100%;
}
.footer_img img {
  width: 100%;
  height: 100%;
}
</style>
