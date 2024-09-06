// 课程相关状态
const courseStore = {
  // 开启命名空间
  namespaced: true,
  // 状态
  state() {
    return {
      // 顶部搜索框是否在课程页面中
      isInCoursePage: false,
    };
  },
  mutations: {
    SET_ISINCOURSEINCOURSE: (state, value) => {
      state.isInCoursePage = value;
    },
  },
  getters: {
    getIsInCoursePage(state) {
      return state.isInCoursePage;
    },
  },
};

export default courseStore;
