<script setup>
import { ref, onMounted, watch } from "vue";

import MyTitle from "@/components/MyTitle.vue";
import Item2 from "@/components/Item-2.vue";
import httpUtils from "@/utils/httpUtils.js";

const titleBox = ref(null);
const itemBox = ref(null);
const index = ref(1);
const items = ref([]);

// 格式化时间戳为 YYYY-MM-DD 格式
function formatTimestamp (timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}.${month}.${day}`;
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

async function getData (index) {
  let categoryId;
  if (index === 1) {
    categoryId = 44;
    document.title = "高校毕业生招聘";
  } else {
    categoryId = 45;
    document.title = "社会公开招聘";
  }

  const queryString = new URLSearchParams({
    pageNo: 1,
    pageSize: 999,
  }).toString();

  console.log("获取数据", queryString);
  const response = await httpUtils.get(`/cms/category/${categoryId}/news?${queryString.toString()}`);
  const { data } = await response.json();
  const page = data.page;
  page.list.forEach((i) => {
    i.publishTime = formatTimestamp(i.publishTime);
    i.timeObj = formatTimestampObj(i.publishTime);
  });
  items.value = page.list;
}

function setIndex (newIndex) {
  console.log(newIndex);
  index.value = newIndex;
}

watch(index, () => {
  console.log(index.value);
  getData(index.value);
});

getData(1);

onMounted(() => {
  if (titleBox.value && itemBox.value) {
    // 监听页面滚动事件
    window.addEventListener("scroll", () => {
      // 获取元素顶部距离页面顶部的距离
      if (titleBox.value && itemBox.value) {
        const titleTop = titleBox.value.getBoundingClientRect().top;
        const itemTop = itemBox.value.getBoundingClientRect().top;
        // 获取窗口的高度
        const windowHeight = window.innerHeight;

        // 判断元素是否进入可视区域

        if (titleTop < windowHeight) {
          titleBox.value.classList.add("show");
        } else {
          titleBox.value.classList.remove("show");
        }
        if (itemTop < windowHeight) {
          itemBox.value.classList.add("show");
        } else {
          itemBox.value.classList.remove("show");
        }
      }
    });
  }
});
</script>

<template>
  <div class="body-box">
    <div class="bodyBg">
      <img src="@/assets/imgs/_8_humanResourcesImgs/bg-1.png" alt="" />
    </div>
    <div class="body-content">
      <div ref="titleBox">
        <MyTitle class="my-title" title="人才招聘" english="TALENT RECRUITMENT"></MyTitle>
      </div>
      <div ref="itemBox" style="display: flex; margin-top: 3rem">
        <div class="left" @click="setIndex(1)">高校毕业生招聘</div>
        <div class="right" @click="setIndex(2)">社会公开招聘</div>
      </div>
      <div style="margin-top: 4.9rem">
        <div class="content-title">
          {{ index === 1 ? "高校毕业生招聘" : "社会公开招聘" }}
        </div>
        <div style="margin-top: 3.7rem">
          <router-link
            v-for="item in items"
            :key="item.id"
            :to="{
              name: 'talentRecruitmentDetail',
              params: {
                id: item.id,
              },
            }">
            <Item2
              style="margin-bottom: 1.7rem"
              :time="item.publishTime"
              :text="item.title"
              size="big"
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body-box {
  position: relative;
  background-color: #def1fb;
  padding-bottom: 40%;
}

.bodyBg {
  width: 100%;
  position: absolute;
  bottom: -5px;
  z-index: -1;
}

.bodyBg img {
  width: 100%;
  height: auto;
}

.body-content {
  margin: 0 11%;
  padding-top: 4.2rem;
  overflow: hidden;
}

.show .left {
  cursor: pointer;
  user-select: none;
  left: 0;
}

.show .right {
  cursor: pointer;
  user-select: none;
  right: 0;
}

.left {
  width: 48%;
  aspect-ratio: 721/237; /* 宽高比为 721:237 */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-image: url("../../../assets/imgs/_8_humanResourcesImgs/divBg-1.png");
  background-size: cover;
  border-radius: 0.625rem;
  font-size: 2.5rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(255, 255, 255);
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  left: -200%;
  transition: left 0.5s ease;
}

.right {
  font-size: 2.5rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(255, 255, 255);
  border-radius: 0.625rem;
  text-align: center;
  width: 48%;
  aspect-ratio: 721/237;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../../assets/imgs/_8_humanResourcesImgs/divBg-2.png");
  background-size: cover;
  margin-left: 4%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
  right: -200%;
  transition: right 0.5s ease;
}

.content-title {
  font-size: 2.5rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(0, 111, 193);
  text-align: center;
}
</style>
