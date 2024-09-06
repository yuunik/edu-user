// 视频相关接口
import { request } from "~/utils";

/**
 * 获取视频授权信息
 * @param params 视频阿里云oss视频源ID
 * @returns {Promise<Object>}
 * @returns {videoAuth: string} 视频授权信息
 */
export const getVideoAuthApi = (params) =>
  request({
    url: "/vodservice/video/getVideoAuthByVideoSourceId/" + params,
    method: "GET",
  });
