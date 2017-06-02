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
            <span class="value">{{totalCount}}</span> &nbsp;张
        </div>
        <div>
            <span class="label">
                    今天预计发放：
                </span>
            <span class="value">{{todayCount}}</span> &nbsp;张
        </div>
        <div>
            <span class="label">
                    已发放：
                </span>
            <span class="value">{{outCount}}</span> &nbsp;张
        </div>
        <div>
            <span class="label">
                    未发放：
                </span>
            <span class="value">{{todayCount-outCount}}</span> &nbsp;张
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {
        mapState
    } from 'vuex';
    import {
        getIcbcTicket,ticket
    } from '../services/icbc';
    // import ZkList from '../components/list';
    // import ZkListHeader from '../components/list-header';
    // import ZkListItem from '../components/list-item';
    
    export default {
        data() {
            return {
                loading: true,
                totalCount: 0,
                todayCount: 0,
                outCount: 0
    
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
                        this.todayCount = res.todayCount;
                        this.outCount = res.outCount;
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
            reloadClick(){
                this.getData();
            },
            ticketClick(){
                for(let i=0;i<1000;i++){
                    ticket(i).subscribe(
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
            width: 200px;
            display: inline-block;
        }
        .value {
            font-size: 50px;
            font-weight: bold;
            color: #FF4400;
        }
    }
</style>