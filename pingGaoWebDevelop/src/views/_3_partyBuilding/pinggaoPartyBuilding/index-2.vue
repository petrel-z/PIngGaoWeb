<script setup>
import newsBar from "@/components/newsBar.vue";
import ComDoubleDiv from "@/components/ComDoubleDiv.vue";
defineOptions({});
</script>

<template>
  <div class="building-detail">
    <div class="footer-line"></div>
    <div class="detail">
      <div class="detail-content">
        <div style="width: 100%; padding: 5em 5em">
          <div class="title">中国电气装备召开一届二次职工代表大会暨2025年工作会议</div>
          <newsBar :time="'2025-01-14'" :browse="488"></newsBar>
          <div class="text">
            <p>
              党纪学习教育启动以来，平高集团、平高电气党委高度重视，将党纪学习教育作为一项重要的政治任务，坚持两手抓、两促进，坚持因地制宜、有的放矢，各项工作扎实推进，纵深推进全面从严治党，为企业高质量发展提供坚强纪律保障。
            </p>
            <div class="image">
              <img src="../../../assets/imgs/_3_partyBuildingImgs/t3_p2_img.png" alt="" />
            </div>
            <p>
              一是分层分类抓指导。召开党委专题会议启动部署党纪学习教育工作，根据党委、党总支、党支部不同建制单位实际，实行差异化管理、精准化督导，
              系统汇编党纪学习资料、梳理汇总违反党纪警示教育片，加强基层指导。党委单位实行“1211”机制（一专班、工作计划和学习计划、一个进展情况统计表
              、一个督导工作安排），党总支单位实行“111”机制（一个工作学习计划、
              一个进展情况统计表、一个督导工作安排）、支部单位实行“11”机制（一个工
              作学习计划和一个进展情况统计表），先后编发工作提示5期，并通过审阅工作计划、调阅学习资料等方式加强督导。二是建立机制抓落实。建立“周旬月
              ”工作机制（周报送工作计划、旬统计进展情况、月召开工作推进会），积极开展宣传推广，先后发布启动部署、学习进展等特色经验成果报道14期，
              各类宣传稿件5（余篇，营造浓厚的学习氛围。
            </p>
          </div>

          <div class="button">
            <div class="button-left">
              <ComDoubleDiv :title="'上一篇'" :content="'中国共产党第二十届中央委员会第三次全体会议公报'" :bgColor="'#f8f1e5'"
                :leftFontColor="'#a51617'" :rightFontColor="'#7b6a5d'">
                >
              </ComDoubleDiv>
            </div>
            <div class="button-right">
              <ComDoubleDiv :title="'下一篇'" :content="'中国共产党第二十届中央委员会第三次全体会议公报'" :bgColor="'#f8f1e5'"
                :leftFontColor="'#a51617'" :rightFontColor="'#7b6a5d'">
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
.building-detail {
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
      background-color: #fff;

      .title {
        width: 100%;
        height: 8rem;
        line-height: 8rem;
        text-align: center;
        font-size: 2.3rem;
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
            height: auto;
          }
        }
      }

      .button {
        display: flex;
        justify-content: space-between;
        margin-top: 3%;
        width: 100%;
        height: 5rem;

        .button-left,
        .button-right {
          width: 48%;
          height: 100%;
        }
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
@media (max-width: 1600px) {}

@media (max-width: 900px) {
  .spirit-detail {
    .detail {
      .detail-content {
        .title {
          height: 6rem;
          line-height: 6rem;
          font-size: 1.6rem;
        }
      }
    }
  }
}
</style>
