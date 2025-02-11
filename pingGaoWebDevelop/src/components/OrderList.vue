<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '浏览量排名',
  },
  bgColor: {
    type: String,
    default: '#003792',
  },
  orderList: {
    type: Array,
    default: () => [
      {
        name: '中国电器装备召开一届二次啊啊啊啊啊',
        num: '浏览量:4039',
      },
      {
        name: '中国电器装备召开一届二次啊啊啊啊啊',
        num: '浏览量:4039',
      },
      {
        name: '中国电器装备召开一届二次啊啊啊啊啊',
        num: '浏览量:4039',
      },
      {
        name: '中国电器装备召开一届二次啊啊啊啊啊',
        num: '浏览量:4039',
      },
      {
        name: '中国电器装备召开一届二次啊啊啊啊啊',
        num: '浏览量:4039',
      },
    ],
  },
});
</script>

<template>
  <div class="order" :style="{ backgroundColor: props.bgColor }">
    <ul>
      <li class="list-item" style="height: 105px">
        <span>{{ props.title }}</span>
        <i
          class="iconfont icon-paixu"
          style="font-size: 24px; color: #fff; transform: rotate(180deg)"
        ></i>
      </li>
      <li
        class="list-item"
        v-for="(item, index) in props.orderList"
        :key="index"
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
  font-size: 24px;
  font-family: 'AlibabaPuHuiTi_2_65_Medium';
  color: rgb(255, 255, 255);
  line-height: 113px;
  text-align: justifyLeft;
  position: relative;
  z-index: 237;
  height: 113px;
  justify-content: space-between;
  border-bottom: 1px solid #fff;
}

.list-item span:nth-child(1) {
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 310px;
}

.list-item span:nth-child(2) {
  font-size: 18px;
  font-family: 'AlibabaPuHuiTi_2_65_Medium';
  color: rgb(255, 255, 255);
  text-align: justifyLeft;
  position: relative;
  z-index: 238;
}

.order {
  width: 516px;
  height: 662px;
  background-color: #003792;
  border-radius: 10px;
  padding: 0 34px;
}
</style>
