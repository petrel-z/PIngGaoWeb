<script setup>
import MyTitle from "@/components/MyTitle.vue";
import MyButton from "@/components/MyButton.vue";
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
  <div class="approachPinggao">
    <MyTitle title="走进平高" English="ENTERING PINGGAO"></MyTitle>
    <div class="pics">
      <img src="@/assets/imgs/_1_aboutPinggaoImgs/pic1.png" alt="Image 1" class="grid-item1 grid_item "  ref="imgRef"
      :class="{ 'scale-up': isVisible}" />
      <img src="@/assets/imgs/_1_aboutPinggaoImgs/pic2.png" alt="Image 2" class="grid-item2 grid_item"  ref="imgRef"
      :class="{ 'scale-up': isVisible}" />
      <img src="@/assets/imgs/_1_aboutPinggaoImgs/pic3.png" alt="Image 3" class="grid-item3 grid_item"  ref="imgRef"
      :class="{ 'scale-up': isVisible}" />
      <img src="@/assets/imgs/_1_aboutPinggaoImgs/pic4.png" alt="Image 4" class="grid-item4 grid_item"   ref="imgRef"
      :class="{ 'scale-up': isVisible}" />
      <img src="@/assets/imgs/_1_aboutPinggaoImgs/pic5.png" alt="Image 5" class="grid-item5 grid_item "  ref="imgRef"
      :class="{ 'scale-up': isVisible}" />
      <img src="@/assets/imgs/_1_aboutPinggaoImgs/pic6.png" alt="Image 6" class="grid-item6 grid_item"  ref="imgRef"
      :class="{ 'scale-up': isVisible}" />
      <img src="@/assets/imgs/_1_aboutPinggaoImgs/pic7.png" alt="Image 7" class="grid-item7 grid_item"  ref="imgRef"
      :class="{ 'scale-up': isVisible}" />
      <img src="@/assets/imgs/_1_aboutPinggaoImgs/pic3.png" alt="Image 8" class="grid-item8 grid_item"  ref="imgRef"
      :class="{ 'scale-up': isVisible}" />
      <img src="@/assets/imgs/_1_aboutPinggaoImgs/pic8.png" alt="Image 9" class="grid-item9 grid_item"  ref="imgRef"
      :class="{ 'scale-up': isVisible}" />
      <img src="@/assets/imgs/_1_aboutPinggaoImgs/pic9.png" alt="Image 10" class="grid-item10 grid_item"  ref="imgRef"
      :class="{ 'scale-up': isVisible}" />
      <img src="@/assets/imgs/_1_aboutPinggaoImgs/pic10.png" alt="Image 11" class="grid-item11 grid_item"  ref="imgRef"
      :class="{ 'scale-up': isVisible}" />
      <img src="@/assets/imgs/_1_aboutPinggaoImgs/pic11.png" alt="Image 12" class="grid-item12 grid_item"  ref="imgRef"
      :class="{ 'scale-up': isVisible}" />
      <img src="@/assets/imgs/_1_aboutPinggaoImgs/pic3.png" alt="Image 13" class="grid-item13 grid_item"  ref="imgRef"
      :class="{ 'scale-up': isVisible}" />
    </div>
    <div class="footer">
      <MyButton class="myButton" text="加载更多"></MyButton>
    </div>
  </div>
</template>

<style scoped>
.approachPinggao {
  position: relative;
  margin: auto;
  width: 100%;
  padding: 64px 11%;
  border-radius: 20px;
  background-color: #fff;
  z-index: -100;
}
.pics {
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3列 */
  grid-template-rows: repeat(6, 1fr); /* 6行 */
  gap: 10px;
  grid-template-areas:
    "a b c"
    "d d e"
    "d d f"
    "g h i"
    "j o i"
    "j p q";
}
.grid_item{
  transform: scale(0.5); /* 初始缩小 */
  opacity: 0; /* 初始不可见 */
  visibility: hidden; /* 初始隐藏 */
  transition: transform 0.5s ease, opacity 0.5s ease; /* 过渡效果 */
}
.grid_item.scale-up {
  transform: scale(1); /* 放大到原始大小 */
  opacity: 1; /* 可见 */
  visibility: visible; /* 可见 */
}
/* 正确绑定 grid-area */
.grid-item1 {
  grid-area: a;
}
.grid-item2 {
  grid-area: b;
}
.grid-item3 {
  grid-area: c;
}
.grid-item4 {
  grid-area: d;
}
.grid-item5 {
  grid-area: e;
}
.grid-item6 {
  grid-area: f;
}
.grid-item7 {
  grid-area: g;
}
.grid-item8 {
  grid-area: h;
}
.grid-item9 {
  grid-area: i;
}
.grid-item10 {
  grid-area: j;
}
.grid-item11 {
  grid-area: o;
}
.grid-item12 {
  grid-area: p;
}
.grid-item13 {
  grid-area: q;
}

/* 让图片填满格子 */
.pics img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}
.footer {
  margin-top: 110px;
  text-align: center;
}
.footer .myButton {
  margin: auto;
}
</style>
