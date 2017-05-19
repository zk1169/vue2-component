<template>
    <div class="filter-component">
        <ul class="filter-ul">
            <li v-for="item in source" class="filter-item">
                <div layout="row" @click="itemClick(item)">
                    <div class="filter-title" flex>{{item.name}}</div>
                    <i v-if="item.isExpand" class="fa fa-caret-down"></i>
                    <i v-else class="fa fa-caret-right"></i>
                </div>
                <ul class="subList" v-if="item.isExpand">
                    <li v-for="subItem in item.values" class="filter-sub-item">
                        <filter-item-component :source="subItem"></filter-item-component>
                    </li>
                </ul>
            </li>
        </ul>
        <div class="filter-footer" layout="row" layout-align="start center">
            <button flex="60" class="box-button" @click="filterClick">筛选</button>
            <a flex="40" class="text-center hand" @click="cleanFilter">清空</a>
        </div>
    </div>
</template>

<script>
import { ranking } from '../services/api';
import FilterItemComponent from './filter-item.component';
export default {
    name: 'filter-component',
    props: {
        /***
         * Index of the initial tab to display
         */
        source: {
            type: Array,
            default: []
        }
    },
    data() {
        return {}
    },
    components: {
        FilterItemComponent
    },
    methods: {
        itemClick(item) {
            if (!item.values || item.values.length == 0) {
                this.$root.$emit('start-loading-bar');
                ranking().subscribe(
                    (res) => {
                        this.$root.$emit('complete-loading-bar');
                        item.values = res.data[0].value;
                        item.isExpand = !item.isExpand;
                    },
                    (error) => {
                        this.$root.$emit('complete-loading-bar');
                        this.$toast({
                            title: 'error',
                            message: error.message,
                            type: 'error'
                        });
                    }
                );
            } else {
                item.isExpand = !item.isExpand;
            }
        },
        filterClick(){
            let selectFilters = [];
            if(this.source){
                this.source.forEach((item,index)=>{
                    if(item.values){
                        item.values.forEach((subItem)=>{
                            if(subItem.checked){
                                subItem.field=item.field;
                                selectFilters.push(subItem);
                            }
                        });
                    }
                });
            }
            this.$emit('filter',selectFilters);
        },
        cleanFilter(){
            if(this.source){
                this.source.forEach((item,index)=>{
                    if(item.values){
                        item.values.forEach((subItem,subIndex)=>{
                            subItem.checked = false;
                            item.values.splice(subIndex,0,subItem);
                        });
                    }
                });
            }
            this.$emit('filter',null);
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';
.filter-component {
    .filter-ul {
        max-height: calc(100vh - 220px);
        overflow-y: auto;
        overflow-x: hidden;
    }
    .filter-item {
        padding: 8px 5px;
        border-bottom: 1px solid #d2d2d2;
        cursor: pointer;
        .filter-title {
            font-size: 12px;
            color: #555;
            float: left;
            font-weight: bold;
        }
    }
    .subList {
        margin-top: 10px;
        .filter-sub-item {
            padding: 2px;
        }
    }
    .box-button {
        background-color: $patsnap-color;
        box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.15);
        border: 0px;
        border-radius: 3px;
        width: 145px;
        height: 24px;
        line-height: 24px;
        outline: none;
        font-size: 12px;
        color: #ffffff;
    }
    .filter-footer{
        height:54px;
        margin-top:8px;
    }
}
</style>