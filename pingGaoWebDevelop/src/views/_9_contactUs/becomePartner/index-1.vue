<script setup>
import MyTitle from "@/components/MyTitle.vue";
</script>

<template>
  <div class="becomePartner-content">

    <div class="content-top">
      <div class="top-title">
        <MyTitle :title="'成为伙伴'" :English="'become partner'"></MyTitle>
      </div>
      <div class="top-information">
        <h1>填写资料</h1>
        <div class="write-info">
          <div class="left">
            <div class="common">
              <div class="common-title">
                <span class="star">*</span><span class="text">申请伙伴类型</span>
              </div>
              <div class="select">
                <input type="text" placeholder="请选择" />
              </div>
            </div>
            <div class="common">
              <div class="common-title">
                <span class="star">*</span><span class="text">伙伴公司名称</span>
              </div>
              <div class="select">
                <input type="text" placeholder="请输入" />
              </div>
            </div>
            <div class="common">
              <div class="common-title">
                <span class="star">*</span><span class="text">伙伴联系人</span>
              </div>
              <div class="select">
                <input type="text" placeholder="请输入" />
              </div>
            </div>
            <div class="common">
              <div class="common-title">
                <span class="star">*</span><span class="text">国家</span>
              </div>
              <div class="select">
                <input type="text" placeholder="请选择" />
              </div>
            </div>
            <div class="common last">
              <div class="common-title">
                <span class="star">*</span><span class="text">市</span>
              </div>
              <div class="select">
                <input type="text" placeholder="请选择" />
              </div>
            </div>

            <div class="submit">提交资料</div>
          </div>
          <div class="right">
            <div class="common">
              <div class="common-title">
                <span class="star">*</span><span class="text">合作意向</span>
              </div>
              <div class="select">
                <input type="text" placeholder="请选择" />
              </div>
            </div>
            <div class="common">
              <div class="common-title">
                <span class="star">*</span><span class="text">是否加入经销商</span>
              </div>
              <div class="select">
                <input type="text" placeholder="请选择" />
              </div>
            </div>
            <div class="common">
              <div class="common-title">
                <span class="star">*</span><span class="text">伙伴联系电话</span>
              </div>
              <div class="select">
                <input type="text" placeholder="请输入" />
              </div>
            </div>
            <div class="common">
              <div class="common-title">
                <span class="star">*</span><span class="text">省</span>
              </div>
              <div class="select">
                <input type="text" placeholder="请选择" />
              </div>
            </div>
            <div class="common last verify">
              <div class="common-title">
                <span class="star">*</span><span class="text">验证码</span>
              </div>
              <div class="select">
                <input type="text" placeholder="请输入" />
              </div>
              <div class="codeImg"></div>
            </div>

            <div class="reset">重置资料</div>
          </div>
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
    padding: 0 11%;
    width: 100%;
    height: 100%;
    z-index: 999;

    .top-title {
      margin-top: 6rem;
      margin-bottom: 6rem;
    }

    .top-information {
      height: 105.5rem;
      background-color: #fff;
      border-radius: 10px;

      h1 {
        width: 100%;
        text-align: center;
        font-size: 3.2rem;
        font-family: "AlibabaPuHuiTi_2_65_Medium";
        color: #006fc1;
        padding-top: 9.4rem;
        padding-bottom: 8rem;
      }

      .write-info {
        height: 74.5rem;
        display: flex;
        justify-content: space-between;

        .left,
        .right {
          width: 42%;
          height: 100%;
          position: relative;
          margin: 0 10rem;
        }

        .last {
          border-bottom: 1px solid #006fc1;
        }

        .verify {
          position: relative;

          .codeImg {
            position: absolute;
            right: 0px;
            bottom: 0;
            width: 12rem;
            height: 6rem;
            margin-right: 1.5rem;
            margin-bottom: 2.5rem;
            background-image: url("../../../assets/imgs/_9_contactUsImgs/t9_p2_code.png");
            background-size: contain;
          }
        }

        .common {
          width: 100%;
          height: 11.8rem;
          border-top: 1px solid #006fc1;

          .common-title {
            margin-top: 2.2rem;

            .star {
              color: #e70e1f;
              margin-right: 0.5rem;
              margin-left: 0.3rem;
              font-size: 2rem;
            }

            .text {
              font-size: 2.2rem;
              font-family: "AlibabaPuHuiTi_2_65_Medium";
              color: #231815;
            }
          }

          .select {
            font-size: 2rem;
            font-family: "AlibabaPuHuiTi_2_45_Light";
            color: rgb(89, 87, 87);
            text-align: justifyLeft;
            padding-left: 1.8rem;
            margin-top: 0.4rem;

            input {
              font-size: 2rem;
              font-family: "AlibabaPuHuiTi_2_45_Light";
              color: rgb(89, 87, 87);
              text-align: justifyLeft;
            }
          }
        }

        .submit,
        .reset {
          width: 100%;
          height: 8.1rem;
          line-height: 8.1rem;
          border-radius: 1rem;
          text-align: center;
          font-size: 2.2rem;
          font-family: "AlibabaPuHuiTi_2_65_Medium";
          text-align: justifyLeft;
          position: absolute;
          bottom: 0;
        }

        .submit {
          background-color: #45b3e0;
          color: rgb(255, 255, 255);
        }

        .reset {
          background-color: #dcdddd;
        }
      }
    }

    .top-whiteSpan {
      width: 100%;
    }
  }

  .content-bgimg {
    z-index: 1;
    width: 100%;
    height: 100%;
  }
}

@media (max-width: 1700px) {
  .becomePartner-content {
    .content-top {
      .top-information {
        .write-info {
          .left,
          .right {
            margin: 0 6rem;
          }
        }
      }
    }
  }
}

/* 大型设备（桌面，大于 900px） */
@media (max-width: 900px) {
  .becomePartner-content {
    .content-top {
      padding: 0 5%;
      width: 100%;

      .top-title {
        margin-top: 3rem;
        margin-bottom: 3rem;
      }

      .top-information {
        height: 130rem;
        background-color: #fff;
        border-radius: 10px;

        h1 {
          font-size: 2.5rem;
          padding: 3rem 0;
        }

        .write-info {
          width: 100%;
          height: 90rem;
          flex-direction: column;

          .left,
          .right {
            width: 100%;
            margin: 0;
            padding: 0 3rem;
          }

          .right {
            padding-bottom: 13rem;
          }


          .left {
            .last {
              border-bottom: none;
            }
          }

          .common {
            height: 10rem;

            .common-title {
              margin-top: 2rem;

              .star {
                margin-left: 0;
                font-size: 2rem;
              }

              .text {
                font-size: 2rem;
              }
            }

            .select {
              padding-left: 1.3rem;
              margin-top: 0;

              input {
                font-size: 1.8rem;
              }
            }
          }

          .submit,
          .reset {
            width: 44%;
            height: 7rem;
            line-height: 7rem;
          }

          .submit {
            bottom: -63rem; //要和五个common的高及加上.right的padding-bottom的和一致
          }

          .reset {
            bottom: 0;
            right: 3rem;
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

@media (max-width: 600px) {}

@media (max-width: 500px) {}
</style>
