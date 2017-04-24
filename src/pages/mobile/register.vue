<template>
    <div v-title="'注册'" class="m-register-component">
        <div>
            <mt-field placeholder="手机号" type="tel" v-model="phone"></mt-field>
            <mt-field placeholder="密码" type="text" v-model="pwd"></mt-field>
            <mt-field placeholder="短信验证码" type="text">
                <mt-button flex type="default">获取短信验证码</mt-button>
            </mt-field>
        </div>
        <br><br><br>
        <div layout="row" class="padding">
            <mt-button flex type="primary" @click="registerClick">注册</mt-button>
        </div>
    </div>
</template>

<script>
    import {
        mapState
    } from 'vuex';
    import headerTop from '../../components/m-header';
    import {
        register
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
            registerClick() {
                this.$indicator.open();
                register({
                        phone: this.phone,
                        pwd: this.pwd,
                    })
                    .subscribe(
                        (res) => {
                            this.$indicator.close();
                            this.$toast({
                                message: '注册成功',
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
    .m-register-component {}
</style>
