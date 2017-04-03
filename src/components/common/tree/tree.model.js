export default class TreeModel {
    constructor(options) {
        // name: string; //名称
        // code: string; //编码
        // parent: TreeModel; //父
        // children: TreeModel[]; //子
        // collapse: boolean; //是否折叠
        // isLeaf: boolean; //是否是叶子
        // cascade: boolean; //是否级连
        // data: any; //数据


        this.name = options.name;
        this.code = options.code;
        this.parent = options.parent;
        this.children = options.children;
        this.isLeaf = options.isLeaf;
        this.checked = options.checked;
        this.collapse = options.collapse;
    }

    static get testData() {
        let rootNode = new TreeModel({
            name: 'root',
            code: '0',
            parent: null,
            isLeaf: false,
            collapse:false,
            children: []
        });
        for (let i = 0; i < 5; i++) {
            rootNode.children.push(TreeModel.initNodeItem(rootNode, i + 1));
        }
        return rootNode;
    }

    static initNodeItem(parentNode, index) {
        if (index == -1) {
            return new TreeModel({
                name: 'node.leaf.' + parentNode.code + '.' + index,
                code: parentNode.code + '.' + index,
                parent: parentNode,
                isLeaf: true
            });
        }
        let nodeItem = new TreeModel({
            name: 'node.parent.' + parentNode.code + '.' + index,
            code: parentNode.code + '.' + index,
            parent: parentNode,
            isLeaf: false,
            collapse:false,
            children: []
        });
        for (let i = 0; i < 5; i++) {
            nodeItem.children.push(TreeModel.initNodeItem(nodeItem, -1));
        }
        return nodeItem;
    }
}