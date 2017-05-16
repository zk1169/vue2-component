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
        <div layout="row">
            <ps-select-component v-model="valueSelect" :options="options" placeholder="请选择"></ps-select-component>
            <ps-button-component type="primary" @click="showTransition">主要按钮</ps-button-component>
            <ps-button-component type="primary" :async="asyncClick">异步按钮</ps-button-component>
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

        <ps-image-component style="width:500px;" src="http://saas.dev.mei1.info/images/login-bg222.jpg"></ps-image-component>

        <tree-component :node="treeModel"></tree-component>
        <radio-component v-model="radioModel" :options="radioOptions" style="margin-left:50px;"></radio-component>
        <checkbox-list-component :options="checkboxOptions" style="margin-left:50px;"></checkbox-list-component>
        <br><br><br><br><br><br>
    </div>
</template>

<script>    
    import { mapState } from 'vuex';
    import { login } from '../services/api';
    import Programmer from '../models/testModel';
    import TreeComponent from '../components/common/tree/tree.component';
    import TreeModel from '../components/common/tree/tree.model';
    import RadioComponent from '../components/common/radio.component';
    import CheckboxListComponent from '../components/common/checkbox-list.component';
    import PsSelectComponent from '../components/common/ps-select.component';
    import PsButtonComponent from '../components/common/ps-button.component';
    import PsImageComponent from '../components/common/ps-image.component';
    
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
                valueSelect: null,
                value6: '',
                treeModel: TreeModel.testData,
                radioModel: null,
                radioOptions: [{
                    name: '男',
                    code: '1'
                }, {
                    name: '女',
                    code: '2'
                }],
                checkboxOptions: [{
                    name: '苹果',
                    code: '1',
                    checked: true
                }, {
                    name: '香蕉',
                    code: '2',
                    checked: false
                }, {
                    name: '芒果',
                    code: '3',
                    checked: true
                }]
            }
        },
        components: {
            TreeComponent,
            RadioComponent,
            CheckboxListComponent,
            PsSelectComponent,
            PsButtonComponent,
            PsImageComponent
        },
        created() {
            console.log('created');
            this.radioModel = this.radioOptions[1];
        },
        methods: {
            showTransition() {
                this.showActivities = !this.showActivities;
                //this.message = this.userInfo.userId + ',' + this.login;
                this.checkboxOptions[2].checked = false;
            },
            asyncClick() {
                return login({
                        username: '20571',
                        password: 'MTExMTEx',
                        rememberMe: true
                    })
                    .map(
                        (res) => {
                            //handle 
                        }
                    )
                    .catch((error) => {
                        this.$toast({
                            title: 'error',
                            message: error.message,
                            type: 'error'
                        });
                    });
            }
        },
        computed: {
            ...mapState([
                'isLogin', 'userInfo'
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
