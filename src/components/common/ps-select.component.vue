<template>
    <div class="ps-select-component">
        <el-select v-model="selectModel" :placeholder="placeholder">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>

<script>
    export default {
        name: 'ps-select-component',
        props: {
            value:[Object,String,Number],
            options: {
                type: Array,
                default: null
            },
            placeholder:String
        },
        data() {
            return {}
        },
        computed:{
            selectModel:{
                get(){
                    return this.value;
                },
                set(newValue){
                    this.$emit("input", newValue);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .ps-select-component {
    }
</style>
