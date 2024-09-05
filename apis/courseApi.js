// 课程相关接口
import { request } from "~/utils";

/**
 * 条件查询课程列表
 * @param params
 * @param params.current 当前页数
 * @param params.pageSize 每页条数
 * @param params.courseQueryVo 课程查询条件
 * @returns {Promise<Object>} 返回一个Promise对象，解析为包含课程信息的对象
 * @returns {total} .total - 总条数
 * @returns {pages} .list - 总页数
 * @returns {current} .current - 当前页
 * @returns {pageSize} .pageSize - 每页条数
 * @returns {hasPrevious} .hasPrevious - 是否有前一页
 * @returns {hasNext} .hasNext - 是否有下一页
 * @returns {courseList} .courseList - 课程信息数组
 * @returns {subjectList} .subjectList - 分类数组
 */
export const pageCourseApi = (params) =>
  request({
    url: `/eduservice/front-end/course/pageCourseListByCondition/${params.current}/${params.pageSize}`,
    method: "POST",
    data: params.courseQueryVo,
  });

/**
 * 根据课程id查询课程详情
 * @param params 课程id
 * @returns {Promise<Object>} 返回一个Promise对象，解析为包含课程详情和章节详情的对象
 * @returns {courseInfo} .courseInfo - 课程详情
 * @returns {chapterList} .chapterList - 章节详情数组
 */
export const getCourseInfoApi = (params) =>
  request({
    url: `/eduservice/front-end/course/getCourseInfo/${params}`,
    method: "GET",
  });
