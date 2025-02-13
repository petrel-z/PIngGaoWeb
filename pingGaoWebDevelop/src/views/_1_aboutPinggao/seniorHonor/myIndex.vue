<script setup>
import MyTitle from "@/components/MyTitle.vue";
import MyButton from "@/components/MyButton.vue";
</script>
<template>
  <div class="seniorHonor">
    <myTitle h="资质荣誉" English="QUALIFICATION AND HONOR"></myTitle>
    <div class="content">
      <div class="info">
        <div class="img"><img src="@/assets/imgs/_1_aboutPinggaoImgs/create.png" alt="" /></div>
        <div class="p">创新型企业</div>
      </div>
      <div class="info">
        <div class="img"><img src="@/assets/imgs/_1_aboutPinggaoImgs/create.png" alt="" /></div>
        <div class="p">创新型企业</div>
      </div>
      <div class="info">
        <div class="img"><img src="@/assets/imgs/_1_aboutPinggaoImgs/create.png" alt="" /></div>
        <div class="p">创新型企业</div>
      </div>
      <div class="info">
        <div class="img"><img src="@/assets/imgs/_1_aboutPinggaoImgs/create.png" alt="" /></div>
        <div class="p">创新型企业</div>
      </div>
      <div class="info">
        <div class="img"><img src="@/assets/imgs/_1_aboutPinggaoImgs/create.png" alt="" /></div>
        <div class="p">创新型企业</div>
      </div>
      <div class="info">
        <div class="img"><img src="@/assets/imgs/_1_aboutPinggaoImgs/create.png" alt="" /></div>
        <div class="p">创新型企业</div>
      </div>
      <div class="info">
        <div class="img"><img src="@/assets/imgs/_1_aboutPinggaoImgs/create.png" alt="" /></div>
        <div class="p">创新型企业</div>
      </div>
      <div class="info">
        <div class="img"><img src="@/assets/imgs/_1_aboutPinggaoImgs/create.png" alt="" /></div>
        <div class="p">创新型企业</div>
      </div>
      <div class="info">
        <div class="img"><img src="@/assets/imgs/_1_aboutPinggaoImgs/create.png" alt="" /></div>
        <div class="p">创新型企业</div>
      </div>
      <div class="info">
        <div class="img"><img src="@/assets/imgs/_1_aboutPinggaoImgs/create.png" alt="" /></div>
        <div class="p">创新型企业</div>
      </div>
      <div class="info">
        <div class="img"><img src="@/assets/imgs/_1_aboutPinggaoImgs/create.png" alt="" /></div>
        <div class="p">创新型企业</div>
      </div>
      <div class="info">
        <div class="img"><img src="@/assets/imgs/_1_aboutPinggaoImgs/create.png" alt="" /></div>
        <div class="p">创新型企业</div>
      </div>
    </div>
    <div class="rightButton">
      <rightButton></rightButton>
    </div>
    <div class="footer">
      <myButton class="myButton" text="加载更多"></myButton>
    </div>
  </div>
</template>
<style scoped>
.seniorHonor {
  position: relative;
  margin: auto;
  width: 100%;
  height: auto;
  /* border: 1px solid rgb(177, 177, 177); */
  padding: 64px 10em;
  border-radius: 20px;
  background-color: #fff;
  z-index: -100;
}
.rightButton {
  position: absolute;
  top: 630px;
  right: 0;
  z-index: 10;
}
.content {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.content .info {
  width: 300px;
  height: 276px;
  margin-bottom: 50px;
  text-align: center;
}
.content .info .img {
  height: 238px;
}
.content .info .p {
  font-size: 20px;
  font-family: "AlibabaPuHuiTi_2_55_Regular", sans-serif;
  color: rgb(182, 141, 55);
}
.footer {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
