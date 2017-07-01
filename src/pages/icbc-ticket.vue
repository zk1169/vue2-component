<template>
    <div class="icbc-ticket-component">
        <div>
            <el-button type="primary" @click="reloadClick">刷 新</el-button>
            <button type="button" class="btn btn-primary" @click="ticketClick" name="btnLogin">
                        test
                    </button>
        </div>
        <div>
            <span class="label">
                            券总数：
                        </span>
            <span class="value-total">{{totalCount}}</span> &nbsp;张
        </div>
    
        <div layout="column">
            <div layout="row" layout-align="space-between center">
                <div flex>
                    <span class="label">
                            第1天预计发放：
                        </span>
                    <span class="value">{{day1Count}}</span> &nbsp;张
                </div>
                <div flex>
                    <span class="label">
                            第1天已发放：
                        </span>
                    <span class="value">{{day1OutCount}}</span> &nbsp;张
                </div>
                <div flex>
                    <span class="label">
                            第1天未发放：
                        </span>
                    <span class="value">{{day1Count-day1OutCount}}</span> &nbsp;张
                </div>
            </div>
    
            <div layout="row">
                <div flex>
                    <span class="label">
                            第2天预计发放：
                        </span>
                    <span class="value">{{day2Count}}</span> &nbsp;张
                </div>
                <div flex>
                    <span class="label">
                            第2天已发放：
                        </span>
                    <span class="value">{{day2OutCount}}</span> &nbsp;张
                </div>
                <div flex>
                    <span class="label">
                            第2天未发放：
                        </span>
                    <span class="value">{{day2Count-day2OutCount}}</span> &nbsp;张
                </div>
            </div>
    
            <div layout="row">
                <div flex>
                    <span class="label">
                            第3天预计发放：
                        </span>
                    <span class="value">{{day3Count}}</span> &nbsp;张
                </div>
                <div flex>
                    <span class="label">
                            第3天已发放：
                        </span>
                    <span class="value">{{day3OutCount}}</span> &nbsp;张
                </div>
                <div flex>
                    <span class="label">
                            第3天未发放：
                        </span>
                    <span class="value">{{day3Count-day3OutCount}}</span> &nbsp;张
                </div>
            </div>
    
            <div layout="row">
                <div flex>
                    <span class="label">
                            第4天预计发放：
                        </span>
                    <span class="value">{{day4Count}}</span> &nbsp;张
                </div>
                <div flex>
                    <span class="label">
                            第4天已发放：
                        </span>
                    <span class="value">{{day4OutCount}}</span> &nbsp;张
                </div>
                <div flex>
                    <span class="label">
                            第4天未发放：
                        </span>
                    <span class="value">{{day4Count-day4OutCount}}</span> &nbsp;张
                </div>
            </div>
    
            <div layout="row">
                <div flex>
                    <span class="label">
                            第5天预计发放：
                        </span>
                    <span class="value">{{day5Count}}</span> &nbsp;张
                </div>
                <div flex>
                    <span class="label">
                            第5天已发放：
                        </span>
                    <span class="value">{{day5OutCount}}</span> &nbsp;张
                </div>
                <div flex>
                    <span class="label">
                            第5天未发放：
                        </span>
                    <span class="value">{{day5Count-day5OutCount}}</span> &nbsp;张
                </div>
            </div>
    
            <div layout="row">
                <div flex>
                    <span class="label">
                            第6天预计发放：
                        </span>
                    <span class="value">{{day6Count}}</span> &nbsp;张
                </div>
                <div flex>
                    <span class="label">
                            第6天已发放：
                        </span>
                    <span class="value">{{day6OutCount}}</span> &nbsp;张
                </div>
                <div flex>
                    <span class="label">
                            第6天未发放：
                        </span>
                    <span class="value">{{day6Count-day6OutCount}}</span> &nbsp;张
                </div>
            </div>
        </div>
    
    </div>
</template>

<script>
    import Vue from 'vue';
    import {
        mapState
    } from 'vuex';
    import {
        getIcbcTicket,
        ticket,
        ticketLocal
    } from '../services/icbc';
    // import ZkList from '../components/list';
    // import ZkListHeader from '../components/list-header';
    // import ZkListItem from '../components/list-item';
    
    export default {
        data() {
            return {
                loading: true,
                totalCount: 0,
                day1Count: 0,
                day1OutCount: 0,

                day2Count: 0,
                day2OutCount: 0,

                day3Count: 0,
                day3OutCount: 0,

                day4Count: 0,
                day4OutCount: 0,

                day5Count: 0,
                day5OutCount: 0,

                day6Count: 0,
                day6OutCount: 0,
    
            }
        },
        created() {
            this.getData();
        },
        methods: {
            getData() {
                this.$root.$emit('start-loading-bar');
                return getIcbcTicket().subscribe(
                    (res) => {
                        this.$root.$emit('complete-loading-bar');
                        this.totalCount = res.totalCount;
    
                        this.day1Count = res.day1Count;
                        this.day1OutCount = res.day1OutCount;
    
                        this.day2Count = res.day2Count;
                        this.day2OutCount = res.day2OutCount;
    
                        this.day3Count = res.day3Count;
                        this.day3OutCount = res.day3OutCount;
    
                        this.day4Count = res.day4Count;
                        this.day4OutCount = res.day4OutCount;
    
                        this.day5Count = res.day5Count;
                        this.day5OutCount = res.day5OutCount;
    
                        this.day6Count = res.day6Count;
                        this.day6OutCount = res.day6OutCount;
    
                        this.$toast({
                            title: '刷新成功',
                            //message: '刷新成功',
                            type: 'info'
                        });
                    },
                    (error) => {
                        this.$root.$emit('complete-loading-bar');
                        this.$toast({
                            title: 'error',
                            message: error.message,
                            type: 'error'
                        });
                    }
                );
            },
            reloadClick() {
                this.getData();
            },
            ticketClick() {
                // for(let i=0;i<100;i++){
                //     ticket(i+1).subscribe(
                //         (res) => {
                //             console.log(res);
                //         },
                //         (error) => {
                //             this.$toast({
                //                 title: 'error',
                //                 message: error.message,
                //                 type: 'error'
                //             });
                //         }
                //     );
                // }
                let self = this;
                let index = 3;
                setInterval(function() {
                    self.getTicket(index);
                    index++;
                }, 20);
            },
            getTicket(index) {
                ticketLocal(index).subscribe(
                    (res) => {
                        console.log(res);
                    },
                    (error) => {
                        this.$toast({
                            title: 'error',
                            message: error.message,
                            type: 'error'
                        });
                    }
                );
            }
        },
        computed: {
            ...mapState([
                'userInfo'
            ])
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import '../styles/variables';
    .icbc-ticket-component {
        padding: 20px;
        .label {
            font-size: 20px;
            width: 170px;
            display: inline-block;
        }
        .value-total {
            font-size: 50px;
            font-weight: bold;
            color: #FF4400;
        }
        .value {
            font-size: 20px;
            font-weight: bold;
            color: #FF4400;
        }
    }
</style>