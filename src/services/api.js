import fetch from '../config/fetch-rx';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/delay';

import { loginResultData } from './temp-data/login';
import { moreAnalysisData } from './temp-data/more-analysis';
import { patentData, patentHeadersData } from './temp-data/patent';
import { rankingData } from './temp-data/ranking';

/**
 * 创建临时数据
 */
const setpromise = data => {
    return new Promise((resolve, reject) => {
        resolve(data);
    });
}

/**
 * 登录
 */
let login = (data) => {
    // return fetch('POST', '/api/steel/login', data).map(
    //     (res) => {
    //         return res;
    //     }
    // );
    return Observable.of(loginResultData).delay(1000);
};

var moreAnalysis = (param) => {
    // let data = {
    //     q: 'car',
    //     efq: '',
    //     sort: 'sdesc',
    //     _type: 'query',
    // };
    // return fetch('POST', '/analysis/more_analysis', data).map(
    //     (res) => {
    //         return res;
    //     }
    // );
    return Observable.of(moreAnalysisData).delay(2000);
};

var patentQuery = (data) => {
    // return fetch('GET', '/patent/query/result?_type=query&q=phone&efq=&viewtype=tablelist&page=1&sort=sdesc&uk=null&_=1494310662467').map(
    //     (res) => {
    //         return res;
    //     }
    // );
    let mockData = {
        moreAnalysisData: moreAnalysisData,
        patentData: patentData,
        patentHeadersData: patentHeadersData
    }
    return Observable.of(mockData).delay(500);
};

var ranking = (param) => {
    return Observable.of(rankingData).delay(1000);
};

let formSubmit = (data) => {
    return fetch('POST', '/npl/transfer/query', data).map(
        (res) => {
            return res;
        }
    );
};

export {
    login,
    moreAnalysis,
    patentQuery,
    ranking,
    formSubmit
};