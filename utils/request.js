// 封装axios请求
import axios from "axios";
import Cookies from "js-cookie";

// 项目基地址
const baseURL = "http://localhost:1997";

// 创建 axios 实例
const request = axios.create({
  baseURL,
  timeout: 5000, // 请求超时时间为 5 秒
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 若 cookie 中有 token，则在请求头中添加 token
    const token = Cookies.get("token");
    if (token) {
      config.headers["token"] = token;
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
    // 对响应数据做点什么
    return response.data;
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
