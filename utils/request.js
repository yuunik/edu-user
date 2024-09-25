// 封装axios请求
import axios from "axios";
import Cookies from "js-cookie";
import { Message } from "element-ui";

// 项目基地址
const baseURL = "http://192.168.28.187:1997";

// 创建 axios 实例
const request = axios.create({
  baseURL,
  timeout: 5000, // 请求超时时间为 5 秒
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 获取 token
    const token = Cookies.get("token");
    if (token) {
      // 若 token 存在，则在请求头的 Authorization 中添加 token
      config.headers["Authorization"] = token;
    }
    return config;
  },
  (error) => {
    // 请求错误时做些事
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    if (response.data.code === 3506) {
      // 登录失效
      window.href.href = "/login";
    } else {
      if (response.data.code !== 20000 && response.data.code !== 1997) {
        // 不是成功的响应, 也不是微信支付中的响应, 则显示错误信息
        Message({
          message: response.data.message || "Error",
          type: "error",
          duration: 5 * 1000,
        });
      } else {
        // 对响应数据做点什么
        return response.data;
      }
    }
  },
  (error) => {
    // 请求超时提示
    if (error.code === "ECONNREFUSED") {
      console.log("请求超时");
    } else {
      console.log(error);
    }
    // 请求错误时做些事
    return Promise.reject(error);
  }
);

// 导出请求方法
export default request;
