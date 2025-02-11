<script setup>
defineOptions({
  name: "pinggaoPartyBuildingMore",
});
import myTitle from "@/components/myTitle.vue";
import ComDoubleDiv from "@/components/ComDoubleDiv.vue";
import OrderList from "@/components/OrderList.vue";
const leftList = [
  { time: "2025.01.14", text: "党纪学习教育 | 扎实起步 有序开展 推动党纪学习教育走深走实" },
  { time: "2025.01.16", text: "平高集团、平高电气纪检系统深入开展党纪学习教育" },
  { time: "2025.01.15", text: "党纪学习教育 | 扎实起步 有序开展 推动党纪学习教育走深走实" },
  { time: "2025.01.08", text: "党纪学习教育 | 扎实起步 有序开展 推动党纪学习教育走深走实" },
  { time: "2025.01.07", text: "平高集团、平高电气纪检系统深入开展党纪学习教育" },
  { time: "2025.12.29", text: "平高集团、平高电气纪检系统深入开展党纪学习教育" },
  { time: "2025.12.25", text: "平高集团、平高电气纪检系统深入开展党纪学习教育" },
  { time: "2025.12.22", text: "党纪学习教育 | 扎实起步 有序开展 推动党纪学习教育走深走实" },
  { time: "2025.12.14", text: "平高集团、平高电气纪检系统深入开展党纪学习教育" },
  { time: "2025.12.09", text: "党纪学习教育 | 扎实起步 有序开展 推动党纪学习教育走深走实" },
];
const rightList = [
  { name: "党纪学习教育 | 扎实起步…", num: "浏览量:4039" },
  { name: "平高集团、平高电气纪检系…", num: "浏览量:4039" },
  { name: "平高集团、平高电气纪检系…", num: "浏览量:4039" },
  { name: "党纪学习教育 | 扎实起步…", num: "浏览量:4039" },
  { name: "平高集团、平高电气纪检系…", num: "浏览量:4039" },
];
</script>

<template>
  <div class="spirit-more">
    <div class="title">
      <myTitle
        :title="'平高建党'"
        :English="'Pg Party Building'"
        :titleColor="'#fce3cd'"
        :lineColor="'#fce3cd'"
        :engColor="'#fce3cd'"
      ></myTitle>
    </div>
    <div class="footer-line"></div>
    <div class="list">
      <div class="left">
        <div class="listItem" v-for="item in leftList" :key="item.time">
          <ComDoubleDiv
            :title="item.time"
            :content="item.text"
            :css="{
              bgColor: '#fff',
              leftFontColor: '#a51617',
              rightFontColor: '#7b6a5d',
              rightFontFamily: 'SourceHanSerifCN_Bold',
            }"
          >
          </ComDoubleDiv>
        </div>
      </div>
      <div class="right">
        <OrderList
          :order-list="rightList"
          :bg-color="'#e06e5f'"
          :font-family="{
            titleFont: 'SourceHanSerifCN_Bold',
            contentFont: 'SourceHanSerifCN_SemiBold',
          }"
        >
        </OrderList>
      </div>
    </div>

    <div class="footer-button"></div>
  </div>
</template>

<style lang="less" scoped>
.spirit-more {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  background-image: url("@/assets/image/t3_p1_moreBg.png");

  .title {
    margin-top: 22px;
    margin-bottom: 22px;
  }

  .list {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .left {
      margin-left: 200px;

      div:nth-child(1) {
        margin-top: 0;
      }

      .listItem {
        // width: 945px;
        margin: 10px 0;
      }
    }

    .right {
      margin-right: 215px;
    }
  }

  .footer-line {
    width: 100%;
    height: 10px;
    background-image: url(@/assets/image/t3_p1_line.png);
    background-size: cover;
    background-repeat: repeat;
    // transform: translateY(-3px);
    position: absolute;
    top: -6px;
  }

  .footer-button {
    width: 100%;
    height: 100px;
    background-color: #f5f5f5;
  }
}
</style>
