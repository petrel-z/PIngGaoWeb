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
      <img :style="{width: '100%', height: 'auto'}" src="../../../assets/imgs/_9_contactUsImgs/t9_p1_contentBg.png" alt="" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.becomePartner-content {
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
    width: 100%;
    height: 100%;
    z-index: 999;
    .top-title {
      margin-top: 60px;
      margin-bottom: 60px;
    }

    .top-information {
      height: 1055px;
      background-color: #fff;
      border-radius: 10px;

      h1 {
        width: 100%;
        text-align: center;
        font-size: 32px;
        font-family: "AlibabaPuHuiTi_2_65_Medium";
        color: #006fc1;
        padding-top: 94px;
        padding-bottom: 80px;
      }

      .write-info {
        height: 745px;
        display: flex;
        justify-content: space-between;

        .left,
        .right {
          width: 42%;
          height: 100%;
          position: relative;
          margin: 0 100px;
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
            width: 120px;
            height: 60px;
            margin-right: 15px;
            margin-bottom: 25px;
            background-image: url("../../../assets/imgs/_9_contactUsImgs/t9_p2_code.png");
          }
        }

        .common {
          width: 100%;
          height: 118px;
          border-top: 1px solid #006fc1;

          .common-title {
            margin-top: 22px;

            .star {
              color: #e70e1f;
              margin-right: 5px;
              margin-left: 3px;
              font-size: 20px;
            }

            .text {
              font-size: 22px;
              font-family: "AlibabaPuHuiTi_2_65_Medium";
              color: #231815;
              // text-align: justifyLeft;
            }
          }

          .select {
            font-size: 20px;
            font-family: "AlibabaPuHuiTi_2_45_Light";
            color: rgb(89, 87, 87);
            text-align: justifyLeft;
            padding-left: 18px;
            margin-top: 4px;
            input {
              font-size: 20px;
              font-family: "AlibabaPuHuiTi_2_45_Light";
              color: rgb(89, 87, 87);
              text-align: justifyLeft;
            }
          }
        }

        .submit,
        .reset {
          width: 100%;
          height: 81px;
          line-height: 81px;
          border-radius: 10px;
          text-align: center;
          font-size: 22px;
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
      // height: 700px;
    }
  }

  .content-bgimg {
    z-index: 1;
    width: 100%;
    height: 100%;
  }
}
</style>
