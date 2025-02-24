<script setup>
import MyTitle from "@/components/MyTitle.vue";
import CommitmentSpan from "@/components/CommitmentSpan.vue";
</script>

<template>
  <div class="purchaseByBidding-content">

    <div class="content-top">
      <div class="top-title">
        <MyTitle :title="'招标采购'" :English="'bidding procurement'"></MyTitle>
      </div>
      <div class="top-span">
        <CommitmentSpan :title="'平高集团'" :top="'50px'" :bottom-margin-h1="'18px'">
          <div class="top-span-content">
            <p>
              平高集团以世界一流智慧电气装备集团战略目标为统领，紧紧围绕“智慧电气、系统服务、高效能源”总体布局，聚焦电力装备制造及能源
              系统解决方案，争当电气技术引领者、能源革命推动者、绿色发展践行者，努力为全面建设社会主义现代化国家贡献智慧和力量。
            </p>
            <div class="enter-bidding">
              <a href="http://123.163.50.152:30036/SUC/ ">进入招标采购平台</a>
            </div>
          </div>
        </CommitmentSpan>
      </div>
    </div>
    <div class="content-bgimg">
      <img :style="{ width: '100%', height: 'auto' }" src="../../../assets/imgs/_9_contactUsImgs/t9_p1_contentBg.png"
        alt="" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.purchaseByBidding-content {
  z-index: 999;
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
    .top-span {
      animation: topspan 1s ease forwards;
      position: relative;
      top: 0;
      .top-span-content {

        margin-top: 2rem;

        p {
          font-size: 20px;
          font-family: "AlibabaPuHuiTi_2_45_Light";
          color: #ffffff;
          line-height: 1.85;
          text-align: center;
          text-overflow: ellipsis;

        }

        .enter-bidding {
          width: 100%;
          height: 81px;
          text-align: center;
          line-height: 81px;
          margin-top: 3.5rem;

          a {
            display: inline-block;
            width: 610px;
            height: 100%;
            border-radius: 1.2rem;
            background-color: #45b3e0;
            color: #fff;
            font-size: 22px;
            font-family: "AlibabaPuHuiTi_2_65_Medium";
            transition: all 0.7s ease;
          }
        }

        .enter-bidding:hover {
          a {
            color: #45b3e0;
            background-color: #fff;
            pointer: cursor;
          }
        }
      }
    }

    @keyframes topspan {
      from {
        opacity: 0;
        top: 200px;
      }
      to {
        opacity: 1;
        top: 0;
      }
    }
    .top-whiteSpan {
      width: 100%;
      height: 500px;
    }
  }

  .content-bgimg {
    z-index: 1;
    width: 100%;
    height: 100%;
  }
}
@media (max-width: 1800px) {
  .purchaseByBidding-content {
    .content-top {
      .top-span {
        .top-span-content {
          .enter-bidding {
            margin-top: 2rem;
          }
        }
      }
    }
  }
}
/* 大型设备（桌面，大于 900px） */
@media (max-width: 900px) {
  .purchaseByBidding-content {
    padding: 0 5%;

    .content-top {
      .top-span {
        .top-span-content {
          width: 100%;
          p {
            white-space: wrap;
            text-align: center;
          }

          .enter-bidding {
            width: 100%;
            margin-top: 6rem;

            a {
              width: 100%;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 800px) {
  .purchaseByBidding-content {
    .content-top {
      .top-span {
        .top-span-content {
          .enter-bidding {
            margin-top: 5rem;
          }
        }
      }
    }
  }
}

/* 中型设备（平板，600px 到 900px） */
@media (max-width: 700px) {
  .purchaseByBidding-content {
    .content-top {
      .top-span {
        .top-span-content {
          .enter-bidding {
            margin-top: 4rem;
          }
        }
      }
    }
  }
}
/* 小型设备（手机，小于 600px） */
@media (max-width: 600px) {
  .purchaseByBidding-content {
    .content-top {
      .top-span {
        .top-span-content {
          width: 100%;

          p {
            white-space: wrap;
            text-align: center;
          }

          .enter-bidding {
            width: 100%;
            margin-top: 5rem;

            a {
              width: 100%;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 500px) {
  .purchaseByBidding-content {
    .content-top {
      .top-span {
        .top-span-content {
          .enter-bidding {
            margin-top: 7rem;
          }
        }
      }
    }
  }
}
@media (max-width: 400px) {
  .purchaseByBidding-content {
    .content-top {
      .top-span {
        .top-span-content {
          .enter-bidding {
            margin-top: 6rem;
          }
        }
      }
    }
  }
}
</style>
