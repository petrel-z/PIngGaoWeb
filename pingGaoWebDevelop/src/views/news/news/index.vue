<template>
  <div class="container">
    <div class="container-title">NEWS</div>
    <div class="container-body">
      <ul>
        <li v-for="item in news" :key="item.id" class="container-body-item">
          <a href="/news/newsDetail">
            <Item1
              :detail-id="item.id"
              :month="item.month"
              :year="item.year"
              :title="item.title"
              :text="item.text"
              language="en-US"
            ></Item1>
          </a>
        </li>
      </ul>
      <div class="container-body-foot">
        <MyPagination :total="news.length" :current-page="1" :page-size="10"></MyPagination>
      </div>
    </div>
    <div class="container-foot">
      <img src="@/assets/imgs/_5_marketingServiceImgs/serviceBg1.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import Item1 from "@/components/Item-1.vue";
import MyPagination from "@/components/MyPagination.vue";
defineComponent({
  name: "NewsIndex",
});

const news = ref([
  {
    id: 1,
    month: "01.14",
    year: "2025",
    title:
      "China Electrical Equipment held the second session of the first employee representative conference ",
    text: "After more than 50 years of development, Pinggao Group has formed a business pattern covering resea",
  },
  {
    id: 1,
    month: "01.14",
    year: "2025",
    title:
      "China Electrical Equipment held the second session of the first employee representative conference ",
    text: "After more than 50 years of development, Pinggao Group has formed a business pattern covering resea",
  },
  {
    id: 1,
    month: "01.14",
    year: "2025",
    title:
      "China Electrical Equipment held the second session of the first employee representative conference ",
    text: "After more than 50 years of development, Pinggao Group has formed a business pattern covering resea",
  },
  {
    id: 1,
    month: "01.14",
    year: "2025",
    title:
      "China Electrical Equipment held the second session of the first employee representative conference ",
    text: "After more than 50 years of development, Pinggao Group has formed a business pattern covering resea",
  },
  {
    id: 1,
    month: "01.14",
    year: "2025",
    title:
      "China Electrical Equipment held the second session of the first employee representative conference ",
    text: "After more than 50 years of development, Pinggao Group has formed a business pattern covering resea",
  },
  {
    id: 1,
    month: "01.14",
    year: "2025",
    title:
      "China Electrical Equipment held the second session of the first employee representative conference ",
    text: "After more than 50 years of development, Pinggao Group has formed a business pattern covering resea",
  },
]);
</script>

<style lang="less" scoped>
.container {
  height: auto;
  width: 100%;
  overflow: hidden;

  &-title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1%;
    font-weight: bolder;
    font-size: 2.7rem;
    color: black;
    padding: 1% 0;
  }
  &-body {
    border-top: 0.05rem solid #b9b2af;
    padding: 3% 11%;
    padding-bottom: 0;

    &-item {
      padding: 2% 0;
      border-bottom: 0.05rem solid #b9b2af;
    }

    &-foot {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 3%;
    }
  }
  &-foot {
    width: 100%;
    height: auto;
    position: relative;
    z-index: -1;

    img {
      display: block;
      width: 100%;
      height: auto;
      margin: 0;
      padding: 0;
    }
  }
}
</style>
