<script setup>
import MyTitle from "@/components/MyTitle.vue";
import MyButton from "@/components/MyButton.vue";
import { ref, nextTick, watch } from "vue";
import httpUtils from "@/utils/httpUtils.js";

const imgRef = ref(null);
const isVisible = ref(null);

const honorList = ref([]);

document.title = "资质荣誉";

async function getData() {
  const res = await httpUtils.get(`/cms/honor/list`);
  const result = await res.json();

  honorList.value = result.data;
}

getData();

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
    refElement.value.forEach((el) => {
      observer.observe(el);
    });
  }
};

// 初始化所有的观察器
const initializeObservers = () => {
  createObserver(imgRef, isVisible);
};

watch(honorList, async () => {
  await nextTick();
  initializeObservers();
});
</script>
<template>
  <div class="seniorHonor">
    <myTitle title="资质荣誉" english="QUALIFICATION AND HONOR"></myTitle>
    <div class="content">
      <div class="info" v-for="honor in honorList" :key="honor.id">
        <div class="img">
          <img
            :src="honor.honorImage"
            :alt="honor.honorTitle"
            ref="imgRef"
            :class="{ 'scale-up': isVisible }"
          />
        </div>
        <div class="p">{{ honor.honorTitle }}</div>
      </div>
    </div>
    <div class="footer" v-show="false">
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
@media (min-width: 300px) and (max-width:600px) {
  .content .info {
    margin-bottom: 0.2rem !important;
  }
}
@media (min-width: 600px) and (max-width: 900px) {
  .content .info {
    margin-bottom: 0.2rem !important;
  }
}
.content {
  margin-top: 3.125rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.content .info {
  width: 25%;
  height: 90%;
  margin-bottom: 4.2rem;
  text-align: center;
  padding: 2rem;
  box-sizing: border-box;
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
  font-family: "AlibabaPuHuiTi_2_55_Regular";
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
