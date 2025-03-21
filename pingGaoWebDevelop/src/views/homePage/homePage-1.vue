<script setup></script>

<template>
  <div class="homePage">
    <div class="top-MT">
      <img src="../../assets/imgs/_11_welcomeImgs/welcome-MT.png" alt="">
    </div>
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
          <router-link to="/home" class="button">ENTER</router-link>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="text">
        {{ "Pinggao Group".toUpperCase() }}
      </div>

      <div class="image">
        <img src="../../assets/imgs/_11_welcomeImgs/footer-MT.png" alt="">
      </div>
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
  padding: 4.6875rem 4.6875rem 3.4375rem 4.6875rem;

  .top-MT {
    display: none;
    width: 100%;
    height: auto;
    margin-top: 10%;

    margin-bottom: 40%;
    text-align: center;

    img {
      width: 44%;
    }
  }

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
    text-align: center;
    margin-bottom: 5.3125rem;

    .text {
      font-size: 1.5422rem;
      font-family: "Avenir Black";
      color: rgb(255, 255, 255);
    }

    .image {
      display: none;
    }
  }
}
@media (max-width: 900px) {
  .homePage {
    background-image: url("../../assets/imgs/_11_welcomeImgs/Bg-MT.png");
    padding: 6rem;

    .top {
      display: none;
    }

    .top-MT {
      display: block;
      margin-top: 0;

      margin-bottom: 10%;

    }

    .center {
      height: 40%;

      .center-left,
      .center-right {
        padding-top: 15%;

        .content {
          .image {
            width: 100%;
            height: 14rem;
            background-size: contain;
          }

          .button {
            width: 72%;
            height: 5rem;
            line-height: 5rem;
            font-size: 2.4rem;
            margin-top: 0;
          }
        }

      }

      .center-left {
        padding-right: 5%;
      }

      .center-right {
        padding-left: 5%;

        .content {
          .button {
            float: right;
          }
        }
      }
    }

    .bottom {
      margin-bottom: 8rem;

      .text {
        display: none;
      }

      .image {
        display: block;

        img {
          width: 100%;

        }
      }
    }
  }
}
@media (max-width: 600px) {
  .homePage {
    background-image: url("../../assets/imgs/_11_welcomeImgs/Bg-MT.png");
    padding: 8rem;

    .top {
      display: none;
    }

    .top-MT {
      display: block;
      margin-bottom: 20%;
    }

    .center {
      height: 30%;

      .center-left,
      .center-right {
        padding-top: 8%;

        .content {
          .image {
            width: 100%;
            height: 15rem;
            background-size: contain;
          }

          .button {
            width: 72%;
            height: 7rem;
            line-height: 7rem;
            font-size: 3rem;
          }
        }

      }

      .center-left {
        padding-right: 5%;
      }

      .center-right {
        padding-left: 5%;
      }
    }

    .bottom {
      margin-bottom: 8rem;

      .text {
        display: none;
      }

      .image {
        display: block;

        img {
          width: 100%;

        }
      }
    }
  }
}

@media (max-width: 500px) {
  .homePage {
    .top-MT {
      margin-top: 8%;
    }
    .center {
      .center-left,
      .center-right {
        padding-top: 10%;
        .content {
          .image {
          }

          .button {
            margin-top: 5rem;
          }
        }
      }
    }
  }
}

@media (max-width: 400px) {
  .homePage {

    .top-MT {
      margin-top: 8%;
    }
    .center {
      .center-left,
      .center-right {
        padding-top: 20%;
        .content {
          .button {
            margin-top: 5rem;
            margin-right: 10%;
          }
        }

      }

    }
  }
}
</style>
