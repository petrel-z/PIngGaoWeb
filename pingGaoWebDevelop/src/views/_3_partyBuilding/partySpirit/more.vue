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

const leftList = ref([]);
const rightList = ref([]);
document.title = "党的精神";
const categoryId = 21;
const pageNo = ref(1);
const pageSize = ref(10);
const pageMax = ref(1);
const hasMore = ref(true);

// 格式化时间戳为 YYYY-MM-DD 格式
function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}.${month}.${day}`;
}

async function getData() {
  const queryString = new URLSearchParams({
    pageNo: pageNo.value,
    pageSize: pageSize.value,
  }).toString();

  const response = await httpUtils.get(`/cms/category/${categoryId}/news?${queryString.toString()}`);
  const { data } = await response.json();

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

function pageChange(pageNumber) {
  pageNo.value = pageNumber;
  getData();
}

function toDetail(newsId) {
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

// const left = ref(null);
// const right = ref(null);
// const footerButton = ref(null);
// onUpdated(() => {
//   if (window.matchMedia("(max-width: 900px)").matches) {
//     left.value.style.marginBottom = `${footerButton.value.clientHeight}px`;
//     footerButton.value.style.top = `${left.value.clientHeight + footerButton.value.clientHeight}px`;
//   }
// });
</script>

<template>
  <div class="spirit-more">
    <div class="mytitle">
      <myTitle title="党的精神" english="The spirit of the Party" title-color="#fce3cd" line-color="#fce3cd"
        eng-color="#fce3cd" />
    </div>
    <div class="footer-line"></div>
    <div class="list">
      <div class="left" ref="left">
        <div v-for="item in leftList" :key="item.id" class="listItem">
<<<<<<< HEAD
          <Item2 :time="formatTimestamp(item.publishTime)" :text="item.title" time-color="#a51617" text-color="#7b6a5d"
            text-font-family="SourceHanSerifCN_Bold" :hover-bg-color="'#e06e5f'" @click="toDetail(item.id)" />
        </div>
        <div class="footer-button-MT">
          <MyPagination v-if="hasMore" :total="pageMax" :current="pageNo" font-color="#a51617"
            @page-change="pageChange" />
          <p v-else style="font-size: 24px;">
            暂无更多
          </p>
=======
          <Item2
            style="--hoverBgColor: #e06e5f"
            :time="formatTimestamp(item.publishTime)"
            :text="item.title"
            time-color="#a51617"
            text-color="#7b6a5d"
            text-font-family="SourceHanSerifCN_Bold"
            @click="toDetail(item.id)"
          />
>>>>>>> 64308a7e4753cdc6906e83e163f45734db83597f
        </div>
      </div>
      <div class="right" ref="right">
        <OrderList class="orderList" :order-list="rightList" bg-color="#e06e5f" :font-family="{
          titleFont: 'SourceHanSerifCN_Bold',
          contentFont: 'SourceHanSerifCN_SemiBold',
        }" @click-item="toDetail" />
      </div>
    </div>
    <div class="footer-button">
      <MyPagination v-if="hasMore" :total="pageMax" :current="pageNo" font-color="#a51617" @page-change="pageChange" />
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
  width: 100%;
  background-image: url("../../../assets/imgs/_3_partyBuildingImgs/t3_p1_moreBg.png");
  background-size: cover;
  height: auto;

  .mytitle {
    width: 100%;
    margin-top: 22px;
    margin-bottom: 22px;
    padding-left: 11%;
  }

  .list {
    width: 78%;
    display: flex;
    justify-content: space-between;
<<<<<<< HEAD
=======
    gap: 2%;
    margin: 0 auto;
>>>>>>> 64308a7e4753cdc6906e83e163f45734db83597f

    .left {
      width: 60%;
<<<<<<< HEAD
=======
      margin: 0;
      min-height: 500px;
>>>>>>> 64308a7e4753cdc6906e83e163f45734db83597f

      div:nth-child(1) {
        margin-top: 0;
      }

      .listItem {
        // width: 945px;
        margin: 10px 0;
      }

      .footer-button-MT {
        display: none;
      }
    }

    .right {
      width: 40%;
      margin: 0;

      .order {
        padding: 0 2.5rem;

        .last-item {
          padding: 1.5rem 0;
        }
      }
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

@media (max-width: 900px) {
  .spirit-more {
    .footer-line {
      display: none;
    }

    .mytitle {
      margin-top: 2rem;
      margin-bottom: 2rem;
      padding-left: 5%;
    }

    .list {
      flex-direction: column;

      .left {
        margin: 0;
        padding: 0 5%;
        width: 100%;


        .footer-button-MT {
          width: 100%;
          height: auto;
          display: flex;
          justify-content: center;
          padding: 2em 0 3em 0;
        }
      }

      .right {
        width: 100%;
        margin: 0;
        padding: 0 5%;
        margin-bottom: 5rem;
      }
    }


    .footer-button {
      display: none;
    }
  }
}
</style>
