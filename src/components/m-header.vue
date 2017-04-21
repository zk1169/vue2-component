<template>
    <header id='head_top' layout="row" layout-align="start center">
        <div class="head_goback" v-if="goBack" @click="$router.go(-1)">
            <i class="fa fa-angle-left"></i>
        </div>
        <div flex class="text-overflow text-center" v-if="title">
            <span v-bind:class="[{'offset-16':goBack},'title']">{{title}}</span>
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
    #head_top{
        height:50px;
        background-color:$m-primary-color;
        color: #fff;
        .head_goback{
            font-size: 26px;
            padding:10px;
        }
        .title{
            font-size:16px;
        }
        .offset-16{
            margin-left:-16px;
        }
    }
</style>
