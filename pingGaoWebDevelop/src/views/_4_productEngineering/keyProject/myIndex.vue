<script setup>
import MyTitle from "@/components/MyTitle.vue";
</script>
<template>
  <div class="keyProject">
    <MyTitle title="重点工程" English="KEY PROJECTS"></MyTitle>
    <div class="project_content">
      <div class="content_left">
        <div class="top_button">
          <div class="p">国内重点工程</div>
        </div>
        <div class="bottom_button">
          <div class="p">国外重点工程</div>
        </div>
      </div>
      <div class="content_right">
        <div class="pic_content">
          <div class="pic">
            <img src="@/assets/imgs/_4_productEngineeringImgs/project-pic1.png" alt="" />
          </div>
          <div class="bg_black">
            <div class="p">中国首台自主研发的ZF27-800（L）型GIS在青海管亭变电站投入运行</div>
          </div>
        </div>
        <div class="pic_content">
          <div class="pic">
            <img src="@/assets/imgs/_4_productEngineeringImgs/project-pic2.png" alt="" />
          </div>
          <div class="bg_black">
            <div class="p">中国首台自主研发的ZF27-800（L）型GIS在青海管亭变电站投入运行</div>
          </div>
        </div>
        <div class="pic_content">
          <div class="pic">
            <img src="@/assets/imgs/_4_productEngineeringImgs/project-pic3.png" alt="" />
          </div>
          <div class="bg_black">
            <div class="p">中国首台自主研发的ZF27-800（L）型GIS在青海管亭变电站投入运行</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer_img">
      <img src="@/assets/imgs/_4_productEngineeringImgs/project-footer.png" alt="" />
    </div>
  </div>
</template>
<style scoped>
.keyProject {
  position: relative;
  margin: auto;
  width: 100%;
  height: 2380px;
  padding: 64px 210px;
  border-radius: 20px;
  background-color: #fff;
  z-index: -100;
}
.project_content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 1580px;
  margin-top: 60px;
}
.content_left {
  width: 20.5%;
  margin-right: 23px;
}
.top_button {
  width: 100%;
  height: 100px;
  border-radius: 10px;
  background-color: #006fc1;
  margin-bottom: 10px;
}
.bottom_button {
  width: 100%;
  height: 100px;
  border-radius: 10px;
  background-color: #fff;
}
.top_button .p {
  font-size: 32px;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: rgb(255, 255, 255);
  text-align: center;
  line-height: 100px;
  margin-bottom: 5px;
}
.bottom_button .p {
  font-size: 32px;
  font-family: "AlibabaPuHuiTi_2_65_Medium", sans-serif;
  color: #006fc1;
  text-align: center;
  line-height: 100px;
}
.content_right {
  width: 79%;
  height: 1560px;
}
.pic_content {
  position: relative;
  width: 100%;
  height: 500px;
  margin-bottom: 30px;
}
.pic_content .pic {
  width: 100%;
  height: 500px;
}
.pic_content .pic img{
  width: 100%;
  height: 500px;
  background-size: cover;
}
.pic_content .bg_black {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 83px;
  background-color: #38383859;
  border-radius: 6px;
  line-height: 83px;
  text-align: center;
}
.pic_content .bg_black .p {
  font-size: 26px;
  font-family: "AlibabaPuHuiTi_2_45_Light", sans-serif;
  color: rgb(255, 255, 255);
}
.footer_img {
  position: absolute;
  bottom: -10px;
  left: 0;
  z-index: -10;
  width: 100%;

}
.footer_img img {
  width: 100%;
  height: 100%;
}
</style>
