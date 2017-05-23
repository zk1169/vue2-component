import ZkImage from './src/main';

/* istanbul ignore next */
ZkImage.install = function(Vue) {
    Vue.component(ZkImage.name, ZkImage);
};

export default ZkImage;