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
});
const emit = defineEmits(["pageChange"]);

function clickPage(pageNo) {
  console.log("pageChange: ", pageNo);

  if (pageNo > props.total) {
    pageNo = props.total;
  }

  emit("pageChange", pageNo);
}
</script>

<template>
  <div class="my-pagination" :style="{ '--fontColor': props.fontColor }">
    <ul>
      <li
        v-for="(i, index) in total"
        :key="index"
        :class="{ active: i === current }"
        @click="clickPage(i)"
      >
        {{ i }}
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.my-pagination {
  width: auto;
  margin: 1em;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    width: 100%;
    margin: 0;
    padding: 0;

    .active {
      background-color: var(--fontColor);
      color: #ffffff;
    }
  }

  li {
    font-size: 2rem;
    font-family: "AlibabaPuHuiTi_2_55_Regular";
    color: var(--fontColor);
    line-height: 5rem;
    width: 5rem;
    height: 5rem;
    border: 0.05rem solid var(--fontColor);
    border-radius: 5rem;
    text-align: center;
    cursor: pointer;
    margin-right: 2rem;
  }
}

/**
.my-pagination li:last-child {
  width: 5em;
}
*/
</style>
