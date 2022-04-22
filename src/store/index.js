import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      userId: null,
      userName: null,
      userPassword: null,
      userPhone: null,
      userAddress: null
    },
    cartList: [{
        goodsId: 1,
        goodsName: '好果汁',
        goodsPrice: '198',
        count: 1
      },
      {
        goodsId: 2,
        goodsName: '坏果汁',
        goodsPrice: '98',
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
    },
    changeCount(state, [targetGoods, count]) {
      targetGoods.count = count
    },
    removeProduct(state, payload) {
      state.cartList.splice(payload.goodIndex, 1)
    },
    loginUser(state, payload) {
      state.user.userId = payload.userId
      state.user.userName = payload.userName
      state.user.userPassword = payload.userPassword
      state.user.userPhone = payload.userPhone
      state.user.userAddress = payload.userAddress
    },
    logoutUser(state, payload) {
      state.user.userId = null
      state.user.userName = null
      state.user.userPassword = null
      state.user.userPhone = null
      state.user.userAddress = null
    }
  },
  getters: {
    cartLength(state) {
      return state.cartList.length
    },
    cartList(state) {
      return state.cartList
    },
    currentUser(state) {
      return state.user
    }
  },
  actions: {
    addCart(context, payload) {
      return new Promise((resolve, reject) => {
        // 1.查找之前的数组中是否有该商品
        let oldProduct = context.state.cartList.find(item => item.goodsId === payload.goodsId)

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
    },
    removeGoods(context, payload) {
      let length = context.state.cartList.length
      let goodIndex = 0
      for(let i = 0; i < length; i++) {
        if(context.state.cartList[i].goodsId == payload.goodsId) {
          goodIndex = i;
        }
      }
      const remgood = {}
      remgood.goodIndex = goodIndex
      context.commit('removeProduct', remgood)
    },
    changeGoodsCount(context, payload) {
      let targetGoods = context.state.cartList.find(item => item.goodsId === payload.goodsId)
      let count = payload.count
      context.commit('changeCount', [targetGoods, count])
    },
    loginInUser(context, payload) {
      context.commit('loginUser', payload)
    },
    logoutCurrentUser(context, payload) {
      context.commit('logoutUser')
    }
  },
  modules: {}
})