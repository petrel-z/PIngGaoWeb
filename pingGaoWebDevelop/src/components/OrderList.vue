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
    default: () => [
      {
        name: "中国电器装备召开一届二次啊啊啊啊啊",
        num: 4039,
      },
      {
        name: "中国电器装备召开一届二次啊啊啊啊啊",
        num: 4039,
      },
      {
        name: "中国电器装备召开一届二次啊啊啊啊啊",
        num: 4039,
      },
      {
        name: "中国电器装备召开一届二次啊啊啊啊啊",
        num: 4039,
      },
      {
        name: "中国电器装备召开一届二次啊啊啊啊啊",
        num: 4039,
      },
      {
        name: "中国电器装备召开一届二次啊啊啊啊啊",
        num: 4039,
      },
      {
        name: "中国电器装备召开一届二次啊啊啊啊啊",
        num: 4039,
      },
    ],
  },
});

function sortOrderList(orderList) {
  orderList = orderList
    .map((item) => {
      return {
        ...item,
        num: typeof item.num === "number" ? item.num : 4039,
      };
    })
    .sort(function (a, b) {
      return b.num - a.num;
    });
  return orderList.slice(0, 5);
}
</script>

<template>
  <div class="order" :style="{ backgroundColor: props.bgColor }">
    <ul>
      <li class="list-item">
        <span>{{ props.title }}</span>
        <i
          class="iconfont icon-a-MenuBar-show"
          style="font-size: 24px; color: #fff; transform: rotate(180deg)"
        ></i>
      </li>
      <li class="list-item" v-for="(item, index) in sortOrderList(props.orderList)" :key="index">
        <span> {{ item.name }}</span>
        <span>{{ `浏览量：${item.num}` }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.list-item {
  display: flex;
  height: auto;
  padding: 9% 0;
  font-size: 1.3rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(255, 255, 255);
  text-align: left;
  position: relative;
  z-index: 237;
  height: auto;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.05rem solid #fff;
  cursor: pointer;
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
  font-size: 1.125rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(255, 255, 255);
  text-align: justifyLeft;
  position: relative;
  z-index: 238;
  width: 29%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.order {
  position: relative;
  width: auto;
  height: auto;
  background-color: #003792;
  border-radius: 0.625rem;
  padding: 0 2.125rem;
  animation: right-in 0.5s ease-in-out;
}

.order ul li:last-child {
  border-bottom: none;
}

@keyframes right-in {
  from {
    left: 100%;
  }
  to {
    left: 0;
  }
}
</style>
