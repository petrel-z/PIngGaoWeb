<script setup>
import MyTitle from "@/components/MyTitle.vue";
</script>

<template>
  <div class="becomePartner-content">
    <div class="content-bgimg"></div>

    <div class="content-top">
      <div class="top-title">
        <MyTitle :title="'地址电话 '" :English="'Address and Phone Number'"></MyTitle>
      </div>
    </div>

    <div class="address">
      <div class="left">
        <div class="image">
          <img src="../../../assets/imgs/_9_contactUsImgs/t9_p4_map.png" alt="" />
        </div>
      </div>
      <div class="right">
        <div class="company-name">平高集团有限公司</div>
        <div class="common">
          <div class="span-left">国内销售</div>
          <div class="span-center">|</div>
          <div class="span-right">0371-66968576</div>
        </div>
        <div class="common">
          <div class="span-left">国外销售</div>
          <div class="span-center">|</div>
          <div class="span-right">0371-58505793</div>
        </div>
        <div class="common">
          <div class="span-left">客服电话</div>
          <div class="span-center">|</div>
          <div class="span-right">400 6700 312</div>
        </div>
        <div class="common last">
          <div>地址：河南省平顶山市南环路东22号</div>
          <div>邮编：467001</div>
          <div>信访举报电话：03753804106</div>
        </div>
      </div>
    </div>
    <div class="top-whiteSpan"></div>
  </div>
</template>

<style lang="less" scoped>
.becomePartner-content {
  z-index: 999;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: start;
  position: relative;
  background-image: url(../../../assets/imgs/_9_contactUs/t9_p2_contentBg.png);

  .content-top {
    padding: 60px 0;
  }
  .address {
    z-index: 999;
    width: 100%;
    height: 690px;

    display: flex;
    justify-content: space-between;

    .left {
      width: 1190px;
      height: 100%;
      background-color: #fff;
      position: relative;

      .image {
        width: 930px;
        height: 610px;
        position: absolute;
        bottom: 40px;
        right: 35px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
        }
      }
    }

    .right {
      height: 100%;
      width: 700px;
      background-color: #45b3e0;
      display: flex;
      flex-direction: column;
      align-items: start;
      padding-top: 90px;
      padding-left: 60px;

      .company-name {
        width: 435px;
        font-size: 32px;
        font-family: "AlibabaPuHuiTi_2_65_Medium";
        color: rgb(255, 255, 255);
        border-bottom: 2px solid #fff;
        padding: 33px 0 14px 0;
      }

      .common {
        width: 435px;
        padding: 25px 0;
        border-bottom: 1px solid #fff;
        color: rgb(255, 255, 255);
        display: flex;
        justify-content: start;
        align-items: center;

        div {
          height: 30px;
          line-height: 30px;
        }

        .span-left {
          font-size: 24px;
          font-family: "AlibabaPuHuiTi_2_55_Regular";
        }

        .span-center {
          margin: 0 10px;
          font-size: 22px;
        }

        .span-right {
          font-size: 30.692px;
          font-family: "Avenir";
        }
      }

      .last {
        font-size: 24px;
        padding: 10px 0 14px 0;
        display: block;
        div {
          width: 100%;
          margin: 9px 0;
        }
      }
    }
  }

  .content-bgimg {
    z-index: 1;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 707px;
    background-image: url("../../../assets/imgs/_9_contactUsImgs/t9_p1_contentBg.png");
    background-size: auto;
  }

  .top-whiteSpan {
    width: 100%;
    height: 723px;
  }
}
</style>
