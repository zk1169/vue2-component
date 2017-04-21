import {
	GET_USERINFO,
	RECORD_USERINFO,
} from './mutation-types.js'

import {
	setStore,
	getStore,
} from '../config/mUtils'

export default {
	// 记录用户信息
	[RECORD_USERINFO](state, info) {
		state.userInfo = info;
		state.isLogin = true;
		let validity = 30;
		let now = new Date();
		now.setTime(now.getTime() + validity * 24 * 60 * 60 * 1000);
		document.cookie = "USERID=" + info.user_id + ";expires=" + now.toGMTString();
		document.cookie = "SID=huRyTRd9QLij7NkbpHJoj3PQrx1eRiO6bAiw" + ";expires=" + now.toGMTString();
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
			state.userInfo = {...info};
			let validity = 30;
			let now = new Date();
			now.setTime(now.getTime() + validity * 24 * 60 * 60 * 1000);
			document.cookie = "USERID=" + info.user_id + ";expires=" + now.toGMTString();
			document.cookie = "SID=huRyTRd9QLij7NkbpHJoj3PQrx1eRiO6bAiw" + ";expires=" + now.toGMTString();
		} else {
			state.userInfo = null;
		}
	},
	
}
