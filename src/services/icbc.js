import fetch from '../config/fetch-rx';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/delay';

let getIcbcTicket = (data) => {
    return fetch('POST', '/api/admin/getIcbcTicket', data).map(
        (res) => {
            return res;
        }
    );
};

let ticket = (openid) => {
    //let url = '/wechat/ticket?openid='+openid+'&token=iyaoheinfo';
    let url = '/wechat/ticket';
    let data = {
        openid,
        token: "iyaoheinfo"
    };
    return fetch('GET', url, data).map(
        (res) => {
            return res;
        }
    );
};

let ticketLocal = (openid) => {
    //let url = '/wechat/ticket?openid='+openid+'&token=iyaoheinfo';
    let url = '/api/wechat/ticket';
    let data = {
        openid,
        token:"iyaoheinfo"
    };
    return fetch('GET',url,data).map(
        (res) => {
            return res;
        }
    );
};

export {
    ticketLocal,
    getIcbcTicket,
    ticket
};