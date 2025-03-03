<script setup>
import httpUtils from "@/utils/httpUtils.js";
import { ref } from "vue";
import partyContentBar from "../partyContentBar.vue";
import partyContentDetail from "../partyContentDetail.vue";

defineOptions({
  name: "PartySpirit",
});

const contentBar = {
  title1: "党纪学习教育 | 扎实起步",
  title2: "有序开展 推动党纪学习教育走深走实",
  content: "党纪学习教育启动以来，平高集团、平高电气党委高度重视，将党纪学习教育作为一项重要的政治任务，坚持两手抓、两促进，坚持因地制宜、有的放矢，各项工作扎实推进，纵深推进全面从严治党，为企业高质量发展提供坚强纪律保障",
};

const contentTop = {
  h: "党的精神",
  english: "The spirit of the Party",
  titleColor: "#a51617",
  lineColor: "#a51517",
  engColor: "#a51517",
};

document.title = "党的精神";
const categoryId = 22;
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
  topNews.value.btnColor = "#e06e5f";
  topNews.value.bgColor = "#a51617";
  topNews.value.lineColor = "#e06e5f";
  topNews.value.titleFont = "SourceHanSerifCN_Bold";
  topNews.value.textFont = "SourceHanSerifCN_Medium";
  topNews.value.fontColor = "#fce3cc";
  mainNews.value = page.list.slice(1);
}

getData();
</script>

<template>
  <div class="spiritSpan">
    <div class="spirit-top">
      <partyContentBar
        :title1="contentBar.title1"
        :content="contentBar.content"
        :title2="contentBar.title2"
      />
    </div>
    <div class="footer-line"></div>
    <div class="spirit-content">
      <div class="bg-color"></div>
      <partyContentDetail
        :content-top="contentTop"
        :content-page="topNews"
        :item-content="mainNews"
        :to-state="true"
      />
      <div class="white-div"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.spiritSpan {
  position: relative;

  // margin-top: 100px;
  .spirit-top {
    // position: absolute;
  }

  height: auto;

  .footer-line {
    width: 100%;
    height: 10px;
    background-image: url("../../../assets/imgs/_3_partyBuildingImgs/t3_p1_line.png");
    background-size: cover;
    background-repeat: repeat;
    // transform: translateY(-3px);
    position: absolute;
    top: -3px;
  }

  .spirit-content {
    position: relative;

    .white-div {
      width: 100%;
      height: auto;
      background-color: #fff; // 白色背景 #fff
    }

    .bg-color {
      width: 100%;
      position: absolute;
      // height: 70vh;
      height: 30%;
      background-color: #f8f1e5;
    }
  }
}


/* 大型设备（桌面，大于 900px） */
@media (max-width: 900px) {
  .spiritSpan {
    .footer-line {
      // height: 100px;
      display: none;
    }
  }
}

@media (max-width: 800px) {
}

/* 中型设备（平板，600px 到 900px） */
@media (max-width: 700px) {
}

/* 小型设备（手机，小于 600px） */
@media (max-width: 600px) {
}

@media (max-width: 500px) {
}
</style>
