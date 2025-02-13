<script setup>
defineOptions({
  name: "NewsCenterIndex2-2",
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
</script>

<template>
  <div style="position: relative">
    <div class="body">
      <div>
        <div style="padding-top: 64px">
          <my-title title="总部动态" English="HEADQUARTERS NEWS" />
        </div>
        <div
          style="
            display: flex;
            justify-content: space-between;
            margin-top: 55px;
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
          <div style="">
            <OrderList :orderList="orderList" bgColor="#006fc1" />
          </div>
        </div>
      </div>
      <div class="pagination-container">
        <MyPagination />
      </div>
    </div>
  </div>
</template>

<style scoped>
.body {
  padding: 0 2em;
  background-color: #def1fb;
}

.item-container {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

.pagination-container {
  width: 100%;
  margin: 3em 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
