<script setup>
defineOptions({
  name: "NewsCenterIndex5-1",
});
import MyTitle from "@/components/MyTitle.vue";
import MyContent from "@/components/MyContent.vue";
import Item2 from "@/components/Item-2.vue";
import MyPagination from "@/components/MyPagination.vue";
</script>

<template>
  <div>
    <div style="position: relative">
      <div class="bodyBg1"></div>
      <div class="body">
        <div style="padding-top: 64px">
          <MyTitle title="最新公告" English="LATEST ANNOUNCEMENT" />
        </div>
        <div style="margin-top: 58px">
          <MyContent
            title="关于开设拖欠中小企业账款诉求受理渠道的公示"
            content1="为认真落实国务院国资委关于助力中小企业纾困解难促进协同发展的工作要求，根据《保障中小企业款项支付条例》有关规定，完善应付账款管理
机制，平高集团有限公司（以下简称“集团”）开设清理拖欠中小企业款项诉求反映受理渠道。请各中小企业供应商、服务商对集团所属子企业拖
欠无争议应付账款行为进行监督。"
            buttonFlag="true"
          />
        </div>
        <div class="items">
          <ul>
            <li v-for="i in 5" :key="i">
              <Item2 bgColor="#def1fb" size="big" />
            </li>
          </ul>
        </div>
        <div style="display: flex; justify-content: center; margin-top: 55px; margin-bottom: 85px">
          <MyPagination />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  height: 611px;
  background-image: url("../../../assets/imgs/_2_informationCenterImgs/headerBg.png");
  background-size: cover;
}
.body {
  margin: 0 11%;
}
.bodyBg1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 600px;
  background-color: #def1fb;
  z-index: -1;
}

.items ul {
  justify-content: space-between;
  margin-top: 56px;
}
.items ul li {
  margin-top: 14px;
}
</style>
