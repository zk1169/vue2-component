import ZkCheckboxList from './src/main';

/* istanbul ignore next */
ZkCheckboxList.install = function(Vue) {
    Vue.component(ZkCheckboxList.name, ZkCheckboxList);
};

export default ZkCheckboxList;