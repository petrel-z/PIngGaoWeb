<script setup>
import { ref } from "vue";
import MyContent from "@/components/MyContent.vue";
import MyTitle from "@/components/MyTitle.vue";
const items = ref([
  {
    title: "国家级人才/人",
    num: 16,
  },
  {
    title: "省部行业级人才/人",
    num: 126,
  },
  {
    title: "城市级人才/人",
    num: 127,
  },
]);
const HumanContentItems = ref([
  {
    title: "河南省政府\n特贴专家/人",
    num: 4,
  },
  {
    title: "河南省杰出\n专业技术人才/人",
    num: 1,
  },
  {
    title: "中原技能\n大奖/人",
    num: 3,
  },
  {
    title: "中原\n大工匠/人",
    num: 2,
  },
  {
    title: "中原\n技能大师/人",
    num: 1,
  },
  {
    title: "河南省\n技术能手/人",
    num: 66,
  },
  {
    title: "河南省\n技术标兵/人",
    num: 7,
  },
  {
    title: "河南省学术\n技术带头人/人",
    num: 1,
  },
  {
    title: "河南省五一劳动\n奖章/人",
    num: 15,
  },
]);
import HumanContent from "@/components/HumanContent.vue";
</script>

<template>
  <div style="position: relative; min-height: 2290px">
    <div class="bodyBg"></div>
    <div class="body-content">
      <div>
        <MyTitle title="人才队伍" English="TALENT TEAM"></MyTitle>
      </div>
      <div style="margin-top: 55px">
        <MyContent
          title="平高集团"
          content1="平高集团始终坚持以人为本，关注员工成长成才，优化人才成长环境，将人才强企战略纳入集团发展战略之一，引进和培育"
          content2="了一支高素质的优秀人才队伍。"
          :bottom-items="items"
        />
      </div>
      <div style="margin-top: 94px">
        <HumanContent style="margin-bottom: -2px" />
        <HumanContent title="拥有省部行业级人才126人" :items="HumanContentItems" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.bodyBg {
  background-image: url("../../../assets/imgs/_8_humanResourcesImgs/bg-1.png");
  background-size: cover;
  width: 100%;
  min-height: 884px;
  position: absolute;
  bottom: 0px;
  z-index: -1;
}
.body-content {
  margin: 0 10em;
  padding-top: 66px;
}
</style>
