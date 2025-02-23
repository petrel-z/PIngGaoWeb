<script setup>
import MyTitle from "@/components/MyTitle.vue";
</script>

<template>
  <div class="addressTelephone-content">


    <div class="content-top">
      <div class="top-title">
        <MyTitle :title="'地址电话 '" :English="'Address and Phone Number'"></MyTitle>
      </div>
    </div>

    <div class="address">
      <div class="left">
        <div class="image">
          <img :style="{ width: '100%', height: 'auto' }" src="../../../assets/imgs/_9_contactUsImgs/t9_p4_map.png"
            alt="" />
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
      <img :style="{ width: '100%', height: 'auto' }" src="../../../assets/imgs/_9_contactUsImgs/t9_p1_contentBg.png"
        alt="" />
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

.addressTelephone-content {
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
    margin-left: 11%;
    padding: 6rem 0;
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
          height: auto;
          border-radius: 1rem;
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
      padding-left: 3%;
      padding-right: 11%;

      .company-name {
        width: 100%;
        font-size: 3rem;
        font-family: "AlibabaPuHuiTi_2_65_Medium";
        color: rgb(255, 255, 255);
        border-bottom: 2px solid #fff;
        padding: 33px 0 14px 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      .common {
        width: 100%;
        padding: 2.5rem 0;
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
          font-size: 2.4rem;
          font-family: "AlibabaPuHuiTi_2_55_Regular";
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .span-center {
          margin: 0 10px;
          font-size: 2.2rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .span-right {
          font-size: 3.0692rem;
          font-family: "Avenir";
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }

      .last {
        font-size: 2.4rem;
        padding: 1rem 0 1.4rem 0;
        display: block;

        div {
          width: 100%;
          margin: 0.9rem 0;
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


/* 大型设备（桌面，大于 900px） */
@media (max-width: 900px) {
  .addressTelephone-content {
    background-image: none;

    .content-top {
      margin-left: 5%;
      padding: 3rem 0;
    }

    .address {
      padding: 0 5%;
      flex-direction: column;

      .left,
      .right {
        width: 100%;
        border-radius: 10px;

      }

      .left {
        padding: 0;
        overflow: hidden;
        margin-bottom: 1rem;
        background-color: #fff;

        .image {
          padding: 0;

          img {}
        }
      }

      .right {
        padding: 5% 20% 8% 5%;

        .company-name {
          font-size: 3.5rem;
          padding: 0;
        }
        .common {
          padding: 2rem 0;
        }
      }
    }

  }
}

@media (max-width: 800px) {}

/* 中型设备（平板，600px 到 900px） */
@media (max-width: 700px) {

}

/* 小型设备（手机，小于 600px） */

@media (max-width: 600px) {}

@media (max-width: 500px) {}
</style>
