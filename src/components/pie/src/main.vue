<template>
  <div class="zk-pie" id="zk_pie" style="height:500px;width:500px;">
  </div>
</template>

<script>
  // // 引入 ECharts 主模块
  // var echarts = require('echarts/lib/echarts');
  // // 引入柱状图
  // require('echarts/lib/chart/pie');
  // // 引入提示框和标题组件
  // require('echarts/lib/component/tooltip');
  // require('echarts/lib/component/title');
  
  export default {
    name: 'zk-pie',
    mounted() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('zk_pie'));
  
      let option = {
        title: {
          text: '访问来源',
          itemStyle: {
            normal: {
              color: '#ffffff'
            }
          }
        },
        backgroundColor: '#2c343c',
        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [{
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          data: [{
              value: 235,
              name: '视频广告'
            },
            {
              value: 274,
              name: '联盟广告'
            },
            {
              value: 310,
              name: '邮件营销'
            },
            {
              value: 335,
              name: '直接访问'
            },
            {
              value: 400,
              name: '搜索引擎',
              itemStyle: {
                normal: {
                  color: '#ffffff'
                }
              }
            }
          ],
          roseType: 'angle',
          label: {
            normal: {
              textStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              }
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              }
            }
          },
          itemStyle: {
            normal: {
              color: '#c23531',
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }]
      };
      // 绘制图表
      myChart.setOption(option);
    }
  };
</script>
