// import {
// 	getUser,
// 	getAddressList
// } from '../service/getData'
import {
	GET_USERINFO
} from './mutation-types.js'



export default {

	getUserInfo({
		commit,
		state
	}) {
		//let res = await getUser();
		commit(GET_USERINFO, 'cloud');
	},
	// 	async getUserInfo({
	// 	commit,
	// 	state
	// }) {
	// 	let res = await getUser();
	// 	commit(GET_USERINFO, res)
	// },
}