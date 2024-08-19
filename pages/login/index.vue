<script>
import LrForm from "~/components/LrForm";
export default {
  layout: "sign",
  components: {
    LrForm,
  },
  data() {
    return {
      loginParams: {
        username: "",
        password: "",
      },
    };
  },
};
</script>

<template>
  <LrForm class="login-form">
    <template #default>
      <el-form-item label="账号" label-width="50px">
        <el-input
          placeholder="请输入用户名/手机号"
          prefix-icon="el-icon-user"
        />
      </el-form-item>
      <el-form-item label="密码" label-width="50px">
        <el-input
          placeholder="请输入密码"
          type="password"
          prefix-icon="el-icon-lock"
          show-password
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
