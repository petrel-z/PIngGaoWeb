<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "始于客户需求，为客户创造价值",
    // required: true
  },
  content1: {
    type: String,
    default: "坚持客户至上，一切为客户着想，关注和满足客户需求，为客户提供全方位、",
    // required: true
  },
  content2: {
    type: String,
    default: "系统化整体服务方案，在真诚服务、赢得信赖的同时，为客户创造价值。",
    // required: true
  },
  top: {
    type: String,
    default: "108px",
  },
  bottomMarginH1: {
    type: String,
    default: "35px",
  },
});
</script>

<template>
  <div class="commitment-span" :style="{ '--top': props.top, '--bottomMarginH1': props.bottomMarginH1 }">
    <div class="content">
      <h1>{{ props.title }}</h1>
      <div class="short-line">
        <div class="triangle-left"></div>
        <div class="line-center"></div>
        <div class="triangle-right"></div>
      </div>
      <hr class="long-line" />
      <slot></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.commitment-span {
  width: 100%;
  height: 401px;
  text-align: center;
  background-color: #006fc1;
  border-radius: 10px;
  font-family: "SourceHanSerifCN";

  .content {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    position: relative;
    top: var(--top);
    left: 50%;
    transform: translateX(-50%);
    width: 85%;

    h1,
    p,
    div,
    hr {
      width: 100%;
    }

    h1 {
      font-size: 3rem;
      font-family: "AlibabaPuHuiTi_2_65_Medium";
      color: #ffffff;
      line-height: 1.156;
      margin-bottom: var(--bottomMarginH1);
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
  }
}

@media (max-width: 1300px) {
  .commitment-span {
    .content {
      h1 {
        font-size: 4rem;
        padding: 0 7%;
      }
    }
  }
}

/* 大型设备（桌面，大于 900px） */
@media (max-width: 900px) {
  .commitment-span {
    height: 500px;


    .content {
      top: 10%;

      h1 {
        font-size: 3.1rem;
      }
    }
  }

}
@media (max-width: 600px) {
  .commitment-span {
    height: 450px;


  }

}
@media (max-width: 500px) {
  .commitment-span {
    height: 280px;

    .content {
      top: 10%;

      h1 {
        font-size: 3.3rem;
      }
    }
  }

}

@media (max-width: 400px) {
  .commitment-span {
    height: 220px;

    .content {
      top: 10%;

      h1 {
        font-size: 3.5rem;
      }
    }
  }
}
</style>
