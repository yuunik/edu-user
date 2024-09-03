// 首页数据接口
import { request } from "~/utils";

// 获取首页的热门课程和名师数据
export const getIndexDataApi = () =>
  request({
    url: "/eduservice/index/getIndexInfoList",
    method: "GET",
  });
