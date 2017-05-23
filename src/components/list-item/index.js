import ZkListItem from './src/main';

/* istanbul ignore next */
ZkListItem.install = function (Vue) {
  Vue.component(ZkListItem.name, ZkListItem);
};

export default ZkListItem;
