import ZkCard from './src/main';

/* istanbul ignore next */
ZkCard.install = function (Vue) {
  Vue.component(ZkCard.name, ZkCard);
};

export default ZkCard;
