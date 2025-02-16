<script setup>
import { ref } from 'vue';
let currentPage = ref(1);
const props = defineProps({
  // total: {
  //   type: Number,
  //   default: 5,
  // },
  fontColor: {
    type: String,
    default: '#45b3e0'
  },
});
</script>

<template>
  <div class="my-pagination" :style="{'--fontColor': props.fontColor}">
    <ul>
      <li
        v-for="(i, index) in 5 + 1"
        :key="index"
        :class="{ active: i === currentPage }"
        @click="currentPage = i"
      >
        {{ i <= 5 ? i : '末页' }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.my-pagination ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  width: 30em;
  margin: 0;
  padding: 0;
}

.my-pagination ul .active {
  background-color: var(--fontColor);
  color: #ffffff;
}

.my-pagination li {
  font-size: 24px;
  font-family: 'AlibabaPuHuiTi_2_55_Regular';
  color: var(--fontColor);
  line-height: 2em;
  height: 2em;
  width: 2em;
  border: 1px solid var(--fontColor);
  border-radius: 1.5em;
  text-align: center;
  cursor: pointer;
}

.my-pagination li:last-child {
  width: 5em;
}
</style>
