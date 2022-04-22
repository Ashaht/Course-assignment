<template>
  <div id="app">
    <NavBar/>
    <LoginDrawer/>
    <keep-alive exclude="">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import NavBar from '@/views/HomeChild/NavBar.vue'
import LoginDrawer from '@/components/LoginDrawer.vue'
export default {
  data() {
    return {
    }
  },
  components: {
    NavBar,
    LoginDrawer
  },
  methods: {
  }
}
</script>

<style>
@import "./assets/css/normalize.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
