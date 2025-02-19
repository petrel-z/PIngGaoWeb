<script setup>
import MyTitle from "@/components/MyTitle.vue";
import CommitmentSpan from "@/components/CommitmentSpan.vue";
</script>

<template>
  <div class="purchaseByBidding-content">

    <div class="content-top">
      <div class="top-title">
        <MyTitle :title="'招标采购'" :English="'bidding procurement'"></MyTitle>
      </div>
      <div class="top-span">
        <CommitmentSpan :title="'平高集团'" :top="'50px'" :bottom-margin-h1="'18px'">
          <div class="top-span-content">
            <p>
              平高集团以世界一流智慧电气装备集团战略目标为统领，紧紧围绕“智慧电气、系统服务、高效能源”总体布局，聚焦电力装备制造及能源<br />
              系统解决方案，争当电气技术引领者、能源革命推动者、绿色发展践行者，努力为全面
            </p>
            <div class="enter-bidding">
              <div>进入招标采购平台</div>
            </div>
          </div>
        </CommitmentSpan>
      </div>
    </div>
    <div class="content-bgimg">
      <img :style="{width: '100%', height: 'auto'}" src="../../../assets/imgs/_9_contactUsImgs/t9_p1_contentBg.png" alt="" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.purchaseByBidding-content {
  z-index: 999;
  width: 100%;
  // padding: 0 11%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: start;
  background-color: #fff;

  position: relative;

  .content-top {
    margin: 0 11%;
    width: 100%;
    z-index: 999;
    .top-title {
      margin-top: 60px;
      margin-bottom: 60px;
    }

    .top-span {
      .top-span-content {

        margin-top: 22px;

        p {
          font-size: 20px;
          font-family: "AlibabaPuHuiTi_2_45_Light";
          color: #ffffff;
          line-height: 1.85;
          white-space: nowrap;
          text-overflow: ellipsis;

        }

        .enter-bidding {
          width: 100%;
          height: 81px;
          text-align: center;
          line-height: 81px;
          margin-top: 48px;

          div {
            display: inline-block;
            width: 610px;
            border-radius: 10px;
            background-color: #45b3e0;
            color: #fff;
            font-size: 22px;
            font-family: "AlibabaPuHuiTi_2_65_Medium";
          }
        }
      }
    }

    .top-whiteSpan {
      width: 100%;
      height: 500px;
    }
  }

  .content-bgimg {
    z-index: 1;
    width: 100%;
    height: 100%;
  }
}
</style>
