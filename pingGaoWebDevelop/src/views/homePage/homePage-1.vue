<script setup></script>

<template>
  <div class="homePage">
    <div class="top">
      <div class="top-left">
        <img src="../../assets/imgs/_11_welcomeImgs/welcome.png" alt="" />
      </div>
      <div class="top-right">
        <img src="../../assets/imgs/_11_welcomeImgs/header.png" alt="" />
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
  width: 100%;
  height: 100vh;
  background-image: url("../../assets/imgs/_11_welcomeImgs/homePageBg.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 75px 75px 55px 75px;

  .top {
    width: 100%;
    height: 140px;
    margin-bottom: 55px;
    position: relative;
    .top-left {
      width: 690px;
      height: 100%;
      color: #fff;

      position: absolute;
      top: 0;
      left: 0;
    }

    .top-right {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;

      img {
        height: 30px;
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
        line-height: 52px;
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
    font-family: "Avenir Black";
    color: rgb(255, 255, 255);
    text-align: center;
    margin-bottom: 85px;
  }
}
</style>
