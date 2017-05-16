import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './action';
import getters from './getters';

Vue.use(Vuex);

const state = {
    isLogin: true, //是否登录
    redirectUrl: null, //登录后跳转url
    userInfo: null //用户信息
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
})