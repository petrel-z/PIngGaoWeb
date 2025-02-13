<script setup>
import MyTitle from "@/components/MyTitle.vue";
import ContenPage from "@/components/ContenPage.vue";
import Item1 from "@/components/Item-1.vue";
import MyButton from "@/components/MyButton.vue";
import img1 from "@/assets/imgs/_3_partyBuildingImgs/t3_p2_person.png";

const props = defineProps({
  contentTop: {
    type: Object,
    default: () => ({
      h: "党的精神",
      English: "The spirit of the Party",
      titleColor: "#d40000",
      lineColor: "#a51517",
      engColor: "#a51517",
    }),
  },
  contentPage: {
    type: Object,
    default: () => ({
      title1: "中国共产党第二十届",
      title2: "中央委员会第三次全体会议公报",
      text: "中国共产党第二十届中央委员会第三次全体会议，于2024年7月15日至18日在北京举行出席这次全会的有，中央委员199人，候补中央委员165人。中央纪律检查委员会常务委员会委员和有关方面负责同志列席会",
      img: img1,
      btnColor: "#e06e5f",
      bgColor: "#a51617",
      lineColor: "#e06e5f",
      titleFont: "SourceHanSerifCN_Bold",
      textFont: "SourceHanSerifCN_Medium",
      fontColor: "#fce3cc",
    }),
  },
  itemContent: {
    type: Array,
    default: () => [
      {
        month: "01.14",
        title: "【一图读懂】中共中央国务院关于加快经济社会发展全面绿色转型的意见",
        text: "1月13日至14日，中国电气装备集团有限公司第一届职工代表大会第二次会议暨2025年工作会议在沪召开。会议以习近平新时代中国特色社会主义思想为指导，深",
      },
      {
        month: "01.16",
        title: "中国电气装备党委召开2024年度民主生活会会前学习暨党委理论学习中心组集体学习",
        text: "1月16日，中国电气装备党委召开2024年度民主生活会会前学习暨党委理论学习中心组集体学习，进一步统一思想、深化认识，扎实打牢开好民主生活会的思想基础",
      },
      {
        month: "01.15",
        title: "中国共产党第二十届中央委员会第三次全体会议公报",
        text: "1月14日，中国电气装备党委召开2024年度所属单位党组织书记抓基层党建工作述职评议会议。集团公司党委书记、董事长李洪凤主持会议并讲话，其他领导班子成员出席会议。",
      },
      {
        month: "01.08",
        title: "中国共产党第二十届中央委员会第三次全体会议在北京开始举行",
        text: "1月7日，中国电气装备党委副书记、总经理周群在集团公司总部会见了来访的东方电气党委副书记、总经理张彦军一行，双方就进一步深化合作进行了座谈交流。集团公司党委常委、副总经理成卫、朱安珂参加座谈。",
      },
      {
        month: "01.07",
        title: "中国共产党第二十届中央委员会第三次全体会议公报",
        text: "1月7日，中国电气装备党委副书记、总经理周群在集团公司总部会见了来访的东方电气党委副书记、总经理张彦军一行，双方就进一步深化合作进行了座谈交流。集团公司党委常委、副总经理成卫、朱安珂参加座谈。",
      },
    ],
  },
  itemCss: {
    type: Object,
    default: () => ({
      titleFont: "SourceHanSerifCN_Regular",
      textFont: "SourceHanSerifCN_Regular",
      bgColor1: "#f8f1e5",
      bgColor2: "#a51617",
      leftFontColor: "#a51617",
      leftFontColorHover: "#fce3cc",
      rightFontColorHover: "#fce3cc",
    }),
  },
});
</script>

<template>
  <!-- 党的精神 -->
  <div class="partyContentDetail">
    <div class="spirit-top">
      <MyTitle
        :title="props.contentTop.h"
        :English="props.contentTop.English"
        :title-color="props.contentTop.titleColor"
        :line-color="props.contentTop.lineColor"
        :eng-color="props.contentTop.engColor"
      ></MyTitle>
    </div>
    <div class="spirit-span">
      <ContenPage
        :title1="props.contentPage.title1"
        :title2="props.contentPage.title2"
        :text="props.contentPage.text"
        :img="props.contentPage.img"
        :btn-color="props.contentPage.btnColor"
        :bg-color="props.contentPage.bgColor"
        :line-color="props.contentPage.lineColor"
        :title-font="props.contentPage.titleFont"
        :text-font="props.contentPage.textFont"
        :font-color="props.contentPage.fontColor"
      ></ContenPage>
    </div>
    <div class="spirit-list">
      <div class="list-item" v-for="item in props.itemContent" :key="item.month">
        <Item1
          :month="item.month"
          :title="item.title"
          :text="item.text"
          :title-font="props.itemCss.titleFont"
          :text-font="props.itemCss.textFont"
          :bg-color1="props.itemCss.bgColor1"
          :bg-color2="props.itemCss.bgColor2"
          :left-font-color="props.itemCss.leftFontColor"
          :left-font-color-hover="props.itemCss.leftFontColorHover"
          :right-font-color-hover="props.itemCss.rightFontColorHover"
        ></Item1>
      </div>
    </div>
    <div class="lookMore">
      <myButton :bg-color="'#e06e5f'"></myButton>
    </div>
  </div>
</template>

<style lang="less" scoped>
.partyContentDetail {
  position: relative;

  padding: 0 6em;

  .spirit-top {
    width: 100%;
    padding: 2em 0;
  }

  .spirit-span {
    padding: 5em 0;
  }

  .spirit-list {
    width: 100%;
    height: auto;
  }

  .list-item {
    margin-bottom: 20px;
  }

  .lookMore {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2em 0;
  }
}
</style>
