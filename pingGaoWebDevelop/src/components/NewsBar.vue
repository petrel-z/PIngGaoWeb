<script lang="ts" setup>
defineOptions({
  name: "NewsBar",
});
const props = defineProps({
  color: {
    type: String,
    default: "#ab2526",
  },
  time: {
    type: String,
    required: true,
  },
  browse: {
    type: Number,
    required: true,
  },
});

import { ElMessageBox } from "element-plus";

const openQQ = () => {
  const shareUrl = encodeURIComponent('http://localhost:5173/partyBuilding/partyspiritDetail'); // 你要分享的链接
  const title = encodeURIComponent('分享标题'); // 分享的标题
  const pics = encodeURIComponent('/src/assets/imgs/common/qrcode.png'); // 分享的图片
  const summary = encodeURIComponent('fsaf'); // 分享的描述

  const qqShareUrl = `https://connect.qq.com/widget/shareqq/index.html?url=${shareUrl}&title=${title}&pics=${pics}&summary=${summary}`;
  // window.location.href = qqShareUrl;
  // 使用 window.open 在新标签页中打开链接
  window.open(qqShareUrl, '_blank');
};
const openBlog = () => {
  const shareUrl = encodeURIComponent('http://localhost:5173/partyBuilding/partyspiritDetail'); // 你要分享的链接
  const title = encodeURIComponent('分享标题'); // 分享的标题
  const pic = encodeURIComponent('/src/assets/imgs/common/qrcode.png'); // 分享的图片

  const weiboShareUrl = `https://service.weibo.com/share/share.php?url=${shareUrl}&title=${title}&pic=${pic}`;
  window.open(weiboShareUrl, '_blank');

};
const openQQSpace = () => {
  const shareUrl = encodeURIComponent('http://localhost:5173/partyBuilding/partyspiritDetail'); // 你要分享的链接
  const title = encodeURIComponent('总部动态-新闻列表'); // 分享的标题
  const pics = encodeURIComponent('/src/assets/imgs/common/qrcode.png'); // 分享的图片
  const summary = encodeURIComponent('这是分享的描述'); // 分享的描述

  const qqSpaceShareUrl = `https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${shareUrl}&title=${title}&pics=${pics}&summary=${summary}`;
  window.open(qqSpaceShareUrl, '_blank'); // 在新标签页中打开QQ空间分享页面

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
        width: "200px",
        height: "30%",
        color: "black",
        overflow: "scroll",
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
      <span class="share">分享:</span>
      <el-button plain @click="openQQ" class="el-button"><span class="icon iconfont"
          :style="{ color: props.color }">&#xe62e;</span></el-button>
      <el-button plain @click="openBlog" class="el-button"><span class="icon iconfont"
          :style="{ color: props.color }">&#xe61a;</span></el-button>
      <el-button plain @click="openQQSpace" class="el-button"><span class="icon iconfont"
          :style="{ color: props.color }">&#xe674;</span></el-button>
      <el-button plain @click="openWechat" class="el-button"><span class="icon iconfont"
          :style="{ color: props.color }">&#xe654;</span></el-button>
      <el-button plain @click="openmore" class="el-button"><span class="icon iconfont"
          :style="{ color: props.color }">&#xe655;</span></el-button>
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
      .share {
        margin-right: 1rem;
      }

      .icon {
        margin-left: 0;
        font-size: 3rem;
      }
    }
  }
}

@media (max-width: 800px) {
  .news-bar {
    font-size: 1.8rem;


    .bar-right {
      .share {
        margin-right: 1rem;
      }

      .icon {
        font-size: 3.5rem;
      }
    }
  }
}

@media (max-width: 700px) {
  .news-bar {
    font-size: 1.7rem;


    .bar-right {
      .share {
        margin-right: 1rem;
      }

      .icon {
        font-size: 3.5rem;
      }
    }
  }
}

@media (max-width: 600px) {
  .news-bar {
    font-size: 1.9rem;
    .bar-left {
      .left-browse {
        margin-left: 3rem;
      }
    }

    .bar-right {
      .share {
        margin-right: 1rem;
      }

      .icon {
        font-size: 3.8rem;
      }
    }
  }
}

@media (max-width: 500px) {
  .news-bar {
    height: 8rem;
    line-height: 8rem;
    font-size: 2.3rem;


    .bar-left {
      .left-browse {
        margin-left: 2.5rem;
      }
    }

    .bar-right {
      .icon {
        font-size: 4.5rem;
      }
    }
  }
}
@media (max-width: 400px) {
  .news-bar {
    font-size: 2.6rem;


    .bar-left {
      .left-browse {
        margin-left: 4.5rem;
      }
    }
  }
}
</style>
