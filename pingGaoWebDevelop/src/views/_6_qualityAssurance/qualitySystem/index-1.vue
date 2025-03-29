<script setup>
import MyTitle from "@/components/MyTitle.vue";
import CommitmentSpan from "@/components/CommitmentSpan.vue";
import MyContent from "@/components/F6_MyContent1.vue";
import { ref, onMounted } from "vue";
const topDetailList = ref(null);
const topTitle = ref(null);
const topSpan = ref(null);
onMounted(() => {
  const topDetailListDom = topDetailList.value;
  const topTitleDom = topTitle.value;
  const topSpanDom = topSpan.value;
  setTimeout(() => {
    topTitleDom.classList.add("topTitleClass");
    topDetailListDom.classList.add("topDetailListClass");
    topSpanDom.classList.add("topSpanClass");
  }, 100);
})
</script>

<template>
  <div class="quality-content" style="overflow: hidden;">
    <div class="content-top">
      <div ref="topTitle" class="top-title">
        <MyTitle :title="'质量体系'" :english="'Quality System'"></MyTitle>
      </div>
      <div ref="topSpan" class="top-span">
        <CommitmentSpan :title="'平高集团在中国电气行业率先导入国际先进的质量管理体系'">
          <div class="top-span-content">
            <p>
              从产品的研发、制造、检验技术、生产管理、售后服务及整个质量管理体系严格按 ISO9001
              国际认证标准执行，保证从产品的图纸设<br />
              计、外购件和原材料的进厂、零部件加工、工序传递、装配、试验、出厂及产品交付用户整个过程都处在严格的质量监控中，确保向用户<br />
              提供优质可靠产品。产品通过国际标准认证。为确保质量管理体系行之有效的贯彻执行，平高集团专门成立了质量管理委员会，在产品制<br />
              造全过程严格执行质量管理标准，使质量管理工作走向制度化、规范化
            </p>
          </div>
        </CommitmentSpan>
      </div>
      <div ref="topDetailList" class="top-detailList">
        <MyContent class="delete-border" :title="'质量文化'">
          <div class="right-text">
            <p>
              平高集团在“诚信为本、一次做对、健全体系、预防为主、追根求源、继承积累”的质量方针指导下，公司全员牢固树立质量是企业生命线的理念，质量方针已经成为广大员工开展工作的行为准则。公司始终坚持以顾客需求为关注焦点，坚持继承和创新相结合。不断夯实质量管理基础，深化管理提升，以第一次就把事情做对、树立零缺陷理念为中心，以零缺陷管理四项基本原则为载体，强化全员质量意识，持续改进和提升产品质量水平，不断增强顾客满意，打造了人人关心质量、人人重视质量、人人创造质量的良好氛围，凝聚了质量提升合力，为公司产品质量提升输送不竭动力，最终实现产品质量和服务质量的双提高。平高集团先后获得“2013年度河南省省长质量奖”，“全国高压开关行业质量领先品牌”“全国质量诚信先进企业”、“机械工业部质量管理优秀企业”等荣誉称号。
            </p>
          </div>
        </MyContent>
        <MyContent :title="'质量管理体系'">
          <div class="right-text">
            <p>
              随着公司业务领域、作业场所和活动的不断扩展及组织机构、职能的调整，平高集团坚持以质量管理体系标准为主线，以过程方法为基础，识别过程和活动，明确过程职责和资源配置，不断完善质量管理体系，使影响产品质量的过程和活动处于受控状态。质量管理体系通过认证机构年度认证监督审核，公司质量管理体系运行持续稳定有效。
            </p>
          </div>
        </MyContent>
        <MyContent :title="'质量管理方法'">
          <div class="right-text">
            <p>
              持续开展全员、全过程、全方位、多方法的质量管理活动，全面营造质量管理氛围。深化零缺陷管理，不断提高班组管理水平。全面引导员工积极参与质量管理。积极开展群众性质量管理活动，公司开展六西格玛管理、QC小组、零缺陷管理、分层过程审核、质量早会、事例研究、点滴教育，以及产品装配试验作业的四无管理、数量管理、作业中断管理，相似品管理。
              管理、相似品管理、气体状态标识管理等质量管理活动，全面营造公司先进质量管理氛围。
            </p>
          </div>
        </MyContent>
        <hr style="height: 0; border: none; border-top: 0.2rem solid #006fc1" />
      </div>
      <div class="top-whiteSpan"></div>
    </div>
    <div class="content-bgimg"></div>
  </div>
</template>

<style lang="less" scoped>
.quality-content {
  width: 100%;
  padding: 0 11%;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: start;
  background-color: #fff;
  position: relative;

  .content-top {
    width: 100%;

    .top-title {
      margin-top: 6rem;
      margin-bottom: 6rem;
      position: relative;
      right: -100%;
      transition: all 0.5s;
    }

    .topTitleClass {
      right: 0; // 动画效果
    }

    .top-span {
      height: auto;
      position: relative;
      left: -100%;
      transition: all 0.5s;

      .top-span-content {
        margin-top: 30px;

        p {
          font-size: 1.3rem;
          font-family: "AlibabaPuHuiTi_2_45_Light";
          color: #ffffff;
          line-height: 1.85;
        }
      }
    }

    .topSpanClass {
      left: 0; // 动画效果
    }

    .top-detailList {
      margin-top: 35px;
      position: relative;
      right: -100%;
      transition: all 0.5s;

      margin-top: 35px;

      .delete-border {
        border-top: none;
      }

      .right-text {
        font-size: 2rem;
        font-family: "AlibabaPuHuiTi_2_45_Light";
        color: #595757;
        line-height: 1.85;
        text-align: justify;

        // white-space: nowrap;
        p {
          width: 100%;

        }
      }
    }

    .topDetailListClass {
      right: 0; // 动画效果
    }

    .top-whiteSpan {
      width: 100%;
      height: 730px;
      // height: 1050px;
    }
  }

  .content-bgimg {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1013px;
    background-image: url("../../../assets/imgs/_6_qualityAssuranceImgs/t6_p1_contentBg.png");
    background-size: cover;
    // background-attachment: fixed;
  }
}

@media (max-width: 2800px) {
  .quality-content {
    .content-top {

      .top-span {

        .top-span-content {

          p {
            font-size: 1.1rem;
          }
        }
      }
    }
  }
}

@media (max-width: 1600px) {
  .quality-content {
    .content-top {

      .top-span {

        .top-span-content {

          p {
            font-size: 1rem;
          }
        }
      }
    }
  }
}

@media (max-width: 1430px) {
  .quality-content {
    .content-top {

      .top-span {

        .top-span-content {

          p {
            font-size: 0.96rem;
          }
        }
      }
    }
  }
}

@media (max-width: 1400px) {
  .quality-content {
    .content-top {

      .top-span {

        .top-span-content {

          p {
            font-size: 1.2rem;
          }
        }
      }
    }
  }
}

@media (max-width: 1300px) {
  .quality-content {
    .content-top {

      .top-span {

        .top-span-content {

          p {
            font-size: 1.1rem;
          }
        }
      }
    }
  }
}

/* 大型设备（桌面，大于 900px） */
@media (max-width: 900px) {
  .quality-content {
    padding: 0 5%;

    .content-top {

      .top-title {
        margin-top: 3rem;
        margin-bottom: 3rem;
      }

      .top-span {

        .top-span-content {

          p {
            font-size: 1.6rem;

            br {
              display: none;
            }
          }
        }
      }
    }
  }

}

@media (max-width: 800px) {
  .quality-content {
    .content-top {

      .top-span {

        .top-span-content {

          p {
            font-size: 2rem;
          }
        }
      }
    }
  }
}

/* 中型设备（平板，600px 到 900px） */
@media (max-width: 700px) {
  .quality-content {
    .content-top {
      .top-span {
        .top-span-content {
          p {
            font-size: 2.2rem;
          }
        }
      }
    }
  }
}


/* 小型设备（手机，小于 600px） */

@media (max-width: 600px) {
  .quality-content {
    .content-top {
      .top-span {
        .top-span-content {
          p {
            font-size: 2.5rem;
          }
        }
      }
    }
  }
}

@media (max-width: 500px) {
  .quality-content {
    .content-top {
      .top-span {
        .top-span-content {
          p {
            font-size: 2.4rem;
          }
        }
      }
    }
  }
}
</style>
