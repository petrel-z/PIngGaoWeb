<script setup>
import MyTitle from "@/components/MyTitle.vue";
import headLine from "@/components/MyHeadLine.vue";
import row from "@/assets/imgs/_1_aboutPinggaoImgs/row.png";
import longLine from "@/assets/imgs/_1_aboutPinggaoImgs/long-line.png";
// import footrow from "@/assets/imgs/_1_aboutPinggaoImgs/footrow.png";
</script>
<template>
  <!-- 组织结构 -->
  <div class="organizationalStructure">
    <MyTitle class="mytitle" title="组织机构" English="organization structure"></MyTitle>
    <div class="organization">
      <div class="organization_title">平高集团有限公司</div>
      <div class="detail">
        <div class="introduce">
          <div class="info">
            <div class="info_top">5</div>
            <div class="info_bottom">全资子公司<span>/</span>家</div>
          </div>
        </div>
        <div class="introduce">
          <div class="info">
            <div class="info_top">6</div>
            <div class="info_bottom">投股子公司<span>/</span>家</div>
          </div>
        </div>
        <div class="introduce">
          <div class="info">
            <div class="info_top">1</div>
            <div class="info_bottom">合营公司<span>/</span>家</div>
          </div>
        </div>
        <div class="introduce">
          <div class="info">
            <div class="info_top">11</div>
            <div class="info_bottom">本部部门<span>/</span>家</div>
          </div>
        </div>
        <div class="introduce">
          <div class="info">
            <div class="info_top">20</div>
            <div class="info_bottom">直属分公司<span>/</span>家</div>
          </div>
        </div>
        <div class="introduce">
          <div class="info">
            <div class="info_top">3</div>
            <div class="info_bottom">支撑平台<span>/</span>家</div>
          </div>
        </div>
      </div>
    </div>
    <div class="component">
      <div class="content_top">
        <div class="content_left">
          <headLine title="本部部门"></headLine>
          <ul class="parts">
            <li>办公室（党委办公室、董事会办公室、国际部）</li>
            <li>发展策划部 财务资产部（资本管理部）</li>
            <li>党委组织部（人力资源部、全面深化改革办公室）</li>
            <li>科信部</li>
            <li>纪委办公室（党委巡察办）</li>
            <li>合规管理部（审计部）</li>
            <li>党委工作部(党委宣传部、工会、团委)</li>
            <li>市场运营部</li>
            <li>安全质量部</li>
            <li>生产物资部</li>
          </ul>
        </div>
        <div class="content_middle">
          <div class="top_2">
            <headLine title="全资子公司"></headLine>
            <ul class="parts">
              <li>北京平高清大科技发展有限公司</li>
              <li>河南省高压电器研究所有限公司</li>
              <li>河南平高电力设备有限公司</li>
              <li>
                <img :src="row" alt="" />
                河南九域平高科技发展有限公司
              </li>
              <li>平高集团智能电气有限公司</li>
              <li>平高集团能源发展有限公司</li>
            </ul>
          </div>
          <div class="bottom_2">
            <headLine title="合营公司"></headLine>
            <ul class="parts">
              <li>平高东芝(河南)开关零部件制造有限公司</li>
            </ul>
          </div>
        </div>
        <div class="content_right">
          <div class="top_3">
            <headLine title="本部部门"></headLine>
            <ul class="parts">
              <li>平高集团华生电力设计有限公司</li>
              <li>
                <img :src="row" alt="" />
                平高集团华生电力设计有限公司郑州分公司
              </li>
              <li>平高集团储能科技有限公司</li>
              <li>湖南平高开关有限公司</li>
              <li>平高集团智能电力科技有限公司</li>
              <li>江苏平高泰事达电气有限公司</li>
              <li>河南平高电气股份有限公司</li>
            </ul>
          </div>
          <div class="bottom_3">
            <headLine title="支撑平台"></headLine>
            <ul class="parts">
              <li>平高集团有限公司配电网业务部</li>
              <li>平高集团有限公司教育培训中心(平高集团技工学校)</li>
              <li>运行服务中心</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="content_bottom">
        <div class="head">
          <div class="title">直属分公司</div>
          <div>
            <img :src="longLine" alt="" />
          </div>
        </div>
        <div class="foot">
          <div class="foot_left">
            <ul class="parts">
              <li>平高集团有限公司技术中心</li>
              <li>平高集团有限公司配网技术中心</li>
              <li>平高集团运维检修服务公司</li>
              <li>平高集团综合能源服务有限公司</li>
              <li>平高集团电力储能事业部</li>
              <li>平高集团有限公司河北雄安综合能源科技分公司</li>
              <li>平高集团客户服务中心</li>
            </ul>
          </div>
          <div class="foot_middle">
            <ul class="parts">
              <li>平高集团物质分公司</li>
              <li>平高集团电力金具公司</li>
              <li>平高集团电锅炉事业部</li>
              <li>平高集团营销中心</li>
              <li>平高集团有限公司综合服务分公司</li>
              <li>平高集团大连交大轨道电气技术研究院</li>
            </ul>
          </div>
          <div class="foot_right">
            <ul class="parts">
              <li>平高集团有限公司西安智慧新能源分公司</li>
              <li>清华大学(电机系)平高集团有限公司电气技术联合研究中心</li>
              <li>平高集团信息科技分公司</li>
              <li>平高集团中试基地</li>
              <li>平高集团储能研究所</li>
              <li>平高集团综合能源研究所</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="organization_2">
      <div class="organization_title">平高集团控股子公司</div>
      <div class="detail">
        <div class="introduce">
          <div class="info">
            <div class="info_top">6</div>
            <div class="info_bottom">全资子公司<span>/</span>家</div>
          </div>
        </div>
        <div class="introduce">
          <div class="info">
            <div class="info_top">6</div>
            <div class="info_bottom">投股子公司<span>/</span>家</div>
          </div>
        </div>
        <div class="introduce">
          <div class="info">
            <div class="info_top">1</div>
            <div class="info_bottom">合营公司<span>/</span>家</div>
          </div>
        </div>
        <div class="introduce">
          <div class="info">
            <div class="info_top">9</div>
            <div class="info_bottom">本部部门<span>/</span>家</div>
          </div>
        </div>
        <div class="introduce">
          <div class="info">
            <div class="info_top">12</div>
            <div class="info_bottom">直属分公司<span>/</span>家</div>
          </div>
        </div>
        <div class="introduce">
          <div class="info">
            <div class="info_top">4</div>
            <div class="info_bottom">支撑平台<span>/</span>家</div>
          </div>
        </div>
      </div>
    </div>
    <div class="component_2">
      <div class="content_top_2">
        <div class="content_left_2">
          <headLine title="本部部门"></headLine>
          <ul class="parts">
            <li>综合管理部(党建工作部、纪委办公室)</li>
            <li>人劳部</li>
            <li>财务部</li>
            <li>证券部</li>
            <li>审计部</li>
            <li>科技管理部(发展策划部)</li>
            <li>生产物资部</li>
            <li>安全质量部</li>
            <li>平高集团客户服务中心</li>
          </ul>
        </div>
        <div class="content_middle_2">
          <headLine title="本部部门"></headLine>
          <ul class="parts">
            <li>平高集团国际工程有限公司</li>
            <li>平高集团有限公司波兰分公司</li>
            <li>河南平高通用电气有限公司</li>
            <li>天津平高智能电气有限公司</li>
            <li>平高集团威海高压电器有限公司</li>
            <li>四川平高高压开关维修有限公司</li>
            <li>天津平高电气设备检修有限公司</li>
          </ul>
        </div>
        <div class="content_right_2">
          <headLine title="本部部门"></headLine>
          <ul class="parts">
            <li>河南平芝高压开关有限公司</li>
            <li>上海平高天灵开关有限公司</li>
            <li>一希捷爱斯(上海)电气有限公司</li>
            <li>上海雷泽灵电气有限公司</li>
            <li>广州平高电力技术有限公司</li>
            <li>平高帕拉特(河南)能源科技有限公司</li>
            <li>平高集团印度电力有限公司</li>
            <li>平高新松电力智能装备(河南)有限公司</li>
          </ul>
        </div>
      </div>
      <div class="content_bottom_2">
        <div class="content_left_2">
          <headLine title="本部部门"></headLine>
          <ul class="parts">
            <li>平高东芝(廊坊)避雷器有限公司</li>
          </ul>
        </div>
        <div class="content_middle_2">
          <headLine title="本部部门"></headLine>
          <ul class="parts">
            <li>工程技术中心(计量中心)</li>
            <li>市场营销中心</li>
            <li>综合运行中心</li>
            <li>特高压管理中心</li>
          </ul>
        </div>
        <div class="content_right_2">
          <headLine title="本部部门"></headLine>
          <div class="two_parts">
            <ul class="parts">
              <li>超特高压事业部</li>
              <li>组合电器事业部</li>
              <li>高压电器事业部</li>
              <li>机构事业部</li>
              <li>机械制造事业部</li>
              <li>电力组件事业部</li>
            </ul>
            <ul class="parts">
              <li>绝缘分厂</li>
              <li>电镀分厂</li>
              <li>复合绝缘子事业部</li>
              <li>电控环保装备事业部</li>
              <li>管廊工程公司</li>
              <li>新能源事业部</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.organizationalStructure {
  position: relative;
  margin: auto;
  width: 100%;
  padding: 64px 11%;
  border-radius: 20px;
  background-color: #fff;
  z-index: -100;
}
.organization {
  position: relative;
  margin-top: 60px;
  width: 100%;
  height: 324px;
  background-color: #006fc1;
  border-radius: 15px;
}
.organization .organization_title {
  margin: auto;
  position: absolute;
  top: 60px;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: rgb(255, 255, 255);
  font-size: 32px;
  left: 50%;
  transform: translate(-50%, -50%);
}
.organization .detail {
  position: absolute;
  display: flex;
  bottom: 75px;
  width: 100%;
}
.organization .introduce {
  width: 16.7%;
  height: 112px;
  border-right: 1px solid #2291d0;
  color: #fff;
  padding-bottom: 5px;
}
.organization .info {
  position: relative;
}
.organization .info .info_top {
  top: -1px;
  position: absolute;
  font-size: 60px;
  font-family: "Avenir-black-4", sans-serif;
  color: rgb(255, 255, 255);
  z-index: 129;
  top: 30px;
  left: 50%;
  transform: translate(-50%, -50%);
}
.organization .info .info_bottom {
  position: absolute;
  white-space: nowrap;
  display: flex;
  font-size: 26px;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: rgb(255, 255, 255);
  top: 90px;
  left: 50%;
  transform: translate(-50%, -50%);
}
.organization .info .info_bottom span {
  font-size: 24px;
  display: block;
  margin: 1px;
}
.component {
  margin-top: 44px;
}
.component .content_top {
  display: flex;
  justify-content: space-between;
}
.component .content_top .content_left {
  width: 33%;
  height: 530px;
}
.component .content_top .content_middle {
  margin-left: 12px;
  width: 33%;
  height: 530px;
}
.component .content_top .content_right {
  margin-left: 13px;
  width: 33%;
  height: 530px;
}

.component .content_top .content_middle .bottom_2 {
  margin-top: 53px;
}
.component .content_bottom {
  margin-top: -20px;
}
.component .content_bottom .title {
  font-size: 26px;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: rgb(0, 111, 193);
  font-weight: 500;
  z-index: 139;
}
.component .content_bottom .foot {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.component .content_bottom .foot_middle {
  margin-left: 12px;
  width: 33%;
}
.component .content_bottom .foot_left {
  width: 33%;
}
.component .content_bottom .foot_right {
  margin-left: 12px;
  width: 33%;
}
.organization_2 {
  position: relative;
  margin-top: 60px;
  width: 100%;
  height: 342px;
  background-color: #45b3e0;
  border-radius: 15px;
}
.organization_2 .organization_title {
  margin: auto;
  position: absolute;
  top: 60px;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: rgb(255, 255, 255);
  font-size: 32px;
  left: 50%;
  transform: translate(-50%, -50%);
}
.organization_2 .detail {
  position: absolute;
  display: flex;
  bottom: 75px;
  width: 100%;
}
.organization_2 .introduce {
  width: 16.7%;
  height: 112px;
  border-right: 1px solid #2291d0;
  color: #fff;
  padding-bottom: 5px;
}
.organization_2 .info {
  position: relative;
}
.organization_2 .info .info_top {
  top: -1px;
  position: absolute;
  font-size: 60px;
  font-family: "Avenir-black-4", sans-serif;
  color: rgb(255, 255, 255);
  z-index: 129;
  top: 30px;
  left: 50%;
  transform: translate(-50%, -50%);
}
.organization_2 .info .info_bottom {
  position: absolute;
  white-space: nowrap;
  display: flex;
  font-size: 26px;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: rgb(255, 255, 255);
  top: 90px;
  left: 50%;
  transform: translate(-50%, -50%);
}
.organization_2 .info .info_bottom span {
  font-size: 24px;
  display: block;
  margin: 1px;
}
.organization_2 .pic {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 95px;
}
.organization_2 .text {
  position: absolute;
  font-size: 28px;
  font-family: "AlibabaPuHuiTi_2_55_Regular", sans-serif;
  color: rgb(255, 255, 255);
  left: 50%;
  transform: translateX(-50%);
  top: 120px;
}
.component_2 {
  margin-top: 60px;
}
.component_2 .content_top_2 {
  display: flex;
  justify-content: space-between;
}
.component_2 .content_bottom_2 {
  justify-content: space-between;
  display: flex;
  margin-top: -70px;
}
.component_2 .content_top_2 .content_left_2 {
  width: 33%;
  height: 530px;
}
.component_2 .content_top_2 .content_middle_2 {
  margin-left: 12px;
  width: 33%;
  height: 530px;
}
.component_2 .content_top_2 .content_right_2 {
  margin-left: 13px;
  width: 33%;
  height: 530px;
}
.component_2 .content_bottom_2 .content_left_2 {
  width: 33%;
  height: 530px;
}
.component_2 .content_bottom_2 .content_middle_2 {
  margin-left: 12px;
  width: 33%;
  height: 530px;
}
.component_2 .content_bottom_2 .content_right_2 {
  margin-left: 13px;
  width: 33%;
  height: 530px;
}
.component_2 .content_bottom_2 .content_right_2 .two_parts {
  display: flex;
}
.parts {
  width: 500px;
  margin-top: -4px;
}
.parts li {
  font-size: 18px;
  font-family: "AlibabaPuHuiTi_2_55_Regular", sans-serif;
  color: rgb(89, 87, 87);
  text-decoration: none;
  list-style: none;
  line-height: 2.058;
}
</style>
