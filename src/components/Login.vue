<template>
  <div class="login">
    <a class="sign" @click="OpenLogBar">登录</a>|
    <a class="reg" @click="OpenRegBar">注册</a>
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
  top: 0;
  right: 0;
  cursor: pointer;
}
</style>