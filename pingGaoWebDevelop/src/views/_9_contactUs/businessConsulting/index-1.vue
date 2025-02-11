<script setup>
import MyTitle from "@/components/MyTitle.vue";
</script>

<template>
  <div class="becomePartner-content">
    <div class="content-bgimg"></div>

    <div class="content-top">
      <div class="top-title">
        <MyTitle :title="'在线咨询'" :English="'Online consultation'"></MyTitle>
      </div>
      <div class="online-consultation">
        <h1>平高集团在线客服</h1>
        <div class="center-consultation"></div>
        <div class="bottom-question">
          <div class="text">
            <textarea name="" id="" placeholder="请输入您要咨询的问题"></textarea>
          </div>
          <div class="sent">发送</div>
        </div>
      </div>

      <div class="top-whiteSpan"></div>
    </div>
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
  background-image: url("../../../assets/imgs/_9_contactUsImgs/t9_p2_contentBg.png");
  .content-top {
    z-index: 999;

    .top-title {
      margin-top: 60px;
      margin-bottom: 60px;
    }

    .online-consultation {
      height: 860px;
      background-color: #fff;
      border-radius: 10px;

      h1 {
        width: 100%;
        height: 82px;
        line-height: 82px;
        text-align: center;
        font-size: 32px;
        font-family: "AlibabaPuHuiTi_2_65_Medium";
        color: #fff;
        background-color: #45b3e0;
        border-radius: 10px;
      }

      .center-consultation {
        width: 100%;
        height: 555px;
        border-bottom: 1px solid #333;
      }

      .bottom-question {
        width: 100%;
        height: 227px;
        position: relative;

        .text {
          padding-top: 35px;
          padding-left: 80px;
          padding-right: 80px;
          padding-bottom: 35px;

          textarea {
            width: 1040px;
            height: 155px;
            font-size: 20px;
            font-family: "AlibabaPuHuiTi_2_45_Light";
            color: rgb(89, 87, 87);
            text-align: justifyLeft;
          }
        }

        .sent {
          position: absolute;
          bottom: 37px;
          right: 45px;
          width: 327px;
          height: 81px;
          line-height: 81px;
          color: #fff;
          text-align: center;
          font-size: 22px;
          font-family: "AlibabaPuHuiTi_2_65_Medium";
          background-color: #45b3e0;
          letter-spacing: 5px;
          border-radius: 10px;
        }
      }
    }

    .top-whiteSpan {
      width: 100%;
      height: 400px;
    }
  }

  .content-bgimg {
    z-index: 1;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 707px;
    background-image: url(@/assets/image/t9_p1_contentBg.png);
    background-size: auto;
  }
}
</style>
