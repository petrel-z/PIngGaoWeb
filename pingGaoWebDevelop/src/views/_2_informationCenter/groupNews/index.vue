<script setup>
import Item1 from "@/components/Item-1.vue";
import MyButton from "@/components/MyButton.vue";
import MyTitle from "@/components/MyTitle.vue";
import router from "@/router/index.js";
import httpUtils from "@/utils/httpUtils.js";
import ContentPag from "@/views/_2_informationCenter/ContentPag.vue";
import { ref, onMounted } from "vue";

defineOptions({
  name: "NewsCenterIndex2-1",
});

document.title = "集团新闻";
const categoryId = 17;
const mainNews = ref([]);
const topNews = ref({});

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
    pageSize: 6,
  }).toString();

  console.log("获取数据", queryString);
  const response = await httpUtils.get(`/cms/category/${categoryId}/news?${queryString.toString()}`);
  const { data } = await response.json();
  const page = data.page;
  page.list.forEach((i) => {
    i.publishTime = formatTimestamp(i.publishTime);
    i.timeObj = formatTimestampObj(i.publishTime);
  });

  console.log(page.list);
  topNews.value = page.list[0];
  mainNews.value = page.list.slice(1);
}

function toDetail (newsId) {
  if (newsId) {
    const target = router.resolve({
      name: "newsDetail",
      params: {
        id: newsId,
      },
    });
    window.open(target.href, "_blank");
  }
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

getData();
</script>

<template>
  <div style="position: relative; overflow: hidden">
    <div class="bodyBg">
      <div class="bodyBg1"></div>
    </div>
    <div class="body">
      <div>
        <div style="padding-top: 2.5rem">
          <MyTitle title="集团新闻" english="GROUP NEWS" />
        </div>
        <div ref="contentBox" style="margin-top: 2.5rem">
          <ContentPag
              :title1="topNews.title"
              title2=""
              :text="topNews.description"
              :img="topNews.images"
              bg-color="#006fc1"
              :to-state="false"
              :detail-id="topNews.id"
          />
        </div>
        <div class="item-container">
          <Item1
              v-for="(item, index) in mainNews"
              :key="index"
              :detail-id="item.id"
              :month="item.month"
              :year="item.year"
              :title="item.title"
              :text="item.text"
              hover-color="#006fc1"
              @click-item="toDetail"
          />
        </div>
      </div>
      <div class="button-container">
        <router-link to="/informationCenter/groupNewsMore">
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
  margin-top: 4.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

.button-container {
  width: 100%;
  height: auto;
  margin: 3rem 0;
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
