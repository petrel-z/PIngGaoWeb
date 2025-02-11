<script setup>
import MyTitle from "@/components/MyTitle.vue";
import rightButton from "@/components/rightButton.vue";
</script>
<template>
  <div class="productSeries">
    <div class="top_img"></div>
    <MyTitle
      h="产品系列"
      English="PRODUCT SERIES"
      title-color="#fff"
      line-color="#fff"
      engColor="#fff"
    ></MyTitle>
    <div class="detail_content">
      <div class="detail_product active">
        <router-link to="/productEngineering/productSeriesDetail"
          ><span>高压电器产业</span></router-link
        >
      </div>
      <div class="detail_product">
        <span>系统集成业务</span>
      </div>
      <div class="detail_product">
        <span>电力储能业务</span>
      </div>
      <div class="detail_product">
        <span>配电网产业</span>
      </div>
      <div class="detail_product">
        <span>运维检修业务</span>
      </div>
      <div class="detail_product">
        <span>电锅炉及热储能业务</span>
      </div>
      <div class="detail_product">
        <span>零部件制造产业</span>
      </div>
      <div class="detail_product">
        <span>综合能源服务业务</span>
      </div>
      <div class="detail_product">
        <span>智慧配用电业务</span>
      </div>
    </div>
    <div class="detail_page">
      <div class="detail_page_title">高压电器产业</div>
      <div class="detail_page_content">
        <div class="detail_page_info" style="border-top: 1px solid #1078c5">
          <div class="h">01</div>
          <div class="p1">ZHW1-252（L）/T4000-50型</div>
          <div class="p2">复合式组合电器</div>
        </div>
        <div class="detail_page_info" style="border-top: 1px solid #1078c5">
          <div class="h">02</div>
          <div class="p1">ZHW1-145(L)/T3150-40型</div>
          <div class="p2">复合式组合电器</div>
        </div>
        <div class="detail_page_info" style="border-top: 1px solid #1078c5">
          <div class="h">03</div>
          <div class="p1">ZHW1-126（L）/T4000-50型</div>
          <div class="p2">复合式组合电器</div>
        </div>
        <div class="detail_page_info">
          <div class="h">04</div>
          <div class="p1">ZHW1-72.5(L)/T3150-40型</div>
          <div class="p2">复合式组合电器</div>
        </div>
        <div class="detail_page_info">
          <div class="h">05</div>
          <div class="p1">LW55-72.5/T3150-31.5型</div>
          <div class="p2">罐式六氟化硫断路器</div>
        </div>
        <div class="detail_page_info">
          <div class="h">06</div>
          <div class="p1">LW35A-72.5/T3150-31.5型</div>
          <div class="p2">高压六氟化硫断路器</div>
        </div>
        <div class="detail_page_info">
          <div class="h">07</div>
          <div class="p1">LW35-126/T3150-40型</div>
          <div class="p2">自能式六氟化硫断路器</div>
        </div>
        <div class="detail_page_info">
          <div class="h">08</div>
          <div class="p1">GXL5-1100(L) 型</div>
          <div class="p2">刚性气体绝缘输电线路</div>
        </div>
        <div class="detail_page_info">
          <div class="h">09</div>
          <div class="p1">GXL5-550(L) 型</div>
          <div class="p2">刚性气体绝缘输电线路</div>
        </div>
        <div class="detail_page_info">
          <div class="h">10</div>
          <div class="p1">GXL5-252(L) 型</div>
          <div class="p2">刚性气体绝缘输电线路</div>
        </div>
      </div>
    </div>
    <div class="rightButton">
      <rightButton></rightButton>
    </div>
    <div class="footer_img">
      <img src="@/assets/imgs/_4_productEngineeringImgs/bg-footimg.png" alt="" />
    </div>
  </div>
</template>
<style scoped>
.productSeries {
  position: relative;
  margin: auto;
  width: 1920px;
  height: 2400px;
  border: 1px solid rgb(177, 177, 177);
  padding: 64px 210px;
  border-radius: 20px;
  background-color: #fff;
  z-index: 100;
}
.rightButton {
  position: absolute;
  top: 1310px;
  right: -1px;
  z-index: 10;
}
.top_img {
  position: absolute;
  width: 1920px;
  height: 610px;
  top: 0;
  left: 0;
  background-image: url(src\\assets\\img1-1\\bg-protect.png);
  z-index: -2;
}
.detail_content {
  width: 1080px;
  height: 271px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 66px;
}
.detail_content .detail_product {
  border: 4px #1e8dce solid;
  border-radius: 10px;
  width: 342px;
  height: 77px;
  margin-bottom: 25px;
  text-align: center;
  line-height: 75px;
}
.detail_product span {
  font-size: 30px;
  font-family: "AlibabaPuHuiTi_2_35_Thin", sans-serif;
  color: rgb(255, 255, 255);
}
.active {
  border: none !important;
  color: #fff;
  background-color: #45b3e0;
}
.detail_page {
  margin-top: 150px;
}
.detail_page_title {
  font-size: 32px;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: rgb(0, 111, 193);
  text-align: center;
  margin-bottom: 63px;
}
.detail_page_content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.detail_page_info {
  width: 469px;
  height: 225px;
  border-bottom: 1px #1078c5 solid;
}

.detail_page_info .h {
  font-size: 36px;
  font-family: "AlibabaPuHuiTi_2_85_Bold", sans-serif;
  color: rgb(0, 111, 193);
  margin-top: 32px;
}
.detail_page_info .p1 {
  font-size: 26px;
  font-family: "AlibabaPuHuiTi_2_55_Regular", sans-serif;
  color: rgb(89, 87, 87);
}
.detail_page_info .p2 {
  font-size: 26px;
  font-family: "AlibabaPuHuiTi_2_55_Regular", sans-serif;
  color: rgb(89, 87, 87);
}
.footer_img {
  position: absolute;
  bottom: 0;
  left: 0;
}
.footer_img img {
  width: 1916px;
}
</style>
