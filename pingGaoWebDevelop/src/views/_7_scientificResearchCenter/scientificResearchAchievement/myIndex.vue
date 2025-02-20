<script setup>
import MyTitle from "@/components/MyTitle.vue";
import MyContent from "@/components/F6_MyContent.vue";
</script>
<template>
  <div class="scientificResearchAchievement">
    <MyTitle h="科研成果" English="SCIENTIFIC RESEARCH ACHIEVEMENTS"></MyTitle>
    <div class="achievement">
      <div class="achievement_top">
        <div class="achievement_detail">
          <div class="num">266</div>
          <div class="p">科技奖励/项</div>
        </div>
        <div class="achievement_detail">
          <div class="num">6</div>
          <div class="p">中国专利优秀奖/项</div>
        </div>
        <div class="achievement_detail">
          <div class="num">2350+</div>
          <div class="p">授权专利/项</div>
        </div>
        <div class="achievement_detail">
          <div class="num">1414+</div>
          <div class="p">其中发明专利/项</div>
        </div>
        <div class="achievement_detail">
          <div class="num">38</div>
          <div class="p">海外专利/项</div>
        </div>
        <div class="achievement_detail">
          <div class="num">138</div>
          <div class="p">软件著作权登记/项</div>
        </div>
      </div>
      <div class="achievement_bottom">
        <div class="achievement_detail" style="border: none"></div>

        <div class="achievement_detail">
          <div class="num">266</div>
          <div class="p1">制（修）订</div>
          <div class="p2">科技奖励/项</div>
        </div>
        <div class="achievement_detail">
          <div class="num">266</div>
          <div class="p1">制（修）订</div>
          <div class="p2">科技奖励/项</div>
        </div>
        <div class="achievement_detail">
          <div class="num">266</div>
          <div class="p1">制（修）订</div>
          <div class="p2">科技奖励/项</div>
        </div>
        <div class="achievement_detail detail_last">
          <div class="num">266</div>
          <div class="p1">制（修）订</div>
          <div class="p2">科技奖励/项</div>
        </div>
        <div class="achievement_detail" style="border: none"></div>
      </div>
    </div>
    <div class="content">
      <MyContent title="电工行业重大技术装备支柱企业">
        <div class="text">
          作为我国电工行业重大技术装备支柱企业，平高集团在50多年的发展历程中，屡次突破行业技术瓶颈，不畏艰险，力同心，先后在国家重点工程中树立起一座座丰碑，创造了一个个国内第一、国际领先，推动并见证了我国电力技术的巨变。先后获得了特高压工程建设特别贡献奖和中国建设工程鲁班奖，占领了世界高压开关制高点，实现了特高压从“中国制造”到“中国创造”，最终到“中国引领”的转变，更使特高压成为一张闪亮的“国家名片”。
        </div>
        <div class="text">
          平高集团累计荣获科技奖励266项，其中省部级及以上科技奖励144项。参与完成的“特高压交流输电关键技术研究成套设备及工程应用“获得国家科技进步特等奖，参与完成的“输电等级单断口真空断路器关键技术及应用”获得国家技术发明二等奖。主持申报的“超高压及特高压直流隔离开关技术及应用"“高压开关装备电弧开断关键技术及应用”、“交流滤波器组断路器关键技术及工程应用”获得河南省科技进步一等奖。累计170项科技成果通过省部级鉴定，其中71项技术水平国际领先。126千伏无氟环保型气体绝缘金属封闭开关设备(GIS)、直流墙套管2项产品入选2021年度能源领域首台(套)重大技术装备项目。累计7种产品先后入选国家能源局能源领域首台(套)重大技术装备目录。
        </div>
        <div class="text">
          先后被评为河南省知识产权优势培育企业、河南省知识产权优势企业和河南省首批知识产权领军企业。“一种断路器及具有该断路器的系统”等6项专利荣获中国专利优秀奖。累计授权专利2350余项，其中发明专利1414余项;申报海外专利38项;完成软件著作权登记138项。累计参与制(修)订国家标准73项、行业标准52项、团体标准15项、国际标准1项。
        </div>
      </MyContent>
    </div>
    <div class="footer_img">
      <img src="@/assets/imgs/_7_scientificResearchCenterImgs/science-footer.png" alt="" />
    </div>
  </div>
</template>
<style scoped>
.scientificResearchAchievement {
  position: relative;
  width: 100%;
  height: 2040px;
  /* border: 1px solid rgb(206, 206, 206); */
  background-color: #fff;
  padding: 64px 11%;
  border-radius: 20px;
  z-index: -10;
}
.content {
  margin-top: 424px;
  border-bottom: 1px solid #006fc1;
}
.text {
  font-size: 20px;
  font-family: "AlibabaPuHuiTi_2_55_Regular", sans-serif;
  color: rgb(89, 87, 87);
  line-height: 1.66;
  margin-bottom: 24px;
}
.achievement {
  position: absolute;
  width: 100%;
  height: 400px;
  background-color: #f4f4f4;
  padding: 78px 210px;
  left: 0;
  top: 210px;
}
.achievement_top {
  display: flex;
  width: 100%;
  margin-bottom: 64px;
  border-right: 2px solid #6ba9d7;
}
.achievement_bottom {
  display: flex;
  width: 100%;
  text-align: center;
}
.achievement_top .achievement_detail {
  width: 16%;
  height: 75px;
  border-left: 2px solid #6ba9d7;
  position: relative;
}
.achievement_bottom .achievement_detail {
  width: 250px;
  height: 108px;
  border-left: 2px solid #6ba9d7;
  position: relative;
}
.achievement_top .achievement_detail .num {
  position: absolute;
  font-size: 44px;
  font-family: "AlibabaPuHuiTi_2_95_ExtraBold", sans-serif;
  color: rgb(0, 111, 193);
  left: 50%;
  transform: translateX(-50%);
  top: -15px;
}
.achievement_top .achievement_detail .p {
  position: absolute;
  font-size: 24px;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: rgb(0, 111, 193);
  text-align: center;
  top: 40px;
  width: 250px;
  left: 50%;
  transform: translateX(-50%);
}
.achievement_bottom {
  width: 100%;
}
.achievement_bottom .achievement_detail {
  width: 16%;
}
.achievement_bottom .achievement_detail .num {
  position: absolute;
  font-size: 44px;
  font-family: "AlibabaPuHuiTi_2_95_ExtraBold", sans-serif;
  color: rgb(0, 111, 193);
  left: 50%;
  transform: translateX(-50%);
  top: -15px;
}
.achievement_bottom .achievement_detail .p1 {
  position: absolute;
  font-size: 24px;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: rgb(0, 111, 193);
  text-align: center;
  top: 40px;
  width: 250px;
  left: 50%;
  transform: translateX(-50%);
}
.achievement_bottom .achievement_detail .p2 {
  position: absolute;
  font-size: 24px;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: rgb(0, 111, 193);
  text-align: center;
  top: 72px;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
}
.detail_last {
  border-right: 2px solid #6ba9d7;
}
.footer_img {
  position: absolute;
  width: 100%;
  height: 1064px;
  bottom: 0;
  left: 0;
  z-index: -1;
}
.footer_img img {
  width: 100%;
  height: 1064px;
}
</style>
