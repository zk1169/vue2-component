import ZkNotification from './src/main';

/* istanbul ignore next */
ZkNotification.install = function (Vue) {
  Vue.component(ZkNotification.name, ZkNotification);
};

export default ZkNotification;
