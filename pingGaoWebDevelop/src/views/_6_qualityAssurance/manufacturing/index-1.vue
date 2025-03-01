<script setup>
defineOptions({
  name: "ManuFacturing",
});
import MyTitle from "@/components/MyTitle.vue";
// import commitmentSpan from '@/components/commitmentSpan.vue';
import MyContent from "@/components/F6_MyContent.vue";
import { onMounted, ref } from "vue";

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
  <div class="manufacture-content" style="overflow: auto;">
    <div class="content-top">
      <div ref="topTitle" class="top-title">
        <MyTitle :title="'生产制造'" :english="'manufacture'"></MyTitle>
      </div>

      <div ref="topDetailList" class="top-detailList">
        <MyContent class="add-border" :title="'行业领先的生产线'">
          <div class="right-text">
            <p>
              平高集团拥有强大的机械加工能力，设有机加工分厂，另外还有工模具、机械动力专业加工厂。平高集团不断进行技术改造，拥有目前世界上先进的数控机群，其中有美国哈挺、日本东芝机械、日本山崎马扎克、瑞典萨耀、台中精机等数控加工中心、数控机床为主的机械加工机群。平高集团具备先进的机械加工、环氧树脂绝缘件浇注、塑料件注射、电化学表面处理、表面涂敷、锻压、焊接、热处理、工模具制造和装配能力。
            </p>
          </div>
        </MyContent>
        <MyContent :title="'现代化的装配厂'">
          <div class="right-text">
            <p>
              平高集团拥有现代化生产厂房，公司在占地面积、生产设施和环境条件等方面在国内开关企业中均属一流。GIS
              装配厂房具有年生产 5000 个隔位 GIS 的加工组装能力，拥有作业面积73200
              平方米、全封闭、恒温恒湿、防尘等级达 10-100
              万级的装配厂房，装配及试验用设备、工艺装备、检测工具齐全。断路器装配厂房具有年生产
              13000 台的加工组装能力，装配厂厂房全封闭、恒温恒湿，防尘等级达 10-100 万级。生产面积
              21420
              平方米，配置有完整的试验检测装备，生产设备完备，是国内最现代化的高压开关装配厂房之一。隔离开关装配厂房拥有作业面积25200平方米，年牛产能力达7000组，是目前中国最大的高乐隔离开关牛产基地
            </p>
          </div>
        </MyContent>
        <hr style="height: 0; border: none; border-top: 1px solid #006fc1" />
      </div>
      <div class="top-whiteSpan"></div>
    </div>
    <div class="content-bgimg"></div>
  </div>
</template>

<style lang="less" scoped>
.manufacture-content {
  z-index: 999;
  width: 100%;
  padding: 0 11%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: start;
  background-color: #fff;

  position: relative;

  .content-top {
    z-index: 9;
    width: 100%;

    .top-title {
      margin-top: 6rem;
      margin-bottom: 6rem;

      position: relative;
      right: -100%;
      transition: all 0.5s;
    }

    .topTitleClass {
      right: 0;
    }

    .top-span {

      .top-span-content {
        margin-top: 30px;

        p {
          font-size: 20px;
          font-family: "AlibabaPuHuiTi_2_45_Light";
          color: #ffffff;
          line-height: 1.85;
        }
      }
    }

    .top-detailList {
      margin-top: 35px;
      position: relative;
      left: -100%;
      transition: all 0.5s;

      .right-text {
        // width: 1010px;
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
      height: 880px;
      // height: 1050px;
    }
  }

  .content-bgimg {
    z-index: 0;
    // background-attachment: fixed;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1013px;
    background-image: url("../../../assets/imgs/_6_qualityAssuranceImgs/t6_p1_contentBg.png");
    background-size: cover;
  }
}


/* 大型设备（桌面，大于 900px） */
@media (max-width: 900px) {
  .manufacture-content {
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
