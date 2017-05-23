import ZkRadio from './src/main';

/* istanbul ignore next */
ZkRadio.install = function(Vue) {
    Vue.component(ZkRadio.name, ZkRadio);
};

export default ZkRadio;