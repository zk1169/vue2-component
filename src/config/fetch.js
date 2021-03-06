import store from '../store';

export default async(type = 'GET', url = '', data = {}, method = 'fetch') => {
    type = type.toUpperCase();
    //url = baseUrl + url;

    if (type == 'GET') {
        let dataStr = ''; //数据拼接字符串
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&';
        })

        if (dataStr !== '') {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
            url = url + '?' + dataStr;
            if (store.getters.accessToken) {
                url = url + '&accessToken=' + store.getters.accessToken;
            }
        } else {
            if (store.getters.accessToken) {
                url = url + '?accessToken=' + store.getters.accessToken;
            }
        }
    }

    if (window.fetch && method == 'fetch') {
        let requestConfig = {
            credentials: 'include',
            method: type,
            mode: "cors",
            cache: "force-cache"
        };

        if (data.constructor && data.constructor.name == "FormData") {
            if (store.getters.accessToken) {
                data.append('accessToken', store.getters.accessToken);
            }

            if (type == 'POST') {
                Object.defineProperty(requestConfig, 'body', {
                    value: data
                });
            }
        } else {
            requestConfig.headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            if (store.getters.accessToken) {
                data.accessToken = store.getters.accessToken
            }
            if (type == 'POST') {
                Object.defineProperty(requestConfig, 'body', {
                    value: JSON.stringify(data)
                });
            }
        }

        try {
            var response = await fetch(url, requestConfig);
            var responseJson = await response.json();
            console.log(responseJson);
            return responseJson;
            //return fetch(url, requestConfig);
        } catch (error) {
            throw new Error(error);
        }
        //return responseJson
    } else {
        let requestObj;
        if (window.XMLHttpRequest) {
            requestObj = new XMLHttpRequest();
        } else {
            requestObj = new ActiveXObject;
        }

        let sendData = '';
        if (type == 'POST') {
            sendData = JSON.stringify(data);
        }

        requestObj.open(type, url, true);
        requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        requestObj.send(sendData);

        requestObj.onreadystatechange = () => {
            if (requestObj.readyState == 4) {
                if (requestObj.status == 200) {
                    let obj = requestObj.response
                    if (typeof obj !== 'object') {
                        obj = JSON.parse(obj);
                    }
                    return obj
                } else {
                    throw new Error(requestObj)
                }
            }
        }
    }
}