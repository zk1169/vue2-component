<template>
  <div class="hello">
    <h1>{{ msg.program() }}</h1>
    <div layout="row" layout-wrap style="border:solid 1px red;">
      <div style="height:50px;background-color:#666;" flex="10" flex-md="30" flex-sm="40" flex-xs="50"></div>
      <div style="height:50px;background-color:#888;" flex="10" flex-md="30" flex-sm="40" flex-xs="50"></div>
      <div style="height:50px;background-color:#aaa;" flex="10" flex-md="30" flex-sm="40" flex-xs="50"></div>
    </div>
    <div layout="row" layout-align="center center" style="height:100px;width:200px;border:1px solid red;">
      <i class="fa fa-bars"></i>
      <i class="fa fa-university"></i>
    </div>
    <div>
      <el-select v-model="value" placeholder="请选择">
        <el-option v-for="item in options" :label="item.label" :value="item.value" :key="item.value">
        </el-option>
      </el-select>
      <el-button type="primary">主要按钮</el-button>
      <el-date-picker v-model="value6" type="daterange" placeholder="选择日期范围">
      </el-date-picker>
    </div>
  </div>
</template>

<script>
  import Programmer from '../models/testModel'
  export default {
  
    data() {
      return {
        msg: 'aaa',
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        value6: ''
      }
    },
    created() {
      console.log('created');
      this.msg = new Programmer('cloud');
    }
  }
</script>

 <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hello {
    h1 {
      color: red;
    }
  }
</style>
