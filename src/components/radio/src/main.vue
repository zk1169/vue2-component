<template>
    <div class="zk-radio" layout="row">
        <div v-for="item in options" class="radio" v-bind:class="{checked:item===value}">
            <label @click="radioItemClick(item)"><input type="radio">{{item.name}}</label>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'zk-radio',
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
