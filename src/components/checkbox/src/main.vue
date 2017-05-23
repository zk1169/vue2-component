<template>
    <div class="zk-checkbox" v-bind:class="{checked:isChecked}">
        <label><input type="checkbox" v-model="isChecked">{{label}}</label>
    </div>
</template>

<script>
    export default {
        name: 'zk-checkbox',
        props: {
            value: Boolean,
            label: String
        },
        data() {
            return {
                isChecked: this.value
            }
        },
        watch:{
            value:function(newVal){
                this.isChecked = newVal;
            },
            isChecked:function(newVal){
                this.$emit("input", newVal);
            }
        }
    }
</script>