// 路由鉴权
import { Message } from "element-ui";

const auth = ({ route, redirect, store, app, isClient }) => {
  // 获取状态管理库中的用户令牌信息
  const token = store.state.userStore.token;
  // 获取当前路径
  const path = route.path;
  if (path !== "/login" && path !== "/register") {
    // 如果用户令牌不存在，重定向到登录页面
    if (!token) {
      return redirect("/login");
    }
  }
};

export default auth;
