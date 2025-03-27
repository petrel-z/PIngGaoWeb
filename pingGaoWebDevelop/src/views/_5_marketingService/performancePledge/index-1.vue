<script setup>
import { ref, onMounted } from "vue";

defineOptions({
  name: "marketing-serviceIndex1-1",
});
import MyTitle from "@/components/MyTitle.vue";
import MyContent from "@/components/MyContent.vue";

const contentBox = ref(null);

onMounted(() => {
  if (contentBox.value) {
    // 回调方法
    const callback = () => {
      if (!contentBox.value) return;
      // 获取元素顶部距离页面顶部的距离
      const contentTop = contentBox.value.getBoundingClientRect().top;
      // 获取窗口的高度
      const windowHeight = window.innerHeight;

      // 判断元素是否进入可视区域
      if (contentTop < windowHeight) {
        contentBox.value.classList.add("show");
      } else {
        contentBox.value.classList.remove("show");
      }
    };
    callback();
    // 监听页面滚动事件
    window.addEventListener("scroll", callback);
  }
});
</script>

<template>
  <div class="body-box">
    <div class="body-content">
      <div>
        <MyTitle title="服务承诺" english="SERVICE COMMITMENT" />
      </div>
      <div ref="contentBox" style="margin-top: 3.4rem">
        <MyContent class="content" :detailId="1" />
      </div>
    </div>
    <div class="bodyBg">
      <img src="@/assets/imgs/_5_marketingServiceImgs/serviceBg1.png" alt="" />
    </div>
  </div>
</template>

<style scoped>
.body-box {
  position: relative;
  padding-bottom: 50%;
}

.bodyBg {
  width: 100%;
  position: absolute;
  bottom: -1%;
  z-index: -1;
}

.bodyBg img {
  width: 100%;
  height: auto;
}

.body-content {
  margin: 0 11%;
  padding-top: 5rem;
  overflow: hidden;
}

.show .content {
  right: 0;
}

.content {
  position: relative;
  right: -200%;
  transition: right 0.5s ease;
}

@media (max-width: 768px) {
  .body-content {
    margin: 0 7%;
  }
}
</style>
