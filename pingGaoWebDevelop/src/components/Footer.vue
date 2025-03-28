<script setup>
import dayjs from "dayjs";

defineOptions({
  name: "FooterItem",
});
</script>

<template>
  <div class="footer-item">
    <div class="footer-top">
      <div class="content">
        <div class="logo-text" style="">
          <div class="logo-text-top">
            <img style="width: 100%;height: auto" src="../assets/imgs/common/footerLogo.png"
                 alt=""/>
          </div>
          <!-- <hr class="logo-text-hr" /> -->
          <div class="text-bottom">
            <p>地址:河南省郑州市郑东新区龙源西三街39号3B栋</p>
            <p>邮箱:sales@pinggao.com</p>
            <p>邮编:450046</p>
            <p>电话:400-670-0312</p>
          </div>
        </div>
        <div class="f1">
          <router-link to="/aboutPinggao">
            <h3>关于平高</h3>
          </router-link>
          <router-link to="/aboutPinggao/groupProfile1">
            <p class="p-first">集团简介</p>
          </router-link>
          <router-link to="/aboutPinggao/lesadingMember1">
            <p>领导成员</p>
          </router-link>
          <router-link to="/aboutPinggao/organizationalStructure1">
            <p>组织机构</p>
          </router-link>
          <router-link to="/aboutPinggao/seniorHonor1">
            <p>资质荣誉</p>
          </router-link>
          <router-link to="/aboutPinggao/approachPinggao">
            <p>走进平高</p>
          </router-link>
        </div>
        <div class="f2">
          <router-link to="/informationCenter">
            <h3>资讯中心</h3>
          </router-link>
          <router-link to="/informationCenter/headquartersDynamicsIndex">
            <p class="p-first">
              总部动态
            </p>
          </router-link>
          <router-link to="/informationCenter/groupNewsIndex">
            <p>集团新闻</p>
          </router-link>
          <router-link to="/informationCenter/mediaFocusIndex">
            <p>媒体聚焦</p>
          </router-link>
          <router-link to="/informationCenter/hotVideo">
            <p>热点视频</p>
          </router-link>
          <router-link to="/informationCenter/latestAnnouncementIndex">
            <p>最新公告</p>
          </router-link>
        </div>
        <div class="f3" v-if="false">
          <router-link to="/partyBuilding">
            <h3>党的建设</h3>
          </router-link>
          <router-link to="/partyBuilding/partySpirit/index">
            <p class="p-first">党的精神</p>
          </router-link>
          <router-link to="/partyBuilding/pinggaoPartyBuilding/index">
            <p>平高党建</p>
          </router-link>
        </div>
        <div class="f4">
          <router-link to="/productEngineering">
            <h3>产品工程</h3>
          </router-link>
          <router-link to="/productEngineering/productSeries1">
            <p class="p-first">产品系列</p>
          </router-link>
          <router-link to="/productEngineering">
            <p>国内重点工程</p>
          </router-link>
          <router-link to="/productEngineering">
            <p>国外重点工程</p>
          </router-link>
        </div>
        <div class="f5">
          <router-link to="/marketingService">
            <h3>营销服务</h3>
          </router-link>
          <router-link to="/marketingService/performancePledge">
            <p class="p-first">服务承诺</p>
          </router-link>
          <router-link to="/marketingService/markingOrganization">
            <p>营销组织</p>
          </router-link>
          <router-link to="/marketingService/serviceNetWork">
            <p>服务网络</p>
          </router-link>
        </div>
        <div class="f6">
          <router-link to="/qualityAssurance">
            <h3>品质保障</h3>
          </router-link>
          <router-link to="/qualityAssurance/qualitySystem">
            <p class="p-first">质量体系</p>
          </router-link>
          <router-link to="/qualityAssurance/manufacturing">
            <p>生产制造</p>
          </router-link>
          <router-link to="/qualityAssurance/productTesting">
            <p>产品检测</p>
          </router-link>
        </div>
        <div class="f7">
          <router-link to="/scientificResearchCenter">
            <h3>科研中心</h3>
          </router-link>
          <router-link to="/scientificResearchCenter/scientificResearchAchievement1">
            <p class="p-first">科研体系</p>
          </router-link>
          <router-link to="/scientificResearchCenter/scientificResearchSystem1">
            <p>科研成果</p>
          </router-link>
          <router-link to="/scientificResearchCenter/testSystem1">
            <p>试验体系</p>
          </router-link>
        </div>
        <div class="f8">
          <router-link to="/humanResources">
            <h3>人力资源</h3>
          </router-link>
          <router-link to="/humanResources/talentTeam">
            <p class="p-first">人才队伍</p>
          </router-link>
          <router-link to="/humanResources/talentDevelopment">
            <p>人才开发</p>
          </router-link>
          <router-link to="/humanResources/talentRecruitment">
            <p>人才招聘</p>
          </router-link>
          <router-link to="/humanResources/postdoctoralWorkstation">
            <p>博士后工作站</p>
          </router-link>
        </div>
        <div class="f9">
          <router-link to="/contactUs">
            <h3>联系我们</h3>
          </router-link>
          <router-link to="/contactUs/purchaseByBidding">
            <p class="p-first">招标采购</p>
          </router-link>
          <router-link to="/contactUs/becomePartner">
            <p>成为伙伴</p>
          </router-link>
          <router-link to="/contactUs/businessConsulting">
            <p>业务咨询</p>
          </router-link>
          <router-link to="/contactUs/addressTelephone">
            <p>地址电话</p>
          </router-link>
        </div>
        <div class="codeImg">
          <img src="../assets/imgs/common/codeImg.png" alt="">
          <p>平高集团</p>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>
        <a href="https://beian.miit.gov.cn/">豫ICP备2022010930号</a>
        Copyright {{ dayjs().format("YYYY") }} PINGGAO GROUP CO.,LTD, All Rights Reserved.
      </p>
      <p>平高集团有限公司版权所有</p>
    </div>
  </div>
</template>

<style lang="less" scoped>
li {
  list-style: none;
}

a {
  color: #727171;
  text-decoration: none;
}

.footer-item {
  width: auto;
  white-space: nowrap;
}

.footer-top {
  width: auto;
  height: 90%;
  background-color: #333;
  color: #727171;
  padding: 5% 9%;
}

.content > div {
  border-right: 1px solid #727171;
}

.content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  .logo-img {
    width: 4%;
    height: 100%;
    border: none;
    margin-right: 1%;
    transform: translateY(-3px);

    img {
    }
  }

  .logo-text {
    width: 17%;
    padding-right: 3%;

    .logo-text-top {
      width: 75%;
    }

    .logo-text-bottom {
      .bottom-p1 {
        width: 70%;
        white-space: nowrap;
        border-top: 1px solid #727171;
        font-size: 1.15rem;
        font-family: "AlibabaPuHuiTi_2_85_Bold";
        color: rgb(114, 113, 113);
        line-height: 1.296;
        text-align: left;
        letter-spacing: 2px;
        font-weight: bold;
      }

      .bottom-p2 {
        font-size: 0.9rem;
        font-family: "Arial";
        color: rgb(114, 113, 113);
        font-weight: bold;
        text-transform: uppercase;
        text-align: left;
        line-height: 1.841;
      }
    }

    .text-bottom {
      font-size: 0.8rem;
      font-family: "AlibabaPuHuiTi_2_55_Regular";
      color: #727171;
      line-height: 1.2;
      margin-top: 1%;
      margin-left: 20%;
      white-space: wrap; //地址太长需要换行

      p {
        margin-top: 5%;
      }
    }
  }

  .f1,
  .f2,
  .f3,
  .f4,
  .f5,
  .f6,
  .f7,
  .f8,
  .f9 {
    width: 8%;
    padding: 0 1%;
    text-align: center;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    justify-content: start;

    h3 {
      font-size: 1.2rem;
      font-family: "AlibabaPuHuiTi_2_65_Medium";
      color: #727171;
    }

    h3:hover {
      color: #c6bebe;

    }

    p {
      font-size: 0.85rem;
      font-family: "AlibabaPuHuiTi_2_55_Regular";
      color: rgb(137, 137, 137);
      line-height: 2.214;
      margin-bottom: 1%;
    }

    p:hover {
      color: #c6bebe;

    }

    .p-first {
    }
  }

  .codeImg {
    width: 8%;
    // height: 100%;
    border: none;
    margin-left: 3%;

    img {
      width: 100%;
      height: auto;
    }

    p {
      font-size: 1.12rem;
      font-family: "AlibabaPuHuiTi_2_55_Regular";
      color: rgb(137, 137, 137);
      line-height: 2.5;
      text-align: center;
    }
  }
}

.footer-bottom {
  background-color: #000;
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

@media (max-width: 1000px) {
  .footer-item {
    .footer-top {
      .content {
        .logo-img {
          width: 5%;
        }
      }
    }
  }

}

/* 大型设备（桌面，大于 900px） */
@media (max-width: 900px) {
  .footer-top {
    padding: 5% 0 2% 0;
    height: 85%;
    width: 100%;
  }

  .footer-bottom {
    height: 15%;
    width: 100%;
    font-size: 1.6rem;
    padding: 0 4%;
    white-space: wrap;

    p {
      // display: block;
    }
  }

  .content > div {
    border: none;
  }

  .content {
    flex-direction: column;
    position: relative;

    .logo-img {

      display: none;
    }

    .logo-text {
      width: 100%;
      padding: 0;

      .logo-text-top {
        display: none;
      }

      .logo-text-bottom {
        height: auto;
        line-height: 100px;

        .bottom-p1 {
          font-size: 1.9rem;
          width: 100%;
          text-align: center;
          padding-bottom: 2rem;
          border: none;
          border-bottom: 1px solid #727171;
        }

        .bottom-p2 {
          display: none;
        }
      }

      .text-bottom {
        font-size: 1.5rem;
        padding: 1% 0 1% 3%;
        border-bottom: 1px solid #727171;
        margin: 0;
        white-space: wrap; //地址太长需要换行

        p {
          margin-top: 1%;
        }
      }
    }

    .f1,
    .f2,
    .f3,
    .f4,
    .f5,
    .f6,
    .f7,
    .f8,
    .f9 {
      width: 100%;
      padding: 1% 3%;
      flex-direction: row;
      justify-content: start;
      align-items: center;
      border-bottom: 1px solid #727171;

      h3 {
        font-size: 1.5rem;
        margin: 0;
        height: 100%;
        line-height: 2;
      }

      h3::after {
        content: "▶";
        font-size: 1.2rem;
        margin-left: 1rem;
      }

      p {
        font-size: 1.5rem;
        margin-bottom: 0;
        margin: 0 1.3rem;
      }


      .p-first {
      }
    }

    .f9 {
      border: none;
    }

    .codeImg {
      position: absolute;
      top: 9%;
      right: 0;
      margin: 0;
      margin-right: 8%;
      width: 11%;

      p {
        display: none;
      }
    }
  }
}

</style>
