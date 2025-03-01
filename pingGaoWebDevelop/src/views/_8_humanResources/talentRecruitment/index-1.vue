<script setup>
import { ref, onMounted } from "vue";

import MyTitle from "@/components/MyTitle.vue";
import Item2 from "@/components/Item-2.vue";

const titleBox = ref(null);
const itemBox = ref(null);
onMounted(() => {
  if (titleBox.value && itemBox.value) {
    // 监听页面滚动事件
    window.addEventListener("scroll", () => {
      // 获取元素顶部距离页面顶部的距离
      if (titleBox.value && itemBox.value) {
        const titleTop = titleBox.value.getBoundingClientRect().top;
        const itemTop = itemBox.value.getBoundingClientRect().top;
        // 获取窗口的高度
        const windowHeight = window.innerHeight;

        // 判断元素是否进入可视区域

        if (titleTop < windowHeight) {
          titleBox.value.classList.add("show");
        } else {
          titleBox.value.classList.remove("show");
        }
        if (itemTop < windowHeight) {
          itemBox.value.classList.add("show");
        } else {
          itemBox.value.classList.remove("show");
        }
      }
    });
  }
});
</script>

<template>
  <div class="body-box">
    <div class="bodyBg">
      <img src="@/assets/imgs/_8_humanResourcesImgs/bg-1.png" alt="" />
    </div>
    <div class="body-content">
      <div ref="titleBox">
        <MyTitle class="my-title" title="人才招聘" english="TALENT RECRUITMENT"></MyTitle>
      </div>
      <div ref="itemBox" style="display: flex; margin-top: 3rem">
        <div class="left">高校毕业生招聘</div>
        <div class="right">社会公开招聘</div>
      </div>
      <div style="margin-top: 4.9rem">
        <div class="content-title">高校毕业生招聘</div>
        <div style="margin-top: 3.7rem">
          <router-link to="/humanResources/talentRecruitment-2" v-for="i in 3" :key="i">
            <Item2
              style="margin-bottom: 1.7rem"
              time="2022.03.08"
              text="国电气装备旗下平高集团2022年社会招聘公告"
              size="big"
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body-box {
  position: relative;
  background-color: #def1fb;
  padding-bottom: 40%;
}

.bodyBg {
  width: 100%;
  position: absolute;
  bottom: -5px;
  z-index: -1;
}

.bodyBg img {
  width: 100%;
  height: auto;
}

.body-content {
  margin: 0 11%;
  padding-top: 4.2rem;
  overflow: hidden;
}

.show .left {
  left: 0;
}

.show .right {
  right: 0;
}

.left {
  width: 48%;
  aspect-ratio: 721/237; /* 宽高比为 721:237 */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-image: url("../../../assets/imgs/_8_humanResourcesImgs/divBg-1.png");
  background-size: cover;
  border-radius: 0.625rem;
  font-size: 2.5rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(255, 255, 255);
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  left: -200%;
  transition: left 0.5s ease;
}

.right {
  font-size: 2.5rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(255, 255, 255);
  border-radius: 0.625rem;
  text-align: center;
  width: 48%;
  aspect-ratio: 721/237;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../../assets/imgs/_8_humanResourcesImgs/divBg-2.png");
  background-size: cover;
  margin-left: 4%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  right: -200%;
  transition: right 0.5s ease;
}

.content-title {
  font-size: 2.5rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(0, 111, 193);
  text-align: center;
}
</style>
