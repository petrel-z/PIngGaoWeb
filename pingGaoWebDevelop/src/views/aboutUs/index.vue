<script setup>
defineOptions({
  name: "aboutPinggao",
});
import MyTitle_En from "@/components/MyTitle_En.vue";
import Footer_En from "@/components/Footer_En.vue";
import ComHeader from "@/components/ComHeader.vue";
</script>
<template>
  <div class="about_pinggao_eng">
    <div class="header">
      <div>
        <ComHeader :isfooter="false" :onlyHeaderFlag="true"></ComHeader>
      </div>
    </div>
    <div class="bg"></div>
    <MyTitle_En></MyTitle_En>
    <div class="text_word">
      <div class="word_left" ref="wordLeft" :class="{ 'slide-in-left': isVisibleLeftWord }">
        <div class="text-section">
          <p class="word_left_firstp">
            Pinggao Group is a subsidiary of China Electric Equipment Group Co., Ltd.., founded
            in1970. it is a major technical eguipment pillar enterprise in China's electrical
            industrywith world leading research and development capabilities for large-scale
            high-endpower equipment and industry-leading energy system integration solutions. lt is
            anational high-tech enterprise and a national innovative enterprise, it has
            successivelywon honors such as the National May Day Labor Award, China's Top 100
            MachineryIndustry Enterprises, Equipment China Meritorious Enterprise, National
            Civilized UnitOutstanding Contribution Unit for National Skill Talent Cultivation, and
            the MostInfluential Enterprise in China's Energy Storage Industry.
          </p>
          <p>
            After more than 50 years of development, Pinggao Group has formed a businesspattern
            covering research and development, design, manufacturing, sales, testingoperation and
            maintenance of transmission and distribution eguipment, as well asrelated eguipment
            sets, power engineering general contracting, full processengineering consulting,
            comprehensive energy services, power storage, electric boilersand thermal storage,
            offshore wind power grid connected equipment, smart gridequipment, and charging and
            swapping facilities. We have established an industriallayout centered on the hinterland
            ofthe Central Plains, with tentacles spreadthroughout economic zones such as Being
            Tianiin Hebei, Yangtze River Delta, andBohai Rim. Actively expand the "the Belt and
            Road" market, with products coveringmore than 70 countries and regions in Eastern
            Europe, Southeast Asia, the Middle East,Africa,South America,Oceania, etc.
          </p>
          <p>
            Pinggao Group adheres to independent innovation and has mastered the R&D
            andmanufacturing technoloay of Ac/Dc, full series, and full yoltage level switch
            productsIt has established a new R&D system of "Five Institutes, Three Centers, and One
            Baseand developed a series of first products that lead the development of switches
            inChina, break foreign monopolies, and improve national eguipment level. Especially
            inthe fields of ultra-high voltage AC/DC switches, DC wall bushings,
            environmentallyfriendly switches, and power energy storage products, it has reached the
            world'sleading level. The product is widely used in key power projects in China, and
            hasprovided complete sets of eguipment and technical services for national
            keyengineering projects such as China's first 500 kV high-voltage AC transmission
            projectthe first 750 kV ultra-high voltage Ac transmission project, the world's first
            1000 kV ACdemonstration project put into commercial operation, the world's largest
            Sutong Gllcomprehensive pipe gallery project, and the first 100 megawatt level grid side
            energystorage project in China.
          </p>
          <p>
            Pinggao Group is guided by the strategic goal of becoming a world-class
            smartelectricaleguipment group, closely focusing on the overall layout of "smart
            electricalsystem services, and efficient energy", focusing on power equipment
            manufacturingand energy system solutions, striving to become a leader in electrical
            technology, apromoter of energy revolution, and a practitioner of green development, and
            strivinoto contribute wisdom and strength to the comprehensive construction of a
            socialistmodernized country.
          </p>
        </div>
      </div>
      <div class="img_right" ref="imgRight" :class="{ 'slide-in-right': isVisibleRightImg }">
        <video
          style="width: 100%; height: 100%"
          controls
          src="http://218.28.22.50:8108/videos/pinggao.mp4"
          poster="../../../assets/imgs/_1_aboutPinggaoImgs/eng/videoBg.png"
        />
      </div>
    </div>
    <div>
      <Footer_En />
    </div>
  </div>
</template>
<style scoped lang="less">
.about_pinggao_eng {
  height: 170rem;
  position: relative;
  z-index: 1;

  .header {
    height: 68vh;
    // min-width: 120rem;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 101;
  }
}

.bg {
  z-index: 0;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 60rem;
  background-image: url("../../../assets/imgs/_1_aboutPinggaoImgs/eng/bg.png");
  background-size: cover;
  left: -50%;
  transform: translateX(50%);
}

.text_word {
  position: relative;
  z-index: 1;
  padding: 3rem 11%;
  display: flex;
  // background-color: pink;
}

.text_word .word_left {
  display: flex;
  width: 55%;
  font-size: 1.25rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular";
  color: rgb(89, 87, 87);
  line-height: 1.85;
  // opacity: 0;
  // transform: translateX(-100%);
  /* 初始位置在左边 */
  // visibility: hidden;
  // transition: transform 1s ease, opacity 0.5s ease;
  /* 过渡效果 */
}

.text_word .word_left p {
  display: block;
  margin-bottom: 2.5rem;
}

.word_left.slide-in-left {
  opacity: 1;
  transform: translateX(0);
  visibility: visible;
}

.text_word .text-section {
  flex: 2;
}

.text_word .img_right {
  margin: 0.625rem 0 0 0.625rem;
  width: 41.5%;
  height: 22.8125rem;
  background-size: contain;
  padding-top: 0;
  // transform: translateX(100%);
  /* 初始位置在右边 */
  // opacity: 0;
  /* 初始时不可见 */
  // transition: transform 1s ease, opacity 0.5s ease;
  /* 过渡效果 */
  // visibility: hidden;
  /* 初始时隐藏 */
}

.img_right.slide-in-right {
  // transform: translateX(0);
  /* 滑动到最左边 */
  // opacity: 1;
  /* 可见 */
  visibility: visible;
  /* 可见 */
}

.text_word .img_right video {
  margin-left: 2.75rem;
  width: 100%;
  height: 22.8125rem;
}
</style>
