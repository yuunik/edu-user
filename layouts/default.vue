<template>
  <div class="in-wrap">
    <!-- 公共头引入 -->
    <header id="header">
      <section class="container">
        <h1 id="logo">
          <a href="#" title="谷粒学院" @click.prevent="$router.push('/')">
            <img src="~/assets/img/logo.png" width="100%" alt="谷粒学院" />
          </a>
        </h1>
        <div class="h-r-nsl">
          <ul class="nav">
            <router-link to="/" tag="li" active-class="current" exact>
              <a>首页</a>
            </router-link>
            <router-link to="/course" tag="li" active-class="current">
              <a>课程</a>
            </router-link>
            <router-link to="/teacher" tag="li" active-class="current">
              <a>名师</a>
            </router-link>
            <router-link to="/article" tag="li" active-class="current">
              <a>文章</a>
            </router-link>
            <router-link to="/qa" tag="li" active-class="current">
              <a>问答</a>
            </router-link>
          </ul>
          <!-- / nav -->
          <ul class="h-r-login">
            <li v-if="!userInfo.id" id="no-login">
              <a href="/login" title="登录">
                <em class="icon18 login-icon">&nbsp;</em>
                <span class="vam ml5">登录</span>
              </a>
              |
              <a href="/register" title="注册">
                <span class="vam ml5">注册</span>
              </a>
            </li>
            <li v-if="userInfo.id" id="is-login-one" class="mr10">
              <a id="headerMsgCountId" href="#" title="消息">
                <em class="icon18 news-icon">&nbsp;</em>
              </a>
              <q class="red-point" style="display: none">&nbsp;</q>
            </li>
            <li v-if="userInfo.id" id="is-login-two" class="h-r-user">
              <a href="/ucenter" title>
                <img
                  :src="userInfo.avatar"
                  width="30"
                  height="30"
                  class="vam picImg"
                  alt="用户头像"
                />
                <span id="userName" class="vam disIb">{{
                  userInfo.nickname
                }}</span>
              </a>
              <Popconfirm
                placement="bottom"
                width="200"
                v-model="popoverLogoutVisible"
                title="是否确认退出登录？"
                @confirm="logout"
                ><a
                  href="javascript:void(0);"
                  title="退出"
                  class="ml5"
                  slot="reference"
                  >退 出</a
                ></Popconfirm
              >
            </li>
            <!-- /未登录显示第1 li；登录后显示第2，3 li -->
          </ul>
          <aside class="h-r-search">
            <form action="#" method="post">
              <label class="h-r-s-box">
                <input
                  type="text"
                  placeholder="输入你想学的课程"
                  v-model="courseName"
                  class="form-search"
                  value
                />
                <button
                  type="submit"
                  class="s-btn"
                  @click.prevent="onSearchCourse"
                >
                  <em class="icon18">&nbsp;</em>
                </button>
              </label>
            </form>
          </aside>
        </div>
        <aside class="mw-nav-btn">
          <div class="mw-nav-icon"></div>
        </aside>
        <div class="clear"></div>
      </section>
    </header>
    <!-- /公共头引入 -->
    <nuxt />
    <!-- 公共底引入 -->
    <footer id="footer">
      <section class="container">
        <div class>
          <h4 class="hLh30">
            <span class="fsize18 f-fM c-999">友情链接</span>
          </h4>
          <ul class="of flink-list">
            <li>
              <a href="http://www.atguigu.com/" title="尚硅谷" target="_blank"
                >尚硅谷
              </a>
            </li>
          </ul>
          <div class="clear"></div>
        </div>
        <div class="b-foot">
          <section class="fl col-7">
            <section class="mr20">
              <section class="b-f-link">
                <a href="#" title="关于我们" target="_blank">关于我们</a>|
                <a href="#" title="联系我们" target="_blank">联系我们</a>|
                <a href="#" title="帮助中心" target="_blank">帮助中心</a>|
                <a href="#" title="资源下载" target="_blank">资源下载</a>|
                <span>服务热线：010-56253825(北京) 0755-85293825(深圳)</span>
                <span>Email：chorria.zhou@gmail.com</span>
              </section>
              <section class="b-f-link mt10">
                <span>©2024课程版权均归yuunik所有 京ICP备17055252号</span>
              </section>
            </section>
          </section>
          <aside class="fl col-3 tac mt15">
            <section class="gf-tx">
              <span>
                <img src="~/assets/img/wx-icon.png" alt />
              </span>
            </section>
            <section class="gf-tx">
              <span>
                <img src="~/assets/img/wb-icon.png" alt />
              </span>
            </section>
          </aside>
          <div class="clear"></div>
        </div>
      </section>
    </footer>
    <!-- /公共底引入 -->
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from "vuex";
import Cookies from "js-cookie";
import { Popconfirm } from "element-ui";
import "~/assets/css/reset.css";
import "~/assets/css/theme.css";
import "~/assets/css/global.css";
import "~/assets/css/web.css";
import "~/assets/css/base.css";
import "~/assets/css/activity_tab.css";
import "~/assets/css/bottom_rec.css";
import "~/assets/css/nice_select.css";
import "~/assets/css/order.css";
import "~/assets/css/swiper-3.3.1.min.css";
import "~/assets/css/pages-weixinpay.css";

export default {
  name: "Layout",
  components: { Popconfirm },
  data() {
    return {
      // 退出登录弹窗
      popoverLogoutVisible: false,
      // 搜索课程的名称
      courseName: "",
    };
  },
  created() {
    // 获取路劲参数 token
    const token = this.$route.query.token;
    if (token) {
      // 路劲中有 token，将 token 存入 cookie 中
      Cookies.set("token", token, { domain: "localhost", expires: 7 });
      // 调用 getUserInfoByToken 方法，获取用户信息
      this.getUserInfoByToken();
    }
  },
  computed: {
    ...mapState("userStore", ["userInfo", "token"]),
  },
  methods: {
    ...mapActions("userStore", ["getUserInfoByToken"]),
    ...mapMutations("userStore", ["removeUserInfo", "removeToken"]),
    ...mapMutations("courseStore", ["SET_ISINCOURSEINCOURSE"]),
    // 退出登录
    logout() {
      // 清除 token
      this.removeToken();
      // 清除用户信息
      this.removeUserInfo();
      // 路由跳转到登录页面
      this.$router.push("/login");
    },
    // 搜索课程
    onSearchCourse() {
      // 不在course页面下, 则跳转后搜索
      if (this.$route.path !== "/course") {
        return this.$router.push({
          name: "course",
          query: { keyword: this.courseName },
        });
      }
      // 打开顶部搜索框是否在课程页面中
      this.SET_ISINCOURSEINCOURSE(true);
    },
  },
};
</script>
<style scoped>
.form-search {
  transition: 0.25s all linear;

  &:hover {
    border-color: #ff6700;
  }

  &:focus {
    border-color: #41b883;
  }
}
</style>
