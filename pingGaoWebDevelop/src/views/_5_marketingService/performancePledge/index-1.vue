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
    // 监听页面滚动事件
    window.addEventListener("scroll", () => {
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
    });
  }
});
</script>

<template>
  <div style="position: relative; min-height: 1120px">
    <div class="bodyBg"></div>
    <div class="body-content">
      <div>
        <MyTitle title="服务承诺" English="SERVICE COMMITMENT" />
      </div>
      <div ref="contentBox" style="margin-top: 55px">
        <MyContent class="content" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.bodyBg {
  background-image: url("../../../assets/imgs/_5_marketingServiceImgs/serviceBg1.png");
  background-size: cover;
  width: 100%;
  min-height: 811px;
  position: absolute;
  top: 310px;
  z-index: -1;
}

.body-content {
  margin: 0 11%;
  padding-top: 65px;
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
</style>
