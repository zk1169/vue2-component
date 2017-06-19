// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/timeout';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import App from './app';
import router from './router/route';
import store from './store';
import './directives/loading/loading.directive';
import './filters/filter';
//全局样式
import './styles/style.scss';

window.Observable = Observable;
// 引入 ECharts 主模块
window.echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/bar');
require('echarts/lib/chart/line');
require('echarts/lib/chart/pie');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

//element-ui控件库
// import Element from 'element-ui';
// Vue.use(Element);

// //自定义element-ui控件库
import elementUI from './config/element-ui';
Vue.use(elementUI);

Vue.config.productionTip = false;

Vue.config.errorHandler = function(err, vm) {
    // handle error
    console.log(err);
}

window.onerror = (error) => {
    console.log('window:' + error);
}

store.commit('AUTO_LOGIN');

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});