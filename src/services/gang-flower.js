import fetch from '../config/fetch-rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

/**
 * 登录
 */
let getBugList = (data) => {
    return fetch('POST', '/api/admin/getBugList', data).map(
        (res) => {
            return res;
        }
    );
};

export {
    getBugList
};