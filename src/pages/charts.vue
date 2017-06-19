<template>
    <div>
        <div layout="row" layout-wrap>
            <div>{{car.name}}</div>
            <zk-bar :options="barOptions" @onclick="barClick" :car="car"></zk-bar>
            <zk-button type="primary" @click="resetBarClick">Change data</zk-button>
            <!--<zk-line></zk-line>
                    <zk-pie></zk-pie>-->
        </div>
    </div>
</template>

<script>
    import ZkBar from '../components/bar';
    import ZkLine from '../components/line';
    import ZkPie from '../components/pie';
    import ZkButton from '../components/button';
    
    class Car{
        constructor(){
            this.name = 'bmw';
        }
    }

    export default {
        data() {
            return {
                barOptions: null,
                car:new Car()
            }
        },
        components: {
            ZkBar,
            ZkLine,
            ZkPie,
            ZkButton
        },
        created() {
            console.log('created');
            this.initBar();
        },
        methods: {
            initBar() {
                setTimeout(() => {
                    this.barOptions = {
                        title: {
                            text: 'ECharts bar'
                        },
                        tooltip: {},
                        xAxis: {
                            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                        },
                        yAxis: {},
                        series: [{
                            name: '销量',
                            type: 'bar',
                            data: [5, 20, 36, 10, 10, 20]
                        }],
                        itemStyle: {
                            normal: {
                                color: '#75bb00'
                            }
                        }
                    };
                }, 1000);
            },
            resetBarClick() {
                //throw new Error('cloud');
                this.barOptions = {
                    title: {
                        text: 'ECharts bar changed'
                    },
                    tooltip: {},
                    xAxis: {
                        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [15, 120, 136, 110, 110, 120]
                    }],
                    itemStyle: {
                        normal: {
                            color: '#152b00'
                        }
                    }
                }
            },
            barClick(params){
                alert('click');
                console.log(params);
            }
        },
        computed: {
    
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    
</style>
