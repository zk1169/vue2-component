import ZkPie from './src/main';

/* istanbul ignore next */
ZkPie.install = function (Vue) {
  Vue.component(ZkPie.name, ZkPie);
};

export default ZkPie;
