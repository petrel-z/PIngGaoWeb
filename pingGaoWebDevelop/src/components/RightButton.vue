<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // 添加平滑滚动效果
  })
}

const goBack = () => {
  router.go(-1) // 返回上一页
}

const goHome = () => {
  router.push('/homePage-2') // 跳转首页
}
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
  width: 100px;
  height: 360px;
  background-color: #333333;
  border-radius: 15px 0 0 15px;
  padding-top: 16px;
  z-index: 1000;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.box {
  width: 63px;
  height: 83px;
  color: #898989;
  text-align: center;
  margin: 24px 23px;
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
  font-size: 18px;
  font-family: 'AlibabaPuHuiTi_2_55_Regular', sans-serif;
  color: rgb(137, 137, 137);
  margin-top: -16px;
  transition: inherit;
}

.box .icon {
  font-size: 35px;
  font-weight: 600;
  margin-bottom: 8px;
  transition: inherit;
}
</style>
