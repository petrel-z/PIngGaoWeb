<script setup>
import { onMounted, ref } from "vue";
defineOptions({
  name: "NewsCenterIndex2-1",
});
import ContentPag from "@/views/_2_informationCenter/headquartersDynamics/ContentPag.vue";
import MyTitle from "@/components/MyTitle.vue";
import Item1 from "@/components/item-1.vue";
import MyButton from "@/components/MyButton.vue";

const items = [
  {
    month: "01.14",
    year: "2025",
    title: "平高集团1家企业荣获2024年全国质量标杆奖",
    text: `9月4日，从平高集团获悉，在近日召开的2024年全国质协系统“质量月”活动启动仪式和第九届华人品质论坛上，平高集团
所属平高综合能源服务有限公司（以下简称“综合能源公司”）凭借其在综撑质`,
  },
  {
    month: "01.16",
    year: "2025",
    title: "平高集团亮相CIGRE 2024 绿色智能产品吸引全球电力行业目光",
    text: `18月28日，平高集团凭借其在绿色环保和智能制造领域的优异表现，在巴黎CIGRE 2024国际电力系统、电网设备及技术展览
会上大放异彩，成为展会上一颗璀璨的明星。`,
  },
  {
    month: "01.15",
    year: "2025",
    title: "共青团平高集团有限公司、河南平高电气股份有限公司第二次代表大会顺利召开",
    text: `在学习贯彻党的二十届三中全会精神，奋力开创公司高质量跨越发展新局面之际，共青团平高集团有限公司第二次代表大
会、共青团河南平高电气股份有限公司第二次代表大会于8月10日在平顶山顺利召开。`,
  },
  {
    month: "01.08",
    year: "2025",
    title: "平高集团、平高电气获评2024年中国机械工业大型重点骨干企业",
    text: `8月2日，从平高集团、平高电气获悉，备受瞩目的2024年中国机械工业大型骨干企业评选结果于近日揭晓，平高集团、平高
电气凭借其在技术创新、市场开拓、品牌建设等方面的卓越表现，`,
  },
  {
    month: "01.07",
    year: "2025",
    title: "平高集团所属综合能源公司获节能服务公司综合能力“公共设施AAAAA”级认证",
    text: `7月15日，中国节能协会服务产业委员会公布了节能服务公司综合能力评定的结果，平高集团所属平高综合能源服务有限公
司（以下简称“综合能源公司”）获得了节能服务公司综合能力“公共设施AAAAA”级认证`,
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
  <div style="position: relative; overflow: hidden">
    <div class="bodyBg">
      <div class="bodyBg1"></div>
    </div>
    <div class="body">
      <div>
        <div style="padding-top: 64px">
          <my-title title="集团新闻" english="GROUP NEWS" />
        </div>
        <div ref="contentBox" style="margin-top: 59px">
          <ContentPag
            class="content"
            title1="平高集团1家企业"
            title2="荣获2024年全国质量标杆奖"
            text="9月4日，从平高集团获悉，在近日召开的2024年全国质协系
统“质量月”活动启动仪式和第九届华人品质论坛上，平高集
团所属平高综合能源服务有限公司（以下简称“综合能源公
司”）凭借其在综合能源领域的卓越贡献和创享…"
            bgColor="#006fc1"
            :to-state="false"
          />
        </div>
        <div class="item-container">
          <Item1
            v-for="(item, index) in items"
            :key="index"
            :month="item.month"
            :year="item.year"
            :title="item.title"
            :text="item.text"
            hoverColor="#006fc1"
          />
        </div>
      </div>
      <div class="button-container">
        <router-link to="/informationCenter/groupNews-2"
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
  height: auto;
  background-color: #def1fb;
  z-index: -1;
}

.item-container {
  width: 100%;
  height: auto;
  margin-top: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

.button-container {
  width: 100%;
  height: auto;
  margin: 3em 0;
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
</style>
