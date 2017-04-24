<template>
    <div v-title="'登录'" class="m-login-component">
        <!--<header-top title="登录" :goBack="true"></header-top>-->
        <div>
            <mt-field placeholder="手机号" type="tel" v-model="phone"></mt-field>
            <mt-field placeholder="密码" type="text" v-model="pwd"></mt-field>
        </div>
        <br><br>
        <div layout="row" class="padding">
            <mt-button flex type="primary" @click="loginClick">登录</mt-button>
        </div>
        <div layout="row" layout-align="space-between center" class="padding">
            <router-link class="block" to="/register">注册</router-link>
            <!--<router-link class="block" to="/register">忘记密码</router-link>-->
        </div>
    </div>
</template>

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex';
    import headerTop from '../../components/m-header';
    import {
        login
    } from '../../services/api.login';
    
    export default {
        data() {
            return {
                phone: null,
                pwd: null
            }
        },
        components: {
            headerTop
        },
        created() {
            this.$parent.tabIndex = 3;
        },
        methods: {
            ...mapMutations([
                'RECORD_USERINFO',
            ]),
            loginClick() {
                this.$indicator.open();
                login({
                        phone: this.phone,
                        pwd: this.pwd,
                        rememberMe: true,
                    })
                    .subscribe(
                        (res) => {
                            this.$indicator.close();
                            this.RECORD_USERINFO(res);
                            this.$router.push('/index');
                        },
                        (error) => {
                            this.$indicator.close();
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
                'isLogin', 'userInfo'
            ]),
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import '../../styles/variables';
    .m-login-component {}
</style>
