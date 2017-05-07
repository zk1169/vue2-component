<template>
    <div v-title="'我的好友'">
        <!--<div class="card">
            <div layout="row" class="search-wrap">
                <input flex type="text" placeholder="搜索好友" v-model="searchText" class="input-search">
                <button class="button-search" @click="searchClick()">搜索</button>
            </div>
            <mt-search v-model="searchText" cancel-text="取消" placeholder="搜索">
                <mt-cell v-for="item in searchList" :title="item.phone" :value="item.id">
                </mt-cell>
            </mt-search>
        </div>-->

        <!--<div class="card">
            <mt-cell title="+添加好友" is-link></mt-cell>
        </div>-->
        <div class="card margin-top">
            <ul>
                <li v-for="item in itemList" class="list-item-wrap">
                    <div class="padding">
                        {{item.phone}}
                    </div>
                    <div class="divider"></div>
                </li>
                <li v-if="itemList.length==0" class="list-item-wrap list-item-no-more text-center">
                    <div class="padding-2 grey">没有好友噢，快去关注好友吧...</div>
                    <div class="divider"></div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {
        getFollowUser
    } from '../../services/api.login';
    
    export default {
        data() {
            return {
                itemList: []
            }
        },
        created() {
            this.$parent.tabIndex = 3;
        },
        mounted() {
            this.$indicator.open();
            getFollowUser().subscribe(
                (res) => {
                    this.$indicator.close();
                    this.itemList = res;
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
        methods: {
            searchClick() {
    
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import '../../styles/variables';
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
</style>
