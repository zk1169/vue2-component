import Vue from 'vue';

let replace = require('lodash.replace');

Vue.filter('highlight', function(value, keyword) {
    if (value) {
        let highlightString = '<span class="highlight">' + keyword + '</span>';
        value = replace(value, keyword, highlightString);
    }
    return value;
});

Vue.filter('bugstatus', function(value) {
    let statusStr = '';
    switch(+value){
        default:
        case 1:
            statusStr = '待处理';
            break;
        case 2:
            statusStr = '正在解决';
            break;
        case 3:
            statusStr = '已解决';
            break;
    }
    return statusStr;
});