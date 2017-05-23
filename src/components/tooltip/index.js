import ZkTooltip from './src/main';

/* istanbul ignore next */
ZkTooltip.install = function (Vue) {
  Vue.component(ZkTooltip.name, ZkTooltip);
};

export default ZkTooltip;
