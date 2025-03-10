<script setup>
const props = defineProps({
  total: {
    type: Number,
    default: 5,
  },
  current: {
    type: Number,
    default: 1,
  },
  fontColor: {
    type: String,
    default: "#45b3e0",
  },
})

const emit = defineEmits(["pageChange"])

function clickPage (pageNo) {
  // 边界处理
  if (pageNo < 1) pageNo = 1
  if (pageNo > props.total) pageNo = props.total

  // 只有页码变化时才触发事件
  if (pageNo !== props.current) {
    emit("pageChange", pageNo)
  }
}
</script>

<template>
  <div class="my-pagination" :style="{ '--fontColor': props.fontColor }">
    <ul>
      <template v-if="total <= 5">
        <li
          v-for="(i, index) in total"
          :key="index"
          :class="{ active: i === current }"
          @click="clickPage(i)"
        >
          {{ i }}
        </li>
      </template>

      <template v-else>
        <!-- 首页 -->
        <li
          :class="{ active: current === 1 }"
          @click="clickPage(1)"
        >
          &laquo;
        </li>

        <!-- 上一页 -->
        <li
          :class="{ disabled: current === 1 }"
          @click="clickPage(current - 1)"
        >
          &lt;
        </li>

        <!-- 当前页 -->
        <li class="active">
          {{ current }}
        </li>

        <!-- 下一页 -->
        <li
          :class="{ disabled: current === total }"
          @click="clickPage(current + 1)"
        >
          &gt;
        </li>

        <!-- 尾页 -->
        <li
          :class="{ active: current === total }"
          @click="clickPage(total)"
        >
          &raquo;
        </li>
      </template>
    </ul>
  </div>
</template>

<style scoped>
.my-pagination {
  width: 25%;
  margin: 1em;
}

.my-pagination ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
}

.my-pagination ul .active {
  background-color: var(--fontColor);
  color: #ffffff;
}

.my-pagination li {
  font-size: 2rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular";
  color: var(--fontColor);
  line-height: 5rem;
  min-width: 5rem;
  height: 5rem;
  border: 0.05rem solid var(--fontColor);
  border-radius: 5rem;
  text-align: center;
  cursor: pointer;
  margin-right: 2rem;
  padding: 0 1rem;
  transition: all 0.3s;
}

.my-pagination li.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  border-color: #cccccc;
  color: #cccccc;
}
</style>
