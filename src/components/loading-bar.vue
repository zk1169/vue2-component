<template>
    <div class="loading-bar-container">
        <div class="loading-bar-progress" v-bind:style="styleModel"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                width: 0,
                opacity: 0,
                timer: null,
            }
        },
        computed: {
            styleModel: function() {
                return {
                    width: this.width + '%',
                    opacity: this.opacity,
                }
            }
        },
        methods: {
            start() {
                if (!this.timer) {
                    this.opacity = 1;
                    this.width = 30;
                    this.timer = setInterval(() => {
                        if (this.width >= 100) {
                            this.complete();
                        } else {
                            this.width++;
                        }
                    }, 300);
                }
            },
            complete() {
                this.width = 100;
                setTimeout(()=>{
                    this.opacity = 0;
                    this.width = 0;
                    clearInterval(this.timer);
                    this.timer = null;
                },500);
            }
        },
        beforeDestroy() {
            this.complete();
        }
    }
</script>

<style lang="scss" scoped>
    .loading-bar-container {
        position: fixed;
        margin: 0;
        padding: 0;
        top: 0;
        left: 0;
        right: 0;
        width: 100vw;
        z-index: 99999;
    }
    
    .loading-bar-progress {
        margin: 0;
        padding: 0;
        z-index: 99998;
        box-shadow: 0 0 10px 0;
        height: 2px;
        opacity: 0;
        transition: all 0.5s ease-in-out;
        background-color: firebrick;
        color: firebrick;
    }
</style>
