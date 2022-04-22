<template>
  <div class="cart-table">
    <el-table
      ref="multipleTable"
      :data="cartList"
      tooltip-effect="dark"
      style="width: 750px; margin: 0 auto"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        label="商品ID"
        width="120">
        <template slot-scope="scope">{{ scope.row.goodsId }}</template>
      </el-table-column>
      <el-table-column
        label="商品名称"
        width="120">
        <template slot-scope="scope">{{ scope.row.goodsName }}</template>
      </el-table-column>
      <el-table-column
        label="商品价格"
        width="120">
        <template slot-scope="scope">{{ scope.row.goodsPrice }}</template>
      </el-table-column>
      <el-table-column
        label="商品数量"
        width="150">
        <template slot-scope="scope">
          <el-input-number :value="scope.row.count" size="mini" controls-position="right" @change="handleChange(scope.row.goodsId, $event)" :min="1" :max="99"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column 
      label="操作"
      width="180">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="removeGoods(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleAllSelection()">全选</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {

    }
  },
  methods: {
    ...mapActions(['removeGoods', 'changeGoodsCount']),
    toggleAllSelection() {
      this.$refs.multipleTable.toggleAllSelection();
    },
    toggleSelection() {
      this.$refs.multipleTable.clearSelection();
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleChange(goodsId, event) {
      console.log(event)
      const payload = {}
      payload.goodsId = goodsId
      payload.count = event
      this.changeGoodsCount(payload)
    }
  },
  computed: {
    ...mapGetters(['cartLength','cartList']),
  }
}
</script>

<style>

</style>