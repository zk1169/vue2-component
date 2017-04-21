// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
import App from './app';
import router from './router/pc';
import store from './store';
import './directives/ps-loading/ps-loading.directive';

//全局样式
import './styles/style.scss';

//element-ui控件库
// import Element from 'element-ui';
// Vue.use(Element);

// //自定义element-ui控件库
import elementUI from './config/element-ui';
Vue.use(elementUI);

Vue.config.productionTip = false;

Vue.config.errorHandler = function (err, vm) {
  // handle error
  console.log(err);
}

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
