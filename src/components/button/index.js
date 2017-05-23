import ZkButton from './src/main';

/* istanbul ignore next */
ZkButton.install = function(Vue) {
    Vue.component(ZkButton.name, ZkButton);
};

export default ZkButton;