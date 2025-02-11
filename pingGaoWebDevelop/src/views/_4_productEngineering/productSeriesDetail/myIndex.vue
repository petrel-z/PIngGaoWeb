<script setup>
import RightButton from "@/components/RightButton.vue";
</script>
<template>
  <div class="productSeriesDetail">
    <div class="detail_page">
      <div class="header">
        <div class="detail_title">
          <div class="img">
            <img src="@/assets/imgs/_4_productEngineeringImgs/dot.png" alt="" />
          </div>
          <div class="title">高压电器产业</div>
        </div>
        <div class="detail_text">
          <div class="text">ZHW1-252（L）/T4000-50型复合式组合电器</div>
          <div class="button">
            <div class="p" @click="this.$router.go(-1)">返回上一级</div>
          </div>
        </div>
        <div class="long_line"></div>
      </div>
      <div class="product_img">
        <img src="@/assets/imgs/_4_productEngineeringImgs/product-img.png" alt="" />
      </div>
      <div class="special">
        <div class="special_header">
          <div class="h">技术特点</div>
        </div>
        <div class="special_word">
          <ul class="introduction">
            <li>
              1.一次设备独立模块化设计。可满足典型设计方案中的各种主接线要求，适合发电厂、变电站的新建、扩建或改造工程及铁道电气化建设，特别适用于老旧变电站升级改造，减少施工难度和投资规模。
            </li>
            <li>
              2.紧凑型、小型化、轻量化设计，可实现整机运输，节省占地面积，占地面积仅为常规敞开开关式开关站的45%左右。
            </li>
            <li>3.高可靠性、少维护，现场布置灵活。</li>
            <li>4.工厂化整机预装、测试，减少现场安装、调试环节。</li>
            <li>
              5.灭弧室为双动自能式结构，操作功小，可有效降低分合闸操作对传动及本体的冲击。断路器配备弹簧操动机构，分相操作，性能可达到E2
              - M2 - C2级。
            </li>
            <li>
              6.三工位隔离-接地开关动触头为直线往复运动，采用齿轮齿条传动，传动平稳，同期性好，机械寿命可达M2级。
            </li>
            <li>
              7.三工位隔离开关母线转换电流高达1600A/300V/100次，三工位接地开关具备A类感应电流开合能力。
            </li>
            <li>
              8.进出线通过套管或电缆与其他设备相连，与GIS相比，省去了封闭母线，SF6气体用量少，符合绿色环保的发展趋势。
            </li>
          </ul>
        </div>
      </div>
      <div class="main_parameter">
        <div class="special_header">
          <div class="h">主要技术参数</div>
        </div>
        <div class="parameter_img">
          <img src="@/assets/imgs/_4_productEngineeringImgs/parameter.png" alt="" />
        </div>
      </div>
    </div>
    <div class="rightButton">
      <RightButton></RightButton>
    </div>
    <div class="footer_img">
      <img src="@/assets/imgs/_4_productEngineeringImgs/product-footer.png" alt="" />
    </div>
  </div>
</template>
<style scoped>
.productSeriesDetail {
  position: relative;
  margin: auto;
  width: 1920px;
  height: 2500px;
  /* border: 1px solid rgb(177, 177, 177); */
  padding: 0px 210px;
  border-radius: 20px;
  background-color: #fff;
  z-index: -100;
}
.rightButton {
  position: absolute;
  top: 1310px;
  right: 0;
  z-index: 10;
}
.detail_page {
  padding: 0px 100px;
  width: 1500px;
  height: 2010px;
  padding-top: 80px;
  background-color: #fff;
}
.detail_title {
  height: 30px;
  display: flex;
  margin-bottom: 30px;
}
.detail_title .title {
  font-size: 35px;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: rgb(35, 24, 21);
  line-height: 30px;
  margin-left: 5px;
}
.detail_text {
  display: flex;
  justify-content: space-between;
  width: 1310px;
  height: 54px;
  margin-bottom: 23px;
}
.detail_text .text {
  font-size: 35px;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: rgb(0, 55, 146);
}
.detail_text .button {
  width: 186px;
  height: 54px;
  background-color: #45b3e0;
  border-radius: 27px;
  z-index: 10;
  cursor: pointer;
}
.detail_text .button .p {
  font-size: 21.219px;
  font-family: "AlibabaPuHuiTi_2_55_Regular", sans-serif;
  color: rgb(255, 255, 255);
  text-align: center;
  line-height: 28px;
}
.long_line {
  width: 1310px;
  height: 4px;
  background-color: #003792;
  margin-bottom: 60px;
}
.product_img {
  width: 760px;
  height: 474px;
  margin: auto;
  margin-bottom: 50px;
}
.product_img img {
  width: 760px;
  height: 474px;
}
.special {
  width: 1300px;
  height: 380px;
  margin-bottom: 54px;
}
.special_header {
  width: 100%;
  height: 60px;
  border-radius: 8px;
  background-color: #006fc1;
  margin-bottom: 30px;
  text-align: center;
}
.special_header .h {
  font-size: 24px;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: rgb(255, 255, 255);
  line-height: 60px;
}
.special .special_word {
  height: 100%;
}
.special_word .introduction {
  font-size: 20px;
  font-family: "AlibabaPuHuiTi_2_55_Regular", sans-serif;
  color: rgb(89, 87, 87);
  line-height: 1.498;
}
.parameter_img {
  width: 733px;
  height: 600px;
  margin: auto;
}
.parameter_img img {
  width: 733px;
  height: 600px;
}
.footer_img {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 1920px;
  height: 2500px;
  z-index: -10;
}
.footer_img img {
  width: 1916px;
}
</style>
