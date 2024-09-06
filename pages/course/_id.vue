<template>
  <div id="aCoursesList" class="bg-fa of">
    <!-- /课程详情 开始 -->
    <section class="container">
      <!-- 课程所属分类 开始-->
      <section class="path-wrap txtOf hLh30">
        <a href="#" title class="c-999 fsize14">首页</a>
        \
        <a href="#" title class="c-999 fsize14">课程列表</a>
        \
        <span class="c-333 fsize14">{{ courseInfo?.subjectParentName }}</span>
        \
        <span class="c-333 fsize14">{{ courseInfo?.subjectName }}</span>
      </section>
      <!-- 课程所属分类 结束-->
      <div>
        <article class="c-v-pic-wrap" style="height: 357px">
          <section class="p-h-video-box" id="videoPlay">
            <img
              :src="courseInfo?.cover"
              :alt="courseInfo?.title"
              class="dis c-v-pic"
              width="640px"
              height="357px"
            />
          </section>
        </article>
        <aside class="c-attr-wrap">
          <section class="ml20 mr15">
            <h2 class="hLh30 txtOf mt15">
              <span class="c-fff fsize24">{{ courseInfo?.title }}</span>
            </h2>
            <section class="c-attr-jg">
              <span class="c-fff">价格：</span>
              <b class="c-yellow" style="font-size: 24px">
                {{
                  courseInfo?.price === 0 ? "免费" : `￥ ${courseInfo?.price}`
                }}</b
              >
            </section>
            <section class="c-attr-mt c-attr-undis">
              <span class="c-fff fsize14"
                >主讲： {{ courseInfo?.teacherName }}&nbsp;&nbsp;&nbsp;</span
              >
            </section>
            <section class="c-attr-mt of">
              <span class="ml10 vam">
                <em class="icon18 scIcon"></em>
                <a class="c-fff vam" title="收藏" href="#">收藏</a>
              </span>
            </section>
            <section class="c-attr-mt">
              <a
                href="#"
                title="立即观看"
                class="comm-btn c-btn-3"
                @click.prevent="
                  $router.push(
                    `/player/${chapterList[0].children[0].videoSourceId}`
                  )
                "
                >{{
                  Number(courseInfo?.price) === 0 ? "立即观看" : "立即购买"
                }}</a
              >
            </section>
          </section>
        </aside>
        <aside class="thr-attr-box">
          <ol class="thr-attr-ol clearfix">
            <li>
              <p>&nbsp;</p>
              <aside>
                <span class="c-fff f-fM">购买数</span>
                <br />
                <h6 class="c-fff f-fM mt10">{{ courseInfo?.buyCount }}</h6>
              </aside>
            </li>
            <li>
              <p>&nbsp;</p>
              <aside>
                <span class="c-fff f-fM">课时数</span>
                <br />
                <h6 class="c-fff f-fM mt10">{{ courseInfo?.lessonNum }}</h6>
              </aside>
            </li>
            <li>
              <p>&nbsp;</p>
              <aside>
                <span class="c-fff f-fM">浏览数</span>
                <br />
                <h6 class="c-fff f-fM mt10">{{ courseInfo?.viewCount }}</h6>
              </aside>
            </li>
          </ol>
        </aside>
        <div class="clear"></div>
      </div>
      <!-- /课程封面介绍 -->
      <div class="mt20 c-infor-box">
        <article class="fl col-7">
          <section class="mr30">
            <div class="i-box">
              <div>
                <section id="c-i-tabTitle" class="c-infor-tabTitle c-tab-title">
                  <a name="c-i" class="current" title="课程详情">课程详情</a>
                </section>
              </div>
              <article class="ml10 mr10 pt20">
                <div>
                  <h6 class="c-i-content c-infor-title">
                    <span>课程介绍</span>
                  </h6>
                  <div class="course-txt-body-wrap">
                    <section class="course-txt-body">
                      <p v-html="courseInfo?.description"></p>
                    </section>
                  </div>
                </div>
                <!-- /课程介绍 -->
                <div class="mt50">
                  <h6 class="c-g-content c-infor-title">
                    <span>课程大纲</span>
                  </h6>
                  <section class="mt20" v-if="chapterList.length > 0">
                    <div class="lh-menu-wrap">
                      <menu id="lh-menu" class="lh-menu mt10 mr10">
                        <ul>
                          <!-- 文件目录 -->
                          <li
                            class="lh-menu-stair"
                            v-for="chapter in chapterList"
                            :key="chapter.key"
                          >
                            <a
                              href="javascript: void(0)"
                              :title="chapter.title"
                              class="current-1"
                            >
                              <em class="lh-menu-i-1 icon18 mr10"></em
                              >{{ chapter.title }}
                            </a>
                            <ol
                              class="lh-menu-ol"
                              style="display: block"
                              v-if="chapter.children.length > 0"
                            >
                              <li
                                class="lh-menu-second ml30"
                                v-for="video in chapter.children"
                                :key="video.key"
                              >
                                <a
                                  href="#"
                                  title
                                  @click.prevent="
                                    $router.push(
                                      `/player/${video.videoSourceId}`
                                    )
                                  "
                                >
                                  <span class="fr">
                                    <i class="free-icon vam mr10">免费试听</i>
                                  </span>
                                  <em class="lh-menu-i-2 icon16 mr5">&nbsp;</em
                                  >{{ video.title }}
                                </a>
                              </li>
                            </ol>
                            <Empty v-else description="暂无课程小节视频" />
                          </li>
                        </ul>
                      </menu>
                    </div>
                  </section>
                  <Empty v-else description="暂无课程大纲" />
                </div>
                <!-- /课程大纲 -->
              </article>
            </div>
          </section>
        </article>
        <aside class="fl col-3">
          <div class="i-box">
            <div>
              <section class="c-infor-tabTitle c-tab-title">
                <a title href="javascript:void(0)">主讲讲师</a>
              </section>
              <section class="stud-act-list">
                <ul style="height: 70px">
                  <li>
                    <div class="u-face">
                      <a
                        href="#"
                        @click.prevent="
                          $router.push(`/teacher/${courseInfo.teacherId}`)
                        "
                      >
                        <img
                          :src="courseInfo.teacherAvatar"
                          width="50"
                          height="50"
                          alt="讲师头像"
                        />
                      </a>
                    </div>
                    <section class="hLh30 txtOf">
                      <a
                        class="c-333 fsize16 fl"
                        href="#"
                        @click.prevent="
                          $router.push(`/teacher/${courseInfo.teacherId}`)
                        "
                        >{{ courseInfo.teacherName }}</a
                      >
                    </section>
                    <section class="hLh20 txtOf">
                      <span class="c-999">{{ courseInfo.teacherIntro }}</span>
                    </section>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </aside>
        <div class="clear"></div>
      </div>
    </section>
    <!-- /课程详情 结束 -->
  </div>
</template>
<script>
import { Empty, Image } from "element-ui";
import { getCourseInfoApi } from "~/apis/courseApi";

export default {
  components: { Empty, Image },
  asyncData({ params, error }) {
    return getCourseInfoApi(params.id).then(
      ({ code, data: { courseInfo, chapterList } }) => {
        if (code === 20000) {
          return {
            courseInfo,
            chapterList,
          };
        }
      }
    );
  },
};
</script>
