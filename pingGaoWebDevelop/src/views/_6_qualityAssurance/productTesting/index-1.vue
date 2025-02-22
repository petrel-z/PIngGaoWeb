<script setup>
import MyTitle from "@/components/MyTitle.vue";
import MyContent from "@/components/F6_MyContent.vue";
import { ref, onMounted } from "vue";
const topDetailList = ref(null);
const topTitle = ref(null);
onMounted(() => {
  const topDetailListDom = topDetailList.value;
  const topTitleDom = topTitle.value;
  setTimeout(() => {
    topTitleDom.classList.add("topTitleClass");
  }, 100);
  setTimeout(() => {
    topDetailListDom.classList.add("topDetailListClass");
  }, 100);
})
</script>

<template>
  <div class="productTesting-content" style="overflow: auto;">
    <div class="content-top">
      <div ref="topTitle" class="top-title">
        <MyTitle :title="'产品检测'" :English="'productTesting'"></MyTitle>
      </div>

      <div ref="topDetailList" class="top-detailList">
        <MyContent class="delete-border" :title="'试验检测'">
          <div class="right-text">
            <p>
              平高集团拥有大批国内领先的试验、检测及计量设备。为提升产品的研发质量，缩短研发周期，同时确保产品出厂质量，平高集团建立了完善的产品研发程序、质量保证体系、计量体系。平高集团具有化学分析、金相分析、机械性能试验、电性能试验、环境试验、粒子分析、色谱分析、物理性能试验、超声波探伤、射线探伤、荧光探伤、密封性试验等检测手段，各种型号的高压试验设备可以满足产品型式试验和出厂试验的要求
            </p>
          </div>
        </MyContent>
        <MyContent :title="'国家高压电器产品'" :title1="'质量监督检验中心（河南）'">
          <div class="right-text">
            <p>
              位于平顶山高新产业集聚区，占地229亩，总投资10亿元。是国内一流且具有第三方公共检测地位的高压电器产品试验检测中心，拥有中国计量认证（CMA）、中国考核合格检验实验室（CAL）和中国合格评定国家认可委员会认可实验室（CNAS）认证认可证书。其试验设施完善、仪器设备配置及检验检测技术先进，具备高压开关类550kV/63KA及以下大容量试验、1200kV及以下交、直流绝缘试验、温升试验、机械试验、环境试验、电磁兼容试验等试验检测能力，同时具备35kV及以下电力变压器类产品全部型式试验能力，综合试验能力外干国际先进水平
            </p>
          </div>
        </MyContent>
        <hr style="height: 0; border: none; border-top: 1px solid #006fc1; margin-top: 30px" />
      </div>
      <div class="top-whiteSpan"></div>
    </div>
    <div class="content-bgimg"></div>
  </div>
</template>

<style lang="less" scoped>
.productTesting-content {
  width: 100%;
  padding: 0 11%;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: start;
  background-color: #fff;

  position: relative;

  .content-top {
    .top-title {
      margin-top: 60px;
      margin-bottom: 60px;
      position: relative;
      right: -100%;
      transition: all 0.5s;
    }

    .topTitleClass {
      right: 0;// 动画效果
    }

    .top-detailList {
      margin-top: 35px;
      position: relative;
        left: -100%;
        transition: all 0.5s;
      .right-text {
        font-size: 20px;
        font-family: "AlibabaPuHuiTi_2_45_Light";
        color: #595757;
        line-height: 1.85;
        text-align: justify;
        
        // white-space: nowrap;
        p {
          width: 100%;

        }
      }
    }
    .topDetailListClass {
      left: 0;
    }

    .top-whiteSpan {
      width: 100%;
      // height: 880px;
      height: 1050px;
    }
  }

  .content-bgimg {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1013px;
    background-image: url("../../../assets/imgs/_6_qualityAssuranceImgs/t6_p1_contentBg.png");
    background-size: cover;
    background-attachment: fixed;
  }
}

/* 大型设备（桌面，大于 900px） */
@media (max-width: 900px) {
  .productTesting-content {
    padding: 0 5%;
    .content-top {
      .top-title {
        margin-top: 3rem;
        margin-bottom: 3rem;
      }
    }

  }

}

@media (max-width: 800px) {}

/* 中型设备（平板，600px 到 900px） */
@media (max-width: 700px) {}

/* 小型设备（手机，小于 600px） */

@media (max-width: 600px) {}

@media (max-width: 500px) {}
</style>
