import Vue from 'vue';

let replace = require('lodash.replace');

Vue.filter('highlight', function(value, keyword) {
    if (value) {
        let highlightString = '<span class="highlight">' + keyword + '</span>';
        value = replace(value, keyword, highlightString);
    }
    return value;
});