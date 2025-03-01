<script setup>
import { ref, onMounted } from "vue";

defineOptions({
  name: "NewsCenterIndex3-2",
});
import MyTitle from "@/components/MyTitle.vue";
import Item2 from "@/components/Item-2.vue";
import OrderList from "@/components/OrderList.vue";
import MyPagination from "@/components/MyPagination.vue";
const items = [
  {
    time: "2025.01.14",
    text: `平高集团1家企业荣获2024年全国质量标杆奖`,
  },
  {
    time: "2025.01.16",
    text: `平高集团亮相CIGRE 2024 绿色智能产品吸引全球电力行业目光`,
  },
  {
    time: "2025.01.15",
    text: `共青团平高集团有限公司、河南平高电气股份有限公司第二…`,
  },
  {
    time: "2025.01.08",
    text: `平高集团、平高电气获评2024年中国机械工业大型重点骨…`,
  },
  {
    time: "2025.01.07",
    text: `平高集团所属综合能源公司获节能服务公司综合能力“公共设…`,
  },
  {
    time: "2024.12.29",
    text: "平高集团亮相CIGRE 2024 绿色智能产品吸引全球电力行业目光",
  },
  {
    time: "2024.12.25",
    text: "平高集团所属综合能源公司获节能服务公司综合能力“公共设…",
  },
  {
    time: "2024.12.22",
    text: "平高集团亮相CIGRE 2024 绿色智能产品吸引全球电力行业目光",
  },
  {
    time: "2024.12.14",
    text: "共青团平高集团有限公司、河南平高电气股份有限公司第二…",
  },
  {
    time: "2024.12.09",
    text: "平高集团亮相CIGRE 2024 绿色智能产品吸引全球电力行业目光",
  },
];
const orderList = [
  {
    name: "平高集团1家企业荣获2024年…",
    num: "浏览量:4039",
  },
  {
    name: "平高集团亮相CIGRE 2024 绿…",
    num: "浏览量:4039",
  },
  {
    name: "平高集团1家企业荣获2024年…",
    num: "浏览量:4039",
  },
  {
    name: "平高集团亮相CIGRE 2024 绿…",
    num: "浏览量:4039",
  },
  {
    name: "平高集团亮相CIGRE 2024 绿…",
    num: "浏览量:4039",
  },
];

// 监听窗口大小变化事件
let onceChange = ref(false);
function changeOnce() {
  // 获取当前窗口的宽度和高度
  const width = window.innerWidth;
  if (width <= 900) {
    // 根据窗口大小改变dom元素
    onceChange.value = true;
  } else {
    onceChange.value = false;
  }
}
onMounted(() => {
  changeOnce();
  window.addEventListener("resize", changeOnce);
});
</script>

<template>
  <div style="position: relative">
    <div class="body">
      <div>
        <div style="padding-top: 4rem">
          <my-title title="媒体聚焦" english="MEDIA FOCUS" />
        </div>
        <div
          style="
            display: flex;
            justify-content: space-between;
            margin-top: 3.43rem;
            height: 100%;
            width: 100%;
          "
        >
          <div class="item-container">
            <Item2
              v-for="(item, index) in items"
              :key="index"
              :time="item.time"
              :text="item.text"
            />
          </div>
          <div v-show="!onceChange" class="order-container">
            <OrderList :orderList="orderList" bgColor="#006fc1" />
          </div>
        </div>
      </div>
      <div class="pagination-container">
        <MyPagination />
      </div>
      <div v-show="onceChange" class="order-container">
        <OrderList :orderList="orderList" bgColor="#006fc1" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.body {
  padding: 0 11%;
  background-color: #def1fb;
  overflow: hidden;
}

.item-container {
  width: 64%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 1%;
}

.order-container {
  width: 35%;
  height: auto;
}

.pagination-container {
  width: 100%;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 900px) {
  .body {
    padding: 0 7%;
  }

  .item-container {
    width: 100%;
  }

  .order-container {
    width: 100%;
    margin-bottom: 15%;
  }
}
</style>
