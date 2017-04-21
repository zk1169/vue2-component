<template>
    <div>
        <header-top title="首页"></header-top>
        <div class="card">
            <div layout="row" class="search-wrap">
                <input flex type="text" placeholder="请输入您想搜索的钢材" v-model="searchText" class="input-search">
                <button class="button-search">搜索</button>
            </div>
            <div class="divider"></div>
            <br><br>
        </div>
    </div>
</template>

<script>
    import {
        mapState
    } from 'vuex';
    import headerTop from '../../components/m-header';
    import {
        login
    } from '../../services/api.login';
    
    export default {
        data() {
            return {
                searchText: ''
            }
        },
        components: {
            headerTop
        },
        created() {},
        methods: {
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
    }
    
    .search-wrap {
        padding: 10px;
    }
    
    .button-search {
        background: $m-primary-color;
        border-radius: 10px;
        margin-left: -20px;
        padding: 5px 10px;
        color: #fff;
    }
</style>
