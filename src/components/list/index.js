import ZkList from './src/main';

/* istanbul ignore next */
ZkList.install = function (Vue) {
  Vue.component(ZkList.name, ZkList);
};

export default ZkList;
