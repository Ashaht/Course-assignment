<template>
  <div class="order-wrapper">
    <el-descriptions v-for="(item, index) in orderList" :key="index" class="margin-top" :title="'订单' + (index+1)" :column="3" :size="size" border>
      <template slot="extra">
        <!-- <el-button type="primary" size="small">操作</el-button> -->
      </template>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-s-order"></i>
          订单号
        </template>
        {{ item.ordersId }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-goods"></i>
          商品名
        </template>
        {{ item.goodsName }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-more-outline"></i>
          商品数量
        </template>
        {{ item.goodsBuynum }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-bank-card"></i>
          付款方式
        </template>
        {{ item.PaymentMethods }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>
          用户名
        </template>
        刀哥
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          手机号
        </template>
        18100000000
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-tickets"></i>
          订单状态
        </template>
        {{ item.ordersStatus }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          收货地址
        </template>
        {{ item.ShippingAddress }}
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
  data() {
    return {
      size: '',
      orderList: [
        {
          ordersId: 1,
          userId: 1,
          goodsId: 1,
          goodsName: "好果汁",
          goodsBuynum: 2,
          ordersStatus: "已发货",
          PaymentMethods: "微信交易",
          ShippingAddress: "沈阳市沈阳大街"
        },
        {
          ordersId: 2,
          userId: 1,
          goodsId: 2,
          goodsName: "坏果汁",
          goodsBuynum: 1,
          ordersStatus: "未发货",
          PaymentMethods: "支付宝交易",
          ShippingAddress: "沈阳市沈阳大街"
        }
      ]
    }
  }
}
</script>

<style>
.order-wrapper {
  width: 70%;
}
.margin-top {
  transform: translateX(50%);
  width: 70%;
  margin-top: 20px;
}
</style>