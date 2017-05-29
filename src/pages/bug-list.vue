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
                    <zk-list :headers="listData.headers" :list="listData.list" :hasIndex="1"></zk-list>
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
        getBugList
    } from '../services/gang-flower';
    import ZkList from '../components/list';
    import ZkListHeader from '../components/list-header';
    import ZkListItem from '../components/list-item';

    export default {
        data() {
            return {
                loading: true,
                listData: {
                    headers:[
                        {title:'标题',prop:'title',flex:15},
                        {title:'创建人',prop:'name',flex:15},
                        {title:'内容',prop:'content',flex:20},
                        {title:'状态',prop:'status',flex:5},
                        {title:'提交时间',prop:'createTime',flex:10}
                    ],
                    list:[]
                },
                listAllChecked: false,
                searchText: '',
                routeQuery: {
                    view: 'list'
                }
            }
        },
        components: {
            ZkList,
            ZkListHeader,
            ZkListItem
        },
        created() {
            //this.queryClick();
            if (this.$route.query) {
                this.routeQueryInit(this.$route.query);
            }
        },
        beforeRouteUpdate(to, from, next) {
            // 在当前路由改变，但是该组件被复用时调用
            // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
            // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
            // 可以访问组件实例 `this`
            if (to && to.query) {
                this.routeQueryInit(to.query);
            }
        },
        methods: {
            routeQueryInit(query) {
                if (query.key) {
                    this.routeQuery.key = query.key;
                    this.searchText = query.key;
                    this.queryInit();
                } else {
                    this.routeQuery.key = '';
                    this.searchText = '';
                    this.queryInit();
                }
    
            },
            queryClick() {
                this.routeQuery.key = this.searchText;
                //this.directUrl({field:"filters",value:querys.toString()});
                this.directUrl();
            },
            queryInit() {
                this.$root.$emit('start-loading-bar');
                return getBugList().subscribe(
                    (res) => {
                        this.listData.list = res.rows;
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
            directUrl() {
                let url = "/dashboard/bug-list?";
                if (this.routeQuery) {
                    if (this.routeQuery.key) {
                        url += "key=" + this.routeQuery.key + "&";
                    }
                    if (url.lastIndexOf("&") == url.length - 1) {
                        url = url.substr(0, url.length - 1);
                    }
                }
                //this.$router.push({path:'/dashboard/search',query:{key:'bbbbb'}});
                //this.$route.query.key = "aaaaaaaa";
                window.location.href = url;
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
</style>