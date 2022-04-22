<template>
  <div class="login">
    <el-button class="sign" type="primary" @click="OpenLogBar">登录</el-button>
    <el-button class="reg" @click="OpenRegBar">注册</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    OpenLogBar() {
      this.$emit('openLogBar');
    },
    OpenRegBar() {
      this.$emit('openRegBar');
    }
  }
}
</script>

<style>
.login {
  position: absolute;
  top: 80px;
  right: 20px;
  cursor: pointer;
}
</style>