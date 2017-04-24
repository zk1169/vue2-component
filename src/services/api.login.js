//import fetch from '../config/fetch';

import fetch from '../config/fetch-rx';

/**
 * 登录
 */
// var login = (data) => {
//     return fetch('POST', '/api/auth/form', data).map(
//         (res) => {
//             return res;
//         }
//     );
// };

let login = (data) => {
    return fetch('POST', '/api/steel/login', data).map(
        (res) => {
            return res;
        }
    );
};

let register = (data) => {
    return fetch('POST', '/api/steel/register', data).map(
        (res) => {
            return res;
        }
    );
};

let search = (data) => {
    return fetch('POST', '/api/steel/search', data).map(
        (res) => {
            return res;
        }
    );
};

export { 
    login,
    register,
    search
 };