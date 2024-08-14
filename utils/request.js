// 封装axios请求
import axios from "axios";

// 项目基地址
const baseURL = "http://192.168.28.101:1997";

// 创建 axios 实例
const request = axios.create({
  baseURL,
  timeout: 3000, // 请求超时时间
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 在发送请求之前做某事
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
    // 请求错误时做些事
    return Promise.reject(error);
  }
);

// 导出请求方法
export default request;
