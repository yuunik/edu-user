// 订单相关 API
import { request } from "~/utils";

// 模块基础路径
const baseUrl = "/orderservice/order";

// 支付日志基础路径
const payLogUrl = "/orderservice/payLog";

/**
 * 创建订单
 * @param {Object} params - 参数对象
 * @param {string} params.courseId - 课程 ID
 * @param {string} params.payType - 支付方式
 * @returns {Promise<Object>} 返回一个 Promise，解析后得到订单信息
 * @returns {number} code - 返回的状态码
 * @returns {Object} data - 返回的数据对象
 * @returns {string} data.orderNo - 订单编号
 * @returns {string} message - 返回的信息描述
 * @returns {boolean} success - 请求是否成功
 */
export const createOrder = (params) =>
  request({
    url: `${baseUrl}/addOrder/${params.courseId}/${params.payType}`,
    method: "POST",
  });

/**
 * 获取订单信息
 * @param params  订单编号
 * @returns {*}
 */
export const getOrderInfo = (params) =>
  request({
    url: `${baseUrl}/getOrderInfo/${params}`,
    method: "GET",
  });

/**
 * 生成微信支付二维码
 * @param params 订单编号
 * @returns {*}
 */
export const createWeChatPayCode = (params) =>
  request({
    url: `${payLogUrl}/createNative/${params}`,
    method: "GET",
  });

/**
 * 查询微信支付状态
 * @param params 订单编号
 * @returns {*}
 */
export const queryPayStatus = (params) =>
  request({
    url: `${payLogUrl}/queryWeChatPayStatus/${params}`,
    method: "GET",
  });
