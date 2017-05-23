import ZkDatePicker from './src/main';

/* istanbul ignore next */
ZkDatePicker.install = function (Vue) {
  Vue.component(ZkDatePicker.name, ZkDatePicker);
};

export default ZkDatePicker;
