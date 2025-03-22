<template>
  <div class="container-box">
    <div class="container">
      <div class="container-title">
        China Electrical Equipment held the second session of the first employee representative
        conference
      </div>
      <div class="container-body">
        <div class="img-box">
          <img src="@/assets/imgs/_2_informationCenterImgs/newsDetail_en_1.png" alt="" />
        </div>
        <p>
          Pinggao Group is a subsidiary of China Electricin 1970.It is a maior technicalequipment
          pillar enterprisin China's electrical industry, with world leading research and
          development capabilities for large-scale high-end power eguipment and in.dustry-leading
          energy system integravative enterprise. lt has successivelywon honors such as the
          NationalMay Dav labor00 100 Machinery industry Enterprises,Eauioment china
          Meritoriou!Enterprise,National Civilized Unit, Outstarand the Most Influential Enterprise
          in China's Energy Storage Indust!
        </p>
        <p>
          Atter more than 50 vears ot develonment.Pm00alGroun has tormed a husecs natern
          cOveruacturina, sales, testing, aneration and maintenance oftransmission and distripution
          eawinment, as well as related eouinment sets, noweengineering general contracting, ful
          process engineering consulting, comprehensive energy services, power storage, electric
          bollers andthermal storage, offshore wind power grid connected equipment, smart qrid
          equipment, and charging and swapping facilities. We have established an industrial layout
          centeredwith tentacles spread throughout economic zones such as Beiing Tianiin Hebei,
          Yangtze River Delta, and Bohai Rim. Activelexpand the "the Belt and Road" market, with
          products covering more than 70countries and regions in Eastern Europethe Middle
          Fast,Africa.South America.Oceania.etc
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineComponent } from "vue";

defineComponent({
  name: "NewsDetail",
});
</script>

<style lang="less" scoped>
.container {
  padding: 5%;
  background-color: #fff;
  &-box {
    padding: 0 11%;
    background-color: #f7f8f8;
    padding-bottom: 5%;
  }
  &-title {
    font-size: 40px;
    text-align: center;
    font-weight: bold;
    color: #333;
    margin-bottom: 20px;
  }
  &-body {
    border-top: 0.05rem solid black;
    padding-top: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .img-box {
      width: 70%;
      img {
        width: 100%;
        height: auto;
        margin-bottom: 20px;
      }
    }

    p {
      font-size: 18px;
      line-height: 1.5;
      text-align: justify;
      color: #333;
      margin-bottom: 3%;
    }
  }
}
</style>
