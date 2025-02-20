<script setup>
defineOptions({
  name: "marketing-serviceIndex2-1",
});

import MyTitle from "@/components/MyTitle.vue";
import MyContent from "@/components/MyContent.vue";
</script>

<template>
  <div>
    <div style="position: relative; min-height: 1120px">
      <div class="body-content">
        <div class="bodyBg"></div>
        <div>
          <MyTitle title="营销组织" English="MARKETING ORGANIZATION"/>
        </div>
        <div
          style="
            margin-top: 55px;
            background-color: #45b3e0;
            border-radius: 10px;
            min-height: 525px;
            width: 100%;
          "
        >
          <MyContent
            title="中国最先进的电力装备供应商之一"
            content1="五十年来，在电厂、冶金、化工、纺织、煤炭、电气化铁路等领域，为遍及六十多个国家和地区的客户提供创新型的产品、服务和"
            content2="解决方案，逐渐成为行业的佼佼者，并以先进的技术、完善的服务，影响和改善更多人的工作和生活。"
          />
          <div class="my-content-bottom">
            <div class="my-content-bottom-item">
              <span>国内销售</span>
              <div></div>
              <span>0371-66968576</span>
            </div>
            <div class="my-content-bottom-item">
              <span>国外销售</span>
              <div></div>
              <span>0371-58505793</span>
            </div>
            <div class="my-content-bottom-item">
              <span>客服电话</span>
              <div></div>
              <span>400-6700-312</span>
            </div>
          </div>
        </div>
        <div class="items-div">
          <div class="items-title">平高集团各产业单位联系方式</div>
          <div class="items-content">
            <div class="item" v-for="i in 25" :key="i">
              <hr class="item-hr1"/>
              <div>
                <div class="item-title">河南平高电气股份有限公司</div>
                <hr class="item-hr-hr"/>
                <div class="item-phone">电话：400-6700312</div>
                <div class="item-fax">传真：0375-3506431</div>
                <div class="item-email">邮箱：service_pg@vip.163.com</div>
              </div>
              <hr
                v-if="i === 25"
                style="
                  position: absolute;
                  bottom: 0px;
                  left: 0px;
                  width: 100%;
                  height: 1px;
                  background-color: rgb(69, 179, 224);
                "
              />
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bg"></div>
    </div>
  </div>
</template>

<style scoped>
.bodyBg {
  background-color: #def1fb;
  width: 100%;
  height: 493px;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
}

.body-content {
  margin: 0 11%;
  padding-top: 65px;
  min-height: 3855px;
}

.my-content-bottom {
  margin-top: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em 2em;
}

.my-content-bottom-item:hover {
  border-bottom: 1px solid #fff;
  cursor: pointer;
}

.my-content-bottom-item {
  display: flex;
  width: 34%;
  height: auto;
  justify-content: space-evenly;
  align-items: center;
}

.my-content-bottom-item div {
  height: 2em;
  width: 2px;
  margin: 0 15px;
  background-color: #fff;
}

.my-content-bottom-item span:nth-of-type(1) {
  font-size: 24px;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(255, 255, 255);
  line-height: 1.542;
  text-align: left;
  padding-top: 0.7em;
}

.my-content-bottom-item span:nth-of-type(2) {
  font-size: 38.737px;
  font-family: "Avenir";
  color: rgb(255, 255, 255);
  line-height: 1.156;
  text-align: left;
  padding-top: 0.2em;
}

.items-div {
  padding-top: 82px;
  width: 100%;
}

.items-title {
  font-size: 32px;
  font-family: "Alibaba_PuHuiTi_2_65_Medium";
  color: rgb(69, 179, 224);
  line-height: 1.156;
  text-align: center;
}

.items-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 47px;
}

.item {
  position: relative;
  width: calc((100% - 2 * 43px) / 3);
  min-height: 271px;
}

.item hr {
  border: 1px solid rgb(69, 179, 224);
}

.item-hr-hr {
  width: 61px;
  margin: 22px 0;
}

.item-hr1 {
  margin-bottom: 50px;
}

.item-title {
  font-size: 24px;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(69, 179, 224);
  line-height: 1.543;
  text-align: left;
}

.item-phone,
.item-fax,
.item-email {
  font-size: 22px;
  font-family: "AlibabaPuHuiTi_2_45_Light";
  color: rgb(89, 87, 87);
  line-height: 1.684;
  text-align: left;
}

.footer-bg {
  width: 100%;
  height: 90vh;
  background-image: url("../../../assets/imgs/_5_marketingServiceImgs/serviceBg1.png");
  background-size: cover;
  position: absolute;
  left: 0px;
  bottom: 0px;
  z-index: -1;
}
</style>
