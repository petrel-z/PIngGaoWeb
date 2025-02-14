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
    default: "src\\assets\\imgs\\资讯中心\\LehYXF.png", //
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
});
const imgPath = ref(props.img);
</script>

<template>
  <div class="content" :style="{ 'background-color': props.bgColor }">
    <div class="content-left">
      <div class="title" :style="{ fontFamily: props.titleFont, color: props.fontColor }">
        {{ props.title1 }}
        <br />
        {{ props.title2 }}
      </div>
      <div class="hr">
        <div
          style="width: 135px; height: 3px"
          :style="{ 'background-color': props.lineColor }"
        ></div>
        <div
          style="width: 380px; height: 1px"
          :style="{ 'background-color': props.lineColor }"
        ></div>
      </div>
      <div class="content-text" :style="{ fontFamily: props.textFont, color: props.fontColor }">
        {{ props.text }}
      </div>
      <div class="content-btn" :style="{ 'background-color': props.btnColor }">
        <span class="btn-text">{{ props.btnText }}</span>
        <!-- ********8 -->
        <span class="icon iconfont lookdetail-icon">&#xe504;</span>
      </div>
    </div>
    <div 
 class="img">
      <img style="width: 105%; height: 102%; object-fit: cover" :src="imgPath" alt="图片加载失败" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.content {
  display: flex;
  width: 100%;
  min-height: 601px;
  justify-content: space-evenly;
  align-items: center;
  background-color: #003792;
  border-radius: 10px;
  .content-left {
    width: 35%;
  }
  .img {
    width: 35%;
    overflow: hidden;
    border-radius: 10px;
    img {
      position: relative;
      left: -10px;
    }
  }
}
.content:hover .img img {
  transform: scale(1.15);
  transition: all 0.5s ease-in-out;
}
.title {
  font-size: 2.18remv;
  // font-family: 'Alibaba PuHuiTi 2.0';
  color: rgb(255, 255, 255);
  line-height: 1.4;
  text-align: justifyLeft;
  position: relative;
  z-index: 135;
}

.hr {
  margin: 28px 0;
}

.content-text {
  font-size: 1.5rem;
  font-family: "Alibaba PuHuiTi 2.0";
  color: rgb(255, 255, 255);
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
  font-size: 1.25rem;
  // font-family: 'Alibaba PuHuiTi 2.0';
  color: rgb(255, 255, 255);
  line-height: 51px;
  text-align: center;
  position: relative;
  z-index: 143;
  background-color: #45b3e0;
  width: 201px;
  min-height: 51px;
  margin-top: 80px;
  border-radius: 5px;
  cursor: pointer;
  font-family: "AlibabaPuHuiTi_2_45_Light";

  display: flex;
  justify-content: space-between;
  .btn-text {
    margin-left: 27px;
  }
  .lookdetail-icon {
    margin-right: 15px;
    font-size: 30px;
  }
}
</style>
