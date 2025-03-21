<script setup>
import MyButton from "@/components/MyButton.vue";

const props = defineProps({
  detailId: {
    type: Number,
    default: 1,
    required: true,
  },
  title: {
    type: String,
    default: "始于客户需求，为客户创造价值",
  },
  content1: {
    type: String,
    default: "坚持客户至上，一切为客户着想，关注和满足客户需求，为客户提供全方位、",
  },
  content2: {
    type: String,
    default: "系统化整体服务方案，在真诚服务、赢得信赖的同时，为客户创造价值。",
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

const emit = defineEmits(["clickItem"]);
</script>

<template>
  <div class="commitment-span" @click="emit('clickItem', props.detailId)">
    <div class="content">
      <h1>{{ props.title }}</h1>
      <div class="short-line">
        <div class="triangle-left"></div>
        <div class="line-center"></div>
        <div class="triangle-right"></div>
      </div>
      <hr class="long-line" />
      <div v-if="!props.buttonFlag">
        <p class="first-p" v-html="props.content1"></p>
        <p v-html="props.content2"></p>
      </div>
      <div v-else>
        <p class="one-p" v-html="props.content1"></p>
      </div>
      <div v-if="props.bottomItems.length !== 0" class="my-content-bottom">
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
    <div v-if="props.buttonFlag" class="button-div">
      <MyButton text="查看详情" type="detail" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.commitment-span {
  width: 100%;
  height: auto;
  text-align: center;
  background-color: #006fc1;
  border-radius: 0.625rem;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    position: relative;
    padding: 5rem 4rem;
    padding-bottom: 4rem;
    width: 100%;

    h1,
    p,
    div,
    hr {
      width: 100%;
    }

    h1 {
      font-size: 2.65rem;
      font-family: "AlibabaPuHuiTi_2_65_Medium";
      color: rgb(255, 255, 255);
      line-height: 1.156;
      margin-bottom: 2.65rem;
    }

    .short-line {
      display: flex;
      justify-content: center;
      transform: translateY(0.19rem);

      .triangle-left {
        width: 0;
        height: 0;
        border: 0.19rem solid transparent;
        border-top: 0.19rem solid #45b3e0;
        transform: rotate(-45deg);
        position: relative;
        left: 0.19rem;
        top: 0.07rem;
      }

      .line-center {
        width: 8.8rem;
        height: 0;
        border: 0.125rem solid #45b3e0;
      }

      .triangle-right {
        width: 0;
        height: 0;
        border: 0.19rem solid transparent;
        border-top: 0.19rem solid #45b3e0;
        transform: rotate(45deg);
        position: relative;
        left: -0.19rem;
        top: 0.07rem;
      }
    }

    .long-line {
      height: 0.07rem;
      border: none;
      background-color: #45b3e0;
    }

    p {
      font-size: 1.25rem;
      font-family: "AlibabaPuHuiTi_2_45_Light";
      color: rgb(255, 255, 255);
      line-height: 1.85;
    }

    .first-p {
      margin-top: 1.6rem;
    }

    .one-p {
      font-size: 1.3rem;
      font-family: "AlibabaPuHuiTi_2_45_Light";
      color: rgb(255, 255, 255);
      line-height: 1.85;
      text-align: left;
      width: 100%;
      height: auto;
    }

    .my-content-bottom {
      display: flex;
      align-items: center;
      width: 100%;
      height: 4.75rem;
      border-left: 0.07rem solid #1a88cd;
      border-right: 0.07rem solid #1a88cd;
      margin-top: 2.1rem;
      margin-bottom: 4.19rem;
    }

    .boder-right {
      border-right: 0.07rem solid #1a88cd;
    }

    .my-content-bottom-item {
      width: calc(33.3%);
      height: 100%;
    }

    .my-content-bottom-item-num {
      font-size: 2.8rem;
      font-family: "Avenir";
      color: rgb(255, 255, 255);
      line-height: 1.063;
      text-align: center;
    }

    .my-content-bottom-item-title {
      font-size: 1.5rem;
      font-family: "AlibabaPuHuiTi_2_45_Light";
      color: rgb(255, 255, 255);
      line-height: 1.423;
      text-align: center;
    }
  }

  .button-div {
    width: 15%;
    height: auto;
    margin-left: 80%;
    margin-right: 5%;
    padding-top: 1%;
    padding-bottom: 3%;
  }
}
</style>
