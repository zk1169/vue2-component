<template>
    <div class="filter-item-component" layout="row" layout-align="start center">
        <div>
            <checkbox-component v-model="source.checked" :key="source.name"></checkbox-component>
        </div>
        <div flex layout="row" layout-align="start center" :title="source.name" class="filter-item-content">
            <div flex class="text-overflow filter-item-middle">
                <slot>{{source.name}}</slot>
            </div>
            <div class="text-right">{{source.value}}</div>
        </div>
    </div>
</template>

<script>
import CheckboxComponent from './common/checkbox.component';
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
        }
    },
    computed: {
    },
    components: {
        CheckboxComponent
    },
    methods: {}
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