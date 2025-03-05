<script setup>
defineOptions({
  name: "PartySpiritMore",
});
import myTitle from "@/components/MyTitle.vue";
import OrderList from "@/components/OrderList.vue";
import Item2 from "@/components/Item-2.vue";
import MyPagination from "@/components/MyPagination.vue";
const leftList = [
  { time: "2025.01.14", text: "习近平：高举中国特色社会主义伟大旗帜 为全面建设社会主义…" },
  { time: "2025.01.16", text: "习近平：高举中国特色社会主义伟大旗帜 为全面建设社会主义…" },
  { time: "2025.01.15", text: "中国共产党第二十届中央委员会第三次全体会议公报" },
  { time: "2025.01.08", text: "【一图读懂】中共中央国务院关于加快经济社会发展全面绿色转…" },
  { time: "2025.01.07", text: "习近平：高举中国特色社会主义伟大旗帜 为全面建设社会主义…" },
  { time: "2025.12.29", text: "中国共产党第二十届中央委员会第三次全体会议公报" },
  { time: "2025.12.25", text: "中国共产党第二十届中央委员会第三次全体会议公报" },
  { time: "2025.12.22", text: "中国共产党第二十届中央委员会第三次全体会议公报" },
  { time: "2025.12.14", text: "中国电气装备召开2025年安全稳定工作会议" },
  { time: "2025.12.09", text: "中国共产党第二十届中央委员会第三次全体会议公报" },
];
const rightList = [
  { name: "习近平：高举中国特色社会…", num: "浏览量:4039" },
  { name: "中国共产党第二十届中央…", num: "浏览量:4039" },
  { name: "中国共产党第二十届中央…", num: "浏览量:4039" },
  { name: "习近平：高举中国特色社会…", num: "浏览量:4039" },
  { name: "中国共产党第二十届中央…", num: "浏览量:4039" },
];
</script>

<template>
  <div class="spirit-more">
    <div class="mytitle">
      <myTitle :title="'党的精神'" :english="'The spirit of the Party'" :titleColor="'#fce3cd'" :lineColor="'#fce3cd'"
        :engColor="'#fce3cd'"></myTitle>
    </div>
    <div class="footer-line"></div>
    <div class="list">
      <div class="left">
        <div class="listItem" v-for="item in leftList" :key="item.time">
          <Item2 :time="item.time" :text="item.text" :timeColor="'#a51617'" :textColor="'#7b6a5d'"
            :text-font-family="'SourceHanSerifCN_Bold'" :hover-bg-color="'#e06e5f'">
          </Item2>
        </div>
      </div>
      <div class="right">
        <OrderList :order-list="rightList" :bg-color="'#e06e5f'" :font-family="{
          titleFont: 'SourceHanSerifCN_Bold',
          contentFont: 'SourceHanSerifCN_SemiBold',
        }">
        </OrderList>
      </div>
    </div>
    <div class="footer-button">
      <MyPagination :font-color="'#a51617'"></MyPagination>
    </div>
  </div>
</template>

<style lang="less" scoped>
.spirit-more {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  background-image: url("../../../assets/imgs/_3_partyBuildingImgs/t3_p1_moreBg.png");
  background-size: cover;
  height: auto;

  .mytitle {
    width: 100%;
    margin-top: 22px;
    margin-bottom: 22px;
    padding-left: 11%;
  }

  .list {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .left {
      margin-left: 11%;
      width: 60%;

      div:nth-child(1) {
        margin-top: 0;
      }

      .listItem {
        width: 100%;
        height: auto;
        margin: 10px 0;
      }
    }

    .right {
      width: 40%;
      margin-left: 2%;
      margin-right: 11%;
      overflow: hidden;
    }
  }

  .footer-line {
    width: 100%;
    height: 10px;
    background-image: url("../../../assets/imgs/_3_partyBuildingImgs/t3_p1_line.png");
    background-size: cover;
    background-repeat: repeat;
    // transform: translateY(-3px);
    position: absolute;
    top: -6px;
  }

  .footer-button {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    padding: 3em 0;
  }
}

@media (max-width: 900px) {
  .spirit-more {
    .footer-line {
      display: none;
    }
    .mytitle {
      margin-top: 2rem;
      margin-bottom: 2rem;
      padding-left: 5%;
    }

    .list {
      flex-direction: column;

      .left {
        margin: 0;
        padding: 0 5%;
        width: 100%;

        div:nth-child(1) {
          margin-top: 0;
        }

        .listItem {
          width: 100%;
          height: auto;
          margin: 10px 0;
        }
      }

      .right {
        width: 40%;
        margin-left: 2%;
        margin-right: 11%;
        overflow: hidden;
      }
    }

    .footer-line {
      width: 100%;
      height: 10px;
      background-image: url("../../../assets/imgs/_3_partyBuildingImgs/t3_p1_line.png");
      background-size: cover;
      background-repeat: repeat;
      // transform: translateY(-3px);
      position: absolute;
      top: -6px;
    }

    .footer-button {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
      padding: 3em 0;
    }
  }
}
</style>
