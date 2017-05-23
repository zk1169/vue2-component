import ZkPopover from './src/main';

/* istanbul ignore next */
ZkPopover.install = function (Vue) {
  Vue.component(ZkPopover.name, ZkPopover);
};

export default ZkPopover;
