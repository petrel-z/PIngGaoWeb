<script setup>
import { ref, onMounted } from "vue";
import MyContent from "@/components/MyContent.vue";
import MyTitle from "@/components/MyTitle.vue";
import HumanContent from "@/components/HumanContent.vue";
import httpUtils from "@/utils/httpUtils.js";

const formatedData = ref([]);

const contentBox = ref(null);
const humanContentBox = ref(null);

const formatTitle = (text) => {
  return text.split("")
    .reduce((acc, char, index) => {
      acc += char;
      if ((index + 1) % 5 === 0 && index !== text.length - 1) {
        acc += "\n";
      }
      return acc;
    }, "");
};

async function getList () {
  const response = await httpUtils.get(`/cms/talent/list`);
  const { data } = await response.json();

  data.talentType.forEach(type => {
    const mainTalent = data.listTalent.find(talent => talent.talentTitle === type.label);
    if (mainTalent) {
      formatedData.value.push({
        title: `${mainTalent.talentTitle}`,
        num: parseInt(mainTalent.talentCount),
        children: [],
      });
    }
  });

  data.listTalent.forEach(talent => {
    const type = data.talentType.find(type => type.value === talent.talentType);
    if (type && talent.talentTitle !== type.label) {
      const parent = formatedData.value.find(item => item.title === `${type.label}`);
      if (parent) {
        parent.children.push({
          title: `${formatTitle(talent.talentTitle)}/人`,
          num: parseInt(talent.talentCount),
        });
      }
    }
  });
}

getList();

onMounted(() => {
  if (contentBox.value && humanContentBox.value) {
    // 监听页面滚动事件
    window.addEventListener("scroll", () => {
      if (!contentBox.value || !humanContentBox.value) return;
      // 获取元素顶部距离页面顶部的距离
      const contentTop = contentBox.value.getBoundingClientRect().top;
      const humanContentTop = humanContentBox.value.getBoundingClientRect().top;
      // 获取窗口的高度
      const windowHeight = window.innerHeight;

      // 判断元素是否进入可视区域
      if (contentTop < windowHeight) {
        contentBox.value.classList.add("show");
      } else {
        contentBox.value.classList.remove("show");
      }
      if (humanContentTop < windowHeight) {
        humanContentBox.value.classList.add("show");
      } else {
        humanContentBox.value.classList.remove("show");
      }
    });
  }
});
</script>

<template>
  <div class="body-box">
    <div class="bodyBg">
      <img src="@/assets/imgs/_8_humanResourcesImgs/bg-1.png" alt="" />
    </div>
    <div class="body-content">
      <div>
        <MyTitle title="人才队伍" english="TALENT TEAM"></MyTitle>
      </div>
      <div ref="contentBox" style="margin-top: 3.4375rem">
        <MyContent
          class="content"
          title="平高集团"
          content1="平高集团始终坚持以人为本，关注员工成长成才，优化人才成长环境，将人才强企战略纳入集团发展战略之一，引进和培育"
          content2="了一支高素质的优秀人才队伍。"
          :bottom-items="formatedData"
          detail-id="" />
      </div>
      <div ref="humanContentBox" style="margin-top: 5.875rem">
        <HumanContent class="left" v-for="data in formatedData" :key="data.title"
                      :title="`拥有${data.title}${data.num}人`" :items="data.children" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.body-box {
  position: relative;
  width: 100%;
  height: auto;
}

.bodyBg {
  width: 100%;
  height: auto;
  position: absolute;
  bottom: -1rem;
  z-index: -1;
}

.bodyBg img {
  width: 100%;
  height: auto;
}

.body-content {
  margin: 0 11%;
  padding-top: 4.125rem;
  overflow: hidden;
  padding-bottom: 30rem;
}

.show .content {
  right: 0;
}

.show .left {
  left: 0;
}

.show .right {
  right: 0;
}

.content {
  position: relative;
  right: -200%;
  transition: right 0.5s ease;
}

.left {
  position: relative;
  left: -200%;
  transition: left 1s ease;
}

.right {
  position: relative;
  right: -200%;
  transition: right 1s ease;
}
</style>
