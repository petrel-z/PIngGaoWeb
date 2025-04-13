<script setup>
import Item2 from "@/components/Item-2.vue";
import MyContent from "@/components/MyContent.vue";
import MyPagination from "@/components/MyPagination.vue";
import MyTitle from "@/components/MyTitle.vue";
import router from "@/router/index.js";
import httpUtils from "@/utils/httpUtils.js";
import { onMounted, ref, nextTick } from "vue";
import { isMobile } from "@/utils/util.js";

defineOptions({
  name: "NewsCenterIndex5-1",
});

const contentBox = ref(null);
onMounted(() => {
  if (contentBox.value) {
	const mobile = isMobile();
	if (!mobile){
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
  }
});

document.title = "最新公告";
const categoryId = 20;
const mainNews = ref([]);
const topNews = ref({});
const pageNo = ref(1);
const pageSize = ref(10);
const pageMax = ref(1);
const hasMore = ref(true);

// 格式化时间戳为 YYYY-MM-DD 格式
function formatTimestamp (timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}.${month}.${day}`;
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
    pageNo: pageNo.value,
    pageSize: pageSize.value,
  }).toString();

  const response = await httpUtils.get(`/cms/category/${categoryId}/news?${queryString.toString()}`);
  const { data } = await response.json();
  const page = data.page;
  page.list.forEach((i) => {
    i.publishTime = formatTimestamp(i.publishTime);
    i.timeObj = formatTimestampObj(i.publishTime);
  });

  if (page.value === 1) {
    topNews.value = page.list[0];
    mainNews.value = page.list.slice(1);
  } else {
    topNews.value = page.list[0];
    mainNews.value = page.list;
  }
  pageMax.value = Math.ceil(page.total / pageSize.value);
  await nextTick();
  contentBox.value.classList.add("show");
}

function pageChange (pageNumber) {
  pageNo.value = pageNumber;
  getData();
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

getData();
</script>

<template>
  <div>
    <div style="position: relative">
      <div class="content-header-box">
        <div ref="titleBox" style="padding-top: 4rem">
          <MyTitle class="title" title="最新公告" english="LATEST ANNOUNCEMENT" />
        </div>
        <div ref="contentBox" style="margin-top: 3.6rem">
          <MyContent
            class="content"
            :detail-id="topNews.id"
            :title="topNews.title"
            :content1="topNews.description"
            :button-flag="true"
            content2=""
            @click-item="toDetail"
          />
        </div>
        <div class="bodyBg1"></div>
      </div>
      <div class="body">
        <div class="items">
          <ul>
            <li v-for="(item, index) in mainNews" :key="index">
              <router-link
                :to="{
                  name: 'newsDetail',
                  params: {
                    id: item.id
                  }
                }"
              >
                <Item2 style="--hoverBgColor: #003792" :time="item.publishTime" :text="item.title" bg-color="#def1fb" size="big" />
              </router-link>
            </li>
          </ul>
        </div>
        <div
          style="display: flex; justify-content: center; margin-top: 3.5rem; margin-bottom: 5.3rem"
        >
          <MyPagination
            v-if="hasMore" :total="pageMax" :current="pageNo" class="pagination"
            @page-change="pageChange"
          />
          <p v-else style="font-size: 24px;">
            暂无更多
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body {
  margin: 0 11%;
  overflow: hidden;
}

.bodyBg1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80%;
  background-color: #def1fb;
  z-index: -1;
}

.items ul {
  justify-content: space-between;
  margin-top: 3.5rem;
}

.items ul li {
  margin-top: 0.875rem;
}

.show .content {
  right: 0;
}

.content {
  position: relative;
  right: -200%;
  transition: right 0.5s ease;
}

.content-header-box {
  position: relative;
  box-sizing: content-box;
  padding-bottom: 3rem;
  overflow: hidden;
  padding: 0 11%;
}

@media (max-width: 768px) {
  .content-header-box {
    padding: 0 7%;
  }

  .body {
    margin: 0 7%;
  }
}
</style>
