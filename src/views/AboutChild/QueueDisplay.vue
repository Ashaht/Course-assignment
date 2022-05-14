<template>
  <div>
    <el-table
      :data="queue"
      stripe
      style="width: 20%; margin: 0 auto">
      <el-table-column
        label="时间"
        width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.time + '点' }}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="ssalc"
        label="班级"
        width="180">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    queue: []
  },
  data() {
    return {}
  }
}
</script>

<style>

</style>