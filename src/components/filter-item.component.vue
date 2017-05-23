<template>
    <div class="filter-item-component" layout="row" layout-align="start center">
        <div>
            <zk-checkbox v-model="filterModel.checked" :key="filterModel.name"></zk-checkbox>
        </div>
        <div flex layout="row" layout-align="start center" :title="filterModel.name" class="filter-item-content" @click="filterItemClick">
            <div flex class="text-overflow filter-item-middle">
                <slot>{{filterModel.name}}</slot>
            </div>
            <div class="text-right">{{filterModel.value}}</div>
        </div>
    </div>
</template>

<script>
import ZkCheckbox from './checkbox';
export default {
    name: 'filter-item-component',
    props: {
        /***
         * Index of the initial tab to display
         */
        source: {
            type: Object
        }
    },
    data() {
        return {
            filterModel:this.source
        }
    },
    components: {
        ZkCheckbox
    },
    methods:{
        filterItemClick(){
            this.$emit('filterAdd',this.filterModel);
        }
    },
    watch:{
        source:function(newVal){
            this.filterModel = newVal;
        }
    }
}
</script>

<style lang="scss" scoped>
.filter-item-component {
    color: #555;
    font-size: 12px;
    .filter-item-content {
        padding:0px 10px 0px 5px;
        .filter-item-middle {
            padding: 0px 5px;
            width: 180px;
        }
    }

    .filter-item-content:hover {
        color: #555;
        background: #def;
        border-radius: 3px;
    }
}
</style>