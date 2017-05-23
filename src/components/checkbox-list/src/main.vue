<template>
    <div class="zk-checkbox-list" layout="row">
        <zk-checkbox v-for="(item,index) in options" v-model="item.checked" :key="item.code" :label="item.name"></zk-checkbox>
    </div>
</template>

<script>
    import ZkCheckbox from '../../checkbox';
    export default {
        name: 'zk-checkbox-list',
        props: {
            options:{type:Array,default:null}
        },
        data() {
            return {}
        },
        components:{
            ZkCheckbox
        }
    }
</script>

<style lang="scss" scoped>
@import '../../../styles/theme/checkbox-list';
</style>
