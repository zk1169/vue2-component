import ZkTab from './src/main';

/* istanbul ignore next */
ZkTab.install = function (Vue) {
  Vue.component(ZkTab.name, ZkTab);
};

export default ZkTab;
