<template>
    <transition name="el-loading-fade" @after-leave="handleAfterLeave">
        <div v-show="visible" class="el-loading-mask" :class="[customClass, { 'is-fullscreen': fullscreen }]">
            <div class="el-loading-spinner">
                <!--<img src="../../assets/svgs/loading.svg" class="circular">-->
                <div class="loading"></div>
                <p v-if="text" class="el-loading-text">{{ text }}</p>
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        data() {
            return {
                text: null,
                fullscreen: true,
                visible: false,
                customClass: ''
            };
        },
    
        methods: {
            handleAfterLeave() {
                this.$emit('after-leave');
            },
            setText(text) {
                this.text = text;
            }
        }
    };
</script>
<style lang="scss" scoped>

</style>
