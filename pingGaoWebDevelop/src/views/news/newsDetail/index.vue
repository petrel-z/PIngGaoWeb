<template>
  <div class="container-box">
    <div class="container">
      <div class="container-title">{{ data.data.title }}</div>
      <div class="container-body" v-html="data.data.content"></div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import HttpUtils from "@/utils/httpUtils.js";

defineComponent({
  name: "NewsDetail",
});

const data = ref("");
const newsId = useRoute().params.id;

// 格式化时间戳为 YYYY-MM-DD 格式
function formatTimestamp (timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

async function getData () {
  const res = await HttpUtils.get(`/cms/news/detail?newsId=${newsId}`);
  const result = await res.json();
  // 格式化发布时间
  if (result?.data?.data?.publishTime) {
    result.data.data.publishTime = formatTimestamp(result.data.data.publishTime);
  }

  data.value = result.data;
  document.title = data.value.data.title;

  if (data.value.data.isLink) {
    window.location.href = data.value.data.linkAddr;
  }
}

getData();
</script>

<style lang="less" scoped>
.container {
  padding: 5%;
  background-color: #fff;

  &-box {
    padding: 0 11%;
    background-color: #f7f8f8;
    padding-bottom: 5%;
  }

  &-title {
    font-size: 2.5rem;
    text-align: center;
    font-weight: bold;
    color: #333;
    margin-bottom: 1.25rem;
  }

  &-body {
    border-top: 0.05rem solid black;
    padding-top: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;

    .img-box {
      width: 70%;

      img {
        width: 100%;
        height: auto;
        margin-bottom: 1.25rem;
      }
    }

    p {
      font-size: 1.125rem;
      line-height: 1.5;
      text-align: justify;
      color: #333;
      margin-bottom: 3%;
    }
  }
}

@media (max-width: 900px) {
  .container {
    &-title {
      font-size: 5rem;
    }

    &-body {
      p {
        font-size: 4rem;
      }
    }
  }
}

@media (max-width: 600px) {
}
</style>
