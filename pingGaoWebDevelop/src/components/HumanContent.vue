<script setup>
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
    default: "",
  },
  items: {
    type: Array,
    default: () => [],
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
  height: auto;
  border-top: 0.125rem solid rgb(0, 111, 193);
  border-bottom: 0.125rem solid rgb(0, 111, 193);
  padding: 4rem 0;
}

.human-content-left {
  width: 30%;
  margin-right: 7%;
}

.human-content-left-title {
  font-size: 2.5rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular";
  color: rgb(0, 111, 193);
}

.human-content-left-icon i {
  color: rgb(0, 111, 193);
  font-size: 5rem;
}

.human-content-right {
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;
  width: 100%;
  height: auto;
}

.border-bottom {
  border-bottom: 0.125rem solid rgb(0, 111, 193);
}

.human-content-right-item {
  width: 100%;
  height: auto;
  padding-bottom: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.human-content-right-item-title {
  white-space: pre;
  font-size: 2.5rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular";
  color: rgb(89, 87, 87);
  margin-right: 1rem;
}

.human-content-right-item-num {
  font-size: 3.5rem;
  font-family: "Avenir-black-4";
  color: rgb(0, 111, 193);
}

@media (max-width: 768px) {
  .human-content-right {
    grid-template-columns: repeat(2, 1fr);
  }

  .human-content-right-item {
    border-bottom: 0.125rem solid rgb(0, 111, 193);
  }

  .human-content {
    flex-direction: column;
    border: none;
  }

  .human-content-left {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: left;
    align-items: center;
    border-bottom: 0.125rem solid rgb(0, 111, 193);
    margin-bottom: 5rem;
    padding-bottom: 2rem;
  }

  .human-content-left-title {
    font-size: 3rem;
  }

  .human-content-left-icon {
    transform: rotate(90deg);
    margin-right: 2rem;
  }

  .human-content-left-icon i {
    font-size: 4rem;
  }
}
</style>
