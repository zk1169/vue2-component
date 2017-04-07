<template>
    <div id="login-component">
        <form class="clearfix login-content">
            <legend class="form-title legend">登录</legend>
            <div class="form-group">
                <div class="input-group">
                    <span class="input-group-addon">
                        <i class="fa fa-user" style="width:14px;"></i>
                    </span>
                    <input id="userName" type="text" class="form-control mw-fs-16" name="userName" v-model="userName" />
                </div>
            </div>
            <div class="form-group">
                <div class="input-group">
                    <span class="input-group-addon">
                        <i class="fa fa-key"></i>
                    </span>
                    <input id="password" type="password" class="form-control mw-fs-16" name="password" v-model="password" />
                </div>
            </div>
            <div>
                <div class="pull-left">
                    <checkbox-component v-model="rememberMe" :label="'保持登录'"></checkbox-component>
                </div>
                <div class="mw-busy-wrap pull-right">
                    <button type="button" class="btn btn-primary" @click="login" name="btnLogin">
                            <i class="fa fa-sign-in"></i>
                            <span>登录</span>
                        </button>
                </div>
            </div>
        </form>
        <div class="session-links">
            <a href="" class="pull-left">注册</a>
            <a href="" class="pull-right">忘记密码</a>
        </div>
    </div>
</template>

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex';
    import {
        login
    } from '../services/api.login';
    import CheckboxComponent from '../components/common/checkbox.component';
    
    export default {
        data() {
            return {
                userInfo: null,
                userName: null,
                password: null,
                rememberMe:true
            }
        },
        components:{
            CheckboxComponent
        },
        created() {
            console.log('created');
        },
        async mounted(){
            // this.userName = '2057';
            // this.password = '111111';
            // await this.login();
            // console.log('login success');
        },
        updated(){
            //console.log('updated');
        },
        methods: {
            ...mapMutations([
                'RECORD_USERINFO',
            ]),
            async login() {
                let data = {
                    username: this.userName,
                    password: this.base64encode(this.password),
                    rememberMe: true
                };
                //手机号登录
                this.$root.$emit('show-loading',true);
                this.$root.$emit('start-loading-bar');
                let loginResponse = await login(data);
                this.$root.$emit('show-loading',false);
                this.$root.$emit('complete-loading-bar');
                this.userInfo = {
                    userId: loginResponse.data
                };
                this.$router.push('/dashboard/home');
                console.log(this.userInfo);
                this.RECORD_USERINFO(this.userInfo);
            },
            base64encode(str) {
                let base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                let out, i, len;　　
                let c1, c2, c3;　　
                len = str.length;　　
                i = 0;　　
                out = "";　　
                while (i < len) {
                    c1 = str.charCodeAt(i++) & 0xff;
                    if (i == len) {　　
                        out += base64EncodeChars.charAt(c1 >> 2);　　
                        out += base64EncodeChars.charAt((c1 & 0x3) << 4);　　
                        out += "==";　　
                        break;
                    }
                    c2 = str.charCodeAt(i++);
                    if (i == len) {　　
                        out += base64EncodeChars.charAt(c1 >> 2);　　
                        out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));　　
                        out += base64EncodeChars.charAt((c2 & 0xF) << 2);　　
                        out += "=";　　
                        break;
                    }
                    c3 = str.charCodeAt(i++);
                    out += base64EncodeChars.charAt(c1 >> 2);
                    out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                    out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
                    out += base64EncodeChars.charAt(c3 & 0x3F);　　
                }　　
                return out;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    #login-component {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 30%;
        min-width: 300px;
        border-radius: 2px;
        opacity: 0.88;
        transform: translate(-50%, -60%);
        -webkit-transform: translate(-50%, -60%);
        .login-content {
            background-color: #fff;
            opacity: 0.98;
            padding: 20px 30px;
        }
        .form-title {
            border-bottom: none;
            text-align: center;
            display: block;
            width: 100%;
            padding: 0;
            margin-bottom: 20px;
            font-size: 21px;
            line-height: inherit;
            color: #333;
            border: 0;
        }
        .form-control {
            font-weight: bolder;
        }
        .button-block {
            width: 100%;
        }
        .login-action {
            height: 41px;
            line-height: 41px;
        }
        .session-links {
            margin-top: 10px;
            text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
            a {
                color: #fff;
            }
        }
    }
</style>
