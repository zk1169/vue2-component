import ZkTree from './src/main';
import TreeModel from './src/tree.model';

/* istanbul ignore next */
ZkTree.install = function(Vue) {
    Vue.component(ZkTree.name, ZkTree);
};

export { ZkTree, TreeModel };