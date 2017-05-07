//import fetch from '../config/fetch';

import fetch from '../config/fetch-rx';

let sendBlog = (data) => {
    return fetch('POST', '/api/steel/sendBlog', data).map(
        (res) => {
            return res;
        }
    );
};

let sendProduct = (data) => {
    return fetch('POST', '/api/steel/sendProduct', data).map(
        (res) => {
            return res;
        }
    );
};

let getBlogList = () => {
    return fetch('POST', '/api/steel/getBlogList',{}).map(
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
    sendBlog,
    sendProduct,
    getBlogList,
    search
 };