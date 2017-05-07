<template>
    <div v-title="'发现'" v-bind:class="{'noScroll':showSearchHistory}">
        <div class="card">
            <div layout="row" class="search-wrap">
                <input flex type="text" placeholder="请输入您想搜索的钢材" v-model="searchText" class="input-search fs-18" v-on:focus="inputFocus(true)">
                <button class="button-search fs-18" @click="searchClick(null)">搜索</button>
            </div>
        </div>
        <div class="card margin-top">
            <div layout="row" class="padding">
                <div v-for="item in sortList" flex="25" class="text-center" @click="orderClick(item)">
                    <span>{{item.name}}</span>
                    <i v-if="item.desc===true" class="fa fa-caret-down"></i>
                    <i v-if="item.desc===false" class="fa fa-caret-up"></i>
                </div>
                <div flex class="text-center" @click="moreSearch()">
                    <span>筛选</span>
                    <i class="fa fa-filter"></i>
                </div>
            </div>
            <div class="divider"></div>
            <ul>
                <li v-for="item in searchList" class="product-wrap">
                    <div layout="row" class="padding" @click="itemClick(item.url)">
                        <div flex="60">
                            <div class="fs-14" style="font-weight: bold;">{{item.material}}</div>
                            <div class="product-label">{{item.format1}}</div>
                            <div class="product-label">{{item.name}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.fromArea}}</div>
                            <div class="price">
                                <span v-if="item.price>=0">¥{{item.price}}</span>
                                <span v-else>-</span>
                            </div>
                        </div>
                        <div flex="40" layout="column" layout-align="end end">
                            <div>{{item.count}}</div>
                            <div class="product-label">来自{{item.fromWeb}}</div>
                        </div>
                    </div>
                    <div class="divider"></div>
                </li>
                <li v-if="searchList.length>0" class="product-wrap product-no-more text-center">
                    <div class="margin-2">没有更多了...</div>
                    <div class="divider"></div>
                </li>
            </ul>
        </div>
        <div class="search-history card" v-if="showSearchHistory && searchHistoryList.length>0">
            <div v-for="item in searchHistoryList" @click="searchHistoryClick(item)">
                <mt-cell :title="item"></mt-cell>
            </div>
            <div layout="row" layout-align="end center" class="padding" @click="showSearchHistory=false">
                <span>取消</span>
            </div>
        </div>
        <mt-popup v-model="popupVisible" position="right" class="more-search">
            <div>
                <div layout="row" layout-align="start center" class="card search-header">
                    <div flex="15" class="text-center" @click="moreSearchBack">
                        <i class="fa fa-angle-left"></i>
                    </div>
                    <div flex class="text-center">筛选</div>
                    <div flex="15"></div>
                </div>
                <div @click="showProductClassComponent=true">
                    <mt-cell title="品种分类" is-link>
                        <span v-if="searchModel.type">{{searchModel.type.name}}</span>
                    </mt-cell>
                </div>
                <div class="search-foot" layout="row">
                    <div flex="50" class="btn text-center" @click="resetMoreSearch">重置</div>
                    <div flex="50" class="btn btn-ok text-center" @click="okMoreSearch">搜索</div>
                </div>
            </div>
            <div class="product-class-component-wrap" v-bind:class="{'show-product-class-component':showProductClassComponent}">
                <product-class-component v-on:onSelect="onSelect"></product-class-component>
            </div>
        </mt-popup>
    </div>
</template>

<script>
    import {
        mapState
    } from 'vuex';
    import {
        search
    } from '../../services/api.product';
    import type from '../../config/type';
    import productClassComponent from '../../m-components/product-class.component';
    
    export default {
        data() {
            return {
                searchText: '',
                searchList: [],
                category: null,
                popupVisible: false,
                searchHistoryList: [],
                showSearchHistory: false,
                showProductClassComponent: false,
                searchModel: {},
                sortList: [{
                        name: '品名',
                        field: 'name',
                        desc: null
                    },
                    {
                        name: '价格',
                        field: 'price',
                        desc: null
                    },
                    {
                        name: '规格',
                        field: 'format1',
                        desc: null
                    }
                ]
            }
        },
        created() {
            this.$parent.tabIndex = 0;
        },
        mounted() {
            let localSearch = window.localStorage.getItem('searchHistory');
            if (localSearch && localSearch.length > 0) {
                this.searchHistoryList = localSearch.split(',');
            }
            if (this.$route.params.code) {
                this.category = {
                    code: this.$route.params.code
                };
    
                for (let i = 0; i < type.length; i++) {
                    if (type[i].code === this.category.code) {
                        this.category.name = type[i].name;
                        this.searchClick();
                        return;
                    }
                    for (let j = 0; j < type[i].list.length; j++) {
                        if (type[i].list[j].code === this.category.code) {
                            this.category.name = type[i].list[j].name;
                            this.searchClick();
                            return;
                        }
                        for (let q = 0; q < type[i].list[j].list.length; q++) {
                            if (type[i].list[j].list[q].code === this.category.code) {
                                this.category.name = type[i].list[j].list[q].name;
                                this.searchClick();
                                return;
                            }
                        }
                    }
                }
            } else if (this.searchHistoryList && this.searchHistoryList.length > 0) {
                //this.searchText = this.searchHistoryList[0];
                this.searchClick(this.searchHistoryList[0]);
            }
        },
        components: {
            productClassComponent
        },
        methods: {
            searchClick(text) {
                this.sortList[1].desc = null;
                let data = { };
                if(this.category){
                    data.type = [this.category];
                }
                if(text){
                    data.keyWord = text;
                }else if (this.searchText) {
                    data.keyWord = this.searchText;
                    let localSearch = window.localStorage.getItem('searchHistory');
                    if (localSearch && localSearch.length > 0) {
                        localSearch = localSearch.split(',');
                        let searchIndex = localSearch.indexOf(this.searchText);
                        if (localSearch && localSearch.length > 0) {
                            if (searchIndex == -1) {
                                localSearch.unshift(this.searchText);
                            } else {
                                localSearch.splice(searchIndex, 1);
                                localSearch.unshift(this.searchText);
                            }
                        } else {
                            localSearch = [this.searchText];
                        }
                    } else {
                        localSearch = [this.searchText];
                    }
                    this.searchHistoryList = localSearch;
                    window.localStorage.setItem('searchHistory', localSearch.toString());
                }else{
                    data.keyWord = '';
                }
                this.showSearchHistory = false;
                this.$indicator.open();
                search(data)
                    .subscribe(
                        (res) => {
                            this.$indicator.close();
                            this.searchList = res.rows;
                            //this.orderClick(this.sortList[0]);
                        },
                        (error) => {
                            this.$indicator.close();
                            this.$toast({
                                message: error.message,
                                position: 'bottom',
                                duration: 5000
                            });
                        }
                    );
    
            },
            itemClick(url) {
                window.location.href = url;
            },
            orderClick(sortItem) {
                this.searchList.sort((a, b) => {
                    if (a[sortItem.field] > b[sortItem.field]) {
                        return sortItem.desc ? 1 : -1;
                    } else {
                        return sortItem.desc ? -1 : 1;
                    }
                });
                sortItem.desc = !sortItem.desc;
            },
            moreSearch() {
                this.popupVisible = true;
            },
            inputFocus(value) {
                this.showSearchHistory = true;
            },
            searchHistoryClick(text) {
                this.showSearchHistory = false;
                this.searchText = text;
                this.searchClick();
            },
            onSelect(item) {
                this.searchModel.type = item;
                this.showProductClassComponent = false;
            },
            moreSearchBack() {
                if (this.showProductClassComponent) {
                    this.showProductClassComponent = false;
                } else {
                    this.popupVisible = false;
                }
            },
            resetMoreSearch() {
                this.searchModel = {};
            },
            okMoreSearch() {
                if (this.searchModel.type) {
                    this.category = {
                        code: this.searchModel.type.code,
                        name: this.searchModel.type.name
                    };
                }
                this.popupVisible = false;
                this.searchClick();
            }
        },
        computed: {
            ...mapState([
                'userInfo'
            ]),
            // orderList:function(){
            //     return this.searchList.sort(this.orderField.field);
            // }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import '../../styles/variables';
    ul,
    ul li {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    
    .input-search {
        border-radius: 10px;
        padding: 5px 10px;
        background: #f5f5f5;
        height: 45px;
    }
    
    .search-wrap {
        padding: 10px;
    }
    
    .button-search {
        background: $m-primary-color;
        border-radius: 15px;
        margin-left: -20px;
        padding: 5px 20px;
        color: #fff;
    }
    
    .product-wrap {
        .product-label {
            color: $label-color;
            font-size: 12px;
        }
    }
    
    .product-no-more {
        color: $label-color;
    }
    
    .more-search {
        height: 100%;
        width: 85%;
        .search-header {
            height: 40px;
        }
        .search-foot {
            border-top: 1px solid $border-color;
            position: absolute;
            bottom: 0px;
            left: 0px;
            height: 40px;
            width: 100%;
            .btn {
                height: 40px;
                line-height: 40px;
            }
            .btn-ok {
                color: #fff;
                background-color: $second-color;
            }
        }
        .product-class-component-wrap {
            height: calc(100% - 40px);
            overflow-y: auto;
            width: 90vw;
            background-color: $bg-color;
            position: absolute;
            top: 41px;
            left: 100%;
            transition: left 0.5s ease-out;
        }
        .show-product-class-component {
            left: 0;
        }
    }
    
    .search-history {
        position: fixed;
        top: 55px;
        left: 0px;
        width: 100%;
        height: calc(100% - 55px);
    }
    
    .noScroll {
        height: 90vh;
        overflow: hidden;
    }
</style>
