<script setup>
import Item1 from "@/components/Item-1.vue";
import MyButton from "@/components/MyButton.vue";
import MyTitle from "@/components/MyTitle.vue";
import httpUtils from "@/utils/httpUtils.js";
import { ref } from "vue";

defineOptions({
  name: "NewsCenterIndex31",
});

document.title = "媒体聚焦";
const categoryId = 18;
const mainNews = ref([]);

// 格式化时间戳为 YYYY-MM-DD 格式
function formatTimestamp (timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}.${day}`;
}

// 格式化时间戳为 YYYY-MM-DD 格式
function formatTimestampObj (timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return {
    year: `${year}`,
    month: `${month}.${day}`,
  };
}

async function getData () {
  const queryString = new URLSearchParams({
    pageNo: 1,
    pageSize: 5,
  }).toString();
  const response = await httpUtils.get(`/cms/category/${categoryId}/news?${queryString.toString()}`);
  const { data } = await response.json();
  const page = data.page;
  page.list.forEach((i) => {
    i.publishTime = formatTimestamp(i.publishTime);
    i.timeObj = formatTimestampObj(i.publishTime);
  });
  mainNews.value = page.list;
}

getData();
</script>

<template>
  <div style="position: relative; overflow: hidden">
    <div class="body">
      <div>
        <div style="padding-top: 4rem">
          <MyTitle title="媒体聚焦" english="MEDIA FOCUS" />
        </div>
        <div class="item-container">
          <router-link
            v-for="(item, index) in mainNews"
            :key="index"
            :to="{
              name: 'newsDetail',
              params: {
                id: item.id,
              },
            }"
          >
            <Item1
              :detail-id="item.id"
              :month="item.month"
              :year="item.year"
              :title="item.title"
              :text="item.text"
              hover-color="#006fc1"
            />
          </router-link>
        </div>
      </div>
      <div class="button-container">
        <router-link to="/informationCenter/mediaFocusMore">
          <MyButton />
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body {
  margin: 0 11%;
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
</style>
