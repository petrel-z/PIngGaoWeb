<script setup>
import ComDoubleDiv from "@/components/ComDoubleDiv.vue";
import NewsBar from "@/components/NewsBar.vue";
import HttpUtils from "@/utils/httpUtils.js";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

defineOptions({
  name: "NewsCenterIndex2-3",
});

const data = ref("");
const newsId = useRoute().params.id;
const router = useRouter();

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

  console.log(result.data.data.publishTime);
  data.value = result.data;
  document.title = data.value.data.title;

  console.log(data.value);
}

function toDetail (id) {
  if (id) {
    router.push({
      name: "newsDetail",
      params: {
        id,
      },
    });

    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
}

getData();
</script>

<template>
  <div class="body-bg">
    <div v-if="data" class="body">
      <div class="title">{{ data.data.title }}</div>
      <NewsBar color="#1c4e9f" :time="data.data.publishTime" :browse="data.data.viewCount" />
      <div class="content" v-html="data.data.content" />
      <div class="footer">
        <ComDoubleDiv
          class="footer-left"
          title="上一篇"
          :content="data?.previous?.title ?? '暂无'"
          @click="toDetail(data?.previous?.id)"
        />
        <ComDoubleDiv
          class="footer-right"
          title="下一篇"
          :content="data?.next?.title ?? '暂无'"
          @click="toDetail(data?.next?.id)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.body-bg {
  background-image: url("../../../assets/imgs/_2_informationCenterImgs/newsBg-1.png");
  padding: 0 11%;
  background-size: cover;
}

.body {
  background-color: #fff;
  padding: 0 7%;
}

.title {
  font-size: 2.2rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(0, 55, 146);
  line-height: 1.4;
  text-align: center;
  padding-top: 7.3rem;
  margin-bottom: 4.3rem;
}

.content {
  margin-top: 3.5rem;
  text-align: center;
  font-size: 1.25rem;
  font-family: "AlibabaPuHuiTi_2_45_Light";
  color: rgb(89, 87, 87);
  line-height: 1.498;
  width: 100%;
  height: auto;
  overflow: hidden;
}

.img-box {
  display: flex;
  justify-self: center;
  width: 80%;
}

.img-box img {
  width: 100%;
  height: auto;
  border-radius: 0.625rem;
}

.content p {
  height: auto;
  text-align: left;
}

.footer {
  display: flex;
  justify-content: space-between;
  padding: 5% 0;
  width: 100%;
}

.footer-left {
  width: 49%;
  margin-right: 2%;
}

.footer-right {
  width: 49%;
}

@media (max-width: 900px) {
  .body {
    padding: 0;
  }

  .title-box {
    padding: 0 2.5rem;
  }

  .title {
    font-size: 3rem;
  }

  .content p {
    font-size: 2rem;
  }

  .content {
    margin-bottom: 3rem;
    padding: 0 2.5rem;
  }

  .footer-left {
    width: 100%;
    margin: 0;
    margin-bottom: 0.8rem;
  }

  .footer-right {
    width: 100%;
  }

  .footer {
    width: 100%;
    flex-wrap: wrap;
    margin-bottom: 3rem;
  }
}

@media (max-width: 600px) {
  .title {
    font-size: 4rem;
  }

  .content p {
    font-size: 3rem;
  }
}
</style>
