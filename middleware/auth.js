// 路由鉴权
import { Message } from "element-ui";

const auth = ({ route, redirect, store, app, isClient }) => {
  // 获取状态管理库中的用户令牌信息
  const token = store.state.userStore.token;
  // 获取当前路径
  const path = route.path;
  if (path !== "/login") {
    console.log("1111111111");
    // 如果用户令牌不存在，重定向到登录页面
    if (!token) {
      console.log("22222222222222222");
      return redirect("/login");
    }
  }
};

export default auth;
