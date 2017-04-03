<template>
    <div class="radio-component" layout="row">
        <div v-for="item in options" class="radio" v-bind:class="{checked:item===value}">
            <label @click="radioItemClick(item)"><input type="radio">{{item.name}}</label>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'radio-component',
        props: {
            value: {type:Object,default:null},
            options:{type:Array,default:null}
        },
        data() {
            return {}
        },
        methods:{
            radioItemClick(selectedItem){
                if(this.options){
                    this.options.forEach((item,index)=>{
                        if(item == selectedItem){
                            this.$emit('input',item);
                            return;
                        }
                    });
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    input[type="radio"] {
        display: none;
    }
    .radio+.radio{
        margin-left:10px; 
    }
    .radio {
        margin:0px;
        label {
            padding-left: 0px;
        }
        label:before {
            font-family: "FontAwesome";
            font-size: 16px;
            content: "\f10c";
            margin-right: 2px;
            width:13px;
            display:inline-block;
            color:#2e6da4;
        }
    }
    .radio.checked{
        label:before {
            content: "\f192";
        }
    }
</style>
