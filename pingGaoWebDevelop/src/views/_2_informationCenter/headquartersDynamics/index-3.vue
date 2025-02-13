<script setup>
defineOptions({
  name: "NewsCenterIndex1-3",
});
import TextTitle from "@/components/TextTitle.vue";
import ComDoubleDiv from "@/components/ComDoubleDiv.vue";
import imgPath from "@/assets/imgs/_2_informationCenterImgs/LehYXF.png";
</script>

<template>
  <div class="body-bg">
    <div class="body">
      <div class="title">中国电气装备召开一届二次职工代表大会暨2025年工作会议</div>
      <TextTitle :color="'#1c4e9f'" :time="'2025-01-14'" :browse="488" />
      <div class="content">
        <p>
          1月13日至14日，中国电气装备集团有限公司第一届职工代表大会第二次会议暨2025年工作会议在沪召开。会议以习近平新时代中国特色社会主义思
          想为指导，深入贯彻党的二十大和二十届二中、三中全会精神，全面落实中央经济工作会议和中央企业负责人会议各项要求，总结2024年工作，分析
          当前形势，研究部署2025年重点工作，奋力开创集团公司高质量发展新篇章。
        </p>
        <img style="margin-top: 79px; margin-bottom: 81px" :src="imgPath" alt="" />
        <p>
          集团公司党委书记、董事长李洪凤作题为《一步不停 一刻不歇
          推动集团持续高质量发展》的讲话。党委副书记、董事、总经理周群作题为《强基固本 蓄势能
          守正创新启新程
          奋力开创集团公司高质量发展新篇章》的工作报告。党委常委、副总经理成卫主持会议并传达学习了中央经济工作会议和中央
          企业负责人会议精神。党委常委、副总经理张旭升宣读表彰决定。外部董事晏志勇、陈国庆、杨家义，集团公司领导班子成员出席会议。
          <br />
          <br />
          会议认为，2024年集团公司坚持以习近平新时代中国特色社会主义思想为指导，聚焦增强核心功能、提升核心竞争力，服务国家重大战略部署，在构
          建新发展格局、建设现代化产业体系中充分发挥科技创新、产业控制、安全支撑作用，彰显了“大国重器”的使命担当，各项工作迈出新的坚实步伐。
          聚焦效率效益，经营发展质效齐升；坚持科技引领，创新动能更加充沛；增强战略主动，产业焕新提档加速；强化一体协同，市场业绩加速突破；聚
          力提质增效，精益管控纵深推进；改革深化提升，体制机制持续优化；筑牢底线思维，风险防控更加严密；践行“两个维护”，党的建设坚强有力。
        </p>
      </div>
      <div class="footer">
        <ComDoubleDiv
          style="margin-right: 1em"
          title="上一篇"
          content="中国电气装备召开一届二次职工代表大会暨2025年"
        />
        <ComDoubleDiv title="下一篇" content="中国电气装备召开一届二次职工代表大会暨2025年" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.body-bg {
  background-image: url("../../../assets/imgs/_2_informationCenterImgs/newsBg-1.png");
  padding: 0 210px;
  background-size: cover;
}
.body {
  background-color: #fff;
  padding: 0 100px;
}
.title {
  font-size: 35px;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(0, 55, 146);
  line-height: 1.4;
  text-align: center;
  padding-top: 117px;
  margin-bottom: 70px;
}

.content {
  margin-top: 56px;
  text-align: center;
  font-size: 20px;
  font-family: "AlibabaPuHuiTi_2_45_Light";
  color: rgb(89, 87, 87);
  line-height: 1.498;
  width: 100%;
}

.content p:first-child {
  height: auto;
  text-align: left;
}

.content p:nth-of-type(2) {
  height: auto;
  text-align: left;
}

.footer {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 20vh;
  padding: 2em 0;
}
</style>
