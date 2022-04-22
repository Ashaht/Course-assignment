<template>
  <el-table
    :data="goods"
    stripe
    height="750"
    border
    style="width: 60%; margin: 0 auto">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品 ID">
            <span>{{ props.row.goodsId }}</span>
          </el-form-item>
          <el-form-item label="商品名称">
            <span>{{ props.row.goodsName }}</span>
          </el-form-item>
          <el-form-item label="商品类型">
            <span>{{ props.row.goodsType }}</span>
          </el-form-item>
          <el-form-item label="商品库存">
            <span>{{ props.row.goodsInventory }}</span>
          </el-form-item>
          <el-form-item label="商品描述">
            <span>{{ props.row.goodsDescription }}</span>
          </el-form-item>
          <el-form-item label="商品价格">
            <span>{{ props.row.goodsPrice + '$'}}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      prop="goodsId"
      label="商品id"
      width="180">
    </el-table-column>
    <el-table-column
      prop="goodsName"
      label="名字"
      width="180">
    </el-table-column>
    <el-table-column
      label="价格"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.goodsPrice + '$' }}</span>
      </template>
    </el-table-column>
    <el-table-column 
    label="操作"
    width="180">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="Add(scope.row)">添加至购物车</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  props: {
    goods: [
      
    ]
  },
  data() {
    return {
    }
  },
  methods: {
    ...mapActions(['addCart']),
    Add(item) {
      const product = {};
      product.goodsId = item.goodsId;
      product.goodsName = item.goodsName;
      product.goodsPrice = item.goodsPrice;
      product.goodsDescription = item.goodsDescription;
      product.goodsInventory = item.goodsInventory;
      this.addCart(product);
      alert("添加成功!");
    }
  }
}
</script>

<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>