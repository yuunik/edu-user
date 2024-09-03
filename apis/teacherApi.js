// 讲师模块
import { request } from "~/utils";

/**
 * 分页查询讲师信息
 * @param {Object} params
 * @param {number} params.current - 当前页数
 * @param {number} params.pageSize - 每页条数
 * @returns {Promise<Object>} 返回一个Promise对象，解析为包含讲师信息的对象
 * @returns {total} .total - 总条数
 * @returns {pages} .list - 总页数
 * @returns {current} .current - 当前页
 * @returns {pageSize} .pageSize - 每页条数
 * @returns {records} .records - 讲师信息数组
 * @returns {hasPrevious} .hasPrevious - 是否有前一页
 * @returns {hasNext} .hasNext - 是否有下一页
 */
export const pageTeacherApi = (params) =>
  request({
    url: `/eduservice/front-end/teacher/pageTeacherInfo/${params.current}/${params.pageSize}`,
    method: "get",
  });
