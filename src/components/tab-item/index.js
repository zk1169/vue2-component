import ZkTabItem from './src/main';

/* istanbul ignore next */
ZkTabItem.install = function (Vue) {
  Vue.component(ZkTabItem.name, ZkTabItem);
};

export default ZkTabItem;
