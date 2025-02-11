<script setup>
import defaultImg from "@/assets/imgs/_2_informationCenterImgs/LehYXF.png";
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
    default: defaultImg,
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
});
</script>

<template>
  <div class="content" :style="{ 'background-color': props.bgColor }">
    <div>
      <div class="title">
        {{ props.title1 }}
        <br />
        {{ props.title2 }}
      </div>
      <div class="hr">
        <div style="width: 135px; height: 3px; background-color: #389cd1"></div>
        <div style="width: 380px; height: 1px; background-color: #389cd1"></div>
      </div>
      <div class="content-text">
        {{ props.text }}
      </div>
      <div class="content-btn" :style="{ 'background-color': props.btnColor }">
        {{ props.btnText }}
        <i class="iconfont icon-chazhao" style="font-size: 24px; margin-left: 2em"></i>
      </div>
    </div>
    <div style="width: 760px; height: 475px">
      <img
        style="width: 100%; height: 100%; object-fit: cover"
        :src="props.img"
        alt="图片加载失败"
      />
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  /* min-width: 1500px; */
  width: auto;
  min-height: 601px;
  justify-content: space-evenly;
  align-items: center;
  background-color: #003792;
  border-radius: 10px;
}
.title {
  font-size: 35px;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
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
  font-size: 20px;
  font-family: "AlibabaPuHuiTi_2_45_Light";
  color: rgb(255, 255, 255);
  line-height: 1.85;
  text-align: justifyLeft;
  position: relative;
  width: 525px;
  height: 140px;
  z-index: 17;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
}

.content-btn {
  font-size: 20px;
  font-family: "AlibabaPuHuiTi_2_45_Light";
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
}
</style>
