<template>
  <div class="regBar" v-show="isShow">
    <h2>注册</h2>
    账号: <input class="account" type="text" placeholder="请输入账号"><br>
    密码: <input class="psw" type="password" placeholder="请输入密码"><br>
    确认密码: <input class="psw" type="password" placeholder="请输入密码"><br>
    <button class="logBtn">确定</button>
    <button class="cancel" @click="Cancel">取消</button>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      
    }
  },
  methods: {
    Cancel() {
      //this.isShow = false;
      this.$emit('close');
    }
  }
}
</script>

<style>
.regBar {
  position: fixed;
  width: 300px;
  height: 200px;
  left: calc(50% - 150px);
  margin: 0 auto;
  border: 1px solid black;
  background-color: azure;
}
.account {
  margin-top: 15px;
}
button {
  margin: 15px;
}
</style>