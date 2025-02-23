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
  height: 100%;
  background-image: url("../../assets/imgs/_11_welcomeImgs/homePageBg.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 4.6875rem 4.6875rem 3.4375rem 4.6875rem;

  .top {
    width: 100%;
    height: 8.75rem;
    margin-bottom: 3.4375rem;
    position: relative;
    .top-left {
      width: 43.125rem;
      height: 100%;
      color: #fff;
      position: absolute;
      top: 0;
      left: 0;
      img {
        width: 15rem;
      }
    }

    .top-right {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;

      img {
        width: 24rem;
        height: 1.875rem;
      }
    }
  }

  .center {
    width: 100%;
    height: 25.625rem;

    .center-left,
    .center-right {
      display: inline-block;
      width: 50%;
      height: 100%;
      padding-top: 6.25rem;

      .image {
        width: 20rem;
        height: 6.875rem;
        background-image: url("../../assets/imgs/_11_welcomeImgs/homePageLogo.png");
        background-repeat: no-repeat;
        background-size: cover;
      }

      .button {
        clear: both;
        width: 14.375rem;
        height: 3.25rem;
        line-height: 3.25rem;
        text-align: center;
        background-color: #fff;
        border-radius: 3.25rem;
        margin-top: 2.5rem;

        font-size: 1.25rem;
        font-family: "AlibabaPuHuiTi_2_65_Medium";
        color: rgb(0, 111, 193);
      }

      .button:hover {
        background-color: rgb(0, 111, 193);
        color: #fff;
      }
    }

    .center-left {
      border-right: 0.0625rem solid #fff;
      padding-right: 15.3125rem;

      .image {
        float: right;
      }

      .button {
        float: right;
      }
    }

    .center-right {
      padding-left: 15.3125rem;

      .image {
        float: left;
      }

      .button {
        float: left;
        margin-left: 5.625rem;
      }
    }
  }

  .bottom {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    font-size: 1.5422rem;
    font-family: "Avenir Black";
    color: rgb(255, 255, 255);
    text-align: center;
    margin-bottom: 5.3125rem;
  }
}
@media (min-width: 576px) and (max-width: 992px) {
  body {
    background-color: lightgreen;
  }
}
</style>
