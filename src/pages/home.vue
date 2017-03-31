<template>
    <div>
        <div class="text-overflow text-center clearfix">{{message}}</div>
        <div layout="row" layout-wrap style="border:solid 1px red;">
            <div style="height:50px;background-color:#666;" flex="10" flex-md="30" flex-sm="40" flex-xs="50"></div>
            <div style="height:50px;background-color:#888;" flex="10" flex-md="30" flex-sm="40" flex-xs="50"></div>
            <div style="height:50px;background-color:#aaa;" flex="10" flex-md="30" flex-sm="40" flex-xs="50" flex-offset="5"></div>
        </div>
        <div layout="row" layout-align="center center" style="height:100px;width:200px;border:1px solid red;">
            <i class="fa fa-bars"></i>
            <i class="fa fa-university"></i>
        </div>
        <div>
            <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <el-button type="primary" @click="showTransition">主要按钮</el-button>
            <el-date-picker v-model="value6" type="daterange" placeholder="选择日期范围">
            </el-date-picker>
        </div>
        <transition name="fade">
            <section class="activities_details" v-if="showActivities">
                <h2 class="activities_shoptitle">transition-fade</h2>
                <svg width="60" height="60" class="close_activities" v-on:click="showTransition">
                    <circle cx="30" cy="30" r="25" stroke="#555" stroke-width="1" fill="none" />
                    <line x1="22" y1="38" x2="38" y2="22" style="stroke:#999;stroke-width:2" />
                    <line x1="22" y1="22" x2="38" y2="38" style="stroke:#999;stroke-width:2" />
                </svg>
            </section>
        </transition>
    </div>
</template>
<script>
import {
    mapState
} from 'vuex';
import Programmer from '../models/testModel';
export default {
    data() {
        return {
            message: new Programmer().hello,
            showActivities: false,
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
    created(){
        console.log('created');
    },
    methods: {
        showTransition() {
            this.showActivities = !this.showActivities;
            this.message = this.userInfo.userId + ',' + this.login;
        }
    },
    computed: {
        ...mapState([
            'login', 'userInfo'
        ]),
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// .fade-enter-active,
// .fade-leave-active {
//     transition: margin-left 2s;
// }
// .fade-enter,
// .fade-leave-active {
//     //opacity: 0;
//     margin-left: 100%;
// }
// .fade-leave {
//     //opacity: 0;
//     margin-left: 0px;
// }
.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>
