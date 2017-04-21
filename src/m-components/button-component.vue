<template>
    <div class="button-component" v-ps-loading="loading">
        <el-button :type="type" @click="eventClick">
            <slot>按钮文本</slot>
        </el-button>
    </div>
</template>

<script>
    import {
        Observable
    } from 'rxjs/Observable';
    import 'rxjs/add/observable/of';
    import 'rxjs/add/operator/delay';
    
    export default {
        name: 'button-component',
        props: {
            options: {
                type: Array,
                default: null
            },
            type: String,
            async: Function
        },
        data() {
            return {
                loading: false
            }
        },
        methods: {
            eventClick(ev) {
                if (this.async) {
                    this.loading = true;
                    this.async().subscribe(
                        (res) => {
                            this.loading = false;
                        },
                        (error) => {
                            //Observable.of(true).delay(1000).subscribe(()=>this.loading = false);
                        }
                    );
                } else {
                    this.$emit('click', ev);
                }
            }
        }
    }
</script>

<style lang="scss">
    .button-component {
        .el-loading-mask .el-loading-spinner .circular {
            width: 32px;
            height: 32px;
            margin-top: 5px;
        }
    }
</style>
