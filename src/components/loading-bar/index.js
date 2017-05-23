import ZkLoadingBar from './src/main';

/* istanbul ignore next */
ZkLoadingBar.install = function (Vue) {
  Vue.component(ZkLoadingBar.name, ZkLoadingBar);
};

export default ZkLoadingBar;
