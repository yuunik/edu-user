// 状态管理库
import Vue from "vue";
import Vuex from "vuex";

// 引入状态管理模块
import userStore from "./modules/user";
import courseStore from "./modules/course";

// 使用 vuex 插件
Vue.use(Vuex);

// 创建 store 实例
const store = () =>
  new Vuex.Store({
    modules: {
      // 注册 user 模块
      userStore,
      // 注册 course 模块
      courseStore,
    },
  });

export default store;
