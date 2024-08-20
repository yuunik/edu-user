<script>
import LrForm from "~/components/LrForm";
import { loginApi } from "~/apis/login";

export default {
  layout: "sign",
  components: {
    LrForm,
  },
  data() {
    return {
      loginInfo: {
        password: "",
      },
      // 用户名或手机号暂存信息
      regData: "",
      // 用户令牌
      token: "",
    };
  },
  methods: {
    // 用户登录
    async onLogin() {
      // 判断是否为手机号
      const phoneNumber = /^1[3456789]\d{9}$/;
      if (phoneNumber.test(this.regData)) {
        // 手机号登录, 存放手机号信息
        this.loginInfo.mobile = this.regData;
      } else {
        // 用户名登录, 存放用户名信息
        this.loginInfo.nickname = this.regData;
      }
      const { code, data } = await loginApi(this.loginInfo);
      if (code === 20000) {
        // 保存用户 token
        this.token = data.token;
        // 用户 token 本地持久化
        localStorage.setItem("token", this.token);
        // 提示信息
        this.$message.success("登录成功");
        // 跳转到首页
        this.$router.push("/");
      } else {
        this.$message.error("登录失败");
      }
    },
  },
};
</script>

<template>
  <LrForm class="login-form" @submit="onLogin">
    <template #default>
      <el-form-item label="账号" label-width="50px">
        <el-input
          placeholder="请输入用户名/手机号"
          prefix-icon="el-icon-user"
          v-model="regData"
        />
      </el-form-item>
      <el-form-item label="密码" label-width="50px">
        <el-input
          placeholder="请输入密码"
          type="password"
          prefix-icon="el-icon-lock"
          show-password
          v-model="loginInfo.password"
        />
      </el-form-item>
    </template>
  </LrForm>
</template>

<style scoped>
.login-form {
  width: 450px;
  height: 325px;
}
/* 输入框边框颜色 */
::v-deep .el-input__inner {
  border-color: #dcdfe6; /* 你想要的颜色 */
}
/* 输入框边框颜色 */
::v-deep .el-input__inner:focus {
  border-color: #41b883; /* 你想要的颜色 */
}
</style>
