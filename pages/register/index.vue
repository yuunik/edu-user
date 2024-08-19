<template>
  <LrForm class="register-form" submitText="register">
    <template #default>
      <el-form-item label="用户名" label-width="60px">
        <el-input placeholder="请输入用户名" prefix-icon="el-icon-user" />
      </el-form-item>
      <el-form-item label="手机号" label-width="60px">
        <el-input placeholder="请输入手机号" prefix-icon="el-icon-mobile" />
      </el-form-item>
      <el-form-item label="密码" label-width="60px">
        <el-input
          type="password"
          placeholder="请输入密码"
          show-password
          prefix-icon="el-icon-lock"
        />
      </el-form-item>
      <el-form-item label="验证码" label-width="60px">
        <el-input
          placeholder="请输入验证码"
          prefix-icon="el-icon-chat-dot-square"
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
export default {
  layout: "sign",
  components: {
    LrForm,
  },
  data() {
    return {
      sendCodeText: "获取验证码",
      sendCodeBtnDisabled: false,
    };
  },
  methods: {
    sendCode() {
      // 开始倒计时
      this.timeCount();
      // 发送验证码
      console.log("发送验证码");
    },
    // 倒计时
    timeCount() {
      let count = 60;
      this.sendCodeBtnDisabled = true;
      const timerId = setInterval(() => {
        this.sendCodeText = `${count}秒后重发`;
        count--;
        if (count < 0) {
          clearInterval(timerId);
          this.sendCodeBtnDisabled = false;
          this.sendCodeText = "获取验证码";
        }
      }, 1000);
    },
  },
};
</script>

<style scoped>
.register-form {
  width: 560px;
  height: 450px;
}
::v-deep .el-input__inner {
  border-color: #dcdfe6;
}
::v-deep .el-input__inner:focus {
  border-color: #41b883;
}
::v-deep .el-button:hover {
  background-color: transparent !important;
  color: inherit !important;
  box-shadow: none !important;
}
</style>
