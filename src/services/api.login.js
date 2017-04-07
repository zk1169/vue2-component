//import fetch from '../config/fetch';

import fetch from '../config/fetch-rx';

/**
 * 获取首页默认地址
 */

var login = (data) => fetch('POST', '/api/auth/form', data);

export { login };
