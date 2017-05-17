<template>
    <div class="filter-component">
        <ul>
            <li v-for="item in source" class="filter-item">
                <div layout="row">
                    <div class="filter-title" flex>{{item.name}}</div>
                    <i class="fa fa-caret-right"></i>
                </div>
                <ul class="subList">
                    <li v-for="subItem in item.values" class="filter-sub-item">
                        <filter-item-component :source="subItem"></filter-item-component>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
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
        methods: {}
    }
</script>

<style lang="scss" scoped>
    .filter-component {
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
    }
</style>