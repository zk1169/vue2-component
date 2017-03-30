import fetch from '../config/fetch';

/**
 * 获取首页默认地址
 */

var login = (data) => fetch('POST', '/api/auth/form', data);

export { login };
