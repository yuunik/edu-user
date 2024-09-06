<script>
export default {
  layout: "sign",
  props: {
    // 登录或注册
    submitText: {
      type: String,
      default: "登录",
    },
    // 是否是其他登录方式
    isOtherLogin: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["submit"],
  data() {
    return {};
  },
  methods: {
    gotoLoginOrRegister() {
      this.$router.push(
        this.$route.path === "/register" ? "/login" : "/register"
      );
    },
  },
};
</script>

<template>
  <div class="lr-form">
    <header class="form-header">
      <img src="~/assets/images/logo.svg" class="website-logo" />
      <h1 class="website-title">Edu-User</h1>
    </header>
    <main class="form-content">
      <el-form>
        <slot />
        <el-form-item class="btn-group">
          <button type="reset" class="reset-btn">重置</button>
          <button
            type="submit"
            class="submit-btn"
            @click.prevent="$emit('submit')"
          >
            {{ submitText === "register" ? "注册" : "登录" }}
          </button>
          <el-tooltip
            :content="submitText === 'register' ? '注册' : '登录'"
            placement="right"
            effect="light"
          >
            <i
              class="el-icon-d-arrow-right register-icon"
              @click="gotoLoginOrRegister()"
            />
          </el-tooltip>
        </el-form-item>
        <slot name="third-party-login" />
      </el-form>
    </main>
  </div>
</template>

<style scoped>
.lr-form {
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
.website-logo {
  width: 75px;
  height: 75px;
}
.website-title {
  font: 50px "HarmonyOS Sans", sans-serif;
  font-weight: bolder;
  color: #34495e;
  margin-left: 20px;
}
/* 按键组样式 */

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
  line-height: 40px;
  cursor: pointer;
  font-size: 30px;
  margin-left: 5px;
  color: #41b883;
  vertical-align: top;
}
</style>
