<script setup>
defineOptions({
  name: "FooterItem",
});
</script>

<template>
  <div class="footer-item">
    <div class="footer-top">
      <div class="content">
        <div class="logo-img"><img src="../assets/imgs/common/logo-img.png" alt="" /></div>
        <div class="logo-text">
          <div class="logo-text-top">
            <img src="../assets/imgs/common/logo-text.png" alt="" />
          </div>
          <!-- <hr class="logo-text-hr" /> -->
          <div class="logo-text-bottom">
            <p class="bottom-p1">平高集团有限公司</p>
            <p class="bottom-p2">pinggao group co.,ltd.</p>
          </div>
          <div class="text-bottom">
            <p>地址:河南省平顶山市南环东路22号</p>
            <p>邮箱:sales@pinggao.com</p>
            <p>邮编:467001</p>
            <p>电话:400-670-0312</p>
          </div>
        </div>
        <div class="f1">
          <h3>关于平高</h3>
          <p class="p-first">集团简介</p>
          <p>领导成员</p>
          <p>组织结构</p>
          <p>资质荣誉</p>
          <p>走进平高</p>
        </div>
        <div class="f2">
          <h3>资讯中心</h3>
          <p class="p-first">集团新闻</p>
          <p>媒体聚焦</p>
          <p>热点视频</p>
          <p>最新公告</p>
        </div>
        <div class="f3">
          <h3>党的建设</h3>
          <p class="p-first">党的精神</p>
          <p>平高党建</p>
        </div>
        <div class="f4">
          <h3>产品工程</h3>
          <p class="p-first">产品系列</p>
          <p>国内重点工程</p>
          <p>国外重点工程</p>
        </div>
        <div class="f5">
          <h3>营销服务</h3>
          <p class="p-first">服务承诺</p>
          <p>营销组织</p>
          <p>服务网络</p>
        </div>
        <div class="f6">
          <h3>品质保障</h3>
          <p class="p-first">质量体系</p>
          <p>生产制造</p>
          <p>产品检测</p>
        </div>
        <div class="f7">
          <h3>科研中心</h3>
          <p class="p-first">科研体系</p>
          <p>科研成果</p>
          <p>试验体系</p>
        </div>
        <div class="f8">
          <h3>人力资源</h3>
          <p class="p-first">人才队伍</p>
          <p>人才开发</p>
          <p>人才招聘</p>
          <p>博士后工作站</p>
        </div>
        <div class="f9">
          <h3>联系我们</h3>
          <p class="p-first">招标采购</p>
          <p>成为伙伴</p>
          <p>业务咨询</p>
          <p>地址电话</p>
        </div>
        <div class="codeImg">
          <img src="../assets/imgs/common/codeImg.png" alt="" />
          <p>平高集团</p>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      豫ICP备2022010930号 Copyright 2024 PINGGAO GROUP CO.,LTD, All Rights Reserved.
      平高集团有限公司版权所有
    </div>
  </div>
</template>
<style lang="less" scoped>
/*

li {
  list-style: none;
}

a {
  color: #727171;
  text-decoration: none;
}

.footer-item {
  width: auto;
  height: 45vh; 
}

.footer-top {
  width: auto;
  height: 90%;
  // position: relative;
  background-color: #333;
  color: #727171;

}

.content > div {
  border-right: 1px solid #727171;
  height: 100%;
  flex: 1 1 auto;
}

.content {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 5% 7% ;
  justify-content: start;
  align-items: start;

  div {
    // height: 100%;
  }
  .logo-img {
    border: none;
    // margin-right: 10px;
    transform: translateY(-3px);
  }

  .logo-text {
    // width: 250px;
    width: 18%;

    .logo-text-top {
      width: 112px;
    }

    .logo-text-hr {
      width: 133px;
      border: none;
      border-top: 1px solid #727171;
      transform: translateY(-2px);
    }

    .logo-text-bottom {
      .bottom-p1 {
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
        transform: translate(1px, -2px);
      }
    }

    .text-bottom {
      font-size: 1rem;
      font-family: "AlibabaPuHuiTi_2_55_Regular";
      color: rgb(114, 113, 113);
      line-height: 1.2;

      p {
        // margin-top: 11px;/
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
    width: 7.5%;
    height: 100%;
    padding: 0 0.5%;
    text-align: center;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    justify-content: start;
    h3 {
      font-size: 1.1rem;
      font-family: "AlibabaPuHuiTi_2_65_Medium";
      color: rgb(114, 113, 113);
      // line-height: 1;
    }

    p {
      font-size: 1rem;
      font-family: "AlibabaPuHuiTi_2_55_Regular";
      color: rgb(137, 137, 137);
      // line-height: 2.214;
      padding-bottom:1%;
    }

    .p-first {
      // margin-top: 15px;
    }
  }

  .codeImg {
    width: 20%;
    height: 100%;
    border: none;
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
  // width: 100%;
  width: auto;
  height: 10%;
  background-color: #000;
  color: #727171;
  text-align: center;
  padding: 1% 1%;
  // line-height: 52px;

  font-size: 1.15rem;
  font-family: "SourceHanSansCN";
  color: rgb(114, 113, 113);
}

*/

li {
  list-style: none;
}

a {
  color: #727171;
  text-decoration: none;
}

.footer-item {
  width: auto;
  // height: 35vh;
  // padding: 3% ;
  white-space: nowrap;
}

.footer-top {
  width: auto;
  height: 90%;
  background-color: #333;
  color: #727171;

  // display: flex;
  // justify-content: center;
  // align-items: center;
  padding: 5% 11%;


}

.content>div {
  border-right: 1px solid #727171;
  // flex: 1 1 auto;
}

.content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  // align-content: center;

  div {
    // height: 100%;
  }

  .logo-img {
    // width: 5%;
    // height: 5%;
    height: 100%;
    border: none;
    margin-right: 1%;
    transform: translateY(-3px);
  }

  .logo-text {
    padding-right: 3%;
    .logo-text-top {
      // width: 112px;
    }

    .logo-text-hr {
      border: none;
      border-top: 1px solid #727171;
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
        // transform: translate(1px, -2px);
      }
    }

    .text-bottom {
      font-size: 1rem;
      font-family: "AlibabaPuHuiTi_2_55_Regular";
      color: rgb(114, 113, 113);
      line-height: 1.2;
      margin-top: 1%;
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
    // width: 7.5%;
    // height: 100%;
    padding: 0 1%;
    text-align: center;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    justify-content: start;

    h3 {
      font-size: 1.3rem;
      font-family: "AlibabaPuHuiTi_2_65_Medium";
      color: rgb(114, 113, 113);
      // line-height: 1;
    }

    p {
      font-size: 1rem;
      font-family: "AlibabaPuHuiTi_2_55_Regular";
      color: rgb(137, 137, 137);
      line-height: 2.214;
      margin-bottom: 1%;
    }

    .p-first {
      // margin-top: 15px;
    }
  }

  .codeImg {
    // width: 20%;
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
}
</style>
