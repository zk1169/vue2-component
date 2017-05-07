<template>
    <header id='head_top' layout="row" layout-align="start center">
        <div flex="20" class="text-left">
            <div class="head_goback" v-if="goBack" @click="$router.go(-1)">
                <slot name="left">
                    <i class="fa fa-angle-left"></i>
                </slot>
            </div>
        </div>
        <div flex class="text-overflow text-center">
            <span v-if="title">{{title}}</span>
        </div>
        <div flex="20" class="right-wrap text-center">
            <slot name="right"></slot>
        </div>
    </header>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    export default {
        name:'header-top',
        props: ['signinUp', 'title', 'goBack'],
    	data(){
            return{

            }
        },
        mounted(){
            //获取用户信息
            this.getUserInfo();
        },
        mounted(){

        },
        computed: {
            ...mapState([
                'userInfo'
            ]),
        },
        methods: {
            ...mapActions([
                'getUserInfo'
            ]),
        },

    }

</script>

<style lang="scss" scoped>
    @import '../styles/variables';
    $headerHeight:50px;
    #head_top{
        height:$headerHeight;
        background-color:$m-primary-color;
        color: #fff;
        .head_goback{
            margin-left:20px;
            //font-size: 26px;
            //padding:10px;
        }
        .title{
            font-size:16px;
        }
        .offset-16{
            margin-left:-16px;
        }
        .right-wrap{
            float:right;
            color:#fff;
        }
    }
</style>
