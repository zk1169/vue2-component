<template>
    <div class="filter-item-component" layout="row">
        <div>
            <checkbox-component v-model="checked" :key="model.name"></checkbox-component>
        </div>
        <div flex class="text-overflow filter-item-middle">
            <slot>{{model.name}}</slot>
        </div>
        <div>{{model.value}}</div>
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
                type: Object,
                default: {
                    checked: false
                }
            }
        },
        data() {
            return {
                //checked: false,
                //model: source
            }
        },
        computed: {
            model: {
                get() {
                    return this.source;
                },
                set(value) {
                    //console.log(value);
                }
            },
            checked: {
                get() {
                    return this.model.checked || false;
                },
                set(value) {
                    this.model.checked = value;
                }
            }
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
        .filter-item-middle {
            padding: 0px 10px;
        }
    }
</style>