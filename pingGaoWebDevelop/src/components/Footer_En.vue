<script setup>

</script>
<template>
  <div class="footer_en">
    <div class="top">
      <div class="title">Core Products</div>
      <div class="content">
        <div class="content_left">
          <div class="item item1">
            <div class="border_right"></div>
            <ul>
              <li><a href="">High voltage electrical industry</a></li>
              <li><a href="">System integration business</a></li>
              <li><a href="">Electric energy storage business</a></li>
            </ul>
          </div>
          <div class="item item2">
            <div class="border_right"></div>
            <ul>
              <li><a href="">Distribution network industry</a></li>
              <li><a href="">Operation and maintenance services</a></li>
              <li><a href="">Electric boiler and thermal energy storage business</a></li>
            </ul>
          </div>
          <div class="item item3">
            <ul>
              <li><a href="">Component manufacturing industry</a></li>
              <li><a href="">Integrated Energy Services Business</a></li>
              <li><a href="">Smart power distribution business</a></li>
            </ul>
          </div>
        </div>
        <div class="content_right">
          <div class="item item4">
            <ul>
              <li>
                <h5>Phone</h5>
                <p>400-670-0312</p>
              </li>
              <li>
                <h5>Email</h5>
                <p>sales@pinggao.com </p>
              </li>
            </ul>
            <ul>
              <li>
                <h5>WeChat</h5>
                <div class="img">
                  <img src="../assets/imgs/common/codeImg.png" alt="">
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <p>豫ICP备2022010930号 Copyright 2024 PINGGAO GROUP CO.,LTD, All Rights Reserved. 平高集团有限公司版权所有</p>
    </div>
  </div>
</template>
<style lang="less" scoped>
.footer_en {
  width: auto;
  white-space: nowrap;
  height: auto;
  background-color: #f7f8f8;

  .top {
    padding: 0 8%;

    .title {
      padding-top: 2rem;
      width: 100%;
      font-size: 1.6rem;
      font-family: "Avenir";
      color: #000000;
      text-align: left;
      text-transform: uppercase;
    }

    .content {
      display: flex;
      justify-content: space-between;
      font-size: 1.1rem;
      font-family: "Avenir";
      color: rgb(114, 113, 113);
      margin-bottom: 1rem;
      .content_left,
      .content_right {
        .item {
          padding-right: 2.5rem;

          ul {

            li {
              margin: 2.2rem 0;
            }
          }
        }
      }

      .content_left {
        display: flex;
        height: 100%;

        .item1,
        .item2 {
          position: relative;
          z-index: 1;
          width: 100%;

          .border_right {
            z-index: 0;
            position: absolute;
            width: 100%;
            height: 60%;
            // background-color: pink;
            top: 50%;
            transform: translateY(-50%);
            border-right: 1px solid #000000;
          }

          ul {
            position: relative;
            z-index: 1;
          }
        }

        .item2,
        .item3 {
          margin-left: 2.5rem;
        }


      }

      .content_right {
        display: flex;

        .item4 {
          display: flex;
          padding: 0;

          ul {
            padding: 2.5rem 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            li {
              margin: 0;

              h5 {
                font-size: 1.2rem;
                font-family: "Avenir";
                color: rgb(0, 0, 0);
                margin-bottom: 0;
              }

              p {
                font-size: 0.9rem;
                font-family: "AlibabaPuHuiTi_2_55_Regular";
                color: rgb(114, 113, 113);
              }
            }
          }

          ul:nth-child(1) {
            margin-right: 2rem;
          }

          ul:nth-child(2) {
            li {
              display: flex;
              height: 100%;
              flex-direction: column;
              justify-content: space-between;

              h5 {
                text-align: center;
              }

              .img {
                width: 7rem;
                height: 7rem;

                img {
                  width: 100%;
                  height: 100%;
                }
              }
            }
          }
        }
      }
    }
  }

  .bottom {
    background-color: #cfd0d0;
    color: #727171;
    text-align: center;
    padding: 0.5% 0;
    font-size: 1.15rem;
    font-family: "SourceHanSansCN";
    color: rgb(114, 113, 113);

    p {
      display: inline;
    }
  }
}
</style>
