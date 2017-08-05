<template>
    <div class="search-component">
        <div class="search-header" layout="row" layout-align="start center">
            <div flex="60" class="input-wrap">
                <el-input placeholder="请输入搜索内容" v-model="searchText" @keyup.enter="queryClick">
                    <el-button slot="append" icon="search" @click="queryClick"></el-button>
                </el-input>
            </div>
        </div>
        <div class="search-body" layout="row">
            <div class="body-right" flex>
                <div>
                    <zk-list :headers="listData.headers" :list="listData.list" :page="listData.currentPage" :hasIndex="1" @item-click="itemClick" :operatorList="[{text:'下架',type:'delete'},{text:'详情',type:'detail'}]"></zk-list>
                    <div class="text-right list-page">
                        <el-pagination @current-change="pageChange" :current-page="listData.currentPage" layout="total, prev, pager, next" :total="listData.totalCount" :page-size="10">
                        </el-pagination>
                    </div>
                </div>
            </div>
        </div>
        <!-- <el-dialog title="编辑问题" :visible="dialogVisible" :show-close="false">
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
                    <img v-if="item" style="width:45%;" :src="'/api/'+item"></img>
                </div>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveBugClick">保 存</el-button>
            </div>
        </el-dialog> -->
    </div>
</template>

<script>
    import Vue from 'vue';
    import {
        mapState
    } from 'vuex';
    import {
        getBlogList,deleteBlog
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
                            prop: 'blogStatusText',
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
            queryClick(){
                this.queryInit(1);
            },
            queryInit(page) {
                this.$root.$emit('start-loading-bar');
                return getBlogList(page,this.searchText).subscribe(
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
            itemClick(options){
                // this.selectModel = this.listData.list[index];
                // this.dialogVisible = true;
                let index = options.index;
                if(options.type == 'delete'){
                    this.$root.$emit('start-loading-bar');
                    deleteBlog(this.listData.list[index].id).subscribe(
                        (res) => {
                            this.$root.$emit('complete-loading-bar');
                            this.dialogVisible = false;
                            this.queryInit(this.listData.currentPage);
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
                }else if(options.type == 'detail'){
                    //this.$router.push('/blog-detial/'+this.listData.list[index].id);
                    window.open('http://m.gangflower.com/blog-detail/'+this.listData.list[index].id);
                }
            },
            saveBugClick(){
                this.$root.$emit('start-loading-bar');
                updateBugStatus(this.selectModel.id,this.searchText).subscribe(
                    (res) => {
                        this.$root.$emit('complete-loading-bar');
                        this.dialogVisible = false;
                        this.queryInit(this.listData.currentPage);
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