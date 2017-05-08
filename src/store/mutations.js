import {
    GET_USERINFO,
    RECORD_USERINFO,
    RECORD_REDIRECT_URL,
	AUTO_LOGIN,
} from './mutation-types.js';

export default {
    // 记录用户信息
    [RECORD_REDIRECT_URL](state, info) {
        state.redirectUrl = info;
    },

    // 自动登录
    [AUTO_LOGIN](state, info) {
        let userInfo = window.localStorage.getItem('userInfo');
        if (userInfo) {
            state.userInfo = JSON.parse(userInfo);
			state.isLogin = true;
        }
    },

    // 记录用户信息
    [RECORD_USERINFO](state, info) {
        state.userInfo = info;
        if (state.userInfo) {
            state.isLogin = true;
            window.localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
        } else {
            state.isLogin = false;
            window.localStorage.removeItem('userInfo');
        }

        // let validity = 30;
        // let now = new Date();
        // now.setTime(now.getTime() + validity * 24 * 60 * 60 * 1000);
        // document.cookie = "USERID=" + info.user_id + ";expires=" + now.toGMTString();
        // document.cookie = "SID=huRyTRd9QLij7NkbpHJoj3PQrx1eRiO6bAiw" + ";expires=" + now.toGMTString();
    },

    //获取用户信息存入vuex
    [GET_USERINFO](state, info) {
        if (state.userInfo && (state.userInfo.username !== info.username)) {
            return;
        };
        if (!state.isLogin) {
            return
        }
        if (!info.message) {
            state.userInfo = {...info };
            //let validity = 30;
            //let now = new Date();
            //now.setTime(now.getTime() + validity * 24 * 60 * 60 * 1000);
            //document.cookie = "USERID=" + info.user_id + ";expires=" + now.toGMTString();
            //document.cookie = "SID=huRyTRd9QLij7NkbpHJoj3PQrx1eRiO6bAiw" + ";expires=" + now.toGMTString();
        } else {
            state.userInfo = null;
        }
    },

}