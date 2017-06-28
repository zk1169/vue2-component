<template>
    <div>
        <textarea name="" id="" cols="30" rows="10" :readonly="readonly"></textarea>
        <zk-button type="primary" @click="readonly=!readonly">readonly</zk-button>
        <br><br><br><br>
        <div layout="row" layout-wrap>
            <!--<div>{{car.name}}</div>-->
            <zk-button type="primary" @click="resetBarClick">Change data</zk-button>
            <div style="height:80vh;width:80vw">
                <zk-bar :options="barOptions" @onclick="barClick" :car="car"></zk-bar>
            </div>
            
        </div>
    </div>
</template>

<script>
    import ZkBar from '../components/bar';
    import ZkLine from '../components/line';
    import ZkPie from '../components/pie';
    import ZkButton from '../components/button';
    
    import ZkNplHeader from '@/components/npl-header';
    
    class Car {
        constructor() {
            this.name = 'bmw';
        }
    }
    
    export default {
        data() {
            return {
                barOptions: null,
                car: new Car(),
                readonly:'true',
            }
        },
        components: {
            ZkBar,
            ZkLine,
            ZkPie,
            ZkButton,
            ZkNplHeader
        },
        created() {
            console.log('created');
            this.initBar();
        },
        methods: {
            initBar() {
                setTimeout(() => {
                    this.barOptions = {
                        // title: {
                        //     text: '堆叠条形图',
                        //     subtext: '数据来自网络'
                        // },
                        tooltip: {
                            trigger: 'axis',
                            // axisPointer: { // 坐标轴指示器，坐标轴触发有效
                            //     type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                            // },
                            //formatter: '{a}: {b0}: {c0}<br />{b1}: {c1}'
                        },
                        legend: {
                            show: true,
                            //orient: 'vertical',
                            //left: 'left',
                            //height:'100px;',
                            //width: '300px',
                            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
                        },
                        grid: {
                            left: '3%',
                            right: '4%',
                            bottom: '3%',
                            containLabel: true
                        },
                        yAxis: {
                            type: 'value'
                        },
                        xAxis: {
                            type: 'category',
                            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                        },
                        series: [{
                                name: '直接访问',
                                type: 'bar',
                                stack: '总量',
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'insideRight'
                                    }
                                },
                                data: [320, 302, 301, 334, 390, 330, 320]
                            },
                            {
                                name: '邮件营销',
                                type: 'bar',
                                stack: '总量1',
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'insideRight'
                                    }
                                },
                                data: [120, 132, 101, 134, 90, 230, 210]
                            },
                            {
                                name: '联盟广告',
                                type: 'bar',
                                stack: '总量2',
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'insideRight'
                                    }
                                },
                                data: [220, 182, 191, 234, 290, 330, 310]
                            },
                            {
                                name: '视频广告',
                                type: 'bar',
                                stack: '总量3',
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'insideRight'
                                    }
                                },
                                data: [150, 212, 201, 154, 190, 330, 410]
                            },
                            {
                                name: '搜索引擎',
                                type: 'bar',
                                stack: '总量4',
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'insideRight'
                                    }
                                },
                                data: [820, 832, 901, 934, 1290, 1330, 1320]
                            }
                        ],
                        // itemStyle: {
                        //     normal: {
                        //         color: '#75bb00'
                        //     }
                        // }
                    };
                }, 1000);
            },
            resetBarClick() {
                //throw new Error('cloud');
                this.barOptions = {
                    title: {
                        text: '世界人口总量',
                        subtext: '数据来自网络'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    legend: {
                        data: ['2011年', '2012年']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01]
                    },
                    yAxis: {
                        type: 'category',
                        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
                    },
                    series: [{
                            name: '2011年',
                            type: 'bar',
                            data: [18203, 23489, 29034, 104970, 131744, 630230]
                        },
                        {
                            name: '2012年',
                            type: 'bar',
                            data: [19325, 23438, 31000, 121594, 134141, 681807]
                        }
                    ]
                };
            },
            barClick(params) {
                //alert('click');
                console.log(params);
            },
            headerClick() {
                window.open("http://www.baidu.com", "baidu");
            }
        },
        computed: {
    
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    
</style>
