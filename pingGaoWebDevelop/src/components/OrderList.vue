<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "浏览量排名",
  },
  bgColor: {
    type: String,
    default: "#003792",
  },
  orderList: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["clickItem"]);

function clickItem(item) {
  emit("clickItem", item.id);
}
</script>

<template>
  <div class="order" :style="{ backgroundColor: props.bgColor }">
    <ul>
      <li class="list-item title">
        <span>{{ props.title }}</span>
        <i class="iconfont icon-a-MenuBar-show list-item-icon"></i>
      </li>
      <li
        v-for="(item, index) in props.orderList"
        :key="index"
        class="list-item"
        @click="clickItem(item)"
      >
        <span> {{ item.name }}</span>
        <span>{{ item.num }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.list-item {
  display: flex;
  height: auto;
  padding: 2.5rem 0;
  font-size: 1.5rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(255, 255, 255);
  text-align: left;
  position: relative;
  z-index: 237;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.05rem solid #fff;
  cursor: pointer;
}

.list-item.title {
  padding: 1.5rem 0;
}

.list-item span:nth-child(1) {
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 70%;
  margin-right: 1%;
}

.list-item span:nth-child(2) {
  font-size: 1.2rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(255, 255, 255);
  text-align: left;
  position: relative;
  z-index: 238;
  width: auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.order {
  position: relative;
  width: auto;
  /* min-width: 500px; */
  height: auto;
  background-color: #003792;
  border-radius: 0.625rem;
  padding: 0 5rem;
  animation: right-in 0.5s ease-in-out;
}

.order ul li {
  user-select: none;
  cursor: pointer;
}

.order ul li:last-child {
  border-bottom: none;
}

.list-item-icon {
  font-size: 3rem;
  color: #fff;
  transform: rotate(180deg);
}

@keyframes right-in {
  from {
    left: 100%;
  }
  to {
    left: 0;
  }
}

@media (max-width: 900px) {
  .list-item {
    font-size: 2.8rem;
  }

  .list-item span:nth-child(2) {
    font-size: 1.8rem;
  }

  .list-item-icon {
    font-size: 4rem;
  }
}
</style>
