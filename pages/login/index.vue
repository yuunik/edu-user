<script>
export default {
  layout: "sign",
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
  <div class="login-form">
    <header class="form-header">
      <img src="~/assets/images/logo.svg" class="logo-img" />
      <h1 class="website-title">Edu-User</h1>
    </header>
    <main class="form-content">
      <el-form>
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
        <el-form-item class="btn-group">
          <button type="reset" class="reset-btn">reset</button>
          <button type="submit" class="submit-btn">submit</button>
          <el-tooltip content="注册" placement="right" effect="light">
            <i
              class="el-icon-d-arrow-right register-icon"
              @click="$router.push('/register')"
            />
          </el-tooltip>
        </el-form-item>
      </el-form>
    </main>
  </div>
</template>

<style scoped>
.login-form {
  box-sizing: border-box;
  padding: 30px;
  border-radius: 20px;
}
.form-header {
  display: flex;
  justify-content: center;
  align-items: center;
}
.form-content {
  margin-top: 20px;
}
.logo-img {
  width: 75px;
  height: 75px;
}
.website-title {
  font: 50px "HarmonyOS Sans", sans-serif;
  font-weight: bolder;
  color: #34495e;
  margin-left: 20px;
}
.btn-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn-group button {
  margin: 0 20px;
}
.reset-btn {
  width: 100px;
  height: 40px;
  background-color: #ffffff;
  border-radius: 20px;
  border: 1px solid #dcdfe6;
  cursor: pointer;
  font: italic bold 18px "HarmonyOS Sans", sans-serif;
  color: #34495e;
}
.submit-btn {
  width: 100px;
  height: 40px;
  background-color: #41b883;
  border-radius: 20px;
  border: 1px solid #dcdfe6;
  cursor: pointer;
  font: italic bold 18px "HarmonyOS Sans", sans-serif;
  color: #34495e;
}
.register-icon {
  height: 40px;
  cursor: pointer;
}
.register-icon {
  font-size: 30px;
  margin-left: 5px;
  color: #41b883;
}
/* 输入框边框颜色 */
>>> .el-input__inner {
  border-color: #dcdfe6; /* 你想要的颜色 */
}
/* 输入框边框颜色 */
>>> .el-input__inner:focus {
  border-color: #41b883; /* 你想要的颜色 */
}
</style>
