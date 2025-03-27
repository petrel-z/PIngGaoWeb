<script setup>
import { useRouter } from "vue-router";
import { useLanguageStore } from "@/stores/languageStores";
import { storeToRefs } from "pinia";

const languageStore = useLanguageStore();
const { currentLang } = storeToRefs(languageStore);

const router = useRouter();

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // 添加平滑滚动效果
  });
};

const goBack = () => {
  router.go(-1); // 返回上一页
};

const goHome = () => {
  router.push(`${currentLang.value === "zh-CN" ? "/homePage-2" : "/home"}`); // 跳转首页
};
</script>

<template>
  <div class="button">
    <div class="top box" @click="scrollToTop">
      <div class="icon"><span class="icon iconfont">&#xe7e5;</span></div>
      <div class="p">定顶部</div>
    </div>
    <div class="middle box" @click="goBack">
      <div class="icon"><span class="icon iconfont">&#xe6b5;</span></div>
      <div class="p">上一页</div>
    </div>
    <div class="bottom box" @click="goHome">
      <div class="icon"><span class="icon iconfont">&#xe6e9;</span></div>
      <div class="p">首页</div>
    </div>
  </div>
</template>

<style scoped>
.button {
  width: 6.25rem;
  height: 22.5rem;
  background-color: #333333;
  border-radius: 0.9375rem 0 0 0.9375rem;
  padding-top: 1rem;
  z-index: 1000;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.box {
  width: 3.9375rem;
  height: 5.1875rem;
  color: #898989;
  text-align: center;
  margin: 1.5rem 1.4375rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.box:hover {
  color: #ffffff;
}

.box:hover .p,
.box:hover .icon {
  color: #ffffff;
}

.box .p {
  font-size: 1.125rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular";
  color: rgb(137, 137, 137);
  margin-top: -1rem;
  transition: inherit;
}

.box .icon {
  font-size: 2.1875rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  transition: inherit;
}
</style>
