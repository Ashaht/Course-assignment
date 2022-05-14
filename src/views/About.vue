<template>
  <div class="about">
    <h1>核酸排队查询</h1>
    <el-button class="sbutton" type="primary" @click="getAllQueue">查询全部队伍</el-button><br>
    <el-button class="sbutton" type="primary" @click="getSsalcByTime">根据时间查询</el-button>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select><br>
    <el-button class="sbutton" type="primary" @click="getTimeBySsalc">根据班级查询</el-button>
    <el-select v-model="ssalcValue" placeholder="请选择">
      <el-option
        v-for="item in ssalcOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <QueueDisplay :queue="queue"></QueueDisplay>
  </div>
</template>

<script>
import QueueDisplay from "./AboutChild/QueueDisplay.vue"
import { getAllQueue, getQueueByTime, getQueueBySsalc } from "@/network/getQueue"

export default {
  name: "About",
  components: {
    QueueDisplay
  },
  data() {
    return {
      queue: [],
      options: [
        {
          value: '1',
          label: '1点'
        }, {
          value: '2',
          label: '2点'
        }, {
          value: '3',
          label: '3点'
        }
      ],
      ssalcOptions: [
        {
          value: '一班',
          label: '一班'
        }, {
          value: '二班',
          label: '二班'
        }, {
          value: '三班',
          label: '三班'
        },
        {
          value: '小班',
          label: '小班'
        }, {
          value: '中班',
          label: '中班'
        }, {
          value: '大班',
          label: '大班'
        }
      ],
      value: null,
      ssalcValue: null
    }
  },
  methods: {
    getAllQueue() {
      getAllQueue().then(res => {
        this.queue = res.data
      })
    },
    getSsalcByTime() {
      getQueueByTime(this.value).then(res => {
        this.queue = res.data
      })
    },
    getTimeBySsalc() {
      getQueueBySsalc(this.ssalcValue).then(res => {
        this.queue = res.data
      })
    }
  }
}
</script>
<style>
.sbutton {
  margin: 5px;
}
</style>