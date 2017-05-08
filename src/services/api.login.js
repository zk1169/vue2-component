//import fetch from '../config/fetch';

import fetch from '../config/fetch-rx';

/**
 * 登录
 */
var login = (data) => {
    return fetch('POST', '/api/steel/test', data).map(
        (res) => {
            return res;
        }
    );
};

// let login = (data) => {
//     return fetch('POST', '/api/steel/login', data).map(
//         (res) => {
//             return res;
//         }
//     );
// };

// let register = (data) => {
//     return fetch('POST', '/api/steel/register', data).map(
//         (res) => {
//             return res;
//         }
//     );
// };

// let followUser = (userId) => {
//     let data={
//         followUserId:userId
//     };
//     return fetch('POST', '/api/steel/followUser', data).map(
//         (res) => {
//             return res;
//         }
//     );
// };

// let getFollowUser = () => {
//     return fetch('GET', '/api/steel/getFollowUser').map(
//         (res) => {
//             return res;
//         }
//     );
// };



export { 
    login
 };