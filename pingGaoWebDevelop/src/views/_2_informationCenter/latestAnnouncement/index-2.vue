<script setup>
defineOptions({
  name: 'NewsCenterIndex5-2',
});
import TextTitle from '@/components/TextTitle.vue';
import ComDoubleDiv from '@/components/ComDoubleDiv.vue';
</script>

<template>
  <div class="body-bg">
    <div class="body">
      <div class="title">
        平高集团亮相CIGRE 2024 绿色智能产品吸引全球电力行业目光
      </div>
      <TextTitle :color="'#1c4e9f'" :time="'2025-01-14'" :browse="488" />
      <div class="content">
        <p>
          8月28日，平高集团凭借其在绿色环保和智能制造领域的优异表现，在巴黎CIGRE
          2024国际电力系统、电网设备及技术展览会上大放异彩，成为展会上
          一颗璀璨的明星。此次展会作为国际大电网会议组织（CIGRE）的顶级盛会，吸引了来自全球各地的顶尖电力企业和专家共襄盛举。
        </p>
        <p>
          平高集团以“绿色环保，智能制造”为主题，展示了其在新型电力系统建设中所取得的业绩和实力。展会现场，平高集团精心布置了展示区，重点推介
          了N2X-24型环保气体绝缘开关设备和145千伏无氟环保型GIS两款明星产品，充分展示了平高集团在科技创新和绿色发展方面的坚定决心和卓越成果。
          <br />
          <br />
          N2X-24型环保气体绝缘开关设备以其独特的环保特性和技术优势，吸引了众多参观者的关注。该设备采用微正压氮气作为绝缘气体，真空断路器开
          断，具有环保型、小型化、免维护等特点，特别适用于土地资源紧张的城市及恶劣环境条件下的中压电力系统。据了解，2023年12月，N2X-24型充气
          柜取得了意大利ENEL公司的TCA认证证书，不仅成为国内首家通过欧洲电网公司中压开关柜TCA认证的企业，同时也收到意大利ENEL集团首批共18面
          24千伏中压充气柜订单，用于西班牙国家电网扩容重点工程，实现国内中压开关产品出口欧盟高端市场零的突破，目前上海平高已经完成出口柜产品
          的出厂验收。
        </p>
      </div>
      <div class="footer">
        <ComDoubleDiv
          title="上一篇"
          content="平高集团1家企业荣获2024年全国质量标杆奖"
        />
        <ComDoubleDiv
          title="下一篇"
          content="平高集团1家企业荣获2024年全国质量标杆奖"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.body-bg {
  background-image: url('@/assets//imgs//资讯中心/newsBg-1.png');
  padding: 0 210px;
  background-size: cover;
}
.body {
  position: relative;
  background-color: #fff;
  padding: 0 100px;
  min-height: 1500px;
}
.title {
  font-size: 35px;
  font-family: 'AlibabaPuHuiTi_2_65_Medium';
  color: rgb(0, 55, 146);
  line-height: 1.4;
  text-align: center;
  padding-top: 117px;
  margin-bottom: 70px;
}

.content {
  margin-top: 56px;
  text-align: center;
  font-size: 20px;
  font-family: 'AlibabaPuHuiTi_2_45_Light';
  color: rgb(89, 87, 87);
  line-height: 1.498;
  width: 1300px;
}

.content p:first-child {
  height: 80px;
  text-align: left;
}

.content p:nth-of-type(2) {
  height: 230px;
  text-align: left;
}

.footer {
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 67px;
}
</style>
