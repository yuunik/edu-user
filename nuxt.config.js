module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "Edu-User",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "Edu-User,IT在线视频教程,Java视\n" +
          "频,HTML5视频,前端视频,Python视频,大数据视频",
      },
      {
        hid: "description",
        name: "description",
        content:
          "Edu-User是国内领先的IT在\n" +
          "线视频学习平台、职业教育平台。截止目前,谷粒学院线上、线下学习人次数以万计！会同上百个知名\n" +
          "开发团队联合制定的Java、HTML5前端、大数据、Python等视频课程，被广大学习者及IT工程师誉为：\n" +
          "业界最适合自学、代码量最大、案例最多、实战性最强、技术最前沿的IT系列视频课程！",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://g.alicdn.com/de/prismplayer/2.8.1/skins/default/aliplayer-min.css",
      },
    ],
    script: [
      {
        charset: "utf-8",
        type: "text/javascript",
        src: "https://g.alicdn.com/de/prismplayer/2.8.1/aliplayer-min.js",
      },
    ],
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });
      }
    },
  },
  // Add swiper plugin
  plugins: [
    { src: "~/plugins/nuxt-swiper-plugin.js", ssr: false },
    { src: "~/plugins/nuxt-elementui-plugin.js", ssr: false },
    { src: "~/plugins/nuxt-qriously-plugin.js", ssr: false },
    { src: "~/plugins/nuxt-antD-plugin.js", ssr: false },
  ],
  // Add swiper css
  css: [
    "swiper/dist/css/swiper.css",
    "element-ui/lib/theme-chalk/index.css",
    "ant-design-vue/dist/antd.css",
  ],
  server: {
    host: "0.0.0.0",
    port: 6060,
  },
  router: {
    middleware: ["auth"],
  },
};
