<script setup>
defineOptions({
  name: 'ContactUs'
})
import MyTitle_En from '@/components/MyTitle_En.vue';
import Footer_En from '@/components/Footer_En.vue';
import ComHeader from '@/components/ComHeader.vue';
import { ref } from "vue";


const info = ref({
  title: "关于平高",
  titleEn: "CONTACT US",
  content: "赋能智慧电气·创引绿色能源",
  contentEn: "Reform, Innovation, Unity, Struggle, and Practical Action",
  footer: "PG GROUP",
  imgPath: '',
  footerBg: '',
});

</script>
<template>
  <div class="contact_us_en">

    <div class="header">
      <div>
        <ComHeader :content="info"></ComHeader>
      </div>
    </div>


    <div class="contain">
      <MyTitle_En :title="'contact us'"></MyTitle_En>
      <div class="bg"></div>
      <div class="content">
        <div class="left">
          <div class="item">
            <div class="text">Sales Tel</div>
            <hr style="width: 12%;">
            <div class="number">0371-58505793</div>
          </div>

          <div class="item">
            <div class="text">Email</div>
            <hr style="width: 12%;">
            <div class="number">sales@pinggao.com</div>
          </div>

          <div class="item">
            <div class="text">Customer service</div>
            <hr style="width: 12%;">
            <div class="number">400 6700 312</div>
          </div>

          <div class="item">
            <div class="text">Zip code</div>
            <hr style="width: 12%;">
            <div class="number">467001</div>
          </div>

        </div>
        <div class="right">
          <div class="item">
            <div class="text">Address</div>
            <hr style="width: 10%;">
            <div class="number">Building 3B, No. 39 Longyuan West<br>
              Third Street, Zhengdong New District,<br>
              Zhengzhou City, Henan Province</div>
          </div>
        </div>
      </div>
    </div>


    <div>
      <Footer_En />
    </div>
  </div>
</template>
<style lang="less" scoped>
.contact_us_en {
  position: relative;

  .header {
    height: 32vw;
    width: auto;
    background-image: url("@/assets/imgs/_9_contactUsImgs/头部轮播-09.png");
    background-size: cover;
  }

  .contain {
    height: 700px;
    position: relative;

    .bg {
      background-image: url('/src/assets/imgs/_9_contactUsImgs/t9_p1_contentBg.png');
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 40rem;
      background-size: cover;
    }

    .content {
      // height: 1000px;
      padding: 3% 11%;
      display: flex;
      justify-content: space-between;

      .left {
        position: relative;
        animation: toright 1s ease-in-out forwards;
        width: 62%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        .item {
          width: 50%;
          margin-bottom: 2rem;

          hr {
            border: 1px solid #000;
            margin: 0 0 8px 0;
          }

          .text {
            font-size: 2.4rem;
            font-family: "Avenir";
            color: rgb(0, 0, 0);
          }

          .number {
            font-size: 1.8rem;
            font-family: "Avenir";
            color: rgb(35, 24, 21);
          }
        }
      }

      .right {
        position: relative;
        animation: toleft 1s ease-in-out forwards;
        flex: 1;

        .item {
          width: 100%;

          hr {
            border: 1px solid #000;
            margin: 0 0 8px 0;
          }

          .text {
            font-size: 2.4rem;
            font-family: "Avenir";
            color: rgb(0, 0, 0);
          }

          .number {
            font-size: 1.8rem;
            font-family: "Avenir";
            color: rgb(35, 24, 21);

          }
        }
      }

      @keyframes toright {
        from {
          left: -100%;
        }

        to {
          left: 0;
        }
      }

      @keyframes toleft {
        from {
          left: 100%;
        }

        to {
          left: 0;
        }
      }
    }
  }
}
</style>
