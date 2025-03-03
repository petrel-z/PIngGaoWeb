<script setup>
import Item2 from "@/components/Item-2.vue";
import MyPagination from "@/components/MyPagination.vue";
import MyTitle from "@/components/MyTitle.vue";
import OrderList from "@/components/OrderList.vue";
import router from "@/router/index.js";
import httpUtils from "@/utils/httpUtils.js";
import { ref, onMounted } from "vue";

defineOptions({
  name: "NewsCenterIndex2-2",
});

document.title = "集团新闻";
const categoryId = 17;
const leftList = ref([]);
const rightList = ref([]);
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

async function getData () {
  const queryString = new URLSearchParams({
    pageNo: pageNo.value,
    pageSize: pageSize.value,
  }).toString();

  console.log("获取数据", queryString);
  const response = await httpUtils.get(`/cms/category/${categoryId}/news?${queryString.toString()}`);
  const { data } = await response.json();

  console.log(data);

  const top5List = [];
  data.top5List.forEach((item) => {
    top5List.push({
      id: item.id,
      name: item.title,
      num: `浏览量：${item.viewCount}`,
    });
  });
  rightList.value = [...top5List];

  const page = data.page;
  pageMax.value = Math.ceil(page.total / pageSize.value);
  leftList.value = [...page.list];
}

function pageChange (pageNumber) {
  pageNo.value = pageNumber;
  getData();
}

function toDetail (item) {
  console.log(item);
  if (item && item.id) {
    const target = router.resolve({
      name: "pbDetail",
      params: {
        id: item.id,
      },
    });
    window.open(target.href, "_blank");
  }
}

// 监听窗口大小变化事件
let onceChange = ref(false);

function changeOnce () {
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
          <MyTitle title="总部动态" english="HEADQUARTERS NEWS" />
        </div>
        <div
          style="
            display: flex;
            justify-content: space-between;
            margin-top: 3.7rem;
            height: 100%;
            width: 100%;
          "
        >
          <div class="item-container">
            <Item2
                v-for="item in leftList" :key="item.id"
                :time="formatTimestamp(item.publishTime)"
                :text="item.title"
                class="item"
                :detail-id="item.id"
                @click-item="toDetail"
            />
          </div>
          <div v-show="!onceChange" class="order-container">
            <OrderList :order-list="rightList" bg-color="#006fc1" @click-item="toDetail" />
          </div>
        </div>
      </div>
      <div class="pagination-container">
        <MyPagination
            v-if="hasMore" :total="pageMax" :current="pageNo" class="pagination"
            @page-change="pageChange"
        />
        <p v-else style="font-size: 24px;">
          暂无更多
        </p>
      </div>
      <div v-show="onceChange" class="order-container">
        <OrderList :orderList="rightList" bgColor="#006fc1" @click-item="toDetail" />
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
  padding-bottom: 3rem;
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
