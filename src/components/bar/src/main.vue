<template>
  <div class="zk-bar" id="zk_bar" style="height:500px;width:500px;">
  </div>
</template>

<script>
  // // 引入 ECharts 主模块
  // var echarts = require('echarts/lib/echarts');
  // // 引入柱状图
  // require('echarts/lib/chart/bar');
  // // 引入提示框和标题组件
  // require('echarts/lib/component/tooltip');
  // require('echarts/lib/component/title');
  
  export default {
    name: 'zk-bar',
    data() {
      return {
        myChart: null
      }
    },
    props: {
      options: Object,
      car:Object
    },
    mounted() {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = echarts.init(document.getElementById('zk_bar'));
      this.myChart.on('click',(params)=>{
        this.car.name = 'bens';
        this.$emit('onclick',params);
      });
    },
    watch: {
      options: function() {
        // 绘制图表
        if(this.myChart){
          console.log('watch options');
          this.myChart.setOption(this.options);
        }
      }
    }
  };
</script>
