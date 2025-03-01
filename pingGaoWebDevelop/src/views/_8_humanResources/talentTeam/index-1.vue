<script setup>
import { ref, onMounted } from "vue";
import MyContent from "@/components/MyContent.vue";
import MyTitle from "@/components/MyTitle.vue";
const items = ref([
  {
    title: "国家级人才/人",
    num: 16,
  },
  {
    title: "省部行业级人才/人",
    num: 126,
  },
  {
    title: "地市级人才(相关数据正在整理)",
    num: 127,
  },
]);
const HumanContentItems = ref([
  {
    title: "河南省政府\n特贴专家/人",
    num: 4,
  },
  {
    title: "河南省杰出\n专业技术人才/人",
    num: 1,
  },
  {
    title: "中原技能\n大奖/人",
    num: 3,
  },
  {
    title: "中原\n大工匠/人",
    num: 2,
  },
  {
    title: "中原\n技能大师/人",
    num: 1,
  },
  {
    title: "河南省\n技术能手/人",
    num: 66,
  },
  {
    title: "河南省\n技术标兵/人",
    num: 7,
  },
  {
    title: "河南省学术\n技术带头人/人",
    num: 1,
  },
  {
    title: "河南省五一劳动\n奖章/人",
    num: 15,
  },
]);
import HumanContent from "@/components/HumanContent.vue";

const contentBox = ref(null);
const humanContentBox = ref(null);
onMounted(() => {
  if (contentBox.value && humanContentBox.value) {
    // 监听页面滚动事件
    window.addEventListener("scroll", () => {
      if (!contentBox.value || !humanContentBox.value) return;
      // 获取元素顶部距离页面顶部的距离
      const contentTop = contentBox.value.getBoundingClientRect().top;
      const humanContentTop = humanContentBox.value.getBoundingClientRect().top;
      // 获取窗口的高度
      const windowHeight = window.innerHeight;

      // 判断元素是否进入可视区域
      if (contentTop < windowHeight) {
        contentBox.value.classList.add("show");
      } else {
        contentBox.value.classList.remove("show");
      }
      if (humanContentTop < windowHeight) {
        humanContentBox.value.classList.add("show");
      } else {
        humanContentBox.value.classList.remove("show");
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
      <div>
        <MyTitle title="人才队伍" english="TALENT TEAM"></MyTitle>
      </div>
      <div ref="contentBox" style="margin-top: 3.4375rem">
        <MyContent
          class="content"
          title="平高集团"
          content1="平高集团始终坚持以人为本，关注员工成长成才，优化人才成长环境，将人才强企战略纳入集团发展战略之一，引进和培育"
          content2="了一支高素质的优秀人才队伍。"
          :bottom-items="items"
        />
      </div>
      <div ref="humanContentBox" style="margin-top: 5.875rem">
        <HumanContent class="left" style="margin-bottom: -0.125rem" />
        <HumanContent class="right" title="拥有省部行业级人才126人" :items="HumanContentItems" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.body-box {
  position: relative;
  width: 100%;
  height: auto;
}

.bodyBg {
  width: 100%;
  height: auto;
  position: absolute;
  bottom: -1rem;
  z-index: -1;
}

.bodyBg img {
  width: 100%;
  height: auto;
}

.body-content {
  margin: 0 11%;
  padding-top: 4.125rem;
  overflow: hidden;
  padding-bottom: 30rem;
}

.show .content {
  right: 0;
}

.show .left {
  left: 0;
}

.show .right {
  right: 0;
}

.content {
  position: relative;
  right: -200%;
  transition: right 0.5s ease;
}

.left {
  position: relative;
  left: -200%;
  transition: left 1s ease;
}

.right {
  position: relative;
  right: -200%;
  transition: right 1s ease;
}
</style>
