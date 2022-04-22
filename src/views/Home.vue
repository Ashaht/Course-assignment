<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <GoodsTable :goods="goods"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import GoodsTable from '@/views/HomeChild/GoodsTable.vue'
// import Goods from '@/components/Goods.vue'
import { getAllGoods } from '@/network/getAllGoods'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    GoodsTable
  },
  data() {
    return {
      goods: [
        {
          goodsId: 10,
          goodsName: '普通果汁',
          goodsPrice: '123',
          goodsType: '果汁',
          goodsDescription: '好果汁!你让我陷入疯狂!',
          goodsInventory: 100
        },
        {
          goodsId: 11,
          goodsName: '良好果汁',
          goodsPrice: '124',
          goodsType: '果汁',
          goodsDescription: '好果汁!你让我陷入疯狂!',
          goodsInventory: 100
        },
        {
          goodsId: 12,
          goodsName: '优秀果汁',
          goodsPrice: '125',
          goodsType: '果汁',
          goodsDescription: '好果汁!你让我陷入疯狂!',
          goodsInventory: 100
        },
        {
          goodsId: 13,
          goodsName: '史诗果汁',
          goodsPrice: '126',
          goodsType: '果汁',
          goodsDescription: '好果汁!你让我陷入疯狂!',
          goodsInventory: 100
        },
      ]
    }
  },
  created() {
    this.getAllGoods()
  },
  methods: {
    getAllGoods() {
      getAllGoods().then(res => {
        this.goods.push(...res.data)
      })
    }
  }
}
</script>

<style>
</style>
