// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/from';
// import 'rxjs/add/operator/timeout';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

import fetch from './fetch';

function extractData(response) {
    if (response) {
        // if (response.code === '000000' || response.code === 200) {
        //     return response.data;
        // } else {
        //     throw new Error(response.message);
        // }
        return response;
    } else {
        throw new Error('unknow error');
    }
}

export default function(method = 'GET', url = '', data = {}) {
    return Observable.from(fetch(method, url, data))
        .timeout(60000) //超时时间(单位:毫秒)
        .map(extractData)
        .catch(extractData);
};