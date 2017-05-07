export default {
	isLogin: state => Boolean(state.isLogin),
	accessToken: (state) => {
		if(state.userInfo && state.userInfo.accessToken){
			return state.userInfo.accessToken;
		}else{
			return null;
		}
	},
}