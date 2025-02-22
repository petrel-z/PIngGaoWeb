<script setup>
defineOptions({
  name: "NewsCenterIndex3-1",
});
import MyTitle from "@/components/MyTitle.vue";
import Item1 from "@/components/Item-1.vue";
import MyButton from "@/components/MyButton.vue";

const items = [
  {
    month: "11.11",
    year: "2024",
    title: "《河南手机报》平高集团在新能源领域再获认可",
    text: `11月11日，从平高集团获悉，天津市科技局近日发布了2024年天津市第七批拟入库科技型中小企业名单，平高集团所属天津
平高易电科技有限公司（以下简称“平高易电”）荣获荣誉证书。这两项荣誉不仅是对平高易电在科`,
  },
  {
    month: "11.11",
    year: "2024",
    title: "《河南手机报》平高综合能源服务有限公司斩获多项顶级认证",
    text: `11月11日，从平高集团获悉，该集团所属平高综合能源服务有限公司（以下简称“综合能源”）成功摘取了合同能源管理服
务、节能技术服务、综合能源服务三大领域的5A级认证桂冠，`,
  },
  {
    month: "09.05",
    year: "2024",
    title: "《河南手机报》平高集团1家企业荣获2024年全国质量标杆奖",
    text: `1月14日，中国电气装备党委召开2024年度所属单位党组织书记抓基层党建工作述职评议会议。集团公司党委书记、董事长
李洪凤主持会议并讲话，其他领导班子成员出席会议。`,
  },
  {
    month: "08.30",
    year: "2024",
    title: "《河南手机报》平高集团亮相CIGRE 2024绿色智能产品吸引全球电力行业目",
    text: `1月7日，中国电气装备党委副书记、总经理周群在集团公司总部会见了来访的东方电气党委副书记、总经理张彦军一行，双
方就进一步深化合作进行了座谈交流。集团公司党委常委、副总经理成卫、朱安珂参加座谈。`,
  },
  {
    month: "07.26",
    year: "2024",
    title: "平高集团火速驰援 第一批电力物资抵达陕西灾区",
    text: `7月26日，经过19多个小时近600公里的长途跋涉，平高集团第一批19套抗汛救灾电力设备物资顺利抵达陕西省商洛市柞水
县瓦丰路马家台小学。`,
  },
  {
    month: "07.15",
    year: "2024",
    title: "《中国能源新闻网》平高集团综合能源公司获节能服务综合能力5A级评价",
    text: `7月15日，中国节能协会服务产业委员会公布了节能服务公司综合能力评定的结果，平高集团所属平高综合能源服务有限公
司（简称“综合能源公司”）获得了节能服务公司综合能力“公共设施AAAAA”级认证证书。`,
  },
  {
    month: "07.17",
    year: "2024",
    title: "《河南工人日报》平高集团承建的国电投叶县长丰风电场储能电站 倒送电一次性成功",
    text: `经过100天的大干加巧干，由平高集团总承包的国电投叶县长丰风电场储能电站，经过全套试验和检测，各项技术指标全部
过关，近日一次性倒送电成功。`,
  },
  {
    month: "07.13",
    year: "2024",
    title: "《河南手机报》平高集团平高电气研发国内首台压气式550千伏80千安HGIS产品投运",
    text: `7月14日，在广东省河源市碧山变电站，现场运维人员正在对平高集团、平高电气自主研发的国内首台压气式550千伏80千安
HGIS设备进行例行巡检，自今年6月份投运行以来，`,
  },
  {
    month: "06.24",
    year: "2024",
    title: "《河南工人日报》平高集团承建的国电投叶县长丰风电场储能电站 倒送电一次性成功",
    text: `1月7日，中国电气装备召开2025年安全稳定工作会议，深入学习贯彻习近平总书记关于安全生产的重要指示精神，认真落实
国务院国资委中央企业负责人会议要求，进一步完善风险防范措施，扎实细致做好信访维稳工作，`,
  },
  {
    month: "06.20",
    year: "2024",
    title: "《中国能源新闻网》平高集团综合能源公司获节能服务综合能力5A级评价",
    text: `1月7日，中国电气装备召开2025年安全稳定工作会议，深入学习贯彻习近平总书记关于安全生产的重要指示精神，认真落实
国务院国资委中央企业负责人会议要求，进一步完善风险防范措施，扎实细致做好信访维稳工作，`,
  },
];

function handleClick(e) {
  console.log(e);
}
</script>

<template>
  <div style="position: relative; overflow: hidden;">
    <div class="body">
      <div>
        <div style="padding-top: 64px">
          <my-title title="媒体聚焦" English="MEDIA FOCUS" />
        </div>
        <div class="item-container">
          <Item1
            v-for="(item, index) in items"
            :key="index"
            :month="item.month"
            :year="item.year"
            :title="item.title"
            :text="item.text"
            hoverColor="#006fc1"
          />
        </div>
      </div>
      <div class="button-container">
        <router-link to="/informationCenter/mediaFocus-2"><myButton @childButton="handleClick" /></router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body {
  margin: 0 11%;
}

.item-container {
  width: 100%;
  height: auto;
  margin-top: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

.button-container {
  width: 100%;
  height: auto;
  margin: 3em 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
