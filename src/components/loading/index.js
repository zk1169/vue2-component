import ZkLoading from './src/main';

/* istanbul ignore next */
ZkLoading.install = function(Vue) {
    Vue.component(ZkLoading.name, ZkLoading);
};

export default ZkLoading;