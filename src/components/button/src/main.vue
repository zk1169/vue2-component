<template>
    <div class="zk-button" v-zk-loading="loading">
        <el-button :type="type" @click="eventClick">
            <slot>按钮文本</slot>
        </el-button>
    </div>
</template>

<script>
    export default {
        name: 'zk-button',
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
                            this.loading = false;
                        }
                    );
                } else {
                    this.$emit('click', ev);
                }
            }
        }
    }
</script>
