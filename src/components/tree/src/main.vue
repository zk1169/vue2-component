<template>
    <div class="zk-tree">
        <!--<li :class="{parent_li: node.isParent}">
                <i v-if="node.isParent" v-on:click="toggle(node)" class="fa icon-open-state" :class='{"fa-plus-square-o": !node.isOpen, "fa-minus-square-o": node.isOpen}'></i>
                <span :title="node.title">
                <i v-if="showIcon(node)" :class="nodeClass(node)"></i> {{node.name}}</span>
                <a v-for="btn in node.buttons" class="ml5" href="javascript:" :title="btn.title" v-on:click="btnClick(btn, node)"><i :class="btn.icon"></i></a>
                <ul v-show="node.isOpen">
                    <li v-show="node.showLoading && node._loading"><i class="fa fa-spinner fa-pulse"></i></li>
                    <tree-component v-for="item in node.children" :node="item"></tree-component>
                </ul>
            </li>-->
        <ul>
            <li layout="row" layout-align="start center">
                <i v-if="!node.isLeaf && node.collapse" class="fa fa-plus" @click="nodeCollapse(node)">&nbsp;&nbsp;</i>
                <i v-if="!node.isLeaf && !node.collapse" class="fa fa-minus" @click="nodeCollapse(node)">&nbsp;&nbsp;</i>
                <zk-checkbox v-if="!node.isLeaf" v-model="node.checked" v-bind:label="node.name"></zk-checkbox>
                <span v-if="node.isLeaf">{{node.name}}</span>
            </li>
            <li v-show="!node.collapse" v-if="!node.isLeaf && node.children.length>0">
                <zk-tree v-for="item in node.children" :key="item.code" :node="item"></zk-tree>
            </li>
        </ul>
    </div>
</template>

<script>
    import Vue from 'vue';
    import ZKCheckbox from '../../checkbox';
    Vue.use(ZKCheckbox);
    import TreeModel from './tree.model';

    export default {
        name: 'zk-tree',
        props: {
            node: {
                type: TreeModel
            }
        },
        data() {
            return {}
        },
        components:{
            ZKCheckbox
        },
        computed: {
            styleModel: function() {
                return {}
            }
        },
        methods: {
            nodeCollapse(nodeItem){
                nodeItem.collapse = !nodeItem.collapse;
            }
        },
        beforeDestroy() {}
    }
</script>