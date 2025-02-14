<script setup>
import { defineProps } from "vue";

// 定义一个方法来判断是否应该应用 border-bottom 样式
const shouldApplyBorder = (index) => {
  // 计算总行数
  const totalRows = Math.ceil(props.items.length / 3);
  // 计算当前索引所在的行
  const currentRow = Math.floor(index / 3) + 1;
  // 如果当前行不是最后一行，则应用 border-bottom 样式
  return currentRow < totalRows;
};

const props = defineProps({
  title: {
    type: String,
    default: "拥有国家级人才16人",
  },
  items: {
    type: Array,
    default: () => [
      {
        title: "国家科技创新\n领军人才/人",
        num: 1,
      },
      {
        title: "享受国务院\n特贴专家/人",
        num: 4,
      },
      {
        title: "全国技术\n能手/人",
        num: 4,
      },
      {
        title: "中华技能\n大奖/人",
        num: 1,
      },
      {
        title: "中央企业\n技术能手/人",
        num: 4,
      },
      {
        title: "全国青年\n岗位能手/人",
        num: 2,
      },
    ],
  },
});
</script>

<template>
  <div class="human-content">
    <div class="human-content-left">
      <div class="human-content-left-title">
        {{ title }}
      </div>
      <div class="human-content-left-icon">
        <i class="iconfont icon-xiangyou3"></i>
      </div>
    </div>
    <div class="human-content-right">
      <div
        v-for="(i, index) in props.items"
        :key="i.title"
        class="human-content-right-item"
        :class="{ 'border-bottom': shouldApplyBorder(index) }"
      >
        <div class="human-content-right-item-title">{{ i.title }}</div>
        <div class="human-content-right-item-num">{{ i.num }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.human-content {
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  min-height: 370px;
  border-top: 2px solid rgb(0, 111, 193);
  border-bottom: 2px solid rgb(0, 111, 193);
}

.human-content-left {
  padding-top: 55px;
  width: 30%;
}

.human-content-left-title {
  font-size: 32px;
  font-family: "Alibaba PuHuiTi 2.0";
  color: rgb(0, 111, 193);
  line-height: 1.156;
  margin-bottom: 62px;
}

.human-content-left-icon i {
  color: rgb(0, 111, 193);
  font-size: 68px;
}

.human-content-right {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  min-height: 410px;
}

.border-bottom {
  border-bottom: 2px solid rgb(0, 111, 193);
}

.human-content-right-item {
  width: calc((100% - 65 * 2px) / 3);
  height: 205px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding-top: 55px;
}

.human-content-right-item-title {
  white-space: pre-wrap;
  font-size: 26px;
  font-family: "Alibaba PuHuiTi 2.0";
  color: rgb(89, 87, 87);
  line-height: 1.5;
}

.human-content-right-item-num {
  font-size: 50.446px;
  font-family: "Avenir";
  color: rgb(0, 111, 193);
  line-height: 1.563;
  text-align: right;
  margin-right: 65px;
}
</style>
