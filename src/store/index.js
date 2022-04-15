import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: [{
        iid: 1,
        name: '好果汁',
        price: '198',
        count: 1
      },
      {
        iid: 2,
        name: '坏果汁',
        price: '98',
        count: 2
      },
    ]
  },
  mutations: {
    addCounter(state, payload) {
      payload.count++
    },
    addToCart(state, payload) {
      state.cartList.push(payload)
    }
  },
  actions: {
    addCart(context, payload) {
      return new Promise((resolve, reject) => {
        // 1.查找之前的数组中是否有该商品
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

        // 2.判断oldProduct
        if (oldProduct) { // 数量+1
          // oldProduct.count += 1
          context.commit('addCounter', oldProduct)
        } else { // 添加新的商品
          payload.count = 1
            // state.cartList.push(payload)
          context.commit('addToCart', payload)
        }
      })
    }
  },
  modules: {}
})