<script setup>
import MyTitle from "@/components/MyTitle.vue";
import { ref } from "vue";
import { useCascaderAreaData } from "@/utils/areaUtils.js";
import { ElMessageBox } from "element-plus";
import httpUtils from "@/utils/httpUtils.js";

const options = ref(null);

const requestVerifyId = ref("");
const requestVerifyImage = ref("");
const areaData = ref(useCascaderAreaData());
const areaDefault = ref("北京市");
const partnerTypeList = ref([
  "工商业储能合作伙伴",
  "重卡换电合作伙伴",
  "工业PLC合作伙伴",
  "智慧消防合作伙伴",
  "电力电源与充电桩合作伙伴",
  "综合自动化系统合作伙伴",
  "智能计量（电能表）合作伙伴",
  "变压器合作伙伴",
  "开关断路器合作伙伴",
  "其他合作伙伴",
]);

async function getVerifyCode () {
  const res = await httpUtils.get(`/cms/partner/request_join`);
  const result = await res.json();

  requestVerifyId.value = result.data.uuid;
  requestVerifyImage.value = result.data.image;
}

getVerifyCode();

function toggleOptions (num) {
  const allOptions = document.querySelectorAll(`.options.active`);
  const options = document.querySelector(`.options${num}`);
  allOptions.forEach(i => {
    if (i !== options) {
      i.classList.remove("active");
    }
  });

  options.classList.toggle("active");
}

function selectOption (event, num) {
  const selectedText = event.target.textContent;
  const selectOption = document.querySelector(`.selected-option${num}`);
  if (selectedText === "请输入") {
    selectOption.style.color = "#999";
  } else {
    selectOption.style.color = "#231815";
  }

  if (num === 4 && selectOption.textContent !== selectedText) {
    document.querySelector(`.selected-option2`).textContent = "请选择";
  }

  selectOption.textContent = selectedText;

  if (num === 4) {
    areaDefault.value = selectedText;
  }

  toggleOptions(num);
}

const partnerType = ref(null);
const companyName = ref("");
const contactName = ref("");
const country = ref(null);
const city = ref(null);

const intention = ref("");
const joinDealer = ref(null);
const contactPhone = ref("");
const province = ref(null);
const verifyCode = ref("");

const partnerTypeMust = ref(null);
const companyNameMust = ref(null);
const contactNameMust = ref(null);
const countryMust = ref(null);
const cityMust = ref(null);

const intentionMust = ref(null);
const joinDealerMust = ref(null);
const contactPhoneMust = ref(null);
const provinceMust = ref(null);
const verifyCodeMust = ref(null);

async function submit () {
  if (partnerType.value.textContent === "请选择" || companyName.value === ""
    || contactName.value === "" || city.value.textContent === "请选择"
    || intention.value === "" || joinDealer.value.textContent === "请选择"
    || contactPhone.value === "" || province.value.textContent === "请选择"
    || verifyCode.value === "") {
    if (partnerType.value.textContent === "请选择") {
      partnerTypeMust.value.style.display = "block";
    } else {
      partnerTypeMust.value.style.display = "none";
    }
    if (companyName.value === "") {
      companyNameMust.value.style.display = "block";
    } else {
      companyNameMust.value.style.display = "none";
    }

    if (contactName.value === "") {
      contactNameMust.value.style.display = "block";
    } else {
      contactNameMust.value.style.display = "none";
    }

    if (city.value.textContent === "请选择") {
      cityMust.value.style.display = "block";
    } else {
      cityMust.value.style.display = "none";
    }
    if (intention.value === "") {
      intentionMust.value.style.display = "block";
    } else {
      intentionMust.value.style.display = "none";
    }
    if (joinDealer.value.textContent === "请选择") {
      joinDealerMust.value.style.display = "block";
    } else {
      joinDealerMust.value.style.display = "none";
    }
    if (contactPhone.value === "") {
      contactPhoneMust.value.style.display = "block";
    } else {
      contactPhoneMust.value.style.display = "none";
    }
    if (province.value.textContent === "请选择") {
      provinceMust.value.style.display = "block";
    } else {
      provinceMust.value.style.display = "none";
    }
    if (verifyCode.value === "") {
      verifyCodeMust.value.style.display = "block";
    } else {
      verifyCodeMust.value.style.display = "none";
    }
    ElMessageBox.alert("有内容未填写", "提示");
    return;
  }

  const response = await httpUtils.post("/cms/partner/join", {
    type: partnerType.value.textContent,

    country: "中国",
    province: province.value.textContent,
    city: city.value.textContent,

    companyName: companyName.value,
    contactName: contactName.value,
    contactPhone: contactPhone.value,

    intention: intention.value,
    joinDistributor: joinDealer.value.textContent,

    requestId: requestVerifyId.value,
    code: verifyCode.value,
  });
  const { data } = await response.json();

  if (data.data === 1) {
    reset1();
    await ElMessageBox.alert("提交成功", "提示");
  } else {
    await ElMessageBox.alert(data.msg, "提示");
  }
}

function reset1 () {
  partnerType.value.textContent = "请选择";
  companyName.value = "";
  contactName.value = "";
  country.value.textContent = "";
  city.value.textContent = "请选择";
  intention.value = "";
  joinDealer.value.textContent = "请选择";
  contactPhone.value = "";
  province.value.textContent = "请选择";
  verifyCode.value = "";
}

function reset () {
  reset1();
  ElMessageBox.alert("重置成功", "提示");
}
</script>

<template>
  <div class="becomePartner-content">
    <div class="content-top">
      <div class="top-title">
        <MyTitle title="成为伙伴" english="become partner"></MyTitle>
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
                <div class="custom-select">
                  <div
                    ref="partnerType" class="selected-option selected-option1"
                    @click="toggleOptions(1)"
                  >
                    请选择
                  </div>
                  <ul ref="options" class="options options1">
                    <li v-for="type in partnerTypeList" :key="type"
                        @click="selectOption($event, 1)">
                      {{ type }}
                    </li>
                  </ul>
                </div>
                <!-- <input type="text" placeholder="请选择" /> -->
              </div>
              <div ref="partnerTypeMust" class="mustWrite">
                该项是必填项
              </div>
            </div>
            <div class="common">
              <div class="common-title">
                <span class="star">*</span><span class="text">伙伴公司名称</span>
              </div>
              <div class="select">
                <input v-model="companyName" type="text" placeholder="请输入">
              </div>
              <div ref="companyNameMust" class="mustWrite">
                该项是必填项
              </div>
            </div>
            <div class="common">
              <div class="common-title">
                <span class="star">*</span><span class="text">伙伴联系人</span>
              </div>
              <div class="select">
                <input v-model="contactName" type="text" placeholder="请输入">
              </div>
              <div ref="contactNameMust" class="mustWrite">
                该项是必填项
              </div>
            </div>
            <div class="common">
              <div class="common-title">
                <span class="star">*</span><span class="text">国家</span>
              </div>
              <div class="select">
                <input ref="country" readonly type="text" placeholder="中国">
              </div>
              <div ref="countryMust" class="mustWrite">
                该项是必填项
              </div>
            </div>
            <div class="common last">
              <div class="common-title">
                <span class="star">*</span><span class="text">市</span>
              </div>
              <div class="select">
                <div class="custom-select">
                  <div
                    ref="city" class="selected-option selected-option2"
                    @click="toggleOptions(2)"
                  >
                    请选择
                  </div>
                  <ul ref="options" class="options options2">
                    <li v-for="city in areaData.find(i=>i.text === areaDefault).children"
                        :key="city.value" @click="selectOption($event, 2)">{{ city.text }}
                    </li>
                  </ul>
                </div>
              </div>
              <div ref="cityMust" class="mustWrite">
                该项是必填项
              </div>
            </div>
            <div class="submit" @click="submit()">
              提交资料
            </div>
          </div>
          <div class="right">
            <div class="common">
              <div class="common-title">
                <span class="star">*</span><span class="text">合作意向</span>
              </div>
              <div class="select">
                <input v-model="intention" type="text" placeholder="请输入">
              </div>
              <div ref="intentionMust" class="mustWrite">
                该项是必填项
              </div>
            </div>
            <div class="common">
              <div class="common-title">
                <span class="star">*</span><span class="text">是否加入经销商</span>
              </div>
              <div class="select">
                <div class="custom-select">
                  <div
                    ref="joinDealer" class="selected-option selected-option3"
                    @click="toggleOptions(3)"
                  >
                    请选择
                  </div>
                  <ul ref="options" class="options options3">
                    <li @click="selectOption($event, 3)">是</li>
                    <li @click="selectOption($event, 3)">否</li>
                  </ul>
                </div>
              </div>
              <div ref="joinDealerMust" class="mustWrite">
                该项是必填项
              </div>
            </div>
            <div class="common">
              <div class="common-title">
                <span class="star">*</span><span class="text">伙伴联系电话</span>
              </div>
              <div class="select">
                <input v-model="contactPhone" type="text" placeholder="请输入">
              </div>
              <div ref="contactPhoneMust" class="mustWrite">
                该项是必填项
              </div>
            </div>
            <div class="common">
              <div class="common-title">
                <span class="star">*</span><span class="text">省</span>
              </div>
              <div class="select">
                <div class="custom-select">
                  <div
                    ref="province" class="selected-option selected-option4"
                    @click="toggleOptions(4)"
                  >
                    请选择
                  </div>
                  <ul ref="options" class="options options4">
                    <li v-for="province in areaData" :key="province.value"
                        @click="selectOption($event, 4)">{{ province.text }}
                    </li>
                  </ul>
                </div>
              </div>
              <div ref="provinceMust" class="mustWrite">
                该项是必填项
              </div>
            </div>
            <div class="common last verify">
              <div class="common-title">
                <span class="star">*</span><span class="text">验证码</span>
              </div>
              <div class="select">
                <input v-model="verifyCode" type="text" placeholder="请输入">
              </div>
              <div
                class="codeImg"
                @click="getVerifyCode"
              >
                <img :src="requestVerifyImage" alt="验证码">
              </div>
              <div ref="verifyCodeMust" class="mustWrite">
                该项是必填项
              </div>
            </div>
            <div class="reset" @click="reset()">
              重置资料
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-bgimg">
      <img
        :style="{ width: '100%', height: 'auto' }"
        src="../../../assets/imgs/_9_contactUsImgs/t9_p1_contentBg.png"
        alt=""
      >
    </div>
  </div>
</template>

<style lang="less" scoped>
.becomePartner-content {
  z-index: 0;
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

    @keyframes top-information {
      from {
        opacity: 0;
        top: 200px;
      }

      to {
        opacity: 1;
        top: 0;
      }
    }

    .top-information {
      position: relative;
      animation: top-information 1s ease forwards;

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
            right: 0;
            bottom: 0;
            width: 12rem;
            height: 6rem;
            margin-right: 1.5rem;
            margin-bottom: 2.5rem;

            img {
              width: 100%;
              height: 100%;
            }
          }
        }

        .common {
          width: 100%;
          height: 11.8rem;
          border-top: 1px solid #006fc1;
          position: relative;

          .mustWrite {
            display: none;
            position: absolute;
            bottom: 0;
            color: red;
            font-size: 1.3rem;
            padding-left: 1.8rem;
          }

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
            font-size: 1.8rem;
            font-family: "AlibabaPuHuiTi_2_45_Light";
            color: rgb(89, 87, 87);
            text-align: left;
            padding-left: 1.8rem;
            margin-top: 0.4rem;

            .custom-select {
              z-index: 9999;
              position: relative;

              .selected-option {
                cursor: pointer;
                font-size: 1.8rem;
              }

              .options {
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                font-size: 1.8rem;
                display: none;
                width: 100%;
                background-color: rgb(255, 255, 255);
                list-style: none;

                height: 30rem;
                overflow-x: hidden;
                overflow-y: auto;

                &.active {
                  display: block;
                }

                .icon-down {
                  display: none;
                }

                .first-option {
                  color: #999999;
                }

                li {
                  padding: 5px;
                  cursor: pointer;
                  color: #231815;
                }

                li:hover {
                  background-color: #45b3e0;
                }
              }

              .options3 {
                height: 13rem;
                overflow: scroll;
              }
            }

            select {
              width: 100%;
              /* 去除默认的边框 */
              border: none;
              /* 去除默认的轮廓线 */
              outline: none;
              /* 去除默认的下拉箭头（不同浏览器实现方式不同） */
              -webkit-appearance: none;
              -moz-appearance: none;
              appearance: none;
              /* 自定义背景颜色 */
              background-color: #fff;
              /* 自定义内边距 */
              padding: 8px 5px;
              /* 自定义字体样式 */
              font-size: 1.8rem;
            }

            input {
              font-size: 1.8rem;
              font-family: "AlibabaPuHuiTi_2_45_Light";
              color: rgb(89, 87, 87);
              text-align: left;
            }
          }
        }

        .submit,
        .reset {
          z-index: 999;
          width: 100%;
          height: 8.1rem;
          line-height: 8.1rem;
          border-radius: 1rem;
          text-align: center;
          font-size: 2.2rem;
          font-family: "AlibabaPuHuiTi_2_65_Medium";
          position: absolute;
          bottom: 0;
          transition: all 0.3s ease;
        }

        .submit:hover,
        .reset:hover {
          cursor: pointer;
          font-size: 2.5rem;
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

@media (max-width: 400px) {
  .becomePartner-content {
    .content-top {
      .top-information {
        .write-info {
          .common {
            .common-title {
              margin-top: 1rem;
            }
          }
        }
      }
    }
  }
}
</style>
