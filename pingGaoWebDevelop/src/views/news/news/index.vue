<template>
  <div class="container">
    <div class="container-title">NEWS</div>
    <div class="container-body">
      <ul>
        <li v-for="item in leftList" :key="item.id" class="container-body-item">
          <router-link :to="{ name: 'engNewsDetail', params: { id: item.id } }">
            <Item1
              :detail-id="item.id"
              :month="formatTimestampObj(item.publishTime).month"
              :year="formatTimestampObj(item.publishTime).year"
              :title="item.title"
              :text="item.description"
              language="en-US"
            ></Item1>
          </router-link>
        </li>
      </ul>
      <div class="container-body-foot">
        <MyPagination :total="pageMax" :current-page="pageNo" :page-size="pageSize"
                      @page-change="pageChange" />
      </div>
    </div>
    <div class="container-foot">
      <img src="@/assets/imgs/_5_marketingServiceImgs/serviceBg1.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import { defineComponent, onMounted, ref } from "vue";
import Item1 from "@/components/Item-1.vue";
import MyPagination from "@/components/MyPagination.vue";
import httpUtils from "@/utils/httpUtils.js";

defineComponent({
  name: "EngNewsIndex",
});

document.title = "NEWS";
const categoryId = 56;
const leftList = ref([]);
const pageNo = ref(1);
const pageSize = ref(10);
const pageMax = ref(1);

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

  console.log("获取数据", queryString);
  const response = await httpUtils.get(
    `/cms/category/${categoryId}/news?${queryString.toString()}`,
  );
  const { data } = await response.json();
  const page = data.page;
  pageMax.value = Math.ceil(page.total / pageSize.value);
  leftList.value = [...page.list];
}

function pageChange (pageNumber) {
  pageNo.value = pageNumber;
  getData();
}

getData();

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

@media (max-width: 900px) {
  .container {
    &-title {
      font-size: 4rem;
    }
  }
}
</style>
