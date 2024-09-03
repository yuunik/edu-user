<template>
  <LrForm class="register-form" submitText="register" @submit="onRegisterUser">
    <template #default>
      <el-form-item label="用户名" label-width="60px">
        <el-input
          placeholder="请输入用户名"
          prefix-icon="el-icon-user"
          v-model="registerInfo.nickname"
        />
      </el-form-item>
      <el-form-item label="手机号" label-width="60px">
        <el-input
          placeholder="请输入手机号"
          prefix-icon="el-icon-mobile"
          v-model="registerInfo.mobile"
        />
      </el-form-item>
      <el-form-item label="密码" label-width="60px">
        <el-input
          type="password"
          placeholder="请输入密码"
          show-password
          prefix-icon="el-icon-lock"
          v-model="registerInfo.password"
        />
      </el-form-item>
      <el-form-item label="验证码" label-width="60px">
        <el-input
          placeholder="请输入验证码"
          prefix-icon="el-icon-chat-dot-square"
          v-model="registerInfo.code"
        >
          <template #append>
            <el-button
              type="text"
              size="mini"
              @click="sendCode"
              :disabled="sendCodeBtnDisabled"
              >{{ sendCodeText }}</el-button
            >
          </template>
        </el-input>
      </el-form-item>
    </template>
  </LrForm>
</template>

<script>
import LrForm from "~/components/LrForm";
import { sendSmsApi } from "~/apis/smsApi";
import { registerUserApi } from "~/apis/loginApi";

export default {
  layout: "sign",
  components: {
    LrForm,
  },
  data() {
    return {
      sendCodeText: "获取验证码",
      sendCodeBtnDisabled: false,
      // 用户注册信息
      registerInfo: {
        nickname: "",
        mobile: "",
        password: "",
        code: "",
      },
    };
  },
  methods: {
    // 发送验证码
    async sendCode() {
      // 开始倒计时
      this.timeCount();
      // 发送验证码
      const { code } = await sendSmsApi(this.registerInfo.mobile);
      if (code === 20000) {
        // 提示信息
        this.$message.success("验证码发送成功");
      } else {
        // 提示信息
        this.$message.error("验证码发送失败");
      }
    },
    // 倒计时
    timeCount() {
      let count = 60;
      this.sendCodeBtnDisabled = true;
      const timerId = setInterval(() => {
        count--;
        this.sendCodeText = `${count}秒后重发`;
        if (count < 1) {
          clearInterval(timerId);
          this.sendCodeBtnDisabled = false;
          this.sendCodeText = "获取验证码";
        }
      }, 1000);
    },
    // 注册用户
    async onRegisterUser() {
      const { code, data } = await registerUserApi(this.registerInfo);
      if (code === 20000) {
        // 提示信息
        this.$message.success("注册成功");
        // 跳转到登录页面
        this.$router.push("/login");
      } else {
        // 提示信息
        this.$message.error(data.message);
      }
    },
  },
};
</script>

<style scoped>
.register-form {
  width: 450px;
  height: 450px;
}
/* 修改input获取焦点时的边框颜色 */
::v-deep .el-input__inner {
  border-color: #dcdfe6;
}
::v-deep .el-input__inner:focus {
  border-color: #41b883;
}
/* 修改按键悬浮时的样式 */
::v-deep .el-button:hover {
  background-color: transparent !important;
  color: inherit !important;
  box-shadow: none !important;
}
</style>
