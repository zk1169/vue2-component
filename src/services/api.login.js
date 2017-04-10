//import fetch from '../config/fetch';

import fetch from '../config/fetch-rx';

/**
 * 登录
 */
var login = (data) => {
    return fetch('POST', '/api/auth/form', data).map(
        (res) => {
            return res;
        }
    );
};

export { login };