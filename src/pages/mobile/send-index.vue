<template>
    <div v-title="'分享'">
        <div class="card">
            <ul>
                <li v-for="item in itemList" class="list-item-wrap">
                    <div class="padding">
                        <div layout="row" layout-align="space-between center">
                            <div>
                                <strong>{{item.phone}}</strong> &nbsp;&nbsp;
                                <span v-if="item.isFriend=='0'" class="green" @click="followClick(item.userId)">+关注</span>
                            </div>
                            <div class="grey fs-12 text-right">{{item.createTime}}</div>
                        </div>
                        <div class="grey fs-14 margin-top">{{item.content}}</div>
                        <div>
                            <img style="width:100%;" :src="'/api/'+item.images"></img>
                        </div>
                    </div>
                    <div class="divider"></div>
                </li>
                <li v-if="itemList.length>0" class="list-item-wrap list-item-no-more text-center">
                    <div class="margin-2 grey">没有更多了...</div>
                    <div class="divider"></div>
                </li>
            </ul>
        </div>
        <div class="add-button text-center fs-26" @click="menuClick">
            +
        </div>
        <mt-actionsheet :actions="actions" v-model="sheetVisible">
        </mt-actionsheet>
    </div>
</template>

<script>
    import {
        mapState
    } from 'vuex';
    import {
        getBlogList
    } from '../../services/api.product';
    import {
        followUser
    } from '../../services/api.login';
    
    export default {
        data() {
            return {
                itemList: [],
                sheetVisible: false,
                actions: [{
                        name: '发布消息',
                        method: () => {
                            this.$router.push('/send-message');
                        }
                    },
                    {
                        name: '发布产品',
                        method: () => {
                            this.$router.push('/send-product');
                        }
                    }
                ]
            }
        },
        created() {
            this.$parent.tabIndex = 2;
        },
        mounted() {
            this.$indicator.open();
            getBlogList().subscribe(
                (res) => {
                    this.$indicator.close();
                    this.itemList = res.rows;
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
            menuClick() {
                this.sheetVisible = !this.sheetVisible;
            },
            followClick(userId) {
                followUser(userId).subscribe(
                    (res) => {
                        this.$indicator.close();
                        this.$toast({
                            message: '关注成功',
                            position: 'bottom',
                            duration: 5000
                        });
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
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import '../../styles/variables';
    .add-button {
        position: fixed;
        right: 5px;
        bottom: 60px;
        line-height: 56px;
        height: 56px;
        width: 56px;
        border-radius: 50%;
        color: rgb(255, 255, 255);
        background-color: rgb(0, 0, 0);
    }
</style>
