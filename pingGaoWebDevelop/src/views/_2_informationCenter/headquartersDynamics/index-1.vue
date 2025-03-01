<script setup>
import { onMounted, ref } from "vue";
defineOptions({
  name: "NewsCenterIndex1-1",
});
import ContentPag from "@/views/_2_informationCenter/headquartersDynamics/ContentPag.vue";
import MyTitle from "@/components/MyTitle.vue";
import Item1 from "@/components/item-1.vue";
import MyButton from "@/components/MyButton.vue";

const items = [
  {
    month: "01.14",
    year: "2025",
    title: "中国电气装备召开一届二次职工代表大会暨2025年工作会议",
    text: `1月13日至14日，中国电气装备集团有限公司第一届职工代表大会第二次会议暨2025年工作会议在沪召开。会议以习近平新
时代中国特色社会主义思想为指导，深...`,
  },
  {
    month: "01.16",
    year: "2025",
    title: "中国电气装备党委召开2024年度民主生活会会前学习暨党委理论学习中心组集体学习",
    text: `1月16日，中国电气装备党委召开2024年度民主生活会会前学习暨党委理论学习中心组集体学习，进一步统一思想、深化认
识，扎实打牢开好民主生活会的思想基础...`,
  },
  {
    month: "01.15",
    year: "2025",
    title: "中国电气装备党委召开2024年度所属单位党组织书记抓基层党建工作述职评议会议",
    text: `1月14日，中国电气装备党委召开2024年度所属单位党组织书记抓基层党建工作述职评议会议。集团公司党委书记、董事长
李洪凤主持会议并讲话，其他领导班子成员出席会议。`,
  },
  {
    month: "01.08",
    year: "2025",
    title: "中国电气装备党委副书记、总经理周群会见东方电气党委副书记、总经理张彦军",
    text: `1月7日，中国电气装备党委副书记、总经理周群在集团公司总部会见了来访的东方电气党委副书记、总经理张彦军一行，双
方就进一步深化合作进行了座谈交流。集团公司党委常委、副总经理成卫、朱安珂参加座谈。`,
  },
  {
    month: "01.07",
    year: "2025",
    title: "中国电气装备召开2025年安全稳定工作会议",
    text: `1月7日，中国电气装备召开2025年安全稳定工作会议，深入学习贯彻习近平总书记关于安全生产的重要指示精神，认真落实
国务院国资委中央企业负责人会议要求，进一步完善风险防范措施，扎实细致做好信访维稳工作`,
  },
];

function handleClick(e) {
  console.log(e);
}

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
  <div style="position: relative; width: auto; overflow: hidden">
    <div class="bodyBg">
      <div class="bodyBg1"></div>
    </div>
    <div class="body">
      <div>
        <div style="padding-top: 2.5rem">
          <my-title title="总部动态" english="HEADQUARTERS NEWS" />
        </div>
        <div ref="contentBox" style="margin-top: 2.5rem">
          <ContentPag class="content" :to-state="true" />
        </div>
        <div class="item-container">
          <Item1
            v-for="(item, index) in items"
            :key="index"
            :month="item.month"
            :year="item.year"
            :title="item.title"
            :text="item.text"
          />
        </div>
      </div>
      <div class="button-container">
        <router-link to="/informationCenter/headquartersDynamics-2"
          ><myButton @childButton="handleClick"
        /></router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body {
  margin: 0 11%;
}
.bodyBg1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 33vw;
  background-color: #def1fb;
  z-index: -1;
}

.item-container {
  width: 100%;
  height: auto;
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

.button-container {
  width: 100%;
  height: auto;
  margin: 2.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.show .content {
  right: 0;
}

.content {
  position: relative;
  right: -200%;
  transition: right 0.5s ease;
}

@media screen and (max-width: 900px) {
  .body {
    margin: 0 5%;
  }

  .bodyBg1 {
    height: 100vw;
  }
}
</style>
