<template>
    <div v-title="'我的'" class="my-index-component">
        <img src="../../assets/images/sign-bg.jpg" style="width:100%;display:block;" alt="">
        <div class="my-info text-center">{{userInfo.phone}}</div>
        <div>
            <mt-cell title="我的好友" to="/my-friend" is-link></mt-cell>
            <mt-cell title="我的发布" is-link></mt-cell>
        </div>
        <br><br>
        <div layout="row" class="padding">
            <mt-button flex type="primary" @click="loginOutClick">退出登录</mt-button>
        </div>
    </div>
</template>

<script>
    import {
        mapState,
        mapMutations
    } from 'vuex';
    
    export default {
        data() {
            return {
                phone: null,
                pwd: null
            }
        },
        components: {
            
        },
        created() {
            this.$parent.tabIndex = 3;
        },
        methods: {
            ...mapMutations([
                'RECORD_USERINFO',
            ]),
            loginOutClick(){
                this.RECORD_USERINFO(null);
                this.$router.push('/login');
            }
        },
        computed: {
            ...mapState([
                'userInfo'
            ]),
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import '../../styles/variables';
    .my-index-component {
        .my-info{
            position:absolute;
            left:0px;
            top:0px;
            text-shadow: 0 1px 1px rgba(0,0,0,.5);
            color: #fff;
            width: 100%;
            margin-top: 50px;
        }
    }
</style>
