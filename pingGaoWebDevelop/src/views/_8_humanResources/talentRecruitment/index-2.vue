<script setup>
import NewsBar from "@/components/NewsBar.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import HttpUtils from "@/utils/httpUtils.js";

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
}

getData();
</script>

<template>
  <div class="body-box">
    <div class="bodyBg">
      <img src="../../../assets/imgs/_8_humanResourcesImgs/bg-1.png" alt="" />
    </div>
    <div class="body-content">
      <div class="bg-white" style="padding: 4.7rem; width: 100%">
        <div class="title-box">
          <div class="content-title">{{ data.data.title }}</div>
          <div style="margin-top: 4.7rem; margin-bottom: 4.7rem">
            <NewsBar color="#1c4e9f" :time="data.data.publishTime" :browse="data.data.viewCount" />
          </div>
        </div>
        <div class="text" v-html="data.data.content" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.body-box {
  position: relative;
  width: 100%;
  background-color: #def1fb;
  padding-bottom: 18%;
}

.bodyBg {
  width: 100%;
  position: absolute;
  bottom: -5px;
}

.bodyBg img {
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
}

.body-content {
  position: relative;
  padding: 0 11%;
  height: auto;
  width: 100%;
}

.bg-white {
  background-color: #ffffff;
}

.content-title {
  font-size: 2.5rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(0, 55, 146);
  text-align: center;
}

.text > p {
  font-size: 1.5rem;
  font-family: "AlibabaPuHuiTi_2_45_Light";
  color: rgb(89, 87, 87);
  text-align: left;
  width: 100%;
}

@media (max-width: 900px) {
  .body-box {
    padding-bottom: 50%;
  }

  .body-bg {
    padding: 0 7%;
  }

  .body {
    padding: 0;
  }

  .title-box {
    padding: 0 2.5rem;
  }

  .content-title {
    font-size: 3rem;
  }

  .body-content p {
    font-size: 2rem;
  }

  .body-content {
    /* margin-bottom: 3rem; */
    padding: 0 2.5rem;
  }
}

@media (max-width: 600px) {
  .content-title {
    font-size: 4rem;
  }

  .body-content p {
    font-size: 3rem;
  }
}
</style>
