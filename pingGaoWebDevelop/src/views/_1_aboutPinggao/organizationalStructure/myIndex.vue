
<script setup>
import MyTitle from '@/components/MyTitle.vue'
import headLine from '@/components/MyHeadLine.vue'

</script>
<template>
  <!-- 组织机构 -->
  <div class="organizationalStructure">
    <MyTitle class="mytitle" title="组织机构" english="organization structure"></MyTitle>
    <div class="organization">
      <div class="organization_title">平高集团有限公司</div>
      <div class="detail">
        <div class="introduce">
          <div class="info">
            <div class="info_top">12</div>
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
            <div class="info_top">2</div>
            <div class="info_bottom">分公司<span>/</span>家</div>
          </div>
        </div>
        <div class="introduce">
          <div class="info">
            <div class="info_top">1</div>
            <div class="info_bottom">支撑平台<span>/</span>家</div>
          </div>
        </div>
      </div>
    </div>
    <div class="component">
      <div class="content_top1">
        <div class="info">
          <headLine title="本部部门"></headLine>
          <ul class="parts">
            <li>办公室(党委办公室、董事会办公室)</li>
            <li>发展策划部</li>
            <li>财务资产部（资本管理部）</li>
            <li>党委组织部（人力资源部、全面深化改革办公室）</li>
            <li>科信部</li>
            <li>纪委（党委巡察办）</li>
            <li>合规管理部（审计部）</li>
            <li>党委工作部（党委宣传部、工会、团委）</li>
            <li>市场运营部（国际部）</li>
            <li>安全质量部</li>
            <li>生产物资部</li>
          </ul>
        </div>
        <div class="info">
          <headLine title="全资子公司"></headLine>
          <ul class="parts">
            <li>北京平高清大科技发展有限公司</li>
            <li>河南平高祥和电气有限公司</li>
            <li>平高集团（河南）电力器材科技有限公司</li>
            <li>平高集团物链科技有限公司</li>
            <li>平高集团电力检修工程有限公司</li>
            <li>西安平高智慧能源有限公司</li>
            <li>雄安平高新能源科技有限公司</li>
            <li>平高综合能源服务有限公司</li>
            <li>平高集团智能电气有限公司</li>
            <li>南京平高信息通信技术有限公司</li>
            <li>河南平高电力设备有限公司</li>
            <li>平高集团能源发展有限公司</li>
          </ul>
        </div>
        <div class="info">
          <headLine title="控股子公司"></headLine>
          <ul class="parts">
            <li>天津平高易电科技有限公司</li>
            <li>江苏平高泰事达电气有限公司</li>
            <li>平高集团智能电力科技有限公司</li>
            <li>平高集团华生电力设计有限公司</li>
            <li>湖南平高开关有限公司</li>
            <li>上海平高智联科技有限公司</li>
          </ul>
        </div>
      </div>

      <div class="content_middle1">
        <div class="info">
          <headLine title="支撑平台"></headLine>
          <ul class="parts">
            <li>平高集团工程项目管理中心</li>
          </ul>
        </div>
        <div class="info">
          <headLine title="营销平台"></headLine>
          <ul class="parts">
            <li>平高集团营销服务中心</li>
          </ul>
        </div>
        <div class="info">
          <headLine title="合营公司"></headLine>
          <ul class="parts">
            <li>平高东芝（河南）开关零部件制造有限公司</li>
          </ul>
        </div>
      </div>
      <div class="content_bottom1">
        <div class="info">
          <headLine title="分公司"></headLine>
          <ul class="parts">
            <li>平高集团有限公司综合服务分公司</li>
            <li>平高集团电力储能事业部</li>
          </ul>
        </div>
        <div class="info">
          <headLine title="科研平台"></headLine>
          <ul class="parts">
            <li>平高大连交大轨道电气技术研究院</li>
            <li>清华大学（电机系）平高集团有限公司电气技术联合研究中心</li>
            <li>平高集团智慧能源技术研究</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="organization_2" v-if="false">
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
          <div class="info" >
            <div class="info_top">1</div>
            <div class="info_bottom">合营公司<span>/</span>家</div>
          </div>
        </div>
        <div class="introduce">
          <div class="info" >
            <div class="info_top">9</div>
            <div class="info_bottom">本部部门<span>/</span>家</div>
          </div>
        </div>
        <div class="introduce">
          <div class="info" >
            <div class="info_top">12</div>
            <div class="info_bottom">直属分公司<span>/</span>家</div>
          </div>
        </div>
        <div class="introduce">
          <div class="info" >
            <div class="info_top">4</div>
            <div class="info_bottom">支撑平台<span>/</span>家</div>
          </div>
        </div>
      </div>
    </div>
    <div class="component_2" v-if="false">
      <div class="content_top_2">
        <div class="content_left_2">
          <headLine title="本部部门"></headLine>
          <ul class="parts">
            <li>综合管理部（党建工作部、纪委办公室）</li>
            <li>人劳部</li>
            <li>财务部</li>
            <li>证券部</li>
            <li>审计部</li>
            <li>科技管理部（发展策划部）</li>
            <li>生产物资部</li>
            <li>安全质量部</li>
            <li>平高集团客户服务中心</li>
          </ul>
        </div>
        <div class="content_middle_2">
          <headLine title="全资子公司"></headLine>
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
          <headLine title="投股子公司"></headLine>
          <ul class="parts">
            <li>河南平芝高压开关有限公司</li>
            <li>上海平高天灵开关有限公司</li>
            <li>希捷爱斯（上海）电气有限公司</li>
            <li>上海雷泽灵电气有限公司</li>
            <li>广州平高电力技术有限公司</li>
            <li>平高帕拉特（河南）能源科技有限公司</li>
            <li>平高集团印度电力有限公司</li>
            <li>平高新松电力智能装备（河南)有限公司</li>
          </ul>
        </div>
      </div>
      <div
        class="content_bottom_2"
      >
        <div class="content_left_2">
          <headLine title="合营公司"></headLine>
          <ul class="parts">
            <li>平高东芝（廊坊）避雷器有限公司</li>
          </ul>
        </div>
        <div class="content_middle_2">
          <headLine title="支撑平台"></headLine>
          <ul class="parts">
            <li>工程技术中心（计量中心）</li>
            <li>市场营销中心</li>
            <li>综合运行中心</li>
            <li>特高压管理中心</li>
          </ul>
        </div>
        <div class="content_right_2">
          <headLine title="分厂 ，事业部"></headLine>
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
  padding: 4rem 11%;
  border-radius: 1.25rem;
  background-color: #fff;
  z-index: -100;
}

.organization {
  position: relative;
  margin-top: 3.75rem;
  width: 100%;
  height: 34rem;
  background-color: #006fc1;
  border-radius: 0.9375rem;
  margin-bottom: 5rem;
}

.organization .organization_title {
  margin: auto;
  position: absolute;
  top: 3.75rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(255, 255, 255);
  font-size: 2rem;
  left: 50%;
  transform: translate(-50%, -50%);
}

.organization .detail {
  position: absolute;
  top: 6rem;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.organization .introduce {
  width: 33.333%;
  height: 7rem;
  border-right: 0.2rem solid #2291d0;
  color: #fff;
  padding-bottom: 0.3125rem;
  box-sizing: border-box;
  margin-top: 4rem;
}

.organization .info {
  position: relative;
}

.organization .info .info_top {
  top: -0.0625rem;
  position: absolute;
  font-size: 4.5rem;
  font-family: "Avenir-black-4";
  color: rgb(255, 255, 255);
  z-index: 129;
  top: 1.875rem;
  left: 50%;
  transform: translate(-50%, -50%);
}

.organization .info .info_bottom {
  position: absolute;
  white-space: nowrap;
  display: flex;
  font-size: 2.625rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(255, 255, 255);
  top: 5.625rem;
  left: 50%;
  transform: translate(-50%, -50%);
}
.organization .info_bottom span{
  font-size: 2.6rem !important;
}

.organization .info .info_bottom span {
  font-size: 1.6rem;
  display: block;
  margin: 0.0625rem;
}

.component {
  margin-top: 2.75rem;
}

.component .content_top1,
.component .content_bottom1 {
  justify-content: flex-start;
  transition: transform 1s ease, opacity 0.5s ease; /* 过渡效果 */
  margin-bottom: 4rem;
}

.component .content_middle1 {
  justify-content: space-between;
  margin-bottom: 4rem;
}

.organization_2 {
  position: relative;
  margin-top: 3.75rem;
  width: 100%;
  height: 21.375rem;
  background-color: #45b3e0;
  border-radius: 0.9375rem;
}

.organization_2 .organization_title {
  margin: auto;
  position: absolute;
  top: 3.75rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(255, 255, 255);
  font-size: 2rem;
  left: 50%;
  transform: translate(-50%, -50%);
}

.organization_2 .detail {
  position: absolute;
  display: flex;
  bottom: 4.6875rem;
  width: 100%;
}

.organization_2 .introduce {
  width: 16.7%;
  height: 7rem;
  border-right: 0.0625rem solid #2291d0;
  color: #fff;
  padding-bottom: 0.3125rem;
}

.organization_2 .info {
  position: relative;
  transform: scale(0.3); /* 初始缩小 */
  transition: transform 0.5s ease, opacity 0.5s ease; /* 过渡效果 */
}

.organization_2 .info.scale-up {
  transform: scale(1); /* 放大到原始大小 */
  visibility: visible; /* 可见 */
}

.organization_2 .info .info_top {
  top: -0.0625rem;
  position: absolute;
  font-size: 3.75rem;
  font-family: "Avenir-black-4";
  color: rgb(255, 255, 255);
  z-index: 129;
  top: 1.875rem;
  left: 50%;
  transform: translate(-50%, -50%);
}

.organization_2 .info .info_bottom {
  position: absolute;
  white-space: nowrap;
  display: flex;
  font-size: 1.625rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(255, 255, 255);
  top: 5.625rem;
  left: 50%;
  transform: translate(-50%, -50%);
}

.organization_2 .info .info_bottom span {
  font-size: 1.5rem;
  display: block;
  margin: 0.0625rem;
}

.organization_2 .pic {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 5.9375rem;
}

.organization_2 .text {
  position: absolute;
  font-size: 1.75rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular";
  color: rgb(255, 255, 255);
  left: 50%;
  transform: translateX(-50%);
  top: 7.5rem;
}

.component_2 {
  margin-top: 3.75rem;
}

.component_2 .content_top_2 {
  display: flex;
  justify-content: space-between;
  transition: transform 1s ease, opacity 0.5s ease; /* 过渡效果 */
}
.component_2 .content_bottom_2 {
  justify-content: space-between;
  display: flex;
  margin-top: -4.375rem;
  transform: translateX(100%); /* 初始位置在左边 */
  transition: transform 1s ease, opacity 0.5s ease; /* 过渡效果 */
}

.component_2 .content_top_2 .content_left_2 {
  width: 33%;
  height: 33.125rem;
}

.component_2 .content_top_2 .content_middle_2 {
  margin-left: 0.75rem;
  width: 33%;
  height: 33.125rem;
}

.component_2 .content_top_2 .content_right_2 {
  margin-left: 0.8125rem;
  width: 33%;
  height: 33.125rem;
}

.component_2 .content_bottom_2 .content_left_2 {
  width: 33%;
  height: 33.125rem;
}

.component_2 .content_bottom_2 .content_middle_2 {
  margin-left: 0.75rem;
  width: 33%;
  height: 33.125rem;
}

.component_2 .content_bottom_2 .content_right_2 {
  margin-left: 0.8125rem;
  width: 33%;
  height: 33.125rem;
}

.component_2 .content_bottom_2 .content_right_2 .two_parts {
  display: flex;
}

.parts {
  width: 100%;
  margin-top: -0.25rem;
  margin-bottom: 6rem;
}

.parts li {
  font-size: 2.5rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular";
  color: rgb(89, 87, 87);
  text-decoration: none;
  list-style: none;
  line-height: 2.058;
}
</style>
