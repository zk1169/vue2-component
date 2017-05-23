<template>
    <div class="search-component">
        <div class="search-header" layout="row" layout-align="start center">
            <img src="../assets/images/logo_zhihuiya_35.png" />
            <div flex class="input-wrap" layout="row">
                <div class="database-selector-tip" layout="row" layout-align="center center">
                    <div class="database-selector-all"></div>
                </div>
                <div class="search-field" flex>
                    <input id="q" autocomplete="off" type="text" class="search-input" v-model="searchText" @keyup.enter="queryClick()">
                </div>
                <div class="btn-wrap" layout="row">
                    <a class="btn-search" @click="queryClick"></a>
                    <zk-popover>
                        <div slot="content">
                            <a class="btn-search-menu"></a>
                        </div>
                        <div slot="popup">
                            <div class="search-menu">
                                <ul>
                                    <li>
                                        <a href="/simple" class="simpleSearch" target="">简单搜索</a>
                                    </li>
                                    <li>
                                        <a href="/patents" class="fieldSearch" target="">字段搜索</a>
                                    </li>
                                    <li>
                                        <a href="/patents/cmd" class="cmdSearch" target="">命令搜索</a>
                                    </li>
                                    <li>
                                        <a href="/bulk" class="bulkSearch" target="">批量处理</a>
                                    </li>
                                    <li>
                                        <a href="/patents/semantic" class="semanticSearch" target="">语义搜索</a>
                                    </li>
                                    <li>
                                        <a href="/expand" class="divergent" target="">扩展搜索</a>
                                    </li>
                                    <li>
                                        <a href="/classification" class="classification" target="">分类号搜索</a>
                                    </li>
                                    <li>
                                        <a href="/patents/legal/litigation" class="legalSearch" target="">法律搜索</a>
                                    </li>
                                    <li>
                                        <a href="/search/image" class="imageSearch" target="">图像探索</a>
                                    </li>
                                    <li>
                                        <a href="/patents/chemical" class="chemicalSearch" target="">化学搜索</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </zk-popover>
                    <input id="efq" name="efq" type="hidden" value="">
                </div>
            </div>
            <div class="right-side" layout="row">
                <div class="queue-monitor">
                    <a id="btn-monitor" class="btn-monitor" title="">
                        <span class="i16 ico-hourglass i16-gray"></span>
                    </a>
                </div>
                <div class="user-pannel" layout="row" laout-align="start end">
                    <zk-popover>
                        <div slot="content">
                            <a class="user-name tools">
                                <span class="user-email text-overflow">{{userInfo.email}}</span>
                                <span class="i12 ico-corner-down"></span>
                            </a>
                        </div>
                        <div slot="popup">
                            <div class="user-menu tools-submenu">
                                <div class="feature-list">
                                    <ul>
                                        <li>
                                            <a href="/my/history" target="_blank">
                                                <span class="i16 ico-clock"></span>历史记录</a>
                                        </li>
                                        <li>
                                            <a href="/workspace" target="_blank">
                                                <span class="i16 ico-list"></span>工作空间</a>
                                        </li>
                                        <li>
                                            <a href="/alert/email" target="_blank">
                                                <span class="i16 ico-calendar"></span>邮件提醒</a>
                                        </li>
                                        <li>
                                            <a href="/saved_query/list" target="_blank">
                                                <span class="i16 ico-save"></span>已保存语句</a>
                                        </li>
                                        <li>
                                            <a href="/analysis/list" target="_blank">
                                                <span class="i16 ico-chart-line"></span>我的分析</a>
                                        </li>
                                        <li>
                                            <a href="/landscape" target="_blank">
                                                <span class="i16 ico-landscape"></span>我的专利地图</a>
                                        </li>
                                        <li>
                                            <a href="/assignee" target="_blank">
                                                <span class="i16 ico-assignee-group"></span>申请人分组</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="profile">
                                    <a class="btn-profile">
                                        <span class="i16 ico-id-card"></span>用户设置</a>
                                </div>
                                <div class="support-btns">
                                    <a class="btn-demo" target="_blank">
                                        <span class="i16 ico-demo"></span>智慧芽学院</a>
                                    <a class="btn-question" target="_blank">
                                        <span class="i16 ico-question"></span>帮助中心</a>
                                    <a class="btn-release-log" target="">
                                        <span class="i16 ico-release-log"></span>更新日志</a>
                                    <a class="btn-features" target="">
                                        <span class="i16 ico-star-light"></span>特色功能</a>
                                    <a href="/logout" class="btn-logout" target="">
                                        <span class="i16 ico-onoff"></span>登出</a>
                                </div>
                            </div>
                        </div>
                    </zk-popover>
                </div>
            </div>
            <a href="javascript://;" id="uservoice" class="uservoice ico-uservoice">Uservoice</a>
        </div>
        <div class="search-body" layout="row">
            <div class="body-left">
                <div class="condition-switch" layout="row">
                    <button type="button" class="condition-title" @click="secondSearchText=(secondSearchText==='AND'?'NOT':'AND')">{{secondSearchText}}</button>
                    <input id="filter_text" type="text" class="condition-keywords" name="filter" placeholder="二次搜索">
                </div>
                <div class="tab-wrap">
                    <zk-tab :activeIndex="activeTabIndex">
                        <zk-tab-item title="过滤">
                            <div class="tab-content">
                                <div class="selected-box" v-if="filters && filters.length>0">
                                    <div>申请(专利权)人</div>
                                    <ul>
                                        <li class="selected-item" v-for="(item,filterIndex) in filters">
                                            <div layout="row" layout-align="start center">
                                                <div flex>{{item.name}}</div>
                                                <div class="close-item" @click="cleanFilterItem(filterIndex)">
                                                    <i class="fa fa-times"></i>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div class="box-close" @click="cleanFilter">
                                        <i class="fa fa-times-circle"></i>
                                    </div>
                                </div>
                                <filter-component :source="filterSource" @filter="listFilterEvent" @filterAdd="listFilterAddEvent"></filter-component>
                            </div>
                        </zk-tab-item>
                        <zk-tab-item title="最近搜索" v-ps-loading="loading">
                            <div style="height:200px;">tab2 content</div>
                        </zk-tab-item>
                    </zk-tab>
                </div>
            </div>
    
            <div class="body-right" flex>
                <div layout="row" class="search-toolbar">
                    <div class="m-btn-group btn-views" layout="row">
                        <a title="表格视图" class="btn-26" :class="{'selected':routeQuery.view=='list'}" @click="viewClick">
                            <span class="i16 ico-grid"></span>
                        </a>
                        <a title="图文视图" class="btn-26" :class="{'selected':routeQuery.view=='card'}" @click="viewClick">
                            <span class="i16 ico-list2"></span>
                        </a>
                        <a title="快速浏览" class="btn-26">
                            <span class="i16 ico-book"></span>
                        </a>
                        <a title="缩略视图" class="btn-26">
                            <span class="i16 ico-4square"></span>
                        </a>
                        <a title="专利分析" class="btn-26">
                            <span class="i16 ico-chart-bar"></span>
                        </a>
                    </div>
                    <div class="search-result-tool btn-group disabled" layout="row" layout-align="start center">
                        <a class="addtolist-all " layout="row" layout-align="start center">
                            <span class="i16 ico-favo"></span>
                            <span>添加到工作空间</span>
                        </a>
                        <a class="export " layout="row" layout-align="start center">
                            <span class="i16 ico-export"></span>
                            <span>导出</span>
                        </a>
                        <a class="save " layout="row" layout-align="start center">
                            <span class="i16 ico-save"></span>
                            <span>保存</span>
                        </a>
                        <a class="remind " layout="row" layout-align="start center">
                            <span class="i16 ico-calendar"></span>
                            <span>邮件提醒</span>
                        </a>
                        <a class="landscape " layout="row" layout-align="start center">
                            <span class="i16 ico-landscape"></span>
                            <span>3D专利地图分析</span>
                        </a>
                        <a class="insights " layout="row" layout-align="start center">
                            <span class="i16 ico-insights"></span>
                            <span>英策</span>
                        </a>
                        <a class="btn-26 btn-field-set green" layout="row" layout-align="start center" @click="dialogVisible=!dialogVisible">
                            <span class="i16 ico-cog"></span>
                            <!--<span>用户设置</span>-->
                        </a>
                        <span class="toolbar-disabled" style="display: none;"></span>
                    </div>
                </div>
                <div>
                    <zk-list :headers="catHeaderList" :list="catList" :hasCheckbox="1" :hasIndex="1"></zk-list>
                    <div class="result-total">1-20条专利，共2,567,449条专利</div>
                    <zk-list>
                        <zk-list-header v-if="routeQuery.view=='list'">
                            <ul layout="row">
                                <li>
                                    <zk-checkbox v-model="listAllChecked"></zk-checkbox>
                                </li>
                                <li class="list-index">
                                    <span style="margin-left:8px;">#</span>
                                </li>
                                <li v-for="header in listData.headers" :flex="header.flex">
                                    {{header.title}}
                                </li>
                            </ul>
                        </zk-list-header>
                        <zk-list-item v-for="(item,index) in patents" :key="item.PATENT_ID" :class="{'checked':item.checked}">
                            <div layout="row" @click="listItemClick(item)" v-if="routeQuery.view=='list'">
                                <div class="item-column">
                                    <zk-checkbox v-model="item.checked"></zk-checkbox>
                                </div>
                                <div class="item-column list-index">
                                    <i class="dot-status" v-if="!item.hasRead"></i>
                                    {{index+1}}
                                </div>
                                <div class="item-column" v-for="header in listData.headers" :flex="header.flex">
                                    <span v-if="header.prop=='PN'">
                                        <a v-html="$options.filters.highlight(item.PN,searchText)"></a>
                                    </span>
                                    <span v-else-if="header.prop=='TITLE'">
                                        <a v-html="$options.filters.highlight(item.TITLE,searchText)"></a>
                                    </span>
                                    <span v-else-if="header.prop=='IN'">
                                        <span v-for="(inventor,inventorIndex) in item.IN" v-if="(!item.hasMore && inventorIndex<3) || item.hasMore">
                                            <a v-html="$options.filters.highlight(inventor,searchText)"></a>&nbsp;&nbsp;
                                        </span>
                                        <a class="more" v-if="!item.hasMore && item.IN.length>3" @click="inventorMore(item,index)">+{{item.IN.length-3}}</a>
                                    </span>
                                    <span v-else-if="header.prop=='AN'">
                                        <span v-for="an in item.AN">
                                            <a v-html="$options.filters.highlight(an,searchText)"></a>&nbsp;&nbsp;
                                        </span>
                                    </span>
                                    <span v-else v-html="$options.filters.highlight(item[header.prop],searchText)"></span>
                                </div>
                            </div>
                            <div @click="listItemClick(item)" v-if="routeQuery.view=='card'">
                                <div class="item-column">
                                    <zk-checkbox v-model="item.checked"></zk-checkbox>
                                </div>
                                <div class="item-column list-index">
                                    <i class="dot-status" v-if="!item.hasRead"></i>
                                    {{index+1}}
                                </div>
                                <div class="item-column" v-for="header in listData.headers" :flex="header.flex">
                                    <span v-if="header.prop=='PN'">
                                        <a v-html="$options.filters.highlight(item.PN,searchText)"></a>
                                    </span>
                                    <span v-else-if="header.prop=='TITLE'">
                                        <a v-html="$options.filters.highlight(item.TITLE,searchText)"></a>
                                    </span>
                                    <span v-else-if="header.prop=='IN'">
                                        <span v-for="(inventor,inventorIndex) in item.IN" v-if="(!item.hasMore && inventorIndex<3) || item.hasMore">
                                            <a v-html="$options.filters.highlight(inventor,searchText)"></a>&nbsp;&nbsp;
                                        </span>
                                        <a class="more" v-if="!item.hasMore && item.IN.length>3" @click="inventorMore(item,index)">+{{item.IN.length-3}}</a>
                                    </span>
                                    <span v-else-if="header.prop=='AN'">
                                        <span v-for="an in item.AN">
                                            <a v-html="$options.filters.highlight(an,searchText)"></a>&nbsp;&nbsp;
                                        </span>
                                    </span>
                                    <span v-else v-html="$options.filters.highlight(item[header.prop],searchText)"></span>
                                </div>
                            </div>
                        </zk-list-item>
                    </zk-list>
                </div>
            </div>
        </div>
        <div class="select-patent-component" v-if="this.selectedItems.length>0">
            <select-patent-component :selected="selectedItems" @cancelSelect="cancelSelect"></select-patent-component>
        </div>
    
        <el-dialog title="搜索结果显示设置" :visible.sync="dialogVisible" size="tiny">
            <span>搜索结果显示设置</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">重 置</el-button>
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import Vue from 'vue';
import { mapState } from 'vuex';
import { patentQuery } from '../services/api';
import ZkPopover from '../components/popover';
import ZkTab from '../components/tab';
import ZkTabItem from '../components/tab-item';
import FilterComponent from '../components/filter.component';
import ZkList from '../components/list';
import ZkListHeader from '../components/list-header';
import ZkListItem from '../components/list-item';
import ZkCheckbox from '../components/checkbox';
import SelectPatentComponent from '../components/select-patent.component';
import Cat from '../models/animal.model';
let cloneDeep = require('lodash.clonedeep');

export default {
    data() {
        return {
            secondSearchText: 'AND',
            activeTabIndex: 0,
            loading: true,
            filterSource: [],
            listData: {},
            listAllChecked: false,
            dialogVisible: false,
            searchText: '',
            selectedItems: [],
            patents: [],
            filters: [],
            routeQuery: {
                view: 'list'
            },
            catList:null,
            catHeaderList:null
        }
    },
    components: {
        ZkPopover,
        ZkTab,
        ZkTabItem,
        FilterComponent,
        ZkList,
        ZkListHeader,
        ZkListItem,
        ZkCheckbox,
        SelectPatentComponent
    },
    created() {
        this.catHeaderList = [{title:'name',prop:'name'},{title:'color',prop:'color'}];
        this.catList = [];
        for(let i=0;i<10;i++){
            this.catList.push(new Cat(i+'-name'));
        }
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
            if (query.filters) {
                this.routeQuery.filters = query.filters;
                //this.filterInit(query.filters);
                this.queryInit();
            } else {
                this.routeQuery.filters = null;
                //this.filterInit(null);
                this.queryInit();
            }
            if (query.key) {
                this.routeQuery.key = query.key;
                this.searchText = query.key;
                this.queryInit();
            } else {
                this.routeQuery.key = '';
                this.searchText = '';
                this.queryInit();
            }
            if (query.view) {
                this.routeQuery.view = query.view;
            } else {
                this.routeQuery.view = 'list';
            }

        },
        filterInit(filters) {
            //清空筛选条件
            if (this.filters) {
                this.filters.splice(0, this.filters.length);
            }

            if (this.filterSource) {
                this.filterSource.forEach((item) => {
                    if (item.values) {
                        item.values.forEach((subItem) => {
                            if (filters && filters.indexOf(subItem.name) > -1) {
                                subItem.checked = true;
                                subItem.field = item.field;
                                this.filters.push(subItem);
                            } else {
                                subItem.checked = false;
                            }
                        });
                    }
                });
            }
            this.listFilter(this.filters);
        },
        queryClick() {
            this.routeQuery.key = this.searchText;
            //this.directUrl({field:"filters",value:querys.toString()});
            this.directUrl();
        },
        viewClick() {
            if (this.routeQuery.view == "list") {
                this.routeQuery.view = "card";
            } else {
                this.routeQuery.view = "list";
            }
            this.directUrl();
        },
        queryInit() {
            this.$root.$emit('start-loading-bar');
            return patentQuery().subscribe(
                (res) => {
                    this.filterSource = res.moreAnalysisData.data.configs;
                    this.filterSource[0].values = res.moreAnalysisData.data.data[0].value;
                    this.listData = {
                        list: res.patentData.data.PATENT_DATA,
                        headers: res.patentHeadersData
                    };
                    this.patents = cloneDeep(this.listData.list);
                    this.$root.$emit('complete-loading-bar');
                    this.filterInit(this.routeQuery.filters);
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
        inventorMore(item, index) {
            item.hasMore = !item.hasMore;
        },
        listItemClick(item) {
            item.hasRead = true;
            this.selectedItems.splice(0, this.selectedItems.length);
            if (this.patents) {
                this.patents.forEach((item, index) => {
                    if (item.checked) {
                        this.selectedItems.splice(this.selectedItems.length, 0, item);
                    }
                });
            }
        },
        cancelSelect() {
            if (this.patents) {
                this.patents.forEach((item, index) => {
                    item.checked = false;
                });
            }
            this.selectedItems.splice(0, this.selectedItems.length);
            this.listAllChecked = false;
        },
        listFilter(filters) {
            this.filters = filters;
            if (filters && filters.length > 0) {
                this.patents.splice(0, this.patents.length);
                if (this.listData && this.listData.list) {
                    this.listData.list.forEach((item) => {
                        let filterFlag = false;
                        for (let i = 0; i < filters.length; i++) {
                            if (item[filters[i].field].indexOf(filters[i].name) > -1) {
                                filterFlag = true;
                                break;
                            }
                        }
                        if (filterFlag) {
                            this.patents.push(item);
                        }
                    });
                }
            } else {
                this.patents = cloneDeep(this.listData.list);
            }
        },
        listFilterEvent(filters) {
            let querys = [];
            if (filters && filters.length > 0) {
                filters.forEach((item) => {
                    querys.push(item.name);
                });
            }
            this.routeQuery.filters = querys.toString();
            //this.directUrl({field:"filters",value:querys.toString()});
            this.directUrl();
        },
        listFilterAddEvent(filter) {
            this.filters.push(filter);
            this.listFilterEvent(this.filters);
        },
        cleanFilter() {
            this.routeQuery.filters = null;
            this.directUrl();
        },
        cleanFilterItem(index) {
            this.filters.splice(index, 1);
            this.listFilterEvent(this.filters);
        },
        directUrl() {
            let url = "#/dashboard/search?";
            if (this.routeQuery) {
                // url += '?';
                // for (var property in query) {
                //     if (query.hasOwnProperty(property)){
                //         url += property+"="+query[property]+"&&";
                //     }
                // }
                if (this.routeQuery.key) {
                    url += "key=" + this.routeQuery.key + "&";
                }
                if (this.routeQuery.filters) {
                    url += "filters=" + this.routeQuery.filters + "&";
                }
                if (this.routeQuery.view) {
                    url += "view=" + this.routeQuery.view + "&";
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
    watch: {
        listAllChecked: function (val) {
            this.selectedItems.splice(0, this.selectedItems.length);
            if (this.patents) {
                this.patents.forEach((item, index) => {
                    item.checked = val;
                    if (val) {
                        this.selectedItems.splice(this.selectedItems.length, 0, item);
                    }
                });
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
.search-component {
    height: 100vh;
    min-width: 1280px;
}

.search-header {
    border-bottom: 1px solid #d2d2d2;

    .input-wrap {
        height: 29px;
        padding: 0 0 0 28px;
        background: url(../assets/images/sprite_v2.gif);
        background-position: 0 -320px;
        margin-left: 10px;
    }
    .database-selector-tip {
        width: 35px;
        height: 29px;
        margin-left: -29px;
        background-image: url(../assets/images/sprite_v2.gif);
        background-position: -120px -360px;
        cursor: pointer;
    }
    .database-selector-all {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAj1JREFUOBGVkz1oU1EUx/NeXkwzBPygOFkQ7ZAPxU0k4CBG6FySkIiSpcWKgxQc3AJOSoltEfEjQ5TQfG0KFq2opeDQyaFG5zq4SAdJQgn58Pd/5paHmxcO53/+53/Ovfe8dy3fPyubzcb6/f4cdBKbGqd38RuO4zyvVqtfx5zrLBOkUqlDlmUVR6PRVfwjFYC/hcPh/Xa7fQV8Hv42/DPwYrPZ7KnWbaBi8DqWCAaDJyuVyk8ltdLp9CoFt4ADzBHH+oDNqImtiM4PcZfwTVNMkZXL5abhdGRtZIqBrrYoYGUymfhwOHxl23YhEomsFQqFPnM4PhgMKjRJ0MDCT0jsXdBDv99/1iGpgRXr9fpLI6D4DFinWsA2Ed/Hz6K9iHcX2NawdYVkIBB4PeZ9zOMpyXfYMqc6gj9HA+kuGI3HJ3WCE3TSkO4wsATx/FgwzdW2wXv4o54iL5xyB0PRd7HsGOD4XoGwW8wp3qIroQnjJ7Eb5CZtEj8gt6Ss1WqfiJ8A9xR7FwWXie+FQqFqo9F4AL6L7dokdN9ZIya5wPc9RiP9iSPD4/1YoVwu74tj08O4DbxdosFcPp8XcbBo9J7gywHh823TuK4Y7QRzualf2+bz7bDbm263W/KIDdwxgI2WDO50OivUbOldmCEuklznK6xxmnl2akuM6DPxNWEafNTObLQMdxqbEa97+Vqt1iAWi9Uo0I/yOB6Ph6LR6G8e0mav1/sFd4qCEfgFGn2x63oH+L+PScCs/33OfwBAyBjh4pskxgAAAABJRU5ErkJggg==) no-repeat 50%;
        display: inline-block;
        width: 20px;
        height: 20px;
    }
    .search-input {
        border: none;
        background: none;
        width: 100%;
        font-size: 14px;
        padding: 6px;
        box-sizing: border-box;
        -moz-sizing: border-box;
        -webkit-sizing: border-box;
        -ms-sizing: border-box;
    }
    .btn-wrap {
        position: relative;
        .btn-search {
            float: left;
            background: url(../assets/images/sprite_v2.gif);
            width: 63px;
            height: 29px;
            background-position: -180px -360px;
            cursor: pointer;
        }
        .btn-search:hover {
            background-position: -180px -400px;
        }
    }
    .btn-search-menu {
        float: left;
        background: url(../assets/images/sprite_v2.gif);
        width: 28px;
        height: 29px;
        background-position: -260px -360px;
        cursor: pointer;
    }
    .btn-search-menu:hover {
        background-position: -260px -400px;
    }
    .search-menu {
        width: 142px;
        padding: 4px 0;
        background: #fff;
        border: 1px solid #d2d2d2;
        box-shadow: 0 2px 6px rgba(0, 0, 0, .2);
        a {
            display: block;
            padding: 3px 10px;
            color: #555;
        }
    }
    .right-side {
        margin-left: 32px;
        .queue-monitor {
            border: 1px solid #d2d2d2;
            border-right: 0;
            border-bottom: 0;
            a.btn-monitor {
                margin: 8px;
                font-size: 14px;
                color: #555;
                height: 16px;
                cursor: pointer;
                display: inline-block;
                vertical-align: middle;
                .i16-gray,
                .i16-light-gray {
                    background-image: url(../assets/images/icons_light_gray.png);
                    line-height: 16px;
                    width: 16px;
                    height: 16px;
                }
                .ico-hourglass {
                    background-position: -180px -80px;
                    display: inline-block;
                }
            }
        }
        .user-pannel {
            position: relative;
            .user-name {
                padding: 7px 10px 7px 15px;
                font-size: 14px;
                color: #555;
                height: 18px;
                border: 1px solid #d2d2d2;
                height: 100%;
                display: block;
                border-bottom: 0;
                .ico-corner-down {
                    background-position: -60px -20px;
                }
                .i12 {
                    background-image: url(data:image/png;base64,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);
                    line-height: 12px;
                    width: 12px;
                    height: 12px;
                    display: inline-block;
                }
                .user-email {
                    max-width: 150px;
                    display: inline-block;
                }
            }
            .user-menu {
                background: #fff;
                border: 1px solid #d2d2d2;
                box-shadow: 0 2px 6px rgba(0, 0, 0, .2);
                width: 100%;
                .feature-list li a {
                    padding-right: 50px;
                }
                a {
                    color: #555;
                    display: block;
                    padding: 5px 8px;
                }
            }
        }
    }
    .ico-uservoice {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAYCAYAAAARfGZ1AAADGUlEQVRIDaVVTUhUURT+3ptnqZk648ashRW1aBFBCpUQYSoW2YAVUlBU0M/GVJydCRMZLXKwgqAkwk0GFokUjSmCBFrUFNWmRVC40BahkoZOjjOv74w+mxnvG5UOw9xzz/nOd+8999zzNNjIPi+MnUXYr5k4BA1FhK2j7jI1jGnAiGlikPrz9wPo6/diVkVD3GLx9OIEibwk3bLYm2Ax8ZWLeJtL0Z7gYXiMnO3CWlca2jQNlTHmZak8ydOxaZx+4MakFbBAfr4XWZnAKxq2W86VjibweQLY21qKXxKry5/kl8RP/odYeCReeI51wCHzKHnhHlygo0QMKuGOusNhFHM72cEQsiIRFMDEfdr5ixfhyc/GRbFq1S+QmZqCb9Rz4mFzs4iJBl8ZrnO2iMjzEk2ajgZF3OjoFDYaqw0cplNJHA3SkCvEdT0oMDS4udgwF7sntj9h3E1Vk+ewMNwGQUkrg3mrZmnm8bhuYg2dSl03PrSU462hY4o2O6k0WHbb7LyWnXxHLJ1ja8sbBGSu6zgZY49ThddgItczeFnClHiYEp+A63twnKdotgsUXp3XFLEDxNlN9FrEnh40cmcP6Ze0KoUvPCSlOKL0Jhi5E6koyCtmQV/haZMemPghnTv4lMCjnJKpuNaPfGcaqqjzISYXYr4Y4Qg6HTqqkkPpZRNLMfB9Sdw8gL3mkf57Bs+o/FgqiMe8zIeRydfZuCSWfIHX8OutFaxVTfnK4jjGpnBbOt54ELfiHIoJU1LTzx4f7S3sxW2smscK3ILJlY5LcpnOVNQsGFUK03GjbI4rSk6M+XMYp7hAnwovNu6mKScdE3w4V+0wTF1XcBZnLH+0NcrkYxdmV21Ge94GpJNpN8n4W77w3gYCgzjYcQ4hK0pJ4PHzg+GAl2VaQaDtQ7FIoiNPzXSUxNqU5BagthPZRgbKmK4dtOVyMSd3aHIcZysYYk5reT7nPD4YCmPTzfJ/lZeU3FrEbqz3o1BzoJuLuQTDnPdPT+LonUqMyty6UNFXLL4DeDcD7OJpOsk8zn6yNS0D1/gRWSNkfwGSHeGgrunuYQAAAABJRU5ErkJggg==) no-repeat 50% 50%;
        width: 23px;
        height: 24px;
        padding: 5px 0;
        display: inline-block;
        vertical-align: middle;
        text-indent: -9999px;
        overflow: hidden;
        margin: 0 25px 0 15px;
        font-size: 12px;
    }
}

.search-body {
    margin: 10px 0px 0px 10px;
    .body-left {
        width: 234px;
        .condition-switch {
            .condition-title {
                border: 1px solid #d2d2d2;
                height: 26px;
                width: 45px;
                background-color: #f5f5f5; //display: inline-block;
                box-sizing: border-box;
                font-size: 12px;
                color: #555;
                font-weight: 700;
                border-radius: 3px 0 0 3px;
                cursor: pointer;
            }
            #filter_text {
                border: 1px solid #d2d2d2;
                padding: 4px;
                background: #fff;
                border-left: none;
            }
            .condition-keywords {
                box-sizing: border-box;
                border: 1px solid #d2d2d2;
                height: 26px;
                width: 189px;
                border-radius: 0 3px 3px 0;
                border-left: transparent;
                font-size: 12px;
                color: #555;
                overflow: auto;
            }
        }
        .tab-wrap {
            margin-top: 20px;
            .tab-content {
                max-height: calc(100vh - 158px);
                overflow-y: auto;
                overflow-x: hidden;
            }
            .selected-box {
                position: relative;
                font-size: 12px;
                padding: 10px;
                margin: 8px 8px 8px 0px;
                color: rgb(255, 148, 129);
                border: solid 1px rgb(255, 148, 129);
                border-radius: 5px;
                .box-close {
                    position: absolute;
                    right: 5px;
                    top: 5px;
                    cursor: pointer;
                    i {
                        font-size: 16px;
                    }
                }
                .close-item {
                    display: none;
                }
                .selected-item {
                    padding: 2px 5px;
                }
                .selected-item:hover {
                    background-color: rgb(255, 244, 242);
                    cursor: pointer;
                    .close-item {
                        display: inherit;
                    }
                }
            }
        }
    }
    .body-right {
        margin-left: 15px;
        .search-toolbar {
            border-bottom: 1px solid #f0f0f0;
            padding-bottom: 6px;
            .btn-26 {
                background: #fff url(data:image/gif;base64,R0lGODlhBwAgAMQAAAAAAP////7+/v39/fz8/Pv7+/r6+vn5+fj4+Pf39/b29vX19fT09PPz8/Ly8vHx8fDw8P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABEALAAAAAAHACAAAAVEYCCOJCmcaKquQ+u+LyHPNF3ceJ4bfO/7h6BwOEQYj4iEcslkKp7QaHRBrVqtjKx2u214v2CwY0wulx/otHrNhrjfkBAAOw==) bottom repeat-x;
                line-height: 26px;
                height: 26px;
                padding: 2px 10px;
                vertical-align: middle;
                border: 1px solid #aaa;
                color: #000;
                margin: 0;
                border-radius: 2px;
                box-shadow: 0 1px 0 rgba(0, 0, 0, .1);
                cursor: pointer;
            }
            .i16,
            .i16-black {
                display: inline-block;
                line-height: 16px;
                width: 16px;
                height: 16px;
                background-image: url(../assets/images/icons_green.png);
            }
            .ico-grid {
                background-position: -20px 0;
            }
            .ico-list2 {
                background-position: -60px -160px;
            }
            .ico-book {
                background-position: -60px -40px;
            }
            .ico-4square {
                background-position: -60px -320px;
            }
            .ico-chart-bar {
                background-position: -60px -80px;
            }
            .btn-26.selected {
                background-color: $patsnap-color;
                background-image: none;
                color: #fff;
                border: 1px solid #480;
            }
            .btn-26.selected .i16 {
                background-image: url(../assets/images/icons_white.png);
            }
            .search-result-tool {
                margin-left: 15px;
                a {
                    line-height: 26px;
                    height: 26px;
                    padding: 2px 5px;
                    vertical-align: middle;
                    color: #000;
                    margin: 0;
                    border: 1px solid #fff;
                    color: #555;
                    font-size: 12px;
                }
                a .i16 {
                    background-image: url(../assets/images/icons_blue.png);
                    margin-right: 3px;
                }
                .ico-favo {
                    background-position: -120px -180px;
                }
                .ico-download,
                .ico-export {
                    background-position: -180px -120px;
                }
                .ico-save {
                    background-position: -40px -240px;
                }
                .ico-calendar {
                    background-position: -120px -40px;
                }
                .ico-landscape {
                    background-position: -100px -340px;
                }
                .ico-insights {
                    background-position: 0 -419px;
                }
                .ico-cog {
                    background-position: -140px -160px;
                }
                a:hover {
                    background: #fff url(data:image/gif;base64,R0lGODlhBwAgAMQAAAAAAP////7+/v39/fz8/Pv7+/r6+vn5+fj4+Pf39/b29vX19fT09PPz8/Ly8vHx8fDw8P///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAABEALAAAAAAHACAAAAVEYCCOJCmcaKquQ+u+LyHPNF3ceJ4bfO/7h6BwOEQYj4iEcslkKp7QaHRBrVqtjKx2u214v2CwY0wulx/otHrNhrjfkBAAOw==) bottom repeat-x;
                    border: 1px solid #aaa;
                    color: #609900;
                    border-radius: 2px;
                    box-shadow: 0 1px 0 rgba(0, 0, 0, .1);
                    .i16 {
                        background-image: url(../assets/images/icons_green.png);
                    }
                }
                .ico-cog {
                    background-image: url(../assets/images/icons_green.png)!important;
                }
                .btn-field-set.green {
                    border: 1px solid #aaa;
                    border-radius: 2px 2px 2px 2px;
                    padding: 2px 10px;
                }
            }
        }
        .zk-list {
            max-height: calc(100vh - 158px);
            overflow-y: auto;
            overflow-x: hidden;
        }
        .list-index {
            width: 40px;
            .dot-status {
                width: 8px;
                height: 8px;
                background-color: #4e92df;
                display: inline-block;
                border-radius: 50%;
            }
        }
        .item-column a {
            text-decoration: underline;
            cursor: pointer;
            color: #06c;
        }
        .item-column a.more {
            background: #f5f5f5;
            padding: 0 4px;
            border-radius: 3px;
            color: #06c;
            text-decoration: none;
        }
        .result-total {
            color: #777;
            font-size: 12px;
            height: 45px;
            line-height: 45px;
        }
    }
}

.select-patent-component {
    position: fixed;
    width: 272px;
    right: 50px;
    bottom: 50px;
    box-shadow: 0 1px 2px 0 hsla(0, 0%, 57%, .5);
    background-color: #fff;
}
</style>