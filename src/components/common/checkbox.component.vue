<template>
    <div class="checkbox-component checkbox" v-bind:class="{checked:isChecked}">
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

<style lang="scss" scoped>
    input[type="checkbox"] {
        display: none;
    }
    
    .checkbox {
        margin: 0px;
        label {
            padding-left: 0px;
        }
        label:before {
            font-family: "FontAwesome";
            font-size: 16px;
            content: "\f096";
            margin-right: 2px;
            width: 13px;
            display: inline-block;
            color: #2e6da4;
        }
    }
    
    .checkbox.checked {
        label:before {
            content: "\f046";
        }
    }
    
    .checkbox.indeterminate {
        label:before {
            content: "\f147";
        }
    }
</style>