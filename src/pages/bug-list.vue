<template>
    <div class="search-component">
        <!--<div class="search-header" layout="row" layout-align="start center">
                    <div flex="60" class="input-wrap">
                        <el-input placeholder="请输入搜索内容" v-model="searchText" @keyup.enter="queryClick">
                            <el-button slot="append" icon="search" @click="queryClick"></el-button>
                        </el-input>
                    </div>
                </div>-->
        <div class="search-body" layout="row">
            <div class="body-right" flex>
                <div>
                    <zk-list :headers="listData.headers" :list="listData.list" :hasIndex="1" @item-click="itemClick"></zk-list>
                    <div class="text-right list-page">
                        <el-pagination @current-change="pageChange" :current-page="listData.currentPage" layout="total, prev, pager, next" :total="listData.totalCount" :page-size="20">
                        </el-pagination>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog title="编辑问题" :visible="dialogVisible">
            <div>
                <div class="form-item" layout="row">
                    <label flex="20">标题：</label>
                    <span>{{selectModel.title}}</span>
                </div>
                <div class="form-item" layout="row">
                    <label flex="20">创建人：</label>
                    <span>{{selectModel.name}}</span>
                </div>
                <div class="form-item" layout="row">
                    <label flex="20">内容：</label>
                    <span>{{selectModel.content}}</span>
                </div>
                <div class="form-item" layout="row">
                    <label flex="20">状态：</label>
                    <zk-select v-model="selectModel.status" :options="statusOptions" placeholder="请选择"></zk-select>
                </div>
                <div class="form-item" layout="row">
                    <label flex="20">提交时间：</label>
                    <span>{{selectModel.createTime}}</span>
                </div>
                <div v-for="item in selectModel.imageList">
                    <img v-if="item" style="width:100%;" :src="'/api/'+item"></img>
                </div>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">保 存</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {
        mapState
    } from 'vuex';
    import {
        getBugList
    } from '../services/gang-flower';
    import ZkSelect from '../components/select';
    import ZkList from '../components/list';
    import ZkListHeader from '../components/list-header';
    import ZkListItem from '../components/list-item';
    import BugModel from '../models/bug.model';
    
    export default {
        data() {
            return {
                loading: true,
                listData: {
                    headers: [{
                            title: '标题',
                            prop: 'title',
                            flex: 15
                        },
                        {
                            title: '创建人',
                            prop: 'name',
                            flex: 15
                        },
                        {
                            title: '内容',
                            prop: 'content',
                            flex: 20
                        },
                        {
                            title: '状态',
                            prop: 'status',
                            flex: 5
                        },
                        {
                            title: '提交时间',
                            prop: 'createTime',
                            flex: 10
                        }
                    ],
                    list: [],
                    totalCount: 0,
                    currentPage: 1
                },
                listAllChecked: false,
                searchText: '',
                dialogVisible:false,
                selectModel:new BugModel(),
                statusOptions:[
                    {
                        value: "1",
                        label: '待处理'
                    },
                    {
                        value: "2",
                        label: '正在解决'
                    },
                    {
                        value: "3",
                        label: '已解决'
                    }
                ]
            }
        },
        components: {
            ZkList,
            ZkListHeader,
            ZkListItem,
            ZkSelect
        },
        created() {
            this.queryInit(1);
        },
        methods: {
            queryInit(page) {
                this.$root.$emit('start-loading-bar');
                return getBugList(page).subscribe(
                    (res) => {
                        this.listData.list = res.rows;
                        this.listData.totalCount = res.totalCount;
                        this.listData.currentPage = Number(page);
                        this.$root.$emit('complete-loading-bar');
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
            pageChange(page) {
                this.queryInit(page);
            },
            itemClick(index){
                this.selectModel = this.listData.list[index];
                this.dialogVisible = true;
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
    .search-component {
        height: 100vh;
        min-width: 1280px;
    }
    
    .search-header {
        border-bottom: 1px solid #d2d2d2;
        padding: 8px;
        padding-left: 25px;
    }
    
    .search-body {
        margin: 30px 20px 30px 10px;
        .body-right {
            margin-left: 15px;
        }
    }
    .form-item{
        margin:10px;
    }
</style>