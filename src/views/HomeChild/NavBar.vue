<template>
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b">
    <el-menu-item index="1" @click="goToHome">主页</el-menu-item>
    <el-menu-item index="2" @click="goToAbout">关于</el-menu-item>
    <el-menu-item index="3" @click="goToCart">购物车({{cartLength}})</el-menu-item>
    <el-menu-item index="4" @click="goToOrder">订单信息</el-menu-item>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    };
  },
  methods: {
    goToHome() {
      this.$router.push('/')
    },
    goToAbout() {
      this.$router.push('/about')
    },
    goToCart() {
      this.$router.push('/cart')
    },
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
    goToOrder() {
      this.$router.push('/order')
    }
  },
  computed: {
    ...mapGetters(['cartLength'])
  }
}
</script>

<style>

</style>