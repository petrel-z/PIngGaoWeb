<script setup>
import Item2 from "@/components/Item-2.vue";
import MyPagination from "@/components/MyPagination.vue";
import myTitle from "@/components/MyTitle.vue";
import OrderList from "@/components/OrderList.vue";
import router from "@/router/index.js";
import httpUtils from "@/utils/httpUtils.js";
import { ref } from "vue";

defineOptions({
  name: "PinggaoPartyBuildingMore",
});

document.title = "平高党建";
const categoryId = 22;

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

function toDetail (newsId) {
  if (newsId) {
    const target = router.resolve({
      name: "pbDetail",
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
  <div class="spirit-more">
    <div class="title">
      <myTitle
          title="平高党建"
          english="Pg Party Building"
          title-color="#fce3cd"
          line-color="#fce3cd"
          eng-color="#fce3cd"
      />
    </div>
    <div class="footer-line"></div>
    <div class="list">
      <div class="left">
        <div v-for="item in leftList" :key="item.time" class="listItem">
          <Item2
              :time="formatTimestamp(item.publishTime)"
              :text="item.title"
              time-color="#a51617"
              text-color="#7b6a5d"
              text-font-family="SourceHanSerifCN_Bold"
              @click="toDetail(item.id)"
          />
        </div>
      </div>
      <div class="right">
        <OrderList
            :order-list="rightList"
            bg-color="#e06e5f"
            :font-family="{
            titleFont: 'SourceHanSerifCN_Bold',
            contentFont: 'SourceHanSerifCN_SemiBold',
          }"
            @click-item="toDetail"
        />
      </div>
    </div>

    <div class="footer-button">
      <MyPagination
          v-if="hasMore" :total="pageMax" :current="pageNo" font-color="#a51617"
          @page-change="pageChange"
      />
      <p v-else style="font-size: 24px;">
        暂无更多
      </p>
    </div>
  </div>
</template>

<style lang="less" scoped>
.spirit-more {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  background-image: url("../../../assets/imgs/_3_partyBuildingImgs/t3_p1_moreBg.png");

  padding: 0 11%;

  .title {
    width: 100%;
    margin-top: 22px;
    margin-bottom: 22px;
  }

  .list {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .left {
      width: 60%;

      div:nth-child(1) {
        margin-top: 0;
      }

      .listItem {
        // width: 945px;
        margin: 10px 0;
      }
    }

    .right {
    }
  }

  .footer-line {
    width: 100%;
    height: 10px;
    background-image: url("../../../assets/imgs/_3_partyBuildingImgs/t3_p1_line.png");
    background-size: cover;
    background-repeat: repeat;
    // transform: translateY(-3px);
    position: absolute;
    top: -6px;
  }

  .footer-button {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    padding: 3em 0;
  }
}
</style>
