<template>
  <div>
    <!-- 定义播放器dom -->
    <div id="J_prismPlayer" class="prism-player" />
  </div>
</template>

<script>
import { getVideoAuthApi } from "~/apis/videoApi";

export default {
  layout: "video", // 采用 video 布局
  data() {
    return {};
  },
  asyncData({ params }) {
    return getVideoAuthApi(params.videoId).then(({ code, data }) => {
      if (code === 20000) {
        return {
          // 阿里云视频点播需要的视频源id和播放凭证
          videoSourceId: params.videoId,
          videoPlayAuth: data.videoAuth,
        };
      }
    });
  },
  created() {},
  mounted() {
    // 创建视频播放器实例
    new Aliplayer(
      {
        id: "J_prismPlayer",
        vid: this.videoSourceId, // 视频id
        playauth: this.videoPlayAuth, // 播放凭证
        encryptType: "1", // 如果播放加密视频，则需设置encryptType=1，非加密视频无需设置此项
        width: "50%",
        height: "500px",
        // 以下可选设置
        cover: "http://guli.shop/photo/banner/1525939573202.jpg", // 封面
        qualitySort: "asc", // 清晰度排序
        mediaType: "video", // 返回音频还是视频
        autoplay: false, // 自动播放
        isLive: false, // 直播
        rePlay: false, // 循环播放
        preload: true,
        controlBarVisibility: "hover", // 控制条的显示方式：鼠标悬停
        useH5Prism: true, // 播放器类型：html5
      },
      (player) => {
        console.log("播放器创建成功", player);
      }
    );
  },
};
</script>
