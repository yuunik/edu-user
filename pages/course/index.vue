<template>
  <div id="aCoursesList" class="bg-fa of">
    <!-- /课程列表 开始 -->
    <section class="container">
      <header class="comm-title">
        <h2 class="fl tac">
          <span class="c-333">全部课程</span>
        </h2>
      </header>
      <section class="c-sort-box">
        <section class="c-s-dl">
          <dl>
            <dt>
              <span class="c-999 fsize14">课程类别</span>
            </dt>
            <dd class="c-s-dl-li">
              <ul class="clearfix">
                <li>
                  <a
                    title="全部"
                    href="#"
                    @click.prevent="onShowAll"
                    :class="{ active: isClickAll }"
                    >全部</a
                  >
                </li>
                <li
                  v-for="(subjectParent, index) in subjectNestedList"
                  :key="subjectParent.key"
                  :class="{ active: oneIndex === index }"
                >
                  <a
                    :title="subjectParent.title"
                    href="#"
                    @click.prevent="
                      onSearchOneSubject(subjectParent.key, index)
                    "
                    >{{ subjectParent.title }}</a
                  >
                </li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>
              <span class="c-999 fsize14"></span>
            </dt>
            <dd class="c-s-dl-li">
              <ul class="clearfix">
                <li
                  v-for="(subject, index) in subSubjectList"
                  :key="subject.key"
                  :class="{ active: twoIndex === index }"
                >
                  <a
                    :title="subject.title"
                    href="#"
                    @click.prevent="onSearchTwoSubject(subject.key, index)"
                    >{{ subject.title }}</a
                  >
                </li>
              </ul>
            </dd>
          </dl>
          <div class="clear"></div>
        </section>
        <div class="js-wrap">
          <section class="fr">
            <span class="c-ccc">
              <i class="c-master f-fM">1</i>/
              <i class="c-666 f-fM">1</i>
            </span>
          </section>
          <section class="fl">
            <ol class="js-tap clearfix">
              <li
                :class="{ 'current bg-orange': searchObj.sort === 'buyCount' }"
              >
                <a
                  title="销量"
                  href="javascript:void(0);"
                  @click="onOrderBySort('buyCount')"
                  >销量
                  <span :class="{ hide: searchObj.sort !== 'buyCount' }"
                    >↓</span
                  >
                </a>
              </li>
              <li
                :class="{ 'current bg-orange': searchObj.sort === 'gmtCreate' }"
              >
                <a
                  title="最新"
                  href="javascript:void(0);"
                  @click="onOrderBySort('gmtCreate')"
                  >最新
                  <span :class="{ hide: searchObj.sort !== 'gmtCreate' }"
                    >↓</span
                  >
                </a>
              </li>
              <li :class="{ 'current bg-orange': searchObj.sort === 'price' }">
                <a
                  title="价格"
                  href="javascript:void(0);"
                  @click="onOrderBySort('price')"
                  >价格&nbsp;
                  <span :class="{ hide: searchObj.sort !== 'price' }">↓</span>
                </a>
              </li>
            </ol>
          </section>
        </div>
        <div class="mt40">
          <!-- /无数据提示 开始-->
          <section class="no-data-wrap" v-if="courseList.length === 0">
            <em class="icon30 no-data-ico">&nbsp;</em>
            <span class="c-666 fsize14 ml10 vam"
              >没有相关数据，小编正在努力整理 中...</span
            >
          </section>
          <!-- /无数据提示 结束-->
          <article class="comm-course-list">
            <ul class="of" id="bna">
              <li v-for="course in courseList" :key="course.id">
                <div class="cc-l-wrap">
                  <section class="course-img">
                    <img
                      :src="course.cover"
                      class="img-responsive"
                      :alt="course.title"
                    />
                    <div class="cc-mask">
                      <a
                        href="#"
                        title="开始学习"
                        class="comm-btn c-btn-1"
                        @click.prevent="$router.push(`/course/${course.id}`)"
                        >开始学习</a
                      >
                    </div>
                  </section>
                  <h3 class="hLh30 txtOf mt10">
                    <a
                      href="#"
                      :title="course.title"
                      class="course-title fsize18 c-333"
                      @click.prevent="$router.push(`/course/${course.id}`)"
                      >{{ course.title }}</a
                    >
                  </h3>
                  <section class="mt10 hLh20 of">
                    <span class="fr jgTag bg-green">
                      <i class="c-fff fsize12 f-fA">{{
                        course.price === 0 ? "免费" : `${course.price} 元`
                      }}</i>
                    </span>
                    <span class="fl jgAttr c-ccc f-fA">
                      <i class="c-999 f-fA">{{ course.viewCount }}人学习</i>
                      |
                      <i class="c-999 f-fA">{{ course.buyCount }}评论</i>
                    </span>
                  </section>
                </div>
              </li>
            </ul>
            <div class="clear"></div>
          </article>
        </div>
        <!-- 公共分页 开始 -->
        <div>
          <div class="paging">
            <!-- undisable这个class是否存在，取决于数据属性hasPrevious -->
            <a
              :class="{ undisable: !data.hasPrevious }"
              href="#"
              title="首页"
              @click.prevent="gotoPage(1)"
              >首</a
            >
            <a
              :class="{ undisable: !data.hasPrevious }"
              href="#"
              title="前一页"
              @click.prevent="gotoPage(data.current - 1)"
              >&lt;</a
            >
            <a
              v-for="page in data.pages"
              :key="page"
              :class="{
                current: data.current == page,
                undisable: data.current == page,
              }"
              :title="'第' + page + '页'"
              href="#"
              @click.prevent="gotoPage(page)"
              >{{ page }}</a
            >
            <a
              :class="{ undisable: !data.hasNext }"
              href="#"
              title="后一页"
              @click.prevent="gotoPage(data.current + 1)"
              >&gt;</a
            >
            <a
              :class="{ undisable: !data.hasNext }"
              href="#"
              title="末页"
              @click.prevent="gotoPage(data.pages)"
              >末</a
            >
            <div class="clear" />
          </div>
        </div>
        <!-- 公共分页 结束 -->
      </section>
    </section>
    <!-- /课程列表 结束 -->
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
import { pageCourseApi } from "~/apis/courseApi";

export default {
  data() {
    return {
      page: 1,
      data: {},
      subjectNestedList: [], // 一级分类列表
      subSubjectList: [], // 二级分类列表
      searchObj: {}, // 查询表单对象
      oneIndex: -1,
      twoIndex: -1,
      buyCountSort: "",
      gmtCreateSort: "",
      priceSort: "",
      courseList: [], // 课程列表
      isClickAll: false, // 是否点击全部
    };
  },
  created() {
    const keyword = this.$route.query.keyword;
    if (keyword) {
      // 关键字搜索
      this.searchObj = {
        courseName: keyword,
      };
    }
    // 初始化数据
    this.gotoPage();
  },
  mounted() {},
  computed: {
    ...mapGetters("courseStore", ["getIsInCoursePage"]),
  },
  watch: {
    getIsInCoursePage: {
      immediate: true,
      handler(val) {
        if (val) {
          // 若顶部导航栏进入课程页，则重置搜索条件
          this.searchObj = {
            courseName: this.$route.query.keyword,
          };
          this.gotoPage(1, 8);
          // 关闭标记
          this.SET_ISINCOURSEINCOURSE(false);
        }
      },
    },
  },
  methods: {
    ...mapMutations("courseStore", ["SET_ISINCOURSEINCOURSE"]),
    // 获取课程信息列表
    async gotoPage(current = 1, pageSize = 8) {
      const { code, data } = await pageCourseApi({
        current,
        pageSize,
        courseQueryVo: this.searchObj,
      });
      if (code === 20000) {
        // 获取一级分类列表
        this.subjectNestedList = data.subjectList;
        // 获取课程列表
        this.courseList = data.courseList;
        delete data.subjectList;
        delete data.courseList;
        // 保存分页信息
        this.data = data;
      }
    },
    // 点击一级分类
    onSearchOneSubject(subjectParentId, index) {
      // 是否重复点击
      if (this.searchObj?.subjectParentId === subjectParentId) {
        return;
      }
      // 保存一级分类id
      Object.assign(this.searchObj, {
        subjectParentId,
        subjectId: "",
      });
      // 保存一级分类索引
      this.oneIndex = index;
      // 重置二级分类索引
      this.twoIndex = -1;
      // 重置全部按键的激活状态
      this.isClickAll = false;
      // 获取对应的二级分类
      this.subSubjectList = this.subjectNestedList[index].children;
      // 重新渲染页面
      this.gotoPage();
    },
    // 点击二级分类
    onSearchTwoSubject(subjectId, index) {
      // 是否重复点击
      if (this.searchObj?.subjectId === subjectId) {
        return;
      }
      // 保存二级分类id
      Object.assign(this.searchObj, {
        subjectId,
      });
      // 保存二级分类索引
      this.twoIndex = index;
      this.oneIndex = -1;
      // 重置全部按键的激活状态
      this.isClickAll = false;
      // 重新渲染页面
      this.gotoPage();
    },
    // 排序
    onOrderBySort(sort) {
      // 是否重复点击
      if (this.searchObj?.sort === sort) {
        return;
      }
      // 保存排序字段
      Object.assign(this.searchObj, {
        sort,
      });
      // 重新渲染页面
      this.gotoPage();
    },
    // 点击全部的事件回调
    onShowAll() {
      // 防抖
      if (this.isClickAll) {
        return;
      }
      this.isClickAll = true;
      // 重置分类索引
      this.oneIndex = -1;
      this.twoIndex = -1;
      // 重置搜索条件
      this.searchObj = {};
      this.gotoPage();
    },
  },
};
</script>
<style scoped>
.active {
  background: #bdbdbd;
}
.hide {
  display: none;
}
.show {
  display: block;
}
</style>
