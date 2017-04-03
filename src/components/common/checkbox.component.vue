<template>
    <div class="checkbox-component checkbox" v-bind:class="{checked:checked}">
        <label><input type="checkbox" v-model="checked">{{label}}</label>
    </div>
</template>

<script>
    export default {
        name: 'checkbox-component',
        props: {
            value: Boolean,
            label: String
        },
        data() {
            return {}
        },
        computed: {
            checked: {
                get() {
                    return this.value;
                },
                set(newValue) {
                    this.$emit("input", newValue);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    input[type="checkbox"] {
        display: none;
    }
    
    .checkbox {
        margin:0px;
        label {
            padding-left: 0px;
        }
        label:before {
            font-family: "FontAwesome";
            font-size:16px;
            content: "\f096";
            margin-right: 2px;
            width:13px;
            display:inline-block;
            color:#2e6da4;
        }
    }
    .checkbox.checked{
        label:before {
            content: "\f046";
        }
    }
    .checkbox.indeterminate{
        label:before {
            content: "\f147";
        }
    }
</style>
