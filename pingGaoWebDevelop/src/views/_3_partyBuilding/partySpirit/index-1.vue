<script setup>
defineOptions({
    name: 'PartySpirit',
})
import partyContentBar from '../partyContentBar.vue';
import partyContentDetail from '../partyContentDetail.vue';
</script>

<template>
    <div class="spiritSpan">
            <div class="spirit-top">
                 <partyContentBar></partyContentBar>
            </div>
            <div class="footer-line"></div>
            <div class="spirit-content">
                <partyContentDetail></partyContentDetail>
                <div class="white-div"></div>
            </div>
        </div>
</template>

<style lang="less" scoped>
 .spiritSpan {
        position: relative;
        // margin-top: 100px;
        .spirit-top {
            // position: absolute;
        }
        .footer-line {
            width: 100%;
            height: 10px;
            background-image: url(@/assets/image/t3_p1_line.png);
            background-size: cover;
            background-repeat: repeat;
            // transform: translateY(-3px);
            position: absolute;
            top:-3px;
        }
        .spirit-content {
            .white-div {
                width: 100%;
                height: 1420px;
                background-color: #fff; // 白色背景 #fff
            }
        }
    }
</style>