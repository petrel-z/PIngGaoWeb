<script setup>
defineOptions({
  name: "NewsCenterIndex1-2",
});
import { ref, onMounted } from "vue";
import MyTitle from "@/components/MyTitle.vue";
import Item2 from "@/components/Item-2.vue";
import OrderList from "@/components/OrderList.vue";
import MyPagination from "@/components/MyPagination.vue";
const items = [
  {
    time: "2025.01.14",
    text: `中国电气装备召开一届二次职工代表大会暨2025年工作会议`,
  },
  {
    time: "2025.01.16",
    text: `中国电气装备党委召开2024年度民主生活会会前学习暨党委…`,
  },
  {
    time: "2025.01.15",
    text: `中国电气装备党委召开2024年度所属单位党组织书记抓基层…`,
  },
  {
    time: "2025.01.08",
    text: `中国电气装备党委副书记、总经理周群会见东方电气党委副书…`,
  },
  {
    time: "2025.01.07",
    text: `中国电气装备召开2025年安全稳定工作会议`,
  },
  {
    time: "2024.12.29",
    text: "中国电气装备党委副书记、总经理周群会见东方电气党委副书…",
  },
  {
    time: "2024.12.25",
    text: "中国电气装备党委召开2024年度民主生活会会前学习暨党委…",
  },
  {
    time: "2024.12.22",
    text: "中国电气装备召开2025年安全稳定工作会议",
  },
  {
    time: "2024.12.14",
    text: "中国电气装备召开2025年安全稳定工作会议",
  },
  {
    time: "2024.12.09",
    text: "中国电气装备召开一届二次职工代表大会暨2025年工作会议",
  },
];

// 监听窗口大小变化事件
let onceChange = ref(false);
function changeOnce() {
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

<template>
  <div style="position: relative">
    <div class="body" ref="bodyBox">
      <div>
        <div style="padding-top: 4rem">
          <my-title title="总部动态" english="HEADQUARTERS NEWS" />
        </div>
        <div
          style="
            display: flex;
            justify-content: space-between;
            margin-top: 3.7rem;
            height: 100%;
            width: 100%;
          "
        >
          <div class="item-container">
            <Item2
              v-for="(item, index) in items"
              :key="index"
              :time="item.time"
              :text="item.text"
            />
          </div>
          <div v-show="!onceChange" class="order-container">
            <OrderList />
          </div>
        </div>
      </div>
      <div class="pagination-container">
        <MyPagination />
      </div>
      <div v-show="onceChange" class="order-container">
        <OrderList />
      </div>
    </div>
  </div>
</template>

<style scoped>
.body {
  padding: 0 11%;
  background-color: #def1fb;
  height: auto;
  overflow: hidden;
}

.item-container {
  width: 64%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 1%;
  margin-bottom: 2%;
}

.order-container {
  width: 35%;
  height: auto;
}

.pagination-container {
  width: 100%;
  padding-bottom: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 900px) {
  .body {
    padding: 0 7%;
  }

  .item-container {
    width: 100%;
  }

  .order-container {
    width: 100%;
    margin-bottom: 15%;
  }
}
</style>
