<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    
    <Goods/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Goods from '@/components/Goods.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Goods
  }
}
</script>

<style>
</style>
