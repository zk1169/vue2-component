<template>
  <div class="zk-bar" id="zk_bar" style="height:100%;width:100%;">
  </div>
</template>

<script>
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
      //window.onresize = this.myChart.resize;
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
