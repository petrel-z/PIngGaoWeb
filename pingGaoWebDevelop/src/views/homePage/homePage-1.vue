<script setup></script>

<template>
  <div class="homePage">
    <div class="top">
      <div class="top-left">
        <div class="left-on">
          <h1>欢迎登录</h1>
          <p>WELCOME</p>
        </div>
        <div class="left-under">
          <p class="p-first">平高集团门户网站</p>
          <p class="p-second">{{ "Pinggao Group Portal Website".toUpperCase() }}</p>
        </div>
      </div>
      <div class="top-right">
        <h1>赋能智慧电气·创引绿色能源</h1>
      </div>
    </div>
    <div class="center">
      <div class="center-left">
        <div class="content">
          <div class="image"></div>
          <router-link to="/homePage-2" class="button">点击进入</router-link>
        </div>
      </div>
      <div class="center-right">
        <div class="content">
          <div class="image"></div>
          <router-link to="/homePage-2" class="button">ENTER</router-link>
        </div>
      </div>
    </div>
    <div class="bottom">
      {{ "Pinggao Group".toUpperCase() }}
    </div>
  </div>
</template>

<style lang="less" scoped>
.homePage {
  position: relative;
  width: 1920px;
  height: 1080px;
  background-image: url("../../assets/imgs/_11_welcomeImgs/homePageBg.png");
  padding: 75px 75px 55px 75px;

  .top {
    width: 100%;
    height: 140px;
    // padding: 75px 75px 55px 75px;
    margin-bottom: 55px;
    display: flex;
    justify-content: start;

    .top-left {
      width: 690px;
      height: 100%;
      color: #fff;

      .left-on {
        width: 220px;
        border-bottom: 1px solid #fff;

        h1 {
          font-size: 31.762px;
          font-family: "AlibabaPuHuiTi_2_55_Regular";
        }

        p {
          font-size: 18.451px;
          font-family: "Avenir";
          text-transform: uppercase;
          position: relative;
          top: -8px;
        }
      }

      .left-under {
        .p-first {
          font-size: 20px;
          font-family: "AlibabaPuHuiTi_2_55_Regular";
          margin-top: 14px;
        }

        .p-second {
          font-size: 14.511px;
          font-family: "Avenir";
          text-transform: uppercase;
        }
      }
    }

    .top-right {
      // width: 100%;
      height: 100%;

      h1 {
        font-size: 31.762px;
        font-family: "AlibabaPuHuiTi_2_55_Regular";
        color: rgb(255, 255, 255);
      }
    }
  }

  .center {
    width: 100%;
    height: 410px;

    .center-left,
    .center-right {
      display: inline-block;
      width: 50%;
      height: 100%;
      padding-top: 100px;

      .image {
        width: 320px;
        height: 110px;
        background-image: url("../../assets/imgs/_11_welcomeImgs/homePageLogo.png");
        background-repeat: no-repeat;
        background-size: auto;
      }

      .button {
        clear: both;
        width: 230px;
        height: 52px;
        text-align: center;
        background-color: #fff;
        border-radius: 52px;
        margin-top: 40px;

        font-size: 20px;
        font-family: "AlibabaPuHuiTi_2_65_Medium";
        color: rgb(0, 111, 193);
      }
    }

    .center-left {
      border-right: 1px solid #fff;
      padding-right: 245px;

      .image {
        float: right;
      }

      .button {
        float: right;
      }
    }

    .center-right {
      padding-left: 245px;

      .image {
        float: left;
      }

      .button {
        float: left;
        margin-left: 90px;
      }
    }
  }

  .bottom {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    font-size: 24.675px;
    font-family: "Avenir";
    color: rgb(255, 255, 255);
    text-align: center;
    margin-bottom: 85px;
  }
}
</style>
