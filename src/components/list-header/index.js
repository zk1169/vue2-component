import ZkListHeader from './src/main';

/* istanbul ignore next */
ZkListHeader.install = function (Vue) {
  Vue.component(ZkListHeader.name, ZkListHeader);
};

export default ZkListHeader;
