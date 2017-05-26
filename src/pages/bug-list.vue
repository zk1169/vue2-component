<template>
    <div class="search-component">
        <div class="search-header" layout="row" layout-align="start center">
            <div flex="60" class="input-wrap" layout="row">
                <div class="database-selector-tip" layout="row" layout-align="center center">
                    <div class="database-selector-all"></div>
                </div>
                <div class="search-field" flex>
                    <input id="q" autocomplete="off" type="text" class="search-input" v-model="searchText" @keyup.enter="queryClick()">
                </div>
                <div class="btn-wrap" layout="row">
                    <a class="btn-search" @click="queryClick"></a>
                </div>
            </div>
        </div>
        <div class="search-body" layout="row">
            <div class="body-right" flex>
                <div>
                    <!--<zk-list :headers="catHeaderList" :list="catList" :hasCheckbox="1" :hasIndex="1"></zk-list>-->
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
                        <zk-list-item v-for="(item,index) in listData.list" :key="item.PATENT_ID" :class="{'checked':item.checked}">
                            <div layout="row" @click="listItemClick(item)">
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
    </div>
</template>

<script>
import Vue from 'vue';
import { mapState } from 'vuex';
import { patentQuery } from '../services/api';
import ZkList from '../components/list';
import ZkListHeader from '../components/list-header';
import ZkListItem from '../components/list-item';
import ZkCheckbox from '../components/checkbox';

export default {
    data() {
        return {
            loading: true,
            listData: {},
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
        ZkListItem,
        ZkCheckbox
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
            return patentQuery().subscribe(
                (res) => {
                    this.listData = {
                        list: res.patentData.data.PATENT_DATA,
                        headers: res.patentHeadersData
                    };
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
            let url = "#/dashboard/bug-list?";
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
    padding-left: 15px;

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
}

.search-body {
    margin: 10px 0px 0px 10px;
    .body-right {
        margin-left: 15px;
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