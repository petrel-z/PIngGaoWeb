<script setup>
import MyTitle from "@/components/MyTitle.vue";
import { ref, onMounted } from "vue";

const items = ref(null);
const divTitle1 = ref(null);
const divTitle2 = ref(null);
const divTitle3 = ref(null);
onMounted(() => {
  // 获取目标元素容器
  const targetContainer = items.value;
  const div1 = divTitle1.value;
  const div2 = divTitle2.value;
  const div3 = divTitle3.value;
  if (targetContainer) {
    // 监听页面滚动事件
    window.addEventListener("scroll", () => {
      if (!targetContainer) return;
      // 获取元素顶部距离页面顶部的距离
      const elementTop = targetContainer.getBoundingClientRect().top;
      // 获取窗口的高度
      const windowHeight = window.innerHeight;

      // 判断元素是否进入可视区域
      if (elementTop < windowHeight) {
        targetContainer.classList.add("show");
      } else {
        targetContainer.classList.remove("show");
      }
    });
  }
  if (div1 && div2 && div3) {
    div1.addEventListener("click", () => {
      div1.classList.add("font-white");
      div1.classList.add("bg-blue");
      div1.classList.remove("font-blue");
      div1.classList.remove("bg-white");
      div2.classList.remove("font-white");
      div2.classList.remove("bg-blue");
      div2.classList.add("font-blue");
      div2.classList.add("bg-white");
      div3.classList.remove("font-white");
      div3.classList.remove("bg-blue");
      div3.classList.add("font-blue");
      div3.classList.add("bg-white");
    });
    div2.addEventListener("click", () => {
      div1.classList.remove("font-white");
      div1.classList.remove("bg-blue");
      div1.classList.add("font-blue");
      div1.classList.add("bg-white");
      div2.classList.add("font-white");
      div2.classList.add("bg-blue");
      div2.classList.remove("font-blue");
      div2.classList.remove("bg-white");
      div3.classList.remove("font-white");
      div3.classList.remove("bg-blue");
      div3.classList.add("font-blue");
      div3.classList.add("bg-white");
    });
    div3.addEventListener("click", () => {
      div1.classList.remove("font-white");
      div1.classList.remove("bg-blue");
      div1.classList.add("font-blue");
      div1.classList.add("bg-white");
      div2.classList.remove("font-white");
      div2.classList.remove("bg-blue");
      div2.classList.add("font-blue");
      div2.classList.add("bg-white");
      div3.classList.add("font-white");
      div3.classList.add("bg-blue");
      div3.classList.remove("font-blue");
      div3.classList.remove("bg-white");
    });
  }
});
</script>

<template>
  <div style="position: relative; width: 100%; height: auto; background-color: #def1fb">
    <div class="bodyBg">
      <img src="../../../assets/imgs/_8_humanResourcesImgs/bg-1.png" alt="" />
    </div>
    <div ref="items" class="body-content">
      <div>
        <MyTitle title="人才开发" English="TALENT DEVELOPMENT"></MyTitle>
      </div>
      <div class="body-content-box">
        <div class="body-content-left">
          <div ref="divTitle1" class="div-title font-white bg-blue">职业通道</div>
          <div ref="divTitle2" class="div-title font-blue bg-white">绩效薪酬</div>
          <div ref="divTitle3" class="div-title font-blue bg-white">教育培训</div>
        </div>
        <div class="body-content-right bg-white">
          <div class="content-title">职业通道</div>
          <div class="text">
            <p>
              为畅通员工晋升通道，打破职务晋升单一发展路径，平高集团构建了全方位、全覆盖的“322”员工职业发展
              体系，确保员工成长有空间、发展有通道、实现价值有平台，构建员工成长的完整路线图。
            </p>
            <p>
              1.职业晋升体系<br />
              包括岗位岗级序列、职务等级序列、职员职级序列三个序列。三个序列纵向延伸、横向贯通。<br />
              岗位岗级序列：依据岗位价值和员工绩效积累、能力提升的工资单元，划分为26个岗级、56个薪级，每位员工
              都有对应岗位岗层、岗级及薪级，当工作年限、工作业绩等达到一定标准后，即可予以调整晋升。<br />
              职务等级序列：根据管理层级可划分为高层、中层和基层管理，主要涵盖集团正副职、单位（部门）及其内设
              机构正副职等。<br />
              职员职级序列：职员职级是以管理精英、技术大师、技能工匠为目标的晋升通道，专注于本职岗位水平的提
              升，成为该领域的精英骨干。按照岗位类别，依次设置二至七级职员，形成“层次划分清晰、职数设置合理、
              任职资格明确、发展路径通畅”的职员职级序列。
            </p>
            <p>
              2.职业激励体系<br />
              包含专家人才激励和职业资格激励两种职业激励方式。<br />
              专家人才激励：优秀专家人才实施分级分类管理，分为国家级、国网公司级、集团公司级、下属单位级四级，
              管理类、技术类、营销类和技能类四类。每两年选拔一次，聘期四年。集团制定有优秀专家人才管理文件，明
              确优秀专家人才选拔、考核标准与津贴待遇。<br />
              职业资格激励：为激励和引导员工不断提高职业资格资质，满足企业生产经营发展需要，制定职业资格管理办
              法，明确激励范围及标准，实现企业和员工同进步、共发展。
            </p>
            <p>
              3.职业水平提升体系<br />
              包括专业职称评定和仅能等级鉴定两部分内容。不同职称系列、等级有不同的晋升规则和晋升方式，依据政策
              适时调整。目前集团拥有工程系列中级、高级两个职称评审委员会，具备机械、电气、工业营销三个专业工程
              师和高级工程师职称评审权限。经省市人社部门授权，还具有机械冷加工、输配电及控制设备等类别重点工种
              的中级、高级、技师、高级技师培训鉴定资格。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bodyBg {
  background-size: cover;
  width: 100%;
  position: absolute;
  bottom: -4px;
}

.bodyBg img {
  width: 100%;
  height: auto;
}

.body-content {
  position: relative;
  z-index: 999;
  margin: 0 11%;
  padding-top: 4.3rem;
  padding-bottom: 25rem;
  overflow: hidden;
}

.body-content-box {
  margin-top: 3rem;
  display: flex;
  width: 100%;
}

.body-content-left {
  position: relative;
  left: -200%;
  transition: left 0.5s ease;
  width: 20%;
  white-space: nowrap;
}

.div-title {
  height: auto;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  text-align: center;
  padding: 1.5rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
}

.div-title:hover {
  background-color: #006fc1;
  color: #fff;
}

.body-content-right {
  position: relative;
  right: -200%;
  transition: right 0.5s ease;
  width: 79%;
  height: auto;
  padding: 0 5.8rem;
  margin-left: 1%;
  border-radius: 0.625rem;
}

.content-title {
  font-size: 2.5rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(0, 111, 193);
  line-height: 1.156;
  text-align: center;
  padding-top: 4.3rem;
}

.text {
  width: 100%;
  padding-top: 2.3rem;
  margin-top: 2.5rem;
  border-top: 0.2rem solid #006fc1;
  padding-bottom: 5rem;
}

.text > p {
  font-size: 1.5rem;
  font-family: "AlibabaPuHuiTi_2_45_Light";
  color: rgb(89, 87, 87);
  margin-bottom: 2.8rem;
  text-align: left;
}
.font-white {
  font-size: 2rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(255, 255, 255);
  line-height: 1.156;
  text-align: center;
}

.font-blue {
  font-size: 2rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(0, 111, 193);
  line-height: 1.156;
  text-align: center;
}

.show .body-content-left {
  left: 0;
}

.show .body-content-right {
  right: 0;
}

.bg-white {
  background-color: #ffffff;
}

.bg-blue {
  background-color: #006fc1;
}

@media (max-width: 768px) {
  .body-content {
    margin: 0 7%;
  }

  .body-content-box {
    flex-direction: column;
  }

  .body-content-left {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    margin-bottom: 2rem;
  }

  .body-content-right {
    width: 100%;
    margin: 0;
  }

  .div-title {
    padding: 2.5rem 0;
  }
}
</style>
