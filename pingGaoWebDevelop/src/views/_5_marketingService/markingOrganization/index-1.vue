<script setup>
import MyContent from '@/components/MyContent.vue'
import MyTitle from '@/components/MyTitle.vue'
import HttpUtils from '@/utils/httpUtils.js'
import { onMounted, ref } from 'vue'
import { isMobile } from "@/utils/util.js";

defineOptions({
  name: 'marketing-serviceIndex2-1',
})

const data = ref('')

const contentBox = ref(null)
const itemsContent = ref(null)
onMounted(() => {
  if (contentBox.value && itemsContent.value) {
    const mobile = isMobile()
	if(mobile)return;
    // 监听页面滚动事件
    window.addEventListener('scroll', () => {
      if (!contentBox.value || !itemsContent.value) return
      // 获取元素顶部距离页面顶部的距离
      const contentTop = contentBox.value.getBoundingClientRect().top
      const itemsTop = itemsContent.value.getBoundingClientRect().top
      // 获取窗口的高度
      const windowHeight = window.innerHeight

      // 判断元素是否进入可视区域
      if (contentTop < windowHeight) {
        contentBox.value.classList.add('show')
      } else {
        contentBox.value.classList.remove('show')
      }
      if (itemsTop < windowHeight) {
        itemsContent.value.classList.add('show')
      } else {
        itemsContent.value.classList.remove('show')
      }
    })
  }
})

async function getData() {
  const res = await HttpUtils.get(`/cms/organization/list`)
  const result = await res.json()
  data.value = result.data
  setTimeout(() => {
	contentBox.value.classList.add('show')
	itemsContent.value.classList.add('show')
  }, 200);
}

getData()
</script>

<template>
  <div>
    <div style="position: relative">
      <div class="body-content">
        <div class="bodyBg"></div>
        <div>
          <MyTitle title="营销组织" english="MARKETING ORGANIZATION" />
        </div>
        <div ref="contentBox">
          <div
            class="content"
            style="
              margin-top: 3.4375rem;
              background-color: #45b3e0;
              border-radius: 0.5rem;
              width: 100%;
            "
          >
            <MyContent
              title="中国最先进的电力装备供应商之一"
              content1="五十年来，在电厂、冶金、化工、纺织、煤炭、电气化铁路等领域，为遍及六十多个国家和地区的客户提供创新型的产品、服务和"
              content2="解决方案，逐渐成为行业的佼佼者，并以先进的技术、完善的服务，影响和改善更多人的工作和生活。"
              detail-id="" />
            <div class="my-content-bottom">
              <div class="my-content-bottom-item-box">
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
          </div>
        </div>

        <div class="items-div">
          <div class="items-title">平高集团各产业单位联系方式</div>
          <div class="items-content" ref="itemsContent">
            <div
              class="item"
              v-for="(org, i) in data"
              :key="i"
              :class="{ left: i % 3 === 1, right: i % 3 === 0 || i % 3 === 2 }"
            >
              <hr class="item-hr1" />
              <div class="item-content">
                <div class="item-title">{{ org.name }}</div>
                <hr class="item-hr-hr" />
                <div class="item-phone">电话：{{ org.phone }}</div>
                <div class="item-fax">传真：{{ org.fax }}</div>
                <div class="item-email">邮箱：{{ org.email }}</div>
              </div>
              <hr
                v-if="i === 25"
                style="
                  position: absolute;
                  bottom: 0px;
                  left: 0px;
                  width: 100%;
                  height: 0.05rem;
                  background-color: rgb(69, 179, 224);
                "
              />
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bg">
        <img src="@/assets/imgs/_5_marketingServiceImgs/serviceBg1.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.bodyBg {
  background-color: #def1fb;
  width: 100%;
  min-height: 60vh;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
}

.body-content {
  margin: 0 11%;
  padding-top: 4.0625rem;
  padding-bottom: 50rem;
  height: auto;
  overflow: hidden;
}

.my-content-bottom {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem 2rem;
}

.my-content-bottom-item-box {
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 2rem 2rem;
}

.my-content-bottom-item:hover {
  border-bottom: 0.05rem solid #fff;
  cursor: pointer;
}

.my-content-bottom-item {
  display: flex;
  width: 32%;
  height: auto;
  justify-content: space-evenly;
  align-items: center;
}

.my-content-bottom-item div {
  height: 2rem;
  width: 0.125rem;
  margin: 0 0.9375rem;
  background-color: #fff;
}

.my-content-bottom-item span:nth-of-type(1) {
  font-size: 1.5rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(255, 255, 255);
  line-height: 1.542;
  text-align: left;
  padding-top: 0.7rem;
}

.my-content-bottom-item span:nth-of-type(2) {
  font-size: 2.4375rem;
  font-family: "Avenir";
  color: rgb(255, 255, 255);
  line-height: 1.156;
  text-align: left;
  padding-top: 0.2rem;
}

.my-content-bottom-item span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.items-div {
  padding-top: 5.125rem;
  width: 100%;
}

.items-title {
  font-size: 2rem;
  font-family: "Alibaba_PuHuiTi_2_65_Medium";
  color: rgb(69, 179, 224);
  line-height: 1.156;
  text-align: center;
}

.items-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  width: 100%;
  margin-top: 2.9375rem;
  overflow: hidden;
  padding-bottom: 20px;
}

.item {
  position: relative;
  min-height: 16.9375rem;
}

.item hr {
  border: 0.05rem solid rgb(69, 179, 224);
}

.item-hr-hr {
  width: 3.8125rem;
  margin: 1.375rem 0;
}

.item-hr1 {
  margin-bottom: 3.125rem;
}

.item-title {
  font-size: 1.5rem;
  font-family: "AlibabaPuHuiTi_2_65_Medium";
  color: rgb(69, 179, 224);
  line-height: 1.543;
  text-align: left;
}

.item-phone,
.item-fax,
.item-email {
  font-size: 1.375rem;
  font-family: "AlibabaPuHuiTi_2_45_Light";
  color: rgb(89, 87, 87);
  line-height: 1.684;
  text-align: left;
}

.footer-bg {
  width: 100%;
  height: auto;
  position: absolute;
  left: 0px;
  bottom: -2rem;
  z-index: -1;
}

.footer-bg img {
  width: 100%;
  height: auto;
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

@media (max-width: 768px) {
  .items-content {
    grid-template-columns: repeat(1, 1fr);
  }

  .item-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .my-content-bottom {
    flex-direction: column;
    align-content: center;
    padding: 0 4rem 4rem;
  }

  .my-content-bottom-item-box {
    flex-direction: column;
    align-content: center;
    width: auto;
  }

  .my-content-bottom-item {
    width: 100%;
    justify-content: left;
    margin-top: 2.5rem;
  }

  .my-content-bottom-item span:nth-of-type(1) {
    font-size: 3rem;
  }

  .my-content-bottom-item span:nth-of-type(2) {
    font-size: 4rem;
  }

  .items-title {
    font-size: 3.3rem;
  }

  .item-title {
    font-size: 2.6rem;
  }

  .item-phone,
  .item-fax,
  .item-email {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .my-content-bottom-item span:nth-of-type(1) {
    font-size: 3.5rem;
  }

  .my-content-bottom-item span:nth-of-type(2) {
    font-size: 4.5rem;
  }

  .items-title {
    font-size: 3.8rem;
  }

  .item-title {
    font-size: 3.1rem;
  }

  .item-phone,
  .item-fax,
  .item-email {
    font-size: 2.6rem;
  }
}
</style>
