import CheckboxList from './src/main';

/* istanbul ignore next */
CheckboxList.install = function (Vue) {
  Vue.component(CheckboxList.name, CheckboxList);
};

export default CheckboxList;
