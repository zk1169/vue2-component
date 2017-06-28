import ZkNplHeader from './src/main';

/* istanbul ignore next */
ZkNplHeader.install = function (Vue) {
  Vue.component(ZkNplHeader.name, ZkNplHeader);
};

export default ZkNplHeader;
