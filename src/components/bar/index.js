import ZkBar from './src/main';

/* istanbul ignore next */
ZkBar.install = function (Vue) {
  Vue.component(ZkBar.name, ZkBar);
};

export default ZkBar;
