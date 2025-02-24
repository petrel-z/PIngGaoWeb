<script setup>
import MyTitle from "@/components/MyTitle.vue";
</script>

<template>
  <div class="businessConsulting-content">

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

    </div>
    <div class="content-bgimg">
      <img :style="{ width: '100%', height: 'auto' }" src="../../../assets/imgs/_9_contactUsImgs/t9_p1_contentBg.png"
        alt="" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.businessConsulting-content {
  z-index: 999;
  width: 100%;
  // padding: 0 11%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: start;
  position: relative;
  background-image: url("../../../assets/imgs/_9_contactUsImgs/t9_p2_contentBg.png");

  .content-top {
    margin: 0 11%;
    z-index: 999;
    width: 100%;

    .top-title {
      margin-top: 6rem;
      margin-bottom: 6rem;
      position: relative;
      animation: toptitle 0.7s ease-out forwards;
    }
    @keyframes toptitle {
      from {
        left: 100%;
      }
      to {
        left: 0;
      }
    }
    @keyframes online-consultation {
      from {
        opacity: 0;
        top: 200px;
      }
      to {
        opacity: 1;
        top: 0;
      }
    }
    .online-consultation {
      position: relative;
      animation: online-consultation 1s ease forwards;

      height: 86rem;
      background-color: #fff;
      border-radius: 1rem;

      h1 {
        width: 100%;
        height: 8.2rem;
        line-height: 8.2rem;
        text-align: center;
        font-size: 3.2rem;
        font-family: "AlibabaPuHuiTi_2_65_Medium";
        color: #fff;
        background-color: #45b3e0;
        border-radius: 10px;
      }

      .center-consultation {
        width: 100%;
        height: 55.5rem;
        border-bottom: 1px solid #333;
      }

      .bottom-question {
        width: 100%;
        height: 22.7rem;
        position: relative;

        .text {
          padding: 3.5rem 8rem 3.5rem 8rem;

          textarea {
            height: 15.5rem;
            font-size: 2rem;
            font-family: "AlibabaPuHuiTi_2_45_Light";
            color: rgb(89, 87, 87);
            text-align: justifyLeft;
          }
        }

        .sent {
          position: absolute;
          bottom: 3.7rem;
          right: 4.5rem;
          width: 32.7rem;
          height: 8rem;
          line-height: 8rem;
          color: #fff;
          text-align: center;
          font-size: 2.2rem;
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
    width: 100%;
    height: 100%;
  }
}

/* 大型设备（桌面，大于 900px） */
@media (max-width: 900px) {
  .businessConsulting-content {

    .content-top {
      margin: 0 5%;

      .top-title {
        margin: 3rem 0;
      }

      .online-consultation {
        height: 70rem;

        .center-consultation {
          height: 40rem;
        }

        .bottom-question {
          .text {
            padding: 2rem 4rem 3.5rem 4rem;
          }

          .sent {
            bottom: 4rem;
            right: 4.3rem;
            width: 16rem;
            height: 6rem;
            line-height: 6rem;
          }
        }
      }
    }
  }
}

@media (max-width: 800px) {}

/* 中型设备（平板，600px 到 900px） */
@media (max-width: 700px) {}

/* 小型设备（手机，小于 600px） */

@media (max-width: 600px) {
  .businessConsulting-content {
    .content-top {
      .online-consultation {
        .bottom-question {
          .sent {
            bottom: 5rem;
          }
        }
      }
    }
  }
}

@media (max-width: 500px) {}
</style>
