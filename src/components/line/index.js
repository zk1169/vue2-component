import ZkLine from './src/main';

/* istanbul ignore next */
ZkLine.install = function (Vue) {
  Vue.component(ZkLine.name, ZkLine);
};

export default ZkLine;
