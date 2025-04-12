<script setup>
import { ref, onMounted } from "vue";
import MyTitle from "@/components/MyTitle.vue";
import { useRouter } from 'vue-router';
const router = useRouter();

const redirectToMobileVersion = () => {
  try {
    const isMobile = window.matchMedia('(max-device-width: 900px)').matches;

    // 避免重复跳转
    const currentPath = router.currentRoute.value.path;
    const targetPath = isMobile
      ? '/aboutPinggao/groupProfile2'
      : '/aboutPinggao/groupProfile1';

    if (currentPath !== targetPath) {
      router.push(targetPath);
    }
  } catch (error) {
    console.error('路由跳转失败:', error);
    // 可添加回退方案
    router.push('/error-page');
  }
};

onMounted(() => {
  // 确保只在客户端执行
  if (typeof window !== 'undefined') {
    redirectToMobileVersion();
  }
});
// 定义所有的 ref 和 isVisible 变量
const imageRef = ref(null);
const wordLeft = ref(null);
const imgRight = ref(null);
const keyContent1 = ref(null);
const keyContent2 = ref(null);
const basicCultureInfo = ref(null);

const isVisibleImg = ref(false);
const isVisibleLeftWord = ref(false);
const isVisibleRightImg = ref(false);
const isVisibleContent1 = ref(false);
const isVisibleContent2 = ref(false);
const isVisibleBaseInfo = ref(false);

// 通用的 Intersection Observer 函数
const createObserver = (refElement, isVisible) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          observer.disconnect();
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.06,
    }
  );

  if (refElement.value) {
    observer.observe(refElement.value);
  }
};

// 初始化所有的观察器
const initializeObservers = () => {
  createObserver(imageRef, isVisibleImg);
  createObserver(wordLeft, isVisibleLeftWord);
  createObserver(imgRight, isVisibleRightImg);
  createObserver(keyContent1, isVisibleContent1);
  createObserver(keyContent2, isVisibleContent2);
  createObserver(basicCultureInfo, isVisibleBaseInfo);
};

onMounted(initializeObservers); // 在组件挂载时调用
</script>

<template>
  <!-- 集团简介 -->
  <div class="groupProfile">
    <MyTitle title="平高集团" english="PINGGAO GROUP"></MyTitle>
    <div class="project">
      <div class="introduce">
        <div class="introduce_content introduce_content_first">
          <div class="introduce_text">
            <span class="introduce_content_top">国家级</span>
            <span class="introduce_content_bottom">高新技术企业</span>
          </div>
        </div>
        <div class="introduce_content">
          <div class="introduce_text">
            <span class="introduce_content_top">国家级</span>
            <span class="introduce_content_bottom">创新型企业</span>
          </div>
        </div>
        <div class="introduce_content introduce_content_last">
          <div class="introduce_text">
            <span class="introduce_content_top">全国</span>
            <span class="introduce_content_bottom">五一劳动奖状</span>
          </div>
        </div>
      </div>
      <div class="introduce">
        <div class="introduce_content">
          <div class="introduce_text">
            <span class="introduce_content_top">中国</span>
            <span class="introduce_content_bottom">机械工程100强</span>
          </div>
        </div>
        <div class="introduce_content">
          <div class="introduce_text">
            <span class="introduce_content_top">装备</span>
            <span class="introduce_content_bottom">中国功勋企业</span>
          </div>
        </div>
        <div class="introduce_content introduce_content_last">
          <div class="introduce_text">
            <span class="introduce_content_top">全国</span>
            <span class="introduce_content_bottom">文明单位</span>
          </div>
        </div>
      </div>
    </div>

    <div class="text_word">
      <div class="img_right" ref="imgRight" :class="{ 'slide-in-right': isVisibleRightImg }">
        <video
          style="width: 100%; height: 100%"
          controls
          src="http://218.28.22.50:8108/videos/pinggao.mp4"
        />
      </div>
      <div class="word_left" ref="wordLeft" :class="{ 'slide-in-left': isVisibleLeftWord }">
        <div class="text-section">
          <p class="word_left_firstp">
            平高集团隶属于中国电气装备集团有限公司，始建于1970年，是我国电工行业重大技术装备支柱企业，具备世界领先的规模化高端电力装备研发制造实力及行业领先的能源系统集成解决方案提供能力。是国家级高新技术企业、国家级创新型企业，先后荣获全国五一劳动奖状、中国机械工业100强企业、装备中国功勋企业、全国文明单位、国家技能人才培育突出贡献单位、中国储能产业最具影响力企业等荣誉称号。
          </p>
          <p>
            经过50余年的发展，平高集团已形成了涵盖输配电设备研发、设计、制造、销售、检测、运维等服务及相关设备成套、电力工程总承包、全过程工程咨询、综合能源服务、电力储能、智慧电网装备、充换电设施的业务格局。构建了以中原腹地为中心，触角遍布京津冀、长三角、环渤海等经济区的产业布局。积极拓展“一带一路”市场，产品覆盖东欧、东南亚、中东、非洲、南美洲、大洋洲等70多个国家和地区。
          </p>
          <p>
            平高集团坚持自主创新，掌握了交直流、全系列、全电压等级开关产品研发制造技术，搭建了“五院三中心一基地”新型研发体系，研制了一系列引领我国开关发展、打破国外垄断、提升民族装备水平的首台套产品，特别是在特高压交直流开关、直流穿墙套管、环保型开关、电力储能等产品领域达到世界领先水平。产品广泛应用于我国重点电力工程，先后为我国第一条500千伏高压交流输电工程、第一条750千伏超高压交流输电工程、世界首条投入商业运行的1000千伏交流示范工程、世界输送容量最大的苏通GIL综合管廊工程、国内首个百兆瓦级电网侧储能项目等国家重点工程项目提供了成套设备和技术服务。
          </p>
          <p>
            平高集团以世界一流智慧电气装备集团战略目标为统领，紧紧围绕“智慧电气、系统服务、高效能源”总体布局，聚焦电力装备制造及能源系统解决方案，争当电气技术引领者、能源革命推动者、绿色发展践行者，努力为全面建设社会主义现代化国家贡献智慧和力量。
          </p>
        </div>
      </div>
    </div>
    <div class="key">
      <div class="key_title"><span>平高集团企业文化六大核心理念</span></div>
      <div class="key_content1">
        <div class="key_info key_content_one">
          <div class="key_content_h">企业使命</div>
          <div class="key_content_text">赋能智慧电气·创引绿色能源</div>
        </div>
        <div class="key_content_two key_info">
          <div class="key_content_h">总体布局</div>
          <div class="key_content_text">装备制造·集成增值服务·智慧能源服务</div>
        </div>
        <div class="key_content_three key_info">
          <div class="key_content_h">战略目标</div>
          <div class="key_content_text">世界一流智慧电气装备集团</div>
        </div>
        <div class="key_content_four key_info">
          <div class="key_content_h">战略定位</div>
          <div class="key_content_text">电气技术引领者·能源革命推动者·绿色发展践行者</div>
        </div>
        <div class="key_content_five key_info">
          <div class="key_content_h">企业精神</div>
          <div class="key_content_text">追求卓越·争创一流</div>
        </div>
        <div class="key_content_six key_info">
          <div class="key_content_h">核心价值观</div>
          <div class="key_content_text">改革·创新·团结·奋斗·实干</div>
        </div>
      </div>
    </div>
    <div class="basic_culture">
      <div class="basic_culture_title">
        <span>平高集团企业文化八大基本理念</span>
      </div>
      <div class="basic_culture_content">
        <div
          class="basic_culture_info basic_culture_info_first"
          ref="basicCultureInfo"
          :class="{ 'scale-up': isVisibleBaseInfo }"
        >
          <div class="basic_word">
            <div class="basic_culture_h">管理理念</div>
            <div class="basic_culture_line"></div>
            <div class="basic_culture_p">守正创新 坚持 坚守 坚韧</div>
            <div class="basic_culture_num">01</div>
          </div>
        </div>
        <div
          class="basic_culture_info basic_culture_info_last"
          ref="basicCultureInfo"
          :class="{ 'scale-up': isVisibleBaseInfo }"
        >
          <div class="basic_word">
            <div class="basic_culture_h">经营理念</div>
            <div class="basic_culture_line"></div>
            <div class="basic_culture_p">以客户为中心 推进高质量发展</div>
            <div class="basic_culture_num">02</div>
          </div>
        </div>
        <div
          class="basic_culture_info"
          ref="basicCultureInfo"
          :class="{ 'scale-up': isVisibleBaseInfo }"
        >
          <div class="basic_word">
            <div class="basic_culture_h">服务理念</div>
            <div class="basic_culture_line"></div>
            <div class="basic_culture_p">始于客户需求 为客户创造价值</div>
            <div class="basic_culture_num">03</div>
          </div>
        </div>
        <div
          class="basic_culture_info basic_culture_info_last"
          ref="basicCultureInfo"
          :class="{ 'scale-up': isVisibleBaseInfo }"
        >
          <div class="basic_word">
            <div class="basic_culture_h">科技理念</div>
            <div class="basic_culture_line"></div>
            <div class="basic_culture_p">开放协同 创新成就未来</div>
            <div class="basic_culture_num">04</div>
          </div>
        </div>
        <div
          class="basic_culture_info basic_culture_info_first"
          ref="basicCultureInfo"
          :class="{ 'scale-up': isVisibleBaseInfo }"
        >
          <div class="basic_word">
            <div class="basic_culture_h">质量理念</div>
            <div class="basic_culture_line"></div>
            <div class="basic_culture_p">以零缺陷 铸就卓越品质</div>
            <div class="basic_culture_num">05</div>
          </div>
        </div>
        <div
          class="basic_culture_info basic_culture_info_last"
          ref="basicCultureInfo"
          :class="{ 'scale-up': isVisibleBaseInfo }"
        >
          <div class="basic_word">
            <div class="basic_culture_h">安全理念</div>
            <div class="basic_culture_line"></div>
            <div class="basic_culture_p">生命至上 安全第一</div>
            <div class="basic_culture_num">06</div>
          </div>
        </div>
        <div
          class="basic_culture_info"
          ref="basicCultureInfo"
          :class="{ 'scale-up': isVisibleBaseInfo }"
        >
          <div class="basic_word">
            <div class="basic_culture_h">人才理念</div>
            <div class="basic_culture_line"></div>
            <div class="basic_culture_p">集聚一流人才 共创一流佳绩</div>
            <div class="basic_culture_num">07</div>
          </div>
        </div>
        <div
          class="basic_culture_info basic_culture_info_last"
          ref="basicCultureInfo"
          :class="{ 'scale-up': isVisibleBaseInfo }"
        >
          <div class="basic_word">
            <div class="basic_culture_h">廉洁理念</div>
            <div class="basic_culture_line"></div>
            <div class="basic_culture_p">廉洁从业 诚信守法 行为规范 道德高尚</div>
            <div class="basic_culture_num">08</div>
          </div>
        </div>
      </div>
    </div>
    <div class="mind_map">
      <img
        ref="imageRef"
        src="@/assets/imgs/_1_aboutPinggaoImgs/bg-footer.png"
        alt="Image"
        :class="{ 'slide-in': isVisibleImg }"
      />
    </div>
  </div>
</template>
<style scoped>
.groupProfile {
  position: relative;
  margin: auto;
  width: 100%;
  height: 422.5rem;
  padding: 4rem 11%;
  border-radius: 1.25rem;
  background-color: #fff;
  z-index: 0;
  overflow: hidden;
}
.project {
  position: absolute;
  background-color: #f4f4f4;
  height: 23rem;
  margin-top: 3.4375rem;
  padding-top: 0.3rem;
  padding-left: 14rem;
  padding-right: 12rem;
  width: 100%;
  left: 0;
}

.introduce {
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 7rem;
  margin-top: 3rem;
  padding-top: 2rem;
}

.introduce_content {
  width: 33%;
  border-left: 0.2rem solid #8abade;
  text-align: center;
  height: 100% !important;
}
.introduce_text {
  position: relative;
  width: 100%;
  transition: 0.5s;
  height: 100%;
}
.introduce_text:hover {
  transform: scale(1.03);
}
.introduce_content span {
  width: 100%;
  display: block;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2.225rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(0, 111, 193);
  line-height: 1.423;
}

.introduce_content_top {
  top: -1.2375rem;
}

.introduce_content_bottom {
  position: absolute;
  top: 1.6875rem;
}
.introduce_content_last {
  border-right: 0.2rem solid #8abade;
}
.text_word {
  margin-top: 33rem;
}

.text_word .word_left {
  display: flex;
  width: 100%;
  font-size: 2.5rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular";
  color: rgb(89, 87, 87);
  line-height: 1.85;
  opacity: 0;
  transform: translateX(-100%); /* 初始位置在左边 */
  visibility: hidden;
  transition: transform 1s ease, opacity 0.5s ease; /* 过渡效果 */
  margin-top: 2.5rem;
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
  width: 100%;
  height: 40.8125rem;
  background-size: contain;
  padding-top: 0;
  transform: translateX(100%); /* 初始位置在右边 */
  opacity: 0; /* 初始时不可见 */
  transition: transform 1s ease, opacity 0.5s ease; /* 过渡效果 */
  visibility: hidden; /* 初始时隐藏 */
}

.img_right.slide-in-right {
  transform: translateX(0); /* 滑动到最左边 */
  opacity: 1; /* 可见 */
  visibility: visible; /* 可见 */
}

.text_word .img_right video {
  margin-left: 2.75rem;
  width: 100%;
  height: 22.8125rem;
}

.key {
  width: 100%;
  margin-top: 2.5rem;
  z-index: 10;
}


.key .key_title {
  font-size: 2rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(0, 111, 193);
  text-align: center;
  margin-bottom: 6.1875rem;
}

.key_content_one {
  background-image: url("@/assets/imgs/_1_aboutPinggaoImgs/content-1.png");
}

.key_content_two {
  background-image: url("@/assets/imgs/_1_aboutPinggaoImgs/content-2.png");
}

.key_content_three {
  background-image: url("@/assets/imgs/_1_aboutPinggaoImgs/content-3.png");
}

.key_content_four {
  background-image: url("@/assets/imgs/_1_aboutPinggaoImgs/content-4.png");
}

.key_content_five {
  background-image: url("@/assets/imgs/_1_aboutPinggaoImgs/content-5.png");
}

.key_content_six {
  background-image: url("@/assets/imgs/_1_aboutPinggaoImgs/content-6.png");
}
.key .key_info {
  cursor: pointer;
  transition: 0.3s;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 0.4375rem;
  padding: 3rem 0;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #def1fb;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 14%;
  padding-right: 10%;
}

.key_content_h {
	width: 50%;
	border-bottom: 1px solid #bdbdbd;
	font-size: 1.375rem;
	font-family: "AlibabaPuHuiTi_2_65_Medium";
	color: rgb(35, 24, 21);
}

.key_content_text {
  font-size: 1.25rem;
  font-family: "AlibabaPuHuiTi_2_45_Light";
  color: rgb(89, 87, 87);
}

.basic_culture_title {
  font-size: 3.5rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(0, 111, 193);
  text-align: center;
  margin-bottom: 5.375rem;
  margin-top: 25rem;
}
.basic_culture_content {
  width: 100%;
  /*height: 19.375rem;*/
  display: flex;
  flex-wrap: wrap;
}
.basic_word {
  transition: 0.3s;
}
.basic_word:hover {
  transform: scale(1.05);
}
.basic_culture_info {
  border-left: 0.2rem solid #c4c4c4;
  width: 50%;
  height: 12rem;
  text-align: center;
  margin-bottom: 8.375rem;
  min-width: 6.25rem;
  transform: scale(0.5); /* 初始缩小 */
  opacity: 0; /* 初始不可见 */
  visibility: hidden; /* 初始隐藏 */
  transition: transform 0.5s ease, opacity 0.5s ease; /* 过渡效果 */
}
.basic_culture_info.scale-up {
  transform: scale(1); /* 放大到原始大小 */
  opacity: 1; /* 可见 */
  visibility: visible; /* 可见 */
}
.basic_culture_info div {
  margin-bottom: 0.125rem;
}
.basic_culture_info .basic_culture_h {
  font-size: 2.5rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(0, 111, 193);
}
.basic_culture_info .basic_culture_p {
  font-size: 2.2rem;
  font-family: "AlibabaPuHuiTi_2_45_Light";
  color: rgb(89, 87, 87);
}
.basic_culture_line {
  width: 3rem;
  height: 0.1rem;
  background-color: #4093d1;
  margin-left: 10.3125rem;
  margin: auto;
}
.basic_culture_info .basic_culture_num {
  white-space: pre;
  font-size: 2.5rem;
  font-family: "AlibabaPuHuiTi_2_85_Bold";
  color: rgb(0, 111, 193);
}
.basic_culture_info_last {
  border-right: 0.2rem solid #c4c4c4;
}
.mind_map {
  background-color: #def1fb;
  left: 0;
  width: 100%;
  height: 64.25rem;
  position: absolute;
  z-index: -1;
  overflow: hidden;
  bottom: 0;
}

.mind_map img {
  width: 100%;
  position: absolute;
  height: 64.25rem;
  left: 0;
  bottom: 0; /* 初始位置在容器底部 */
  transform: translateY(50%); /* 图片初始隐藏在容器下方 */
  visibility: hidden; /* 初始时不可见 */
  transition: transform 1s ease, opacity 0.5s ease; /* 过渡效果 */
  will-change: transform; /* 告诉浏览器动画即将发生，提升性能 */
  z-index: -1;
}

.mind_map img.slide-in {
  visibility: visible;
  transform: translateY(0); /* 从下方滑动到原位置 */
}
@media (min-width: 10px) and (max-width: 200px) {
  .text_word .text-section p {
    font-size: 0.8rem !important;
    margin-bottom: 1rem;
  }
  .text_word .img_right video {
    margin-left: 1rem;
    width: 100% !important;
    height: 15rem !important;
  }
  .mind_map {
    background-color: #def1fb;
    left: 0;
    width: 100%;
    height: 46.25rem !important;
  }
  .mind_map img {
    width: 100%;
    position: absolute;
    height: 43.25rem !important;
  }
  .groupProfile {
    width: 100%;
    height: 580.5rem !important;
  }
  .key_content_h {
    left: 6.6rem;
    top: 0.7rem;
    font-size: 1rem;
  }
  .key_content_text {
    left: 6.6rem;
    top: 2.7rem;
    font-size: 0.85rem;
  }
  .key .key_info {
    /* height: 6rem; */
  }
  .basic_culture_info .basic_culture_h {
    font-size: 1.1rem !important;
  }
  .basic_culture_info .basic_culture_p {
    font-size: 0.9rem !important;
  }
  .basic_culture_line {
    width: 2rem !important;
    height: 0.0625rem;
  }
  .basic_culture_info .basic_culture_num {
    white-space: pre;
    font-size: 1.4242rem !important;
  }
  .basic_culture_info {
    border-left: 0.0625rem solid #c4c4c4;
    width: 25%;
    height: 6rem !important;
  }
  .introduce_content span {
    font-size: 1.2rem;
  }
}
@media (min-width: 200px) and (max-width: 300px) {
  .mind_map {
    background-color: #def1fb;
    left: 0;
    width: 100%;
    height: 72.25rem !important;
  }
  .text_word .text-section p {
    font-size: 1.4rem !important;
  }
  .mind_map {
    background-color: #def1fb;
    left: 0;
    width: 100%;
    height: 76.25rem !important;
  }
  .mind_map img {
    width: 100%;
    position: absolute;
    height: 73.25rem !important;
  }
  .groupProfile {
    width: 100%;
    height: 460.5rem !important;
  }
}
@media (min-width: 300px) and (max-width: 350px) {
  .key_content_h {
    left: 10.6rem;
    top: 2.1rem;
    font-size: 1.175rem;
  }
  .key_content_text {
    left: 10.6rem;
    top: 4rem;
    font-size: 1.1rem;
  }
  .mind_map {
    background-color: #def1fb;
    left: 0;
    width: 100%;
    height: 72.25rem !important;
  }
  .text_word .text-section p {
    font-size: 1.05rem !important;
  }
  .mind_map {
    background-color: #def1fb;
    left: 0;
    width: 100%;
    height: 67.25rem !important;
  }
  .mind_map img {
    width: 100%;
    position: absolute;
    height: 62.25rem !important;
  }
  .groupProfile {
    width: 100%;
    height: 440.5rem !important;
  }
}
@media (min-width: 350px) and (max-width: 400px) {
  .mind_map {
    background-color: #def1fb;
    left: 0;
    width: 100%;
    height: 67.25rem !important;
  }
  .mind_map img {
    width: 100%;
    position: absolute;
    height: 67.25rem !important;
  }
  .groupProfile {
    width: 100%;
    height: 520.5rem !important;
  }
}
@media (min-width: 400px) and (max-width: 450px) {
  .key_content_h {
    left: 10.2rem;
    top: 1.9rem !important;
    font-size: 1.175rem;
  }
  .key_content_text {
    left: 10.2rem;
    top: 4rem;
    font-size: 1.1rem;
  }
  .groupProfile {
    width: 100%;
    height: 533.5rem !important;
  }
}
@media (min-width: 450px) and (max-width: 500px) {
  .key_content_h {
    left: 11.4rem;
    top: 2.4rem;
    font-size: 1.175rem;
  }
  .key_content_text {
    left: 11.4rem;
    top: 4.4rem;
    font-size: 1.1rem;
  }
  .groupProfile {
    width: 100%;
    height: 518.5rem !important;
  }
}
@media (min-width: 500px) and (max-width: 600px) {
  .introduce_content span {
    font-size: 2rem !important;
  }
  .key_content_h {
    left: 5.8rem;
    top: 0.7rem;
    font-size: 0.87rem;
  }
  .key_title {
    font-size: 3rem !important;
  }
  .key_content1 {
    margin-top: -4rem;
    height: 110rem;
  }
  .key_content_text {
    left: 5.8rem;
    top: 2.2rem;
    font-size: 0.7rem;
  }
  .key .key_info {
    width: 30%;
    /* height: 5rem; */
    transform: scale(3) !important;
  }
  .basic_culture {
    margin-top: -20rem;
    height: 80rem !important;
  }
  .basic_culture_info {
    border-left: 0.0625rem solid #c4c4c4;
    height: 12rem;
    width: 50%;
  }

  .basic_culture_info .basic_culture_h {
    font-size: 2rem !important;
  }
  .basic_culture_info .basic_culture_p {
    font-size: 1.7rem !important;
  }
  .basic_culture_line {
    width: 4rem !important;
    height: 0.2rem;
  }
  .basic_culture_info .basic_culture_num {
    white-space: pre;
    font-size: 2.3242rem !important;
  }

  .text_word .word_left {
    display: flex;
  }
  .text_word .word_left p {
    font-size: 2rem !important;
    margin-bottom: 1rem;
  }
  .text_word .img_right {
    margin-left: -0.325rem;
    height: 24.8125rem !important;
  }
  .text_word .img_right video {
    width: 100%;
    height: 24rem !important;
  }
  .mind_map {
    background-color: #def1fb;
    left: 0;
    width: 100%;
    height: 55.25rem !important;
  }

  .mind_map img {
    width: 100%;
    position: absolute;
    height: 50.25rem !important;
  }
  .groupProfile {
    width: 100%;
    height: 451.5rem !important;
  }
}
@media (min-width: 600px) and (max-width: 660px) {
  .introduce_content span {
    font-size: 2rem !important;
  }
  .key_content_h {
    left: 5.8rem;
    top: 0.7rem;
    font-size: 0.87rem;
  }
  .key_title {
    font-size: 3rem !important;
  }
  .key_content1 {
    margin-top: -4rem;
    height: 110rem;
  }
  .key_content_text {
    left: 5.8rem;
    top: 2.2rem;
    font-size: 0.7rem;
  }
  .key .key_info {
    width: 30%;
    /* height: 5rem; */
    transform: scale(3) !important;
  }
  .basic_culture {
    margin-top: -20rem;
    height: 80rem !important;
  }
  .basic_culture_info {
    border-left: 0.0625rem solid #c4c4c4;
    height: 12rem;
    width: 50%;
  }

  .basic_culture_info .basic_culture_h {
    font-size: 2rem !important;
  }
  .basic_culture_info .basic_culture_p {
    font-size: 1.7rem !important;
  }
  .basic_culture_line {
    width: 4rem !important;
    height: 0.2rem;
  }
  .basic_culture_info .basic_culture_num {
    white-space: pre;
    font-size: 2.3242rem !important;
  }

  .text_word .word_left {
    display: flex;
  }
  .text_word .word_left p {
    font-size: 2rem !important;
    margin-bottom: 1rem;
  }
  .text_word .img_right {
    margin-left: -0.325rem;
    height: 24.8125rem !important;
  }
  .text_word .img_right video {
    width: 100%;
    height: 24rem !important;
  }
  .mind_map {
    background-color: #def1fb;
    left: 0;
    width: 100%;
    height: 50.25rem !important;
  }

  .mind_map img {
    width: 100%;
    position: absolute;
    height: 45.25rem !important;
  }
  .groupProfile {
    width: 100%;
    height: 455.5rem !important;
  }
}
@media (min-width: 660px) and (max-width: 780px) {
  .introduce_content span {
    font-size: 1.7rem !important;
  }
  .key_content_h {
    left: 5.8rem;
    top: 0.7rem;
    font-size: 0.87rem;
  }
  .key_title {
    font-size: 3rem !important;
  }
  .key_content1 {
    margin-top: -4rem;
    height: 110rem;
  }
  .key_content_text {
    left: 5.8rem;
    top: 2.2rem;
    font-size: 0.7rem;
  }
  .key .key_info {
    width: 30%;
    /* height: 5rem; */
    transform: scale(3) !important;
  }
  .basic_culture {
    margin-top: -20rem;
    height: 80rem !important;
  }
  .basic_culture_info {
    border-left: 0.0625rem solid #c4c4c4;
    height: 12rem;
    width: 50%;
  }

  .basic_culture_info .basic_culture_h {
    font-size: 2rem !important;
  }
  .basic_culture_info .basic_culture_p {
    font-size: 1.7rem !important;
  }
  .basic_culture_line {
    width: 4rem !important;
    height: 0.2rem;
  }
  .basic_culture_info .basic_culture_num {
    white-space: pre;
    font-size: 2.3242rem !important;
  }

  .text_word .word_left {
    display: flex;
  }
  .text_word .word_left p {
    font-size: 2rem !important;
    margin-bottom: 1rem;
  }
  .text_word .img_right {
    margin-left: -0.325rem;
    height: 24.8125rem !important;
  }
  .text_word .img_right video {
    width: 100%;
    height: 24rem !important;
  }
  .mind_map {
    background-color: #def1fb;
    left: 0;
    width: 100%;
    height: 50.25rem !important;
  }

  .mind_map img {
    width: 100%;
    position: absolute;
    height: 45.25rem !important;
  }
  .groupProfile {
    width: 100%;
    height: 450.5rem !important;
  }
}
@media (min-width: 780px) and (max-width: 900px) {
  .introduce_content span {
    font-size: 1.8rem !important;
  }
  .key_content_h {
    left: 5.8rem;
    top: 0.7rem;
    font-size: 0.87rem;
  }
  .key_title {
    font-size: 3rem !important;
  }
  .key_content1 {
    margin-top: -4rem;
    height: 110rem;
  }
  .key_content_text {
    left: 5.8rem;
    top: 2.2rem;
    font-size: 0.7rem;
  }
  .key .key_info {
    width: 30%;
    /* height: 5rem; */
    transform: scale(3) !important;
  }
  .basic_culture {
    margin-top: -20rem;
    height: 80rem !important;
  }
  .basic_culture_info {
    border-left: 0.0625rem solid #c4c4c4;
    height: 12rem;
    width: 50%;
  }

  .basic_culture_info .basic_culture_h {
    font-size: 2rem !important;
  }
  .basic_culture_info .basic_culture_p {
    font-size: 1.7rem !important;
  }
  .basic_culture_line {
    width: 4rem !important;
    height: 0.2rem;
  }
  .basic_culture_info .basic_culture_num {
    white-space: pre;
    font-size: 2.3242rem !important;
  }

  .text_word .word_left {
    display: flex;
  }
  .text_word .word_left p {
    font-size: 2rem !important;
    margin-bottom: 1rem;
  }
  .text_word .img_right {
    margin-left: -0.325rem;
    height: 24.8125rem !important;
  }
  .text_word .img_right video {
    width: 100%;
    height: 24rem !important;
  }
  .mind_map {
    background-color: #def1fb;
    left: 0;
    width: 100%;
    height: 45.25rem !important;
  }

  .mind_map img {
    width: 100%;
    position: absolute;
    height: 40.25rem !important;
  }
  .groupProfile {
    width: 100%;
    height: 460.5rem !important;
  }
}
@media (min-width: 900px) and (max-width: 1000px) {
  .key_content_h {
    left: 9.8rem;
    top: 1.5rem;
    font-size: 1.2rem;
  }
  .key_content_text {
    left: 9.8rem;
    top: 3.6rem;
    font-size: 1.1rem;
  }
  .key .key_info {
    /* height: 8.5rem; */
  }
  .mind_map {
    background-color: #def1fb;
    left: 0;
    width: 100%;
    height: 65.25rem !important;
  }

  .mind_map img {
    width: 100%;
    position: absolute;
    height: 65.25rem !important;
  }
  .groupProfile {
    width: 100%;
    height: 510.5rem !important;
  }
}
@media (min-width: 1000px) and (max-width: 1200px) {
  .introduce_content span {
    font-size: 1.8rem !important;
  }
  .key_content_h {
    left: 11.6rem;
    top: 2.2rem;
    font-size: 1.3rem;
  }
  .key_content_text {
    left: 11.6rem;
    top: 4.55rem;
    font-size: 1.18rem;
  }
  .mind_map {
    background-color: #def1fb;
    left: 0;
    width: 100%;
    height: 70.25rem !important;
  }

  .mind_map img {
    width: 100%;
    position: absolute;
    height: 70.25rem !important;
  }
  .groupProfile {
    width: 100%;
    height: 510.5rem !important;
  }
}
@media (min-width: 1200px) and (max-width: 1500px) {
  .key_content_h {
    left: 11.3rem;
    top: 2rem;
    font-size: 1.3rem;
  }
  .key_content_text {
    left: 11.3rem;
    top: 4.3rem;
    font-size: 1.13rem;
  }
  .mind_map {
    background-color: #def1fb;
    left: 0;
    width: 100%;
    height: 62.25rem !important;
  }

  .mind_map img {
    width: 100%;
    position: absolute;
    height: 62.25rem !important;
  }
  .groupProfile {
    width: 100%;
    height: 515.5rem !important;
  }
}
@media (min-width: 1500px) and (max-width: 1800px) {
  .key_content_h {
    left: 11.5rem;
    top: 2.2rem;
    font-size: 1.3rem;
  }
  .key_content_text {
    left: 11.5rem;
    top: 4.3rem;
    font-size: 1.1rem;
  }
  .mind_map {
    background-color: #def1fb;
    left: 0;
    width: 100%;
    height: 75rem !important;
  }
  .mind_map img {
    width: 100%;
    position: absolute;
    height: 70rem !important;
  }
  .groupProfile {
    width: 100%;
    height: 510rem !important;
  }
}
@media (min-width: 1800px) and (max-width: 2100px) {
  .key_content_h {
    left: 11.7rem;
    top: 2.2rem;
    font-size: 1.3rem;
  }
  .key_content_text {
    left: 11.7rem;
    top: 4.5rem;
    font-size: 1.15rem;
  }
  .mind_map {
    background-color: #def1fb;
    left: 0;
    width: 100%;
    height: 65rem !important;
  }
  .mind_map img {
    width: 100%;
    position: absolute;
    height: 65rem !important;
  }
  .groupProfile {
    width: 100%;
    height: 515rem !important;
  }
}
@media (min-width: 2100px) and (max-width: 3000px) {
  .key_content_h {
    left: 11.5rem;
    top: 2.1rem;
    font-size: 1.3rem;
  }
  .key_content_text {
    left: 11.5rem;
    top: 4.4rem;
    font-size: 1.15rem;
  }
  .mind_map {
    background-color: #def1fb;
    left: 0;
    width: 100%;
    height: 78rem !important;
  }

  .mind_map img {
    width: 100%;
    position: absolute;
    height: 78rem !important;
  }
  .groupProfile {
    width: 100%;
    height: 515rem !important;
  }
}
@media (min-width: 3000px) and (max-width: 5000px) {
  .mind_map {
    background-color: #def1fb;
    left: 0;
    width: 100%;
    height: 78rem !important;
  }

  .mind_map img {
    width: 100%;
    position: absolute;
    height: 78rem !important;
  }
  .groupProfile {
    width: 100%;
    height: 516rem !important;
  }
}
@media (min-width: 5000px) and (max-width: 8000px) {
  .mind_map {
    background-color: #def1fb;
    left: 0;
    width: 100%;
    height: 78rem !important;
  }

  .mind_map img {
    width: 100%;
    position: absolute;
    height: 76rem !important;
  }
  .groupProfile {
    width: 100%;
    height: 510rem !important;
  }
}

@media (min-width: 1500px) and (max-width: 1800px) {
  .mind_map {
    height: 61.25rem !important;
  }
}
</style>
