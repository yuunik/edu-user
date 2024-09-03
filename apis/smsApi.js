// 发送短信模块
import { request } from "~/utils";

// 发送短信验证码
export const sendSmsApi = (phoneNumber) =>
  request({
    url: `/smsservice/sms/send/${phoneNumber}`,
    method: "GET",
  });
