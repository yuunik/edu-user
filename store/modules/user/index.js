// 用户模块
import { getUserInfoApi, loginApi } from "~/apis/loginApi";
import Cookies from "js-cookie";

const userStore = {
  // 开启命名空间
  namespaced: true,
  // 状态
  state() {
    return {
      // 用户信息
      userInfo: {},
      // 用户令牌
      token: "",
    };
  },
  actions: {
    // 用户登录
    async login(context, loginInfo) {
      const { code, data } = await loginApi(loginInfo);
      if (code === 20000) {
        // 设置用户令牌
        context.commit("setToken", data.token);
        // 存入 cookie
        Cookies.set("token", data.token, { domain: "localhost", expires: 7 });
        // 获取用户信息
        const res = await getUserInfoApi();
        if (res.code === 20000) {
          // 设置用户信息
          context.commit("setUserInfo", res.data.userInfo);
          // 存入 cookie
          Cookies.set("user_info", res.data.userInfo, {
            domain: "localhost",
            expires: 7,
          });
        }
      }
    },
    // 根据用户令牌获取用户信息
    async getUserInfoByToken(context) {
      const { code, data } = await getUserInfoApi();
      if (code === 20000) {
        // 设置用户信息
        context.commit("setUserInfo", data.userInfo);
        // 存入 cookie
        Cookies.set("user_info", data.userInfo, {
          domain: "localhost",
          expires: 7,
        });
      }
    },
  },
  mutations: {
    // 设置用户信息
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    // 移除用户信息
    removeUserInfo(state) {
      state.userInfo = {};
      Cookies.remove("user_info");
    },
    // 设置用户令牌
    setToken(state, token) {
      state.token = token;
    },
    removeToken(state) {
      state.token = "";
      Cookies.remove("token");
    },
  },
  getters: {
    // 获取用户信息
    getUserInfo(state) {
      return state.userInfo;
    },
    // 获取用户令牌
    getToken(state) {
      return state.token;
    },
  },
};

export default userStore;
