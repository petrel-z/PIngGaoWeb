<script setup>
import { watch, ref } from "vue";
import defaultImg from "@/assets/imgs/_2_informationCenterImgs/LehYXF.png";

const props = defineProps({
  detailId: {
    type: Number,
    default: 1,
    required: true,
  },
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
    type: String
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
  toState: {
    type: Boolean,
    default: true,
  },
});

let defaultImage = ref(defaultImg);

watch(props, () => {
  if (props.img) {
    defaultImage.value = props.img;
  }
});

console.log(props);
</script>

<template>
  <div class="content" :style="{ 'background-color': props.bgColor }">
    <div class="content-left">
      <div class="title">
        {{ props.title1 }}
        <br />
        {{ props.title2 }}
      </div>
      <div class="hr">
        <div style="width: 30%; height: 0.2rem; background-color: #389cd1"></div>
        <div style="width: 100%; height: 0.1rem; background-color: #389cd1"></div>
      </div>
      <div class="content-text" v-html="props.text" />
      <router-link
        :to="{
          name: 'newsDetail',
          params: {
            id: props.detailId,
          },
        }"
      >
        <div class="content-btn" :style="{ 'background-color': props.btnColor }">
          <span>{{ props.btnText }}</span>
          <i
            class="iconfont icon-chakanxiangqing-copy"
            style="font-size: 1.5rem; margin-left: 2em"
          />
        </div>
      </router-link>
    </div>
    <div class="content-right">
      <img style="width: 100%; height: auto" :src="defaultImage" alt="图片加载失败" />
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
  /* min-width: 1500px; */
  width: auto;
  justify-content: space-evenly;
  align-items: center;
  background-color: #003792;
  border-radius: 1.6rem;
  overflow: hidden;
  padding: 5% 5%;
}

.content-left {
  width: 48%;
  height: auto;
  margin-right: 4%;
}

.content-right {
  width: 48%;
}

.content-right:hover {
  cursor: pointer;
  transform: scale(1.05);
  transition: all 0.7s ease-in-out;
}

.title {
  font-size: 2.18rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(255, 255, 255);
  line-height: 1.4;
  text-align: left;
  position: relative;
  z-index: 135;
}

.hr {
  margin: 5% 0;
}

.content-text {
  font-size: 1.5rem;
  font-family: "AlibabaPuHuiTi_2_45_Light";
  color: rgb(255, 255, 255);
  line-height: 1.85;
  text-align: left;
  position: relative;
  width: 100%;
  height: 40%;
  z-index: 17;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
}

.content-btn {
  font-size: 1.25rem;
  font-family: "AlibabaPuHuiTi_2_45_Light";
  color: rgb(255, 255, 255);
  /* line-height: 51px; */
  text-align: center;
  position: relative;
  z-index: 143;
  background-color: #45b3e0;
  width: 20rem;
  height: auto;
  padding: 1.5%;
  margin-top: 3%;
  border-radius: 0.8rem;
  cursor: pointer;
}

.content-btn i {
  font-size: 1.25rem;
  margin-left: 3rem;
}

.content-btn:hover {
  transform: scale(1.1);
  transition: all 0.3s ease;
}

@media screen and (max-width: 900px) {
  .content {
    flex-wrap: wrap-reverse;
    width: 100%;
    padding: 0;
    align-items: start;
  }

  .content-btn {
    margin: 3rem auto;
    font-size: 2rem;
  }

  .content-btn i {
    font-size: 2rem;
  }

  .content-left {
    margin-top: 3rem;
    width: 85%;
    flex: 0 0 auto;
  }

  .content-text {
    font-size: 2.5rem;
  }

  .title {
    font-size: 2.9rem;
  }

  .content-right {
    width: 100%;
    height: auto;
    flex: 0 0 auto;
  }

  .hr div {
    width: 100%;
  }
}
</style>
