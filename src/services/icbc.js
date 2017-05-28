import fetch from '../config/fetch-rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

let getIcbcTicket = (data) => {
    return fetch('POST', '/api/admin/getIcbcTicket', data).map(
        (res) => {
            return res;
        }
    );
};

export {
    getIcbcTicket
};