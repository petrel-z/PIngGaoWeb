<script setup>
import MyTitle from "@/components/MyTitle.vue";
import { ref,onMounted } from "vue";
const imgRef = ref(null)
const isVisible = ref(null)
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
  createObserver(imgRef, isVisible);
};
onMounted(initializeObservers); // 在组件挂载时调用
</script>
<template>
  <div class="lesadingMember">
    <MyTitle title="领导成员" English="LENDING MEMBERS"></MyTitle>
    <div class="content">
      <div class="info"  ref="imgRef"
      :class="{ 'scale-up': isVisible}">
        <img src="@/assets/imgs/_1_aboutPinggaoImgs/peoplebg.png" alt=""  />
        <div class="h">孙继强</div>
        <div class="hr"></div>
        <div class="p1">平高集团限公司党委书记</div>
        <div class="p2">董事长</div>
      </div>
      <div class="info"  ref="imgRef"
      :class="{ 'scale-up': isVisible}">
        <img src="@/assets/imgs/_1_aboutPinggaoImgs/peoplebg.png" alt=""  />
        <div class="h">刘立成</div>
        <div class="hr"></div>
        <div class="p1">平高集团限公司党委副书记</div>
        <div class="p2">董事</div>
        <div class="p3">总经理</div>
      </div>
      <div class="info"  ref="imgRef"
      :class="{ 'scale-up': isVisible}">
        <img src="@/assets/imgs/_1_aboutPinggaoImgs/peoplebg.png" alt=""   />
        <div class="h">刘刚</div>
        <div class="hr"></div>
        <div class="p1">平高集团限公司党委副书记</div>
      </div>
      <div class="info"  ref="imgRef"
      :class="{ 'scale-up': isVisible}">
        <img src="@/assets/imgs/_1_aboutPinggaoImgs/peoplebg.png" alt=""   />
        <div class="h">宋晗光</div>
        <div class="hr"></div>
        <div class="p1">平高集团限公司党委委员</div>
        <div class="p2">纪委书记</div>
        <div class="p3">监事</div>
      </div>

      <div class="info"  ref="imgRef"
      :class="{ 'scale-up': isVisible}">
        <img src="@/assets/imgs/_1_aboutPinggaoImgs/peoplebg.png" alt=""   />
        <div class="h">张友鹏</div>
        <div class="hr"></div>
        <div class="p1">平高集团限公司党委委员</div>
        <div class="p2">副总经理</div>
      </div>
      <div class="info"  ref="imgRef"
      :class="{ 'scale-up': isVisible}">
        <img src="@/assets/imgs/_1_aboutPinggaoImgs/peoplebg.png" alt=""  />
        <div class="h">庞庆平</div>
        <div class="hr"></div>
        <div class="p1">三级顾问</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.lesadingMember {
  position: relative;
  margin: auto;
  width: 100%;
  padding: 4rem 11%;
  border-radius: 1.25rem;
  background-color: #f7f8f8;
  z-index: -100;
}
.content {
  width: 100%;
  margin-top: 3.125rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.content .info {
  position: relative;
  width: 33%;
  height: 18.8125rem;
  background-size: cover;
  margin-bottom: 0.625rem;
  transform: scale(0.5); /* 初始缩小 */
  opacity: 0; /* 初始不可见 */
  visibility: hidden; /* 初始隐藏 */
  transition: transform 0.5s ease, opacity 0.5s ease; /* 过渡效果 */
}

.content .info.scale-up {
  transform: scale(1); /* 放大到原始大小 */
  opacity: 1; /* 可见 */
  visibility: visible; /* 可见 */
}

.content .info img {
  width: 100%;
  height: 100%;
  object-fit: cover;

}
.info .h {
  top: 2.625rem;
  left: 2rem;
  position: absolute;
  font-size: 1.8125rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: rgb(0, 111, 193);
}
.info .hr {
  width: 40%;
  height: 0.0625rem;
  left: 2rem;
  background-color: #4093d1;
  top: 5.3125rem;
  position: absolute;
}
.info .p1 {
  top: 5.5rem;
  position: absolute;
  left: 2rem;
  font-size: 1.25rem;
  font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
  color: rgb(89, 87, 87);
}
.info .p2 {
  top: 7.375rem;
  position: absolute;
  left: 2rem;
  font-size: 1.25rem;
  font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
  color: rgb(89, 87, 87);
}
.info .p3 {
  top: 9.125rem;
  position: absolute;
  left: 2rem;
  font-size: 1.25rem;
  font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
  color: rgb(89, 87, 87);
}
</style>
