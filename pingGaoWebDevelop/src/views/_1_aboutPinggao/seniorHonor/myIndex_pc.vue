<script setup>
import MyTitle from "@/components/MyTitle.vue";
import MyButton from "@/components/MyButton.vue";
import { ref, onMounted } from "vue";
const imgRef = ref(null);
const isVisible = ref(null);
import { useRouter } from 'vue-router';
const router = useRouter();

const redirectToMobileVersion = () => {
  try {
    const isMobile = window.matchMedia('(max-device-width: 900px)').matches;

    // 避免重复跳转
    const currentPath = router.currentRoute.value.path;
    const targetPath = isMobile
      ? '/aboutPinggao/seniorHonor2'
      : '/aboutPinggao/seniorHonor1';

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
  createObserver(imgRef, isVisible);
};
onMounted(initializeObservers); // 在组件挂载时调用
</script>
<template>
  <div class="seniorHonor">
    <myTitle title="资质荣誉" english="QUALIFICATION AND HONOR"></myTitle>
    <div class="content">
      <div class="info">
        <div class="img">
          <img
            src="@/assets/imgs/_1_aboutPinggaoImgs/create.png"
            alt=""
            ref="imgRef"
            :class="{ 'scale-up': isVisible }"
          />
        </div>
        <div class="p">创新型企业</div>
      </div>
      <div class="info">
        <div class="img">
          <img
            src="@/assets/imgs/_1_aboutPinggaoImgs/create.png"
            alt=""
            ref="imgRef"
            :class="{ 'scale-up': isVisible }"
          />
        </div>
        <div class="p">创新型企业</div>
      </div>
      <div class="info">
        <div class="img">
          <img
            src="@/assets/imgs/_1_aboutPinggaoImgs/create.png"
            alt=""
            ref="imgRef"
            :class="{ 'scale-up': isVisible }"
          />
        </div>
        <div class="p">创新型企业</div>
      </div>
      <div class="info">
        <div class="img">
          <img
            src="@/assets/imgs/_1_aboutPinggaoImgs/create.png"
            alt=""
            ref="imgRef"
            :class="{ 'scale-up': isVisible }"
          />
        </div>
        <div class="p">创新型企业</div>
      </div>
      <div class="info">
        <div class="img">
          <img
            src="@/assets/imgs/_1_aboutPinggaoImgs/create.png"
            alt=""
            ref="imgRef"
            :class="{ 'scale-up': isVisible }"
          />
        </div>
        <div class="p">创新型企业</div>
      </div>
      <div class="info">
        <div class="img">
          <img
            src="@/assets/imgs/_1_aboutPinggaoImgs/create.png"
            alt=""
            ref="imgRef"
            :class="{ 'scale-up': isVisible }"
          />
        </div>
        <div class="p">创新型企业</div>
      </div>
      <div class="info">
        <div class="img">
          <img
            src="@/assets/imgs/_1_aboutPinggaoImgs/create.png"
            alt=""
            ref="imgRef"
            :class="{ 'scale-up': isVisible }"
          />
        </div>
        <div class="p">创新型企业</div>
      </div>
      <div class="info">
        <div class="img">
          <img
            src="@/assets/imgs/_1_aboutPinggaoImgs/create.png"
            alt=""
            ref="imgRef"
            :class="{ 'scale-up': isVisible }"
          />
        </div>
        <div class="p">创新型企业</div>
      </div>
      <div class="info">
        <div class="img">
          <img
            src="@/assets/imgs/_1_aboutPinggaoImgs/create.png"
            alt=""
            ref="imgRef"
            :class="{ 'scale-up': isVisible }"
          />
        </div>
        <div class="p">创新型企业</div>
      </div>
      <div class="info">
        <div class="img">
          <img
            src="@/assets/imgs/_1_aboutPinggaoImgs/create.png"
            alt=""
            ref="imgRef"
            :class="{ 'scale-up': isVisible }"
          />
        </div>
        <div class="p">创新型企业</div>
      </div>
      <div class="info">
        <div class="img">
          <img
            src="@/assets/imgs/_1_aboutPinggaoImgs/create.png"
            alt=""
            ref="imgRef"
            :class="{ 'scale-up': isVisible }"
          />
        </div>
        <div class="p">创新型企业</div>
      </div>
      <div class="info">
        <div class="img">
          <img
            src="@/assets/imgs/_1_aboutPinggaoImgs/create.png"
            alt=""
            ref="imgRef"
            :class="{ 'scale-up': isVisible }"
          />
        </div>
        <div class="p">创新型企业</div>
      </div>
    </div>
    <div class="footer">
      <myButton class="myButton" text="加载更多"></myButton>
    </div>
  </div>
</template>
<style scoped>
.seniorHonor {
  position: relative;
  margin: auto;
  width: 100%;
  height: 100%;
  /* border: 0.0625rem solid rgb(177, 177, 177); */
  padding: 4rem 11%;
  border-radius: 1.25rem;
  background-color: #fff;
  z-index: 0;
}
.content {
  margin-top: 3.125rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.content .info {
  width: 21%;
  height: 90%;
  margin-bottom: 4.2rem;
  text-align: center;
}


.content .info .img img {
  width: 100%;
  height: 90%;
  transform: scale(0.5); /* 初始缩小 */
  opacity: 0; /* 初始不可见 */
  visibility: hidden; /* 初始隐藏 */
  transition: transform 0.5s ease, opacity 0.5s ease; /* 过渡效果 */
}
.content .info .img img.scale-up {
  transform: scale(1); /* 放大到原始大小 */
  opacity: 1; /* 可见 */
  visibility: visible; /* 可见 */
}
.content .info .p {
  font-size: 1.25rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular", sans-serif;
  color: rgb(182, 141, 55);
  margin: 0.7rem 0rem;
}
.footer {
  width: 100%;
  margin-top: 0.625rem;
  text-align: center;
  cursor: pointer;
}
.footer .myButton {
  margin: auto;
}

</style>
