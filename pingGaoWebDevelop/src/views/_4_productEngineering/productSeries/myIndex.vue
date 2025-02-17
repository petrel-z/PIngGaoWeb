<script setup>
import MyTitle from "@/components/MyTitle.vue";
// 获取图片元素
const mainImage = document.getElementById('.img');

// 获取所有带有 data-image 属性的 div 元素
const imageBoxes = document.querySelectorAll('.detail_product');

// 遍历所有 div，当鼠标悬浮时更改图片
imageBoxes.forEach(box => {
  box.addEventListener('mouseover', () => {
    const newImage = box.getAttribute('data-image');  // 获取每个 div 中的图片路径
    mainImage.src = newImage;  // 更改 img 的 src
  });
  // 当鼠标移出时恢复默认图片
  box.addEventListener('mouseout', () => {
    mainImage.src = "@/assets/imgs/_4_productEngineeringImgs/bg-protect.png";  // 恢复默认图片
  });
});
</script>
<template>
  <div class="productSeries">
    <div class="img"><img src="@/assets/imgs/_4_productEngineeringImgs/bg-protect.png" alt=""></div>
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
          ><span>高压电器产业</span>
        </router-link>
      </div>
      <div class="detail_product" data-image="@/assets/imgs/_4_productEngineeringImgs/product-img.png">
        <span>系统集成业务</span>
      </div>
      <div class="detail_product" data-image="@/assets/imgs/_4_productEngineeringImgs/bg-protect.png">
        <span>电力储能业务</span>
      </div>
      <div class="detail_product" data-image="@/assets/imgs/_4_productEngineeringImgs/bg-protect.png" >
        <span>配电网产业</span>
      </div>
      <div class="detail_product" data-image="@/assets/imgs/_4_productEngineeringImgs/bg-protect.png">
        <span>运维检修业务</span>
      </div>
      <div class="detail_product" data-image="@/assets/imgs/_4_productEngineeringImgs/bg-protect.png">
        <span>电锅炉及热储能业务</span>
      </div>
      <div class="detail_product" data-image="@/assets/imgs/_4_productEngineeringImgs/bg-protect.png">
        <span>零部件制造产业</span>
      </div>
      <div class="detail_product" data-image="@/assets/imgs/_4_productEngineeringImgs/bg-protect.png">
        <span>综合能源服务业务</span>
      </div>
      <div class="detail_product" data-image="@/assets/imgs/_4_productEngineeringImgs/bg-protect.png">
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
    <div class="footer_img">
      <img src="@/assets/imgs/_4_productEngineeringImgs/bg-footimg.png" alt="" />
    </div>
  </div>
</template>
<style scoped>
.productSeries {
  position: relative;
  margin: auto;
  width: 100%;
  border: 1px solid rgb(177, 177, 177);
  border-radius: 20px;
  background-color: #fff;
  z-index: 100;
  padding: 64px 210px;
}
.detail_content {
  width: 1080px;
  height: 271px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 66px;
  position: relative;
}
.productSeries .img{
  left: 0;
  top: 0;
  width: 100%;
  height: 614px;
  position: absolute;
  z-index: -100;
}
.productSeries img{
  height: 614px;
  width: 100%;
}
.detail_content .detail_product {
  border: 1px #1e8dce solid;
  border-radius: 10px;
  width: 342px;
  height: 77px;
  margin-bottom: 25px;
  text-align: center;
  line-height: 75px;
  z-index: 10;
}
.detail_product span {
  font-size: 30px;
  font-family: "AlibabaPuHuiTi_2_35_Thin", sans-serif;
  color: #ffffff;
}
.active {
  border: none !important;
  background-color: #45b3e0;
}
.active span{
  color: #ffffff;
}
.detail_page {
  margin-top: 150px;
  height: 1734px;
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
  width: 32%;
  height: 225px;
  border-bottom: 1px #1078c5 solid;
  z-index: 100;
}

.detail_page_info .h {
  font-size: 36px;
  font-family: "AlibabaPuHuiTi_2_85_Bold", sans-serif;
  color: rgb(0, 111, 193);
  margin-top: 30px;
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
  width: 100%;
  bottom: 0;
  left: 0;
}
.footer_img img {
  width: 100%;
  margin-bottom: -8px;
}
</style>
