<script setup>
import MyTitle from "@/components/MyTitle.vue";
import Item2 from "@/components/Item-2.vue";
</script>

<template>
  <div style="position: relative; min-height: 1562px; background-color: #def1fb; z-index: -2">
    <div class="bodyBg"></div>
    <div class="body-content">
      <div>
        <MyTitle title="人才招聘" English="TALENT RECRUITMENT"></MyTitle>
      </div>
      <div style="display: flex; margin-top: 40px">
        <div class="left">高校毕业生招聘</div>
        <div class="right">社会公开招聘</div>
      </div>
      <div style="margin-top: 70px">
        <div class="title">高校毕业生招聘</div>
        <div style="margin-top: 37px">
          <Item2
            v-for="i in 3"
            :key="i"
            style="margin-bottom: 17px"
            time="2022.03.08"
            text="国电气装备旗下平高集团2022年社会招聘公告"
            size="big"
          />
        </div>
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
  top: 705px;
  z-index: -1;
}
.body-content {
  margin: 0 11%;
  padding-top: 66px;
}

.left {
  width: 48%;
  height: 30vh;
  line-height: 30vh;
  cursor: pointer;
  background-image: url("../../../assets/imgs/_8_humanResourcesImgs/divBg-1.png");
  background-size: cover;
  border-radius: 10px;
  font-size: 32px;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(255, 255, 255);
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.right {
  font-size: 32px;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(255, 255, 255);
  border-radius: 10px;
  text-align: center;
  width: 48%;
  height: 30vh;
  line-height: 30vh;
  cursor: pointer;
  background-image: url("../../../assets/imgs/_8_humanResourcesImgs/divBg-2.png");
  background-size: cover;
  margin-left: 4%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.title {
  font-size: 32px;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(0, 111, 193);
  line-height: 1.156;
  text-align: center;
}
</style>
