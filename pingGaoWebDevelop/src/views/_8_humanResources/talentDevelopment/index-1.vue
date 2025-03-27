<script setup>
import MyTitle from "@/components/MyTitle.vue";
import { ref, onMounted } from "vue";
import httpUtils from "@/utils/httpUtils.js";

const items = ref(null);

document.title = "人才开发";
const articleList = ref([]);
const artcileDetail = ref({});

async function getList() {
  const categoryId = 35;
  const queryString = new URLSearchParams({
    pageNo: 1,
    pageSize: 10,
  }).toString();

  const response = await httpUtils.get(
    `/cms/category/${categoryId}/news?${queryString.toString()}`
  );
  const { data } = await response.json();
  const page = data.page;
  articleList.value = [...page.list];

  setDetail(page.list[0]);
}

// 格式化时间戳为 YYYY-MM-DD 格式
function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function setDetail(article) {
  article.publishTime = formatTimestamp(article.publishTime);
  artcileDetail.value = article;
}

getList();

onMounted(() => {
  // 获取目标元素容器
  const targetContainer = items.value;
  if (targetContainer) {
    // 监听页面滚动事件
    window.addEventListener("scroll", () => {
      if (!targetContainer) return;
      // 获取元素顶部距离页面顶部的距离
      const elementTop = targetContainer.getBoundingClientRect().top;
      // 获取窗口的高度
      const windowHeight = window.innerHeight;

      // 判断元素是否进入可视区域
      if (elementTop < windowHeight) {
        targetContainer.classList.add("show");
      } else {
        targetContainer.classList.remove("show");
      }
    });
  }
});
</script>

<template>
  <div style="position: relative; width: 100%; height: auto; background-color: #def1fb">
    <div class="bodyBg">
      <img src="../../../assets/imgs/_8_humanResourcesImgs/bg-1.png" alt="" />
    </div>
    <div ref="items" class="body-content">
      <div>
        <MyTitle title="人才开发" english="TALENT DEVELOPMENT"></MyTitle>
      </div>
      <div class="body-content-box">
        <div class="body-content-left">
          <div
            v-for="article in articleList"
            :key="article.id"
            @click="setDetail(article)"
            class="div-title"
            :class="{
              active: article.id === artcileDetail.id,
            }"
          >
            {{ article.title }}
          </div>
        </div>
        <div class="body-content-right">
          <div class="content-title">{{ artcileDetail.title }}</div>
          <div class="text" v-html="artcileDetail.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bodyBg {
  background-size: cover;
  width: 100%;
  position: absolute;
  bottom: -4px;
}

.bodyBg img {
  width: 100%;
  height: auto;
}

.body-content {
  position: relative;
  z-index: 999;
  margin: 0 11%;
  padding-top: 4.3rem;
  padding-bottom: 25rem;
  overflow: hidden;
}

.body-content-box {
  margin-top: 3rem;
  display: flex;
  width: 100%;
}

.body-content-left {
  position: relative;
  left: -200%;
  transition: left 0.5s ease;
  width: 20%;
  white-space: nowrap;
}

.div-title {
  height: auto;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  padding: 1.5rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  font-size: 2rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  background-color: #fff;
  color: rgb(0, 111, 193);
  line-height: 1.156;
  text-align: center;
}

.div-title.active,
.div-title:hover {
  background-color: #006fc1;
  color: #fff;
}

.body-content-right {
  position: relative;
  right: -200%;
  transition: right 0.5s ease;
  width: 79%;
  height: auto;
  padding: 0 5.8rem;
  margin-left: 1%;
  border-radius: 0.625rem;
  background-color: #fff;
}

.content-title {
  font-size: 2.5rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(0, 111, 193);
  line-height: 1.156;
  text-align: center;
  padding-top: 4.3rem;
}

.text {
  width: 100%;
  padding-top: 2.3rem;
  margin-top: 2.5rem;
  border-top: 0.2rem solid #006fc1;
  padding-bottom: 5rem;
}

.text > p {
  font-size: 1.5rem;
  font-family: "AlibabaPuHuiTi_2_45_Light";
  color: rgb(89, 87, 87);
  margin-bottom: 2.8rem;
  text-align: left;
}

.show .body-content-left {
  left: 0;
}

.show .body-content-right {
  right: 0;
}

@media (max-width: 900px) {
  .body-content {
    margin: 0 7%;
  }

  .body-content-box {
    flex-direction: column;
  }

  .body-content-left {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    margin-bottom: 2rem;
  }

  .body-content-right {
    width: 100%;
    margin: 0;
  }

  .div-title {
    padding: 2.5rem 0;
    font-size: 4rem;
  }

  .content-title {
    font-size: 4rem;
  }
}
</style>
