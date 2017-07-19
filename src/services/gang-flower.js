import fetch from '../config/fetch-rx';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/delay';
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

let updateBugStatus = (id, status) => {
    let param = { id, status };
    return fetch('POST', '/api/admin/updateBugStatus', param).map(
        (res) => {
            return res;
        }
    );
};

let getBugList = (page) => {
    let param = { page: page }
    return fetch('POST', '/api/admin/getBugList', param).map(
        (res) => {
            let result = {
                rows: [],
                totalCount: res.totalCount
            }
            if (res && res.rows) {
                res.rows.forEach((item) => {
                    result.rows.push(new BugModel(item));
                });
            }
            return result;
        }
    );
};

let getHotList = (page) => {
    let param = { page: page }
    return fetch('POST', '/api/admin/getHotList', param).map(
        (res) => {
            let result = {
                rows: [],
                totalCount: res.totalCount
            }
            if (res && res.rows) {
                res.rows.forEach((item) => {
                    result.rows.push(new BugModel(item));
                });
            }
            return result;
        }
    );
};

let saveHotInfo = (title, content, images) => {
    return fetch('POST', '/api/admin/saveHotInfo', { title, content, images }).map(
        (res) => {
            return new BugModel(res);
        }
    );
};

let saveHotInfoBatch = (title, content, imageFileList) => {
    let file1 = null;
    let file2 = null;
    let file3 = null;
    // let file4 = null;
    // if (fileList && fileList.length > 0) {
    //     file4 = fileList[0].file;
    // }

    if (imageFileList && imageFileList.length > 0) {
        imageFileList.forEach((item, index) => {
            switch (index) {
                case 0:
                    if (typeof(item) == 'string' && item.length > 0) {
                        file1 = item;
                    } else if (item.file) {
                        file1 = item.file;
                    }
                    break;
                case 1:
                    if (typeof(item) == 'string' && item.length > 0) {
                        file2 = item;
                    } else if (item.file) {
                        file2 = item.file;
                    }
                    break;
                case 2:
                    if (typeof(item) == 'string' && item.length > 0) {
                        file3 = item;
                    } else if (item.file) {
                        file3 = item.file;
                    }
                    break;
            }
        });
    }
    return Observable.merge(uploadImage(file1), uploadImage(file2), uploadImage(file3))
        .reduce((res1, res2, res3) => {
            let res = [];
            if (res1 && res1.toString().length > 10) {
                res.push(res1);
            }
            if (res2 && res2.toString().length > 10) {
                res.push(res2);
            }
            if (res3 && res3.toString().length > 10) {
                res.push(res3);
            }
            return res.toString();
        })
        .switchMap(
            (res) => saveHotInfo(title, content, res)
        );
};

let uploadImage = (fileData) => {
    if (typeof(fileData) == 'string') {
        return Observable.of(fileData).delay(100);
    } else if (!fileData) {
        return Observable.of(null).delay(100);
    }
    let formData = new FormData();
    formData.append('file', fileData);
    return fetch('POST', '/api/steel/uploadImage', formData).map(
        (res) => {
            return res;
        }
    );
};


export {
    login,
    getBugList,
    updateBugStatus,
    getHotList,
    saveHotInfoBatch
};