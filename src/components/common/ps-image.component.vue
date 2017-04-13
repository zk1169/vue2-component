<template>
    <div class="ps-image-component">
        <img ref="image" :src="src" />
        <!--<img src="../../assets/svgs/loading2.svg" class="fa-spin">-->
        <i v-if="loading" class="fa fa-spinner fa-spin center"></i>
    </div>
</template>

<script>
    export default {
        name: 'ps-image-component',
        props: {
            src: {
                type: String,
                default: null
            },
            src404: {
                type: String,
                default: null
            }
        },
        data() {
            return {
                loading: true
            }
        },
        methods: {
    
        },
        mounted() {
            console.log('src=' + this.src);
            if (this.$refs.image) {
                let image = this.$refs.image;
                image.onload = () => {
                    this.loading = false;
                    console.log('image.onload');
                };
                image.onerror = () => {
                    image.onerror = null;
                    image.src = './static/images/avatar06.png';
                    this.loading = false;
                    console.log('image.onerror');
                };
            }
        }
    }
</script>

<style lang="scss" scoped>
    .ps-image-component {
        position: relative;
        img {
            width: 100%;
        }
        i {
            font-size: 56px;
        }
    }
</style>
