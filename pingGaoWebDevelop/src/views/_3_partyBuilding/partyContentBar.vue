<script setup>
import imgPath from "@/assets/imgs/_3_partyBuildingImgs/importantLogo.png";
const props = defineProps({
  title1: {
    type: String,
    default: "习近平：高举中国特色社会主义伟大旗帜 为全面建设社会主义现代化国家而",
  },
  title2: {
    type: String,
    default: "团结奋斗——在中国共产党第二十次全国代表大会上的报告",
  },
  content: {
    type: String,
    default:
      "十九大以来的五年，是极不寻常、极不平凡的五年。党中央统筹中华民族伟大复兴战略全局和世界百年未有之大变局，召开七次全会，分别就宪法修改，深化党和国家机构改革，坚持和完善中国特色社会主义制度、推进国家治",
  },
});
</script>

<template>
  <!--党的精神的上面部分 -->
  <div class="partyContentBar">
    <div class="center-container">
      <div class="content">
        <h1 class="h1-1">{{ props.title1 }}</h1>
        <h1 class="h1-2">{{ props.title2 }}</h1>
        <div class="short-line">
          <div class="triangle-left"></div>
          <div class="line-center"></div>
          <div class="triangle-right"></div>
        </div>
        <hr class="long-line" />
        <p class="first-p">
          {{ props.content }}
        </p>
        <!-- <p>法修改，深化党和国家机构改革，坚持和完善中国特色社会主义制度、推进国家治</p> -->
      </div>
    </div>
    <div class="important-logo">
      <img :src="imgPath" alt="" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.partyContentBar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 478px;
  background-image: url("../../assets/imgs/_3_partyBuildingImgs/t3P1F1Bg.png");
  position: relative;

  .center-container {
    width: 100%;
    height: 401px;
    text-align: center;
    background-color: #a51617;
    border-radius: 0;
    font-family: "SourceHanSerifCN";
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;

      width: 65%;

      h1,
      p,
      div,
      hr {
        width: 100%;
      }

      h1 {
        font-size: 32px;
        font-family: "AlibabaPuHuiTi_2_65_Medium";
        color: #fce3cc;
        line-height: 1.156;
      }

      .h1-1 {
        margin-bottom: 13px;
      }

      .h1-2 {
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
          border-top: 3px solid #fce3cc;
          transform: rotate(-45deg);
          position: relative;
          left: 3px;
          top: 1px;
        }

        .line-center {
          width: 140px;
          height: 0;
          border: 2px solid #fce3cc;
        }

        .triangle-right {
          width: 0px;
          height: 0px;
          border: 3px solid transparent;
          border-top: 3px solid #fce3cc;
          transform: rotate(45deg);
          position: relative;
          left: -3px;
          top: 1px;
        }
      }

      .long-line {
        height: 1px;
        border: none;
        background-color: #fce3cc;
      }

      p {
        text-align: left;
        font-size: 20px;
        color: #fce3cc;
        line-height: 1.85;
        font-family: "SourceHanSerifCN";
        margin-top: 25px;
        text-align: justify;
        padding: 0 15px 0 30px;
      }
    }
  }

  .important-logo {
    position: absolute;
    left: 11%;
    top:10%;
  }
}

/* 大型设备（桌面，大于 900px） */
@media (max-width: 900px) {
  .partyContentBar {

  height: auto;
  padding: 15% 0 10% 0;
  .center-container {
    height: 50%;
    .content {

      width: 90%;

      position: relative;
      top: 5%;


      // h1 {
      //   font-size: 2.5rem;
      //   font-family: "AlibabaPuHuiTi_2_65_Medium";
      //   color: #fce3cc;
      //   line-height: 1.156;
      // }

      // .h1-1 {
      //   margin-bottom: 1.3rem;
      // }

      .h1-2 {
        margin-bottom: 2.5rem;
      }

    

      p {
        font-size: 2rem;
        margin-top: 2.5rem;
        padding: 0 ;
      }
    }
  }

  .important-logo {
    width: 14%;
    height: 12%;
    left: 5%;
    top:5%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
}

@media (max-width: 800px) {
}

/* 中型设备（平板，600px 到 900px） */
@media (max-width: 700px) {
} /* 小型设备（手机，小于 600px） */

@media (max-width: 600px) {
}

@media (max-width: 500px) {

}
</style>
