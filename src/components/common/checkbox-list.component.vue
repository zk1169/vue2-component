<template>
    <div class="checkbox-list-component" layout="row">
        <checkbox-component v-for="(item,index) in options" v-model="item.checked" :key="item.code" :label="item.name"></checkbox-component>
    </div>
</template>

<script>
    import Vue from 'vue';
    import CheckboxComponent from './checkbox.component';
    export default {
        name: 'checkbox-list-component',
        props: {
            options:{type:Array,default:null}
        },
        data() {
            return {}
        },
        components:{
            CheckboxComponent
        }
    }
</script>

<style lang="scss" scoped>
    .checkbox-component+.checkbox-component{
        margin-left:10px;
    }
</style>
