<template>
  <div class="shops">
    <table class="goods">
      <tr>
        <th>商品id</th>
        <th>商品名字</th>
        <th>商品价格</th>
        <th>操作</th>
      </tr>
      <tr>
        <td>001</td>
        <td>好果汁</td>
        <td>198$</td>
        <td><button @click='Add'>添加至购物车</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
  },
  methods: {
    ...mapActions(['addCart']),
    Add() {
      const product = {};
      product.iid = 3;
      product.name = '中果汁';
      product.price = 233;
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