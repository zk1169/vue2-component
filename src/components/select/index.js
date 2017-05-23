import ZkSelect from './src/main';

/* istanbul ignore next */
ZkSelect.install = function(Vue) {
    Vue.component(ZkSelect.name, ZkSelect);
};

export default ZkSelect;