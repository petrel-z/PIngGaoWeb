<script setup>
import newsBar from "@/components/newsBar.vue";
import ComDoubleDiv from "@/components/ComDoubleDiv.vue";
import imgPath from "@/assets/imgs/_3_partyBuildingImgs/t3_p2_person.png";
defineOptions({
  name: "PartySpiritDetail",
});
</script>

<template>
  <div class="spirit-detail">
    <div class="footer-line"></div>
    <div class="detail">
      <div class="detail-content">
        <div style="width: 100%; padding: 5em 5em">
          <div class="title">中国电气装备召开一届二次职工代表大会暨2025年工作会议</div>
          <newsBar :time="'2025-01-14'" :browse="'488'"></newsBar>
          <div class="text">
            <p>
              中国共产党第二十届中央委员会第三次全体会议，于2024年7月15日至18日在北京举行出席这次全会的有，中央委员199人，候补中央委员165人。中央纪律检查委员会常务委员会委员和有关方面负责同志列席会议
            </p>
            <div class="image">
              <img :src="imgPath" alt="" />
            </div>
            <p>
              集团公司党委书记、董事长李洪凤作题为《一步不停一刻不歇推动集团持续高质量发展》的讲话。党委副书记、董事、总经理周群作题力《强基固本蓄势能守正创新启新程
              奋力开创集团公司高质量发展新篇章》的工作报告。党委常委、副总经理成卫主持会议并传达学习了中央经济工作会议和中央企业负责人会议精神。党委常委、副总经理张旭升宣读表彰决定。外部董事晏志勇、陈国庆、杨家义，集团公司领导班子成员出席会议。<br /><br />
              会议认为，2024年集团公司坚持以习近平新时代中国特色社会主义思想为指导，聚焦增强核心功能、提升核心竞争力，服务国家重大战略部署，在构建新发展格局、建设现代化产业体系中充分发挥科技创新、产业控制、安全支撑作用，彰显了“大国重器”的使命担当，各项工作迈出新的坚实步伐。聚焦效率效益，经营发展质效齐升；坚持科技引领，创新动能更加充沛；增强战略主动，产业焕新提档加速；强化一体协同，市场业绩加速突破；聚力提质增效，精益管控纵深推进：改革深化提升，体制机制持续优化：筑牢底线思维，风险防控更加严密；践行“两个维护”，党的建设坚强有力。
            </p>
          </div>

          <div class="button">
            <div class="button-left">
              <ComDoubleDiv
                :title="'上一篇'"
                :content="'中国共产党第二十届中央委员会第三次全体会议公报'"
                :bgColor="'#f8f1e5'"
                :leftFontColor="'#a51617'"
                :rightFontColor="'#7b6a5d'"
              >
              </ComDoubleDiv>
            </div>
            <div class="button-right">
              <ComDoubleDiv
                :title="'下一篇'"
                :content="'中国共产党第二十届中央委员会第三次全体会议公报'"
                :bgColor="'#f8f1e5'"
                :leftFontColor="'#a51617'"
                :rightFontColor="'#7b6a5d'"
              >
              </ComDoubleDiv>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.spirit-detail {
  position: relative;
  .detail {
    width: 100%;
    padding: 0 11%;

    height: auto;
    background-image: url("../../../assets/imgs/_3_partyBuildingImgs/t3_p1_detailBg.png");
    background-size: auto;
    display: flex;
    justify-content: center;
    background-size: cover;

    .detail-content {
      width: 100%;
      // height: 1996px;
      // height: 1549px;
      background-color: #fff;
      // margin: 0 100px 0 100px;

      .title {
        width: 100%;
        height: 110px;
        text-align: center;
        font-size: 35px;
        font-family: "SourceHanSerifCN";
        color: #a51617;
      }

      .text {
        width: 100%;
        text-align: center;
        font-size: 20px;
        font-family: "SourceHanSerifCN_Regular";
        color: #7b6a5d;
        line-height: 1.498;
        text-align: justify;

        padding-top: 55px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        .image {
          height: 50%;
          width: 58%;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 80px 0 120px 0;
          border-radius: 15px;

          img {
            width: 100%;
            height:auto;
          }
        }
      }

      .button {
        display: flex;
        justify-content: space-between;
        margin-top: 3%;
        width: 100%;
      }
    }
  }

  .footer-line {
    width: 100%;
    height: 10px;
    background-image: url("../../../assets/imgs/_3_partyBuildingImgs/t3_p1_line.png");
    background-size: cover;
    background-repeat: repeat;
    position: absolute;
    top: -3px;
  }
}
</style>
