<template>
  <div class="shops">
    <table class="goods">
      <tr>
        <th>商品id</th>
        <th>商品名字</th>
        <th>商品价格</th>
        <th>操作</th>
      </tr>
      <tr v-for="(item, index) in goods" :key="index">
        <td>{{item.iid}}</td>
        <td>{{item.name}}</td>
        <td>{{item.price + '$'}}</td>
        <td><button @click='Add(item)'>添加至购物车</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    },
  },
  methods: {
    ...mapActions(['addCart']),
    Add(item) {
      const product = {};
      product.iid = item.iid;
      product.name = item.name;
      product.price = item.price;
      this.addCart(product);
      alert("添加成功!");
    }
  }
}
</script>

<style>
.goods {
  margin: 0 auto;
}
</style>