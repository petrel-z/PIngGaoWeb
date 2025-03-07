<script setup>
import ComDoubleDiv from "@/components/ComDoubleDiv.vue";
import NewsBar from "@/components/NewsBar.vue";
import HttpUtils from "@/utils/httpUtils.js";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

defineOptions({
  name: "PartyBuildingDetail",
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

  data.value = result.data;
  document.title = data.value.data.title;
}

function toDetail (id) {
  if (id) {
    router.push({
      name: "pbDetail",
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

const bgColor = ref("#f8f1e5");
</script>

<template>
  <div class="spirit-detail">
    <div class="footer-line"></div>
    <div v-if="data" class="detail">
      <div class="detail-content">
        <div style="width: 100%; padding: 5em 5em">
          <div class="title">
            {{ data.data.title }}
          </div>
          <NewsBar color="#ab2526" :time="data.data.publishTime" :browse="data.data.viewCount" />
          <div class="text" v-html="data.data.content" />

          <div class="button">
            <div class="button-left">
              <ComDoubleDiv
                  title="上一篇" :content="data?.previous?.title ?? '暂无'"
                  :bg-color="bgColor"
                  :leftFontColor="'#a51617'" :rightFontColor="'#7b6a5d'"
                  @click="toDetail(data?.previous?.id)"
              />
            </div>
            <div class="button-right">
              <ComDoubleDiv
                  title="下一篇" :content="data?.next?.title ?? '暂无'"
                  :bg-color="bgColor"
                  :leftFontColor="'#a51617'" :rightFontColor="'#7b6a5d'"
                  @click="toDetail(data?.next?.id)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.spirit-detail {
  position: relative;

  .detail {
    width: 100%;
    padding: 0 11%;
    height: auto;
    background-image: url("../../assets/imgs/_3_partyBuildingImgs/t3_p1_detailBg.png");
    background-size: auto;
    display: flex;
    justify-content: center;
    background-size: cover;

    .detail-content {
      width: 100%;
      background-color: #fff;

      .title {
        width: 100%;
        height: 8rem;
        line-height: 8rem;
        text-align: center;
        font-size: 2.3rem;
        font-family: "SourceHanSerifCN";
        color: #a51617;
      }

      .text {
        width: 100%;
        text-align: center;
        font-size: 20px;
        font-family: "SourceHanSerifCN_Regular";
        color: #7b6a5d;
        line-height: 1.498;
        text-align: justify;

        padding-top: 55px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .image {
          height: 50%;
          width: 58%;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 80px 0 120px 0;
          border-radius: 15px;

          img {
            width: 100%;
            height: auto;
          }
        }
      }

      .button {
        display: flex;
        justify-content: space-between;
        margin-top: 3%;
        width: 100%;
        height: 5rem;

        .button-left,
        .button-right {
          width: 48%;
          height: 100%;
        }
      }
    }
  }

  .footer-line {
    width: 100%;
    height: 10px;
    background-image: url("../../assets/imgs/_3_partyBuildingImgs/t3_p1_line.png");
    background-size: cover;
    background-repeat: repeat;
    position: absolute;
    top: -3px;
  }
}

@media (max-width: 1600px) {
}

@media (max-width: 900px) {
  .spirit-detail {
    .detail {
      .detail-content {
        .title {
          height: 6rem;
          line-height: 6rem;
          font-size: 1.6rem;
        }
      }
    }
  }
}
</style>
