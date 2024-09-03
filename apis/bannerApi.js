// 轮播图接口
import { request } from "~/utils";

// 获取所有轮播图
export const getAllBannerApi = () =>
  request({
    url: "/cmsservice/user/getAllBanner",
    method: "GET",
  });
