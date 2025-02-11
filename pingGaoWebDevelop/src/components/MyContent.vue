<script setup>
import MyButton from "@/components/MyButton.vue";
const props = defineProps({
  title: {
    type: String,
    default: "始于客户需求，为客户创造价值",
    required: true,
  },
  content1: {
    type: String,
    default: "坚持客户至上，一切为客户着想，关注和满足客户需求，为客户提供全方位、",
    required: true,
  },
  content2: {
    type: String,
    default: "系统化整体服务方案，在真诚服务、赢得信赖的同时，为客户创造价值。",
    required: true,
  },
  buttonFlag: {
    type: Boolean,
    default: false,
  },
  bottomItems: {
    type: Array,
    default: () => [],
  },
});
console.log(props.bottomItems);
</script>

<template>
  <div class="commitment-span">
    <div class="content">
      <h1>{{ props.title }}</h1>
      <div class="short-line">
        <div class="triangle-left"></div>
        <div class="line-center"></div>
        <div class="triangle-right"></div>
      </div>
      <hr class="long-line" />
      <div v-if="!props.buttonFlag">
        <p class="first-p">{{ props.content1 }}</p>
        <p>{{ props.content2 }}</p>
      </div>
      <div v-else>
        <p class="one-p">{{ props.content1 }}</p>
      </div>
      <div class="my-content-bottom" v-if="props.bottomItems.length != 0">
        <div
          v-for="(item, index) in props.bottomItems"
          :key="index"
          class="my-content-bottom-item"
          :class="{ 'boder-right': index < props.bottomItems.length - 1 }"
        >
          <div class="my-content-bottom-item-num">{{ item.num }}</div>
          <div class="my-content-bottom-item-title">{{ item.title }}</div>
        </div>
      </div>
    </div>
    <div class="button-div" v-if="props.buttonFlag">
      <myButton text="查看详情" type="detail" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.commitment-span {
  width: 1501px;
  min-height: 401px;
  text-align: center;
  background-color: #006fc1;
  border-radius: 10px;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    position: relative;
    padding-top: 108px;
    margin-left: 119px;
    width: 1265px;

    h1,
    p,
    div,
    hr {
      width: 100%;
    }

    h1 {
      font-size: 32px;
      font-family: "AlibabaPuHuiTi_2_65_Medium";
      color: rgb(255, 255, 255);
      line-height: 1.156;
      margin-bottom: 35px;
    }

    .short-line {
      display: flex;
      justify-content: center;
      transform: translateY(3px);
      .triangle-left {
        width: 0px;
        height: 0px;
        border: 3px solid transparent;
        border-top: 3px solid #45b3e0;
        transform: rotate(-45deg);
        position: relative;
        left: 3px;
        top: 1px;
      }
      .line-center {
        width: 140px;
        height: 0;
        border: 2px solid #45b3e0;
      }
      .triangle-right {
        width: 0px;
        height: 0px;
        border: 3px solid transparent;
        border-top: 3px solid #45b3e0;
        transform: rotate(45deg);
        position: relative;
        left: -3px;
        top: 1px;
      }
    }
    .long-line {
      height: 1px;
      border: none;
      background-color: #45b3e0;
    }

    p {
      font-size: 20px;
      font-family: "AlibabaPuHuiTi_2_45_Light";
      color: rgb(255, 255, 255);
      line-height: 1.85;
    }
    .first-p {
      margin-top: 25px;
    }
    .one-p {
      font-size: 20px;
      font-family: "AlibabaPuHuiTi_2_45_Light";
      color: rgb(255, 255, 255);
      line-height: 1.85;
      text-align: left;
      width: 1264px;
      height: 94px;
    }
    .my-content-bottom {
      display: flex;
      align-items: center;
      width: 752px;
      height: 76px;
      border-left: 1px solid #1a88cd;
      border-right: 1px solid #1a88cd;
      margin-top: 33px;
      margin-bottom: 67px;
    }

    .boder-right {
      border-right: 1px solid #1a88cd;
    }

    .my-content-bottom-item {
      width: calc(33.3%);
      height: 100%;
    }

    .my-content-bottom-item-num {
      font-size: 44px;
      font-family: "Avenir";
      color: rgb(255, 255, 255);
      line-height: 1.063;
      text-align: center;
    }

    .my-content-bottom-item-title {
      font-size: 24px;
      font-family: "Alibaba PuHuiTi 2.0";
      color: rgb(255, 255, 255);
      line-height: 1.423;
      text-align: center;
    }
  }
  .button-div {
    width: 201px;
    min-height: 51px;
    margin-left: 1180px;
    padding-top: 36px;
    padding-bottom: 46px;
  }
}
</style>
