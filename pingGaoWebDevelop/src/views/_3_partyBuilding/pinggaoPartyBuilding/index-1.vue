<script setup>
defineOptions({});
import partyContentBar from "../partyContentBar.vue";
import partyContentDetail from "../partyContentDetail.vue";
import img1 from "@/assets/imgs/_3_partyBuildingImgs/t3_p2_img.png";
import line from '@/assets/imgs/_3_partyBuildingImgs/t3_p1_line.png'

const contentBar = {
  title1: "党纪学习教育 | 扎实起步",
  title2: "有序开展 推动党纪学习教育走深走实",
  content:
    "党纪学习教育启动以来，平高集团、平高电气党委高度重视，将党纪学习教育作为一项重要的政治任务，坚持两手抓、两促进，坚持因地制宜、有的放矢，各项工作扎实推进，纵深推进全面从严治党，为企业高质量发展提供坚强纪律保障",
};
const contentTop = {
  h: "平高建党",
  english: "Pg Party Building",
  titleColor: "#a51517",
  lineColor: "#a51517",
  engColor: "#a51517",
};
const contentPage = {
  title1: "党纪学习教育 | 扎实起步",
  title2: "有序开展 推动党纪学习教育走深走实",
  text: "中国共产党第二十届中央委员会第三次全体会议，于2024年7月15日至18日在北京举行出席这次全会的有，中央委员199人，候补中央委员165人。中央纪律检查委员会常务委员会委员和有关方面负责同志列列席会议。党的二十大代表中部分基层同志和专家学者也列席了会议。",
  img: img1,
  btnColor: "#e06e5f",
  bgColor: "#a51617",
  lineColor: "#e06e5f",
  titleFont: "SourceHanSerifCN_Bold",
  textFont: "SourceHanSerifCN_Medium",
  fontColor: "#fce3cc",
};
const itemContent = [
  {
    month: "01.14",
    title: "平高集团、平高电气纪检系统深入开展党纪学习教育",
    text: "1月13日至14日，中国电气装备集团有限公司第一届职工代表大会第二次会议暨2025年工作会议在沪召开。会议以习近平新时代中国特色社会主义思想为指导，深",
  },
  {
    month: "01.16",
    title: "党纪学习教育 | 扎实起步 有序开展 推动党纪学习教育走深走实",
    text: "1月16日，中国电气装备党委召开2024年度民主生活会会前学习暨党委理论学习中心组集体学习，进一步统一思想、深化认识，扎实打牢开好民主生活会的思想基础",
  },
  {
    month: "01.15",
    title: "平高集团、平高电气纪检系统深入开展党纪学习教育",
    text: "1月14日，中国电气装备党委召开2024年度所属单位党组织书记抓基层党建工作述职评议会议。集团公司党委书记、董事长李洪凤主持会议并讲话，其他领导班子成员出席会议。",
  },
  {
    month: "01.08",
    title: "平高集团、平高电气纪检系统深入开展党纪学习教育",
    text: "1月7日，中国电气装备党委副书记、总经理周群在集团公司总部会见了来访的东方电气党委副书记、总经理张彦军一行，双方就进一步深化合作进行了座谈交流。集团公司党委常委、副总经理成卫、朱安珂参加座谈。",
  },
  {
    month: "01.07",
    title: "平高集团、平高电气纪检系统深入开展党纪学习教育",
    text: "1月7日，中国电气装备党委副书记、总经理周群在集团公司总部会见了来访的东方电气党委副书记、总经理张彦军一行，双方就进一步深化合作进行了座谈交流。集团公司党委常委、副总经理成卫、朱安珂参加座谈。",
  },
];
</script>

<template>
  <div class="party-building">
    <div class="building-top">
      <partyContentBar
        :title1="contentBar.title1"
        :content="contentBar.content"
        :title2="contentBar.title2"
      >
      </partyContentBar>
    </div>
    <div class="footer-line" :style="{ backgroundImage: `url(${line})` }"></div>
    <div class="building-content">
      <div class="bg-color"></div>
      <partyContentDetail
        :content-top="contentTop"
        :content-page="contentPage"
        :item-content="itemContent"
        :to-state="false"
      ></partyContentDetail>
      <div class="white-div"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.party-building {
  position: relative;

  .footer-line {
    width: 100%;
    height: 10px;
    background-image: url("../../../assets/imgs/_3_partyBuildingImgs/t3_p1_line.png");
    background-size: cover;
    background-repeat: repeat;
    position: absolute;
    top: -3px;
  }

  .building-content {
    position: relative;
    .white-div {
      width: 100%;
      height: auto;
      background-color: #fff; // 白色背景 #fff
    }
    .bg-color {
      width: 100%;
      position: absolute;
      height: 70vh;
      background-color: #f8f1e5;
    }
  }
}
</style>
