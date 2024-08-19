<script></script>

<template>
  <div class="sign-container">
    <div class="content">
      <img src="~/assets/images/login_left.png" class="welcome-img" />
      <nuxt class="sign-form" />
    </div>
  </div>
</template>

<style scoped>
.sign-container {
  width: 100vw;
  height: 100vh;
  background-image: url("../assets/images/login_bg.svg");
  background-color: #eeeeee;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  width: 95%;
  height: 95%;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 20px rgb(227, 227, 227);
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.welcome-img {
  width: 50%;
  height: 60%;
  margin: 30px;
}
.sign-form {
  background-color: #ffffff;
  box-shadow: 0 0 20px rgb(227, 227, 227);
  margin-right: 150px;
}
</style>
