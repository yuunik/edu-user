// 用户登录模块
import { request } from "~/utils";

// 用户注册
export const registerUserApi = (registerData) =>
  request({
    url: "/ucenterservice/member/registerUser",
    method: "POST",
    data: registerData,
  });

// 用户登录
export const loginApi = (loginData) =>
  request({
    url: "/ucenterservice/member/loginUser",
    method: "POST",
    data: loginData,
  });

// 获取用户信息
export const getUserInfoApi = () =>
  request({
    url: "/ucenterservice/member/getUserInfo",
    method: "GET",
  });
