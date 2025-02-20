<script setup>
import MyTitle from "@/components/MyTitle.vue";
</script>

<template>
  <div class="becomePartner-content">
    

    <div class="content-top">
      <div class="top-title">
        <MyTitle :title="'地址电话 '" :English="'Address and Phone Number'"></MyTitle>
      </div>
    </div>

    <div class="address">
      <div class="left">
        <div class="image">
          <img :style="{width: '100%', height: 'auto'}" src="../../../assets/imgs/_9_contactUsImgs/t9_p4_map.png" alt="" />
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
    <div class="content-bgimg">
      <img :style="{width: '100%', height: 'auto'}" src="../../../assets/imgs/_9_contactUsImgs/t9_p1_contentBg.png" alt="" />
    </div>
    <!-- <div class="top-whiteSpan"></div> -->
  </div>
</template>

<style lang="less" scoped>

@keyframes eases {
  from {
    left: -100%;

  }
  to {
    left: 0;

  }
}
.becomePartner-content {
  z-index: 999;
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  position: relative;
  background-image: url("../../../assets/imgs/_9_contactUsImgs/t9_p2_contentBg.png");

  .content-top {
    width: 78%;
    margin-left:11%;
    padding: 60px 0;
  }
  .address {
    width: 100%;

    display: flex;
    justify-content: space-between;

    .left {
      z-index: 999;

      padding-left: 11%;
      width: 60%;
      height: auto;
      background-color: #fff;
      margin-right: 1.5em;
      .image {
        padding-top: 6%;
        padding-bottom: 6%;
        padding-right: 6%;
        width: 100%;
        height: 100%;
        overflow: hidden; 
        display: flex;
        align-items: center;

        position: relative;
        animation: eases 1.5s;
        
        img {
          width: 100%;
          height: 100%;
          height:auto;
          border-radius: 10px;
        }
      }
    }

    .right {
      z-index: 999;
      height: auto;
      width: 40%;
      background-color: #45b3e0;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: center;
      // padding-top: 5%;
      padding-left: 3%;
      padding-right: 11%;
      // padding-bottom: 2%;

      .company-name {
        width: 100%;
        font-size: 32px;
        font-family: "AlibabaPuHuiTi_2_65_Medium";
        color: rgb(255, 255, 255);
        border-bottom: 2px solid #fff;
        padding: 33px 0 14px 0;
        overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      }

      .common {
        width:100%;
        padding: 25px 0;
        border-bottom: 1px solid #fff;
        color: rgb(255, 255, 255);
        display: flex;
        justify-content: start;
        align-items: center;
        

        div {
          height: 30px;
          line-height: 30px;
          overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
        }

        .span-left {
          font-size: 24px;
          font-family: "AlibabaPuHuiTi_2_55_Regular";
          overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
        }

        .span-center {
          margin: 0 10px;
          font-size: 22px;
          overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
        }

        .span-right {
          font-size: 30.692px;
          font-family: "Avenir";
          overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
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
    z-index: 2;
    width: 100%;
    height: 100%;
  }

  .top-whiteSpan {
    width: 100%;
    height: 723px;
  }
}
</style>
