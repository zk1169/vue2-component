import fetch from '../config/fetch-rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import BugModel from '../models/bug.model';

/**
 * 登录
 */
let login = (data) => {
    return fetch('POST', '/api/admin/login', data).map(
        (res) => {
            return res;
        }
    );
};

let updateBugStatus = (id,status) => {
    let param = {id,status};
    return fetch('POST', '/api/admin/updateBugStatus', param).map(
        (res) => {
            return res;
        }
    );
};

let getBugList = (page) => {
    let param = {page:page}
    return fetch('POST', '/api/admin/getBugList', param).map(
        (res) => {
            let result = {
                rows:[],
                totalCount:res.totalCount
            }
            if(res && res.rows){
                res.rows.forEach((item)=>{
                    result.rows.push(new BugModel(item));
                });
            }
            return result;
        }
    );
};

export {
    login,
    getBugList,
    updateBugStatus
};