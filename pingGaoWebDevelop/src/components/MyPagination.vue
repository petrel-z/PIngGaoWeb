<script setup>
import { ref } from "vue";
let currentPage = ref(1);
const props = defineProps({
  // total: {
  //   type: Number,
  //   default: 5,
  // },
  fontColor: {
    type: String,
    default: "#45b3e0",
  },
});
</script>

<template>
  <div class="my-pagination" :style="{ '--fontColor': props.fontColor }">
    <ul>
      <li
        v-for="(i, index) in 5 + 1"
        :key="index"
        :class="{ active: i === currentPage }"
        @click="currentPage = i"
      >
        {{ i <= 5 ? i : "末页" }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.my-pagination {
  padding: 3rem 0 3.5rem 0;
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
  width: 5rem;
  height: 5rem;
  border: 0.05rem solid var(--fontColor);
  border-radius: 5rem;
  text-align: center;
  cursor: pointer;
  margin-right: 2rem;
}

.my-pagination li:last-child {
  width: 5rem;
}
</style>
