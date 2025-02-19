<script setup>
import MyTitle from "@/components/MyTitle.vue";
import MyButton from "@/components/MyButton.vue";
</script>

<template>
  <div class="approachPinggao">
    <MyTitle h="走进平高" English="ENTERING PINGGAO"></MyTitle>
    <div class="pics">
      <img src="@/assets/imgs/_1_aboutPinggaoImgs/pic1.png" alt="Image 1" class="grid-item1" />
      <img src="@/assets/imgs/_1_aboutPinggaoImgs/pic2.png" alt="Image 2" class="grid-item2" />
      <img src="@/assets/imgs/_1_aboutPinggaoImgs/pic3.png" alt="Image 3" class="grid-item3" />
      <img src="@/assets/imgs/_1_aboutPinggaoImgs/pic4.png" alt="Image 4" class="grid-item4" />
      <img src="@/assets/imgs/_1_aboutPinggaoImgs/pic5.png" alt="Image 5" class="grid-item5" />
      <img src="@/assets/imgs/_1_aboutPinggaoImgs/pic6.png" alt="Image 6" class="grid-item6" />
      <img src="@/assets/imgs/_1_aboutPinggaoImgs/pic7.png" alt="Image 7" class="grid-item7" />
      <img src="@/assets/imgs/_1_aboutPinggaoImgs/pic3.png" alt="Image 8" class="grid-item8" />
      <img src="@/assets/imgs/_1_aboutPinggaoImgs/pic8.png" alt="Image 9" class="grid-item9" />
      <img src="@/assets/imgs/_1_aboutPinggaoImgs/pic9.png" alt="Image 10" class="grid-item10" />
      <img src="@/assets/imgs/_1_aboutPinggaoImgs/pic10.png" alt="Image 11" class="grid-item11" />
      <img src="@/assets/imgs/_1_aboutPinggaoImgs/pic11.png" alt="Image 12" class="grid-item12" />
      <img src="@/assets/imgs/_1_aboutPinggaoImgs/pic3.png" alt="Image 13" class="grid-item13" />
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
