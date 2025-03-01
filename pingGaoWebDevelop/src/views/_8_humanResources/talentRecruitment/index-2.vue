<script setup>
import newsBar from "@/components/newsBar.vue";
</script>

<template>
  <div class="body-box">
    <div class="bodyBg">
      <img src="../../../assets/imgs/_8_humanResourcesImgs/bg-1.png" alt="" />
    </div>
    <div class="body-content">
      <div class="bg-white" style="padding: 4.7rem; width: 100%">
        <div class="title-box">
          <div class="content-title">国电气装备旗下平高集团2022年社会招聘公告</div>
          <div style="margin-top: 4.7rem; margin-bottom: 4.7rem">
            <newsBar time="2025-01-14" :browse="488" color="#1c4e9f" />
          </div>
        </div>

        <div class="text">
          <p>
            一、单位简介<br />
            平高集团有限公司隶属于中国电气装备集团有限公司，是我国电工行业重大技术装备支柱企业。始建于1970年，总部位于河南平顶山，现有员工近万
            人，资产总额超过300亿元，现已形成了以电力装备制造商和能源系统集成商为基本定位，以开关类为核心的电力装备研发制造和能源系统综合解决方
            案的主营业务布局。业务范围涵盖输配电设备研发、设计、制造、销售、检测、运维等服务及相关设备成套、电力工程总承包、全过程工程咨询、综
            合能源服务、电力储能、电锅炉及热储能、海上风电并网装备、智慧电网装备、充换电设施等业务。<br />
            平高集团是河南省首批创新龙头企业，先后荣获全国五一劳动奖状、全国文明单位、中国机械工业100强企业、国家级创新型企业、装备中国功勋企
            业、国家技能人才培育突出贡献单位等荣誉称号。<br />
            二、应聘条件及招聘岗位<br />
            （一）应聘基本条件<br />
            1.思想政治素质好，拥护党的路线方针政策，具有强烈事业心和责任感；<br />
            2.遵纪守法，具有良好的品行和职业素养，认同企业文化和核心价值理念；<br />
            3.具备岗位要求的知识背景、从业资格、工作技能和经验；<br />
            4.与原单位不存在相关竞业限制及其他纠纷，社会信用良好，无犯罪等不良记录；<br />
            5.身体健康，具备良好的身体条件和心理素质。<br />
            （二）招聘岗位及任职资格条件<br />
            本次面向社会公开招聘98个岗位，共计106人。具体招聘岗位及任职资格条件见附件。<br />
            （三）工作地点<br />
            平顶山、北京、上海、天津、雄安、郑州、长春、长沙<br />
            三、招聘安排<br />
            （一）简历投递。请应聘人员在线投递简历（网址：http://campus.51job.com/pgjt2022/），每人限报两个志愿。<br />
            （二）资料发送。<br />
            打包发送以下材料：<br />
            1.应聘人员信息表（可通过附件下载）；<br />
            2.身份证扫描件；<br />
            3.学历及学位证书扫描件（硕士也需发送本科学历、学位证书扫描件）；<br />
            4.学历及学籍验证报告（硕士也需发送本科学历及学籍验证报告）；<br />
            5.职业资格证书、业绩成果证明和获奖证书等。<br />
            打包发送至pinggaoshezhao@163.com邮箱，邮件标题为“姓名+身份证号”。<br />
            （二）简历筛选。平高集团按照招聘条件，对应聘人员进行初步筛选和资格审查，通过核查应聘人员的学历、专业和任职资格条件，择优确定进入甄
            选环节的人选。<br />
            （三）综合测评。通过简历筛选的应聘人员将参加由平高集团统一组织的综合测评。受疫情影响，具体测评形式及时间地点另行通知。综合测评通过
            后，应聘人员须提供近半年内三甲医院开具的体检报告（具体要求届时将短信通知）。<br />
            （四）公示录用。根据综合测评结果、体检报告及背景调查情况，择优确定拟录用人选，履行内部决策程序后，通过平高集团官网等方式进行公示，
            公示无异议后，进行录用签约。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body-box {
  position: relative;
  width: 100%;
  background-color: #def1fb;
  padding-bottom: 18%;
}

.bodyBg {
  width: 100%;
  position: absolute;
  bottom: -5px;
}

.bodyBg img {
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
}

.body-content {
  position: relative;
  padding: 0 11%;
  height: auto;
  width: 100%;
}
.bg-white {
  background-color: #ffffff;
}
.content-title {
  font-size: 2.5rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(0, 55, 146);
  text-align: center;
}

.text > p {
  font-size: 1.5rem;
  font-family: "AlibabaPuHuiTi_2_45_Light";
  color: rgb(89, 87, 87);
  text-align: left;
  width: 100%;
}

@media (max-width: 900px) {
  .body-box {
    padding-bottom: 50%;
  }

  .body-bg {
    padding: 0 7%;
  }

  .body {
    padding: 0;
  }

  .title-box {
    padding: 0 2.5rem;
  }

  .content-title {
    font-size: 3rem;
  }

  .body-content p {
    font-size: 2rem;
  }

  .body-content {
    /* margin-bottom: 3rem; */
    padding: 0 2.5rem;
  }
}

@media (max-width: 600px) {
  .content-title {
    font-size: 4rem;
  }

  .body-content p {
    font-size: 3rem;
  }
}
</style>
