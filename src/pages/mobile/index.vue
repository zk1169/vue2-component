<template>
    <div v-title="'发现'">
        <div class="card">
            <div layout="row" class="search-wrap">
                <input flex type="text" placeholder="请输入您想搜索的钢材" v-model="searchText" class="input-search">
                <button class="button-search" @click="searchClick">搜索</button>
            </div>
    
        </div>
        <div class="card margin-top">
            <div v-for="item in searchList" class="product-wrap">
                <div layout="row" class="padding-v">
                    <div flex="40" layout="row" layout-align="center center" class="padding-h">
                        <span>{{item.name}}</span>
                    </div>
                    <div flex="40">
                        <div>
                            <label class="product-label">规格</label>
                            <span>{{item.format}}</span>
                        </div>
                        <div>
                            <label class="product-label">材质</label>
                            <span>{{item.material}}</span>
                        </div>
                        <div>
                            <label class="product-label">钢厂</label>
                            <span>{{item.fromFactory}}</span>
                        </div>
                        <div>
                            <label class="product-label">地区</label>
                            <span>{{item.fromArea}}</span>
                        </div>
                        <div>
                            <label class="product-label">数量</label>
                            <span>{{item.count}}</span>
                        </div>
                    </div>
                    <div flex="20" layout="row" layout-align="center center">
                        <span>{{item.price}}</span>
                    </div>
                </div>
                <div class="divider"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        mapState
    } from 'vuex';
    import headerTop from '../../components/m-header';
    import {
        login,
        search
    } from '../../services/api.login';
    
    export default {
        data() {
            return {
                searchText: '',
                searchList: null
            }
        },
        components: {
            headerTop
        },
        created() {
            this.$parent.tabIndex = 0;
        },
        methods: {
            searchClick() {
                search({
                        keyWord: this.searchText
                    })
                    .subscribe(
                        (res) => {
                            //handle 
                            this.searchList = res.rows;
                        },
                        (error) => {
                            this.$toast({
                                title: 'error',
                                message: error.message,
                                type: 'error'
                            });
                        }
                    )
            },
            btnClick() {
                this.$toast({
                    message: 'Upload Complete',
                    position: 'bottom',
                    duration: 5000
                });
            },
            asyncClick() {
                return login({
                        username: '20571',
                        password: 'MTExMTEx',
                        rememberMe: true,
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
                'login', 'userInfo'
            ]),
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import '../../styles/variables';
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
    .product-wrap{
        .product-label{
            color:$label-color;
            font-size:12px;
        }
    }
</style>
