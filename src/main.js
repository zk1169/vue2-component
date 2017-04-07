// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
import App from './app';
import router from './router';
import store from './store';

//全局样式
import './styles/style.scss';

//element-ui控件库
import Element from 'element-ui';
Vue.use(Element);

// import Rx from 'rxjs/Rx';
// import VueRx from 'vue-rx';
// Vue.use(VueRx,Rx);

//import VueRx from 'vue-rx';
// import { Observable } from 'rxjs/Observable'
// import { Subscription } from 'rxjs/Subscription' // Disposable if using RxJS4
// import { Subject } from 'rxjs/Subject' // required for domStreams option
// Vue.use(VueRx, {
//   Observable,
//   Subscription,
//   Subject
// });

Vue.config.productionTip = false;

Vue.config.errorHandler = function (err, vm) {
  // handle error
  debugger;
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
