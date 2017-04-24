// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
import App from './mobile-app';
import router from './router/mobile';
import store from './store';
import './directives/title.directive';

//全局样式
import './styles/m-style.scss';

//自定义mint-ui控件库
import Mint from 'mint-ui';
Vue.use(Mint);

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
