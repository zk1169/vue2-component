import ZkCheckbox from './src/main';

/* istanbul ignore next */
ZkCheckbox.install = function(Vue) {
    Vue.component(ZkCheckbox.name, ZkCheckbox);
};

export default ZkCheckbox;