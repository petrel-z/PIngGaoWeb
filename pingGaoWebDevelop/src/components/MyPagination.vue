<script setup>
import { computed } from "vue";

const props = defineProps({
  total: {
    type: Number,
    default: 5,
    validator: (value) => value >= 1,
  },
  current: {
    type: Number,
    default: 1,
    validator: (value) => value >= 1,
  },
  fontColor: {
    type: String,
    default: "#45b3e0",
  },
  maxVisiblePages: {
    // 新增属性：最多显示的页码数
    type: Number,
    default: 5,
    validator: (value) => value >= 3,
  },
});

const emit = defineEmits(["pageChange"]);

// 计算显示的页码范围
const visiblePages = computed(() => {
  if (props.total <= props.maxVisiblePages) {
    return Array.from({ length: props.total }, (_, i) => i + 1);
  }

  const half = Math.floor(props.maxVisiblePages / 2);
  let start = props.current - half;
  let end = props.current + half;

  if (start < 1) {
    start = 1;
    end = props.maxVisiblePages;
  } else if (end > props.total) {
    end = props.total;
    start = props.total - props.maxVisiblePages + 1;
  }

  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
});

// 点击页码处理
function clickPage(pageNo) {
  // 边界处理
  pageNo = Math.max(1, Math.min(pageNo, props.total));

  // 只有页码变化时才触发事件
  if (pageNo !== props.current) {
    emit("pageChange", pageNo);
  }
}

// 快速跳转处理
function handleJump(e) {
  const pageNo = parseInt(e.target.value);
  if (!isNaN(pageNo) && pageNo >= 1 && pageNo <= props.total) {
    clickPage(pageNo);
  }
  e.target.value = "";
}
</script>

<template>
  <div class="my-pagination" :style="{ '--fontColor': props.fontColor }">
    <ul>
      <!-- 首页 -->
      <li :class="{ disabled: current === 1 }" @click="clickPage(1)" title="首页">&laquo;</li>

      <!-- 上一页 -->
      <li :class="{ disabled: current === 1 }" @click="clickPage(current - 1)" title="上一页">
        &lt;
      </li>

      <!-- 显示省略号（当第一页不在可见范围内） -->
      <li
        v-if="visiblePages[0] > 1"
        class="ellipsis"
        @click="clickPage(Math.max(1, current - maxVisiblePages))"
      >
        ...
      </li>

      <!-- 页码按钮 -->
      <li
        v-for="page in visiblePages"
        :key="page"
        :class="{ active: page === current }"
        @click="clickPage(page)"
      >
        {{ page }}
      </li>

      <!-- 显示省略号（当最后一页不在可见范围内） -->
      <li
        v-if="visiblePages[visiblePages.length - 1] < total"
        class="ellipsis"
        @click="clickPage(Math.min(total, current + maxVisiblePages))"
      >
        ...
      </li>

      <!-- 下一页 -->
      <li :class="{ disabled: current === total }" @click="clickPage(current + 1)" title="下一页">
        &gt;
      </li>

      <!-- 尾页 -->
      <li :class="{ disabled: current === total }" @click="clickPage(total)" title="尾页">
        &raquo;
      </li>
    </ul>

    <!-- 快速跳转输入框（当页数较多时显示） -->
    <div v-if="total > 10" class="jump-to">
      <span>跳至</span>
      <input type="number" :min="1" :max="total" @keyup.enter="handleJump" placeholder="页" />
      <span>页</span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.my-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1em;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  li {
    font-size: 2rem;
    font-family: "AlibabaPuHuiTi_2_55_Regular";
    color: var(--fontColor);
    line-height: 3rem;
    min-width: 3rem;
    height: 3rem;
    border: 0.05rem solid var(--fontColor);
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.5rem;

    &:hover:not(.active):not(.disabled):not(.ellipsis) {
      background-color: rgba(var(--fontColor), 0.1);
    }

    &.active {
      background-color: var(--fontColor);
      color: #ffffff;
      font-weight: bold;
    }

    &.disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &.ellipsis {
      &:hover {
        color: var(--fontColor);
        opacity: 0.8; /* 替代 darken 效果 */
      }
      &:hover:not(.active):not(.disabled):not(.ellipsis) {
        background-color: color-mix(in srgb, var(--fontColor) 10%, transparent);
      }
    }
  }

  .jump-to {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-left: 1rem;
    font-size: 1rem;

    input {
      width: 4rem;
      padding: 0.3rem 0.5rem;
      border: 1px solid var(--fontColor);
      border-radius: 4px;
      text-align: center;

      &:focus {
        outline: none;
        border-color: color-mix(in srgb, var(--fontColor) 90%, black); /* 变暗10%的效果 */
      }
    }
  }
}

@media (max-width: 768px) {
  .my-pagination {
    flex-direction: column;
    li {
      font-size: 2rem;
      min-width: 3rem;
      height: 3rem;
      line-height: 3rem;
    }

    .jump-to {
      margin-left: 0;
      margin-top: 0.5rem;
      font-size: 1.5rem;
    }
  }
}

@media (max-width: 480px) {
  .my-pagination {
    li {
      font-size: 5rem;
      min-width: 6rem;
      height: 6rem;
      line-height: 6rem;
    }

    .jump-to {
      margin-left: 0;
      margin-top: 0.5rem;
      font-size: 4rem;
    }
  }
}
</style>
