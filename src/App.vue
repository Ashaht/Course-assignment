<template>
  <div id="app">
    <Login @openLogBar='OpenLogBar' @openRegBar='OpenRegBar'/>
    <LoginBar :isShow='logIsOpen' @close='CloseLogBar'/>
    <RegisterBar :isShow='regIsOpen' @close='CloseRegBar'/>
    <div id="nav">
      <router-link to="/">主页</router-link> |
      <router-link to="/about">关于</router-link> |
      <router-link to="/cart">购物车</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Login from '@/components/Login.vue'
import LoginBar from '@/components/LoginBar.vue'
import RegisterBar from '@/components/RegisterBar.vue'
export default {
  data() {
    return {
      logIsOpen: false,
      regIsOpen: false
    }
  },
  components: {
    Login,
    LoginBar,
    RegisterBar
  },
  methods: {
    OpenLogBar() {
      //console.log('open')
      this.logIsOpen = true
    },
    CloseLogBar() {
      this.logIsOpen = false
    },
    OpenRegBar() {
      //console.log('open')
      this.regIsOpen = true
    },
    CloseRegBar() {
      this.regIsOpen = false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
