<script lang="ts" setup>
defineOptions({
  name: "NewsBar",
});
const props = defineProps({
  color: {
    type: String,
    default: "#ab2526",
    required: true,
  },
  time: {
    type: String,
    required: true,
    default: "2022-01-01",
  },
  browse: {
    type: Number,
    required: true,
    default: 0,
  },
});

import { ElMessageBox } from "element-plus";

const openQQ = () => {
  ElMessageBox.alert(
    '<div class="share-wechat"><img src="/src/assets/imgs/common/qrcode.png" alt=""><div>手机QQ扫描二维码，点击右上角 ··· 按钮 <br> 分享到QQ好友或QQ空间</div></div>',
    "分享到QQ",
    {
      dangerouslyUseHTMLString: true,
      customStyle: {
        width: "auto",
      },
    }
  );
};
const openBlog = () => {
  ElMessageBox.alert(
    '<div class="share-wechat"><img src="/src/assets/imgs/common/qrcode.png" alt=""><div>手机微博扫描二维码，点击右上角 ··· 按钮 <br> 分享到微博好友</div></div>',
    "分享到微博",
    {
      dangerouslyUseHTMLString: true,
      customStyle: {
        width: "auto",
      },
    }
  );
};
const openQQSpace = () => {
  ElMessageBox.alert(
    '<div class="share-wechat"><img src="/src/assets/imgs/common/qrcode.png" alt=""><div>手机QQ扫描二维码，点击右上角 ··· 按钮 <br> 分享到QQ好友或QQ空间</div></div>',
    "分享QQ好友或动态",
    {
      dangerouslyUseHTMLString: true,
      customStyle: {
        width: "auto",
      },
    }
  );
};
const openWechat = () => {
  ElMessageBox.alert(
    '<div class="share-wechat"><img src="/src/assets/imgs/common/qrcode.png" alt=""><div>打开微信，点击底部的“发现”，<br>使用“扫一扫”即可将网页分享至朋友圈</div></div>',
    "分享到微信朋友圈",
    {
      dangerouslyUseHTMLString: true,
      customStyle: {
        width: "auto",
      },
    }
  );
};
const openmore = () => {
  ElMessageBox.alert(
    '<ul class="bdshare_dialog_list"><li><a href="#" onclick="return false;" class="popup_mshare" data-cmd="mshare">一键分享</a></li><li><a href="#" onclick="return false;" class="popup_qzone" data-cmd="qzone">QQ空间</a></li><li><a href="#" onclick="return false;" class="popup_tsina" data-cmd="tsina">新浪微博</a></li><li><a href="#" onclick="return false;" class="popup_bdysc" data-cmd="bdysc">百度云收藏</a></li><li><a href="#" onclick="return false;" class="popup_weixin" data-cmd="weixin">微信</a></li><li><a href="#" onclick="return false;" class="popup_renren" data-cmd="renren">人人网</a></li><li><a href="#" onclick="return false;" class="popup_tqq" data-cmd="tqq">腾讯微博</a></li><li><a href="#" onclick="return false;" class="popup_bdxc" data-cmd="bdxc">百度相册</a></li><li><a href="#" onclick="return false;" class="popup_kaixin001" data-cmd="kaixin001">开心网</a></li><li><a href="#" onclick="return false;" class="popup_tqf" data-cmd="tqf">腾讯朋友</a></li><li><a href="#" onclick="return false;" class="popup_tieba" data-cmd="tieba">百度贴吧</a></li><li><a href="#" onclick="return false;" class="popup_douban" data-cmd="douban">豆瓣网</a></li><li><a href="#" onclick="return false;" class="popup_tsohu" data-cmd="tsohu">搜狐微博</a></li><li><a href="#" onclick="return false;" class="popup_bdhome" data-cmd="bdhome">百度新首页</a></li><li><a href="#" onclick="return false;" class="popup_sqq" data-cmd="sqq">QQ好友</a></li><li><a href="#" onclick="return false;" class="popup_thx" data-cmd="thx">和讯微博</a></li><li><a href="#" onclick="return false;" class="popup_ibaidu" data-cmd="ibaidu">百度个人中心</a></li><li><a href="#" onclick="return false;" class="popup_meilishuo" data-cmd="meilishuo">美丽说</a></li><li><a href="#" onclick="return false;" class="popup_mogujie" data-cmd="mogujie">蘑菇街</a></li><li><a href="#" onclick="return false;" class="popup_diandian" data-cmd="diandian">点点网</a></li><li><a href="#" onclick="return false;" class="popup_huaban" data-cmd="huaban">花瓣</a></li><li><a href="#" onclick="return false;" class="popup_duitang" data-cmd="duitang">堆糖</a></li><li><a href="#" onclick="return false;" class="popup_hx" data-cmd="hx">和讯</a></li><li><a href="#" onclick="return false;" class="popup_fx" data-cmd="fx">飞信</a></li><li><a href="#" onclick="return false;" class="popup_youdao" data-cmd="youdao">有道云笔记</a></li><li><a href="#" onclick="return false;" class="popup_sdo" data-cmd="sdo">麦库记事</a></li><li><a href="#" onclick="return false;" class="popup_qingbiji" data-cmd="qingbiji">轻笔记</a></li><li><a href="#" onclick="return false;" class="popup_people" data-cmd="people">人民微博</a></li><li><a href="#" onclick="return false;" class="popup_xinhua" data-cmd="xinhua">新华微博</a></li><li><a href="#" onclick="return false;" class="popup_mail" data-cmd="mail">邮件分享</a></li><li><a href="#" onclick="return false;" class="popup_isohu" data-cmd="isohu">我的搜狐</a></li><li><a href="#" onclick="return false;" class="popup_yaolan" data-cmd="yaolan">摇篮空间</a></li><li><a href="#" onclick="return false;" class="popup_wealink" data-cmd="wealink">若邻网</a></li><li><a href="#" onclick="return false;" class="popup_ty" data-cmd="ty">天涯社区</a></li><li><a href="#" onclick="return false;" class="popup_iguba" data-cmd="iguba">股吧</a></li><li><a href="#" onclick="return false;" class="popup_fbook" data-cmd="fbook">Facebook</a></li><li><a href="#" onclick="return false;" class="popup_twi" data-cmd="twi">Twitter</a></li><li><a href="#" onclick="return false;" class="popup_linkedin" data-cmd="linkedin">linkedin</a></li><li><a href="#" onclick="return false;" class="popup_copy" data-cmd="copy">复制网址</a></li><li><a href="#" onclick="return false;" class="popup_print" data-cmd="print">打印</a></li></ul>',
    "分享到",
    {
      dangerouslyUseHTMLString: true,
      customStyle: {
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        width: "200px",
        height: "30%",
        color: "black",
        overflow: "scroll",
        // top: '50%',
        // left: '50%',
        // transform: 'translate(-50%, -50%)',
      },
    }
  );
};
</script>

<template>
  <div class="news-bar" :style="{ borderTopColor: props.color, borderBottomColor: props.color }">
    <div class="bar-left" :style="{ color: props.color }">
      <div class="left-time">发布时间：{{ props.time }}</div>
      <div class="left-browse">浏览：{{ props.browse }} 次</div>
    </div>
    <div class="bar-right" :style="{ color: props.color }">
      <span>分享:</span>
      <el-button plain @click="openQQ" class="el-button"
        ><span class="icon iconfont" :style="{ color: props.color }">&#xe62e;</span></el-button
      >
      <el-button plain @click="openBlog" class="el-button"
        ><span class="icon iconfont" :style="{ color: props.color }">&#xe61a;</span></el-button
      >
      <el-button plain @click="openQQSpace" class="el-button"
        ><span class="icon iconfont" :style="{ color: props.color }">&#xe674;</span></el-button
      >
      <el-button plain @click="openWechat" class="el-button"
        ><span class="icon iconfont" :style="{ color: props.color }">&#xe654;</span></el-button
      >
      <el-button plain @click="openmore" class="el-button"
        ><span class="icon iconfont" :style="{ color: props.color }">&#xe655;</span></el-button
      >
    </div>
  </div>
</template>

<style lang="less" scoped>
ul li a {
  color: black;
}
.share-wechat {
  div {
    font-size: 100px;
  }
}
.news-bar {
  display: flex;
  justify-content: space-between;
  height: 6.6rem;
  line-height: 6.6rem;
  border-top: 1px solid;
  border-bottom: 1px solid;

  font-size: 1.6rem;
  font-family: "AlibabaPuHuiTi_2_55_Regular";
  color: rgb(165, 22, 23);
  text-align: left;

  .bar-left {
    display: flex;
    justify-content: start;

    .left-browse {
      margin-left: 7.6rem;
    }
  }

  .bar-right {
    display: flex;
    align-items: center;

    .icon {
      margin-left: 1.5rem;
      font-size: 3.5rem;
      cursor: pointer;
    }

    .el-button {
      padding: 0;
      width: auto;
      height: auto;
      border: none;
    }
  }
}

@media (max-width: 1500px) {
  .news-bar {
    height: 5rem;
    line-height: 5rem;
    font-size: 1.2rem;

    .bar-left {
      .left-browse {
        margin-left: 7rem;
      }
    }
  }
}

@media (max-width: 1400px) {
  .news-bar {
    .bar-left {
      .left-browse {
        margin-left: 7rem;
      }
    }
  }
}

@media (max-width: 900px) {
  .news-bar {
    height: 5rem;
    line-height: 5rem;
    font-size: 1.3rem;

    .bar-left {
      .left-browse {
        margin-left: 2rem;
      }
    }

    .bar-right {
      .icon {
        margin-left: 1rem;
        font-size: 2rem;
      }
    }
  }
}
</style>
