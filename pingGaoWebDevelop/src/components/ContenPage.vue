<script setup>
import { ref } from "vue";
const props = defineProps({
  title1: {
    type: String,
    default: "中国电气装备召开一届二次",
  },
  title2: {
    type: String,
    default: "职工代表大会暨2025年工作会议",
  },
  text: {
    type: String,
    default: `1月13日至14日，中国电气装备集团有限公司第一届职工代
        表大会第二次会议暨2025年工作会议在沪召开。会议以习近
        平新时代中国特色社会主义思想为指导，深入贯彻党的二十
        大和二十届二中、三中全会精神，全面落实中央...`,
  },
  img: {
    type: String,
    default: "@/assets/imgs/_2_informationCenterImgs/LehYXF.png", //
  },
  btnText: {
    type: String,
    default: "查看详情",
  },
  btnColor: {
    type: String,
    default: "#45b3e0",
  },
  bgColor: {
    type: String,
    default: "#003792",
  },
  lineColor: {
    type: String,
    default: "#389cd1",
  },
  titleFont: {
    type: String,
    default: "Alibaba PuHuiTi 2.0",
  },
  textFont: {
    type: String,
    default: "Alibaba PuHuiTi 2.0",
  },
  fontColor: {
    type: String,
    default: "#ffffff",
  },
  toState: {
    type: Boolean,
    default: true,
  },
});
const imgPath = ref(props.img);
</script>

<template>
  <div
    class="content"
    :style="{
      '--bgColor': props.bgColor,
      '--btnColor': props.btnColor,
      '--lineColor': props.lineColor,
      '--titleFont': props.titleFont,
      '--textFont': props.textFont,
      '--fontColor': props.fontColor,
    }"
  >
    <div class="content-left">
      <div class="title">
        {{ props.title1 }}
        <br />
        {{ props.title2 }}
      </div>
      <div class="hr">
        <div class="hr-shortline"></div>
        <div class="hr-longline"></div>
      </div>
      <div class="content-text">
        {{ props.text }}
      </div>
      <!-- 查看详情按钮 -->
      <div class="content-btn">
        <router-link v-if="props.toState" to="/partyBuilding/partyspiritDetail"
          ><span class="btn-text">{{ props.btnText }}</span></router-link
        >
        <router-link v-else to="/partyBuilding/pinggaoPartyBuildingDetail"
          ><span class="btn-text">{{ props.btnText }}</span></router-link
        >
        <!-- ********8 -->
        <span class="icon iconfont lookdetail-icon">&#xe504;</span>
      </div>
    </div>
    <div class="img">
      <img style="width: 105%; height: 102%; object-fit: cover" :src="imgPath" alt="图片加载失败" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.content {
  display: flex;
  width: 100%;
  min-height: auto;
  padding: 4%;
  justify-content: space-between;
  align-items: center;
  background-color: var(--bgColor);
  border-radius: 10px;

  .content-left {
    width: 40%;
    height: 100%;
  }

  .img {
    width: 55%;
    height: 100%;
    overflow: hidden;
    border-radius: 10px;

    img {
      position: relative;
      left: -1rem;
    }
  }
}

.content:hover .img img {
  transform: scale(1.15);
  transition: all 0.5s ease-in-out;
}

.title {
  font-size: 2.1rem;
  font-family: var(--titleFont);
  color: var(--fontColor);
  line-height: 1.4;
  text-align: left;
  position: relative;
  z-index: 135;
  margin-top: 10%;
}

.hr {
  margin: 4% 0;

  .hr-shortline {
    width: 13.5rem;
    height: 0.3rem;
    background-color: var(--lineColor);
  }

  .hr-longline {
    width: 100%;
    height: 1px;
    background-color: var(--lineColor);
  }
}

.content-text {
  font-size: 1.38rem;
  font-family: var(--textFont);
  color: var(--fontColor);
  line-height: 1.85;
  position: relative;
  width: 100%;
  height: 40%;
  z-index: 17;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  // -webkit-line-clamp: 4; /* 显示的行数 */
  // overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;
}

.content-btn {
  font-size: 1.3rem;
  color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  text-align: center;
  z-index: 143;
  background-color: var(--btnColor);
  width: 38%;
  min-height: 10%;
  height: 10%;
  margin-top: 10%;
  border-radius: 5px;
  cursor: pointer;
  font-family: "AlibabaPuHuiTi_2_45_Light";
  display: flex;
  justify-content: space-between;
  a {
    width: 100%;
    height: 100%;
    color: #fff;
    text-align: left;
  }

  .btn-text {
    margin-left: 13%;
  }

  .lookdetail-icon {
    margin-right: 1.5rem;
    font-size: 30px;
  }
}

.content-btn:hover {
  background-color: #fef2f2;
  color: var(--btnColor);
  a {
    color: var(--btnColor);
  }
}
@media (max-width: 1200px) {
  .content-btn {
    .lookdetail-icon {
      margin-right: 1.5rem;
      font-size: 2.4rem;
    }
  }
}
/* 大型设备（桌面，大于 900px） */
@media (max-width: 900px) {
  .content {
    padding: 0;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;

    .content-left {
      width: 100%;
      height: 100%;
      padding: 5%;
    }

    .img {
      width: 100%;
      height: 100%;
    }
  }

  .title {
    font-size: 3rem;
    margin-top: 1%;
  }

  .hr {
    margin: 3% 0;
  }

  .content-text {
    font-size: 2.6rem;
  }

  .content-btn {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: 30%;
    font-size: 2rem;
    margin-top: 5%;
    padding: 1% 0;
    border-radius: 0.5rem;

    .btn-text {
      margin-left: 20%;
    }
  }
}

@media (max-width: 800px) {
}

/* 中型设备（平板，600px 到 900px） */
@media (max-width: 700px) {
}

/* 小型设备（手机，小于 600px） */

@media (max-width: 600px) {
}

@media (max-width: 500px) {
}
</style>
