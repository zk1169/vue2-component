<template>
    <div class="send-product-component" v-title="'发布产品'">
        <header-top :goBack="true">
            <div slot="left">
                <span class="fs-14">取消</span>
            </div>
            <div slot="right" @click="sendClick">
                发布
            </div>
        </header-top>
        <div>
            <mt-field label="品名" placeholder="请输入品名" type="text" v-model="productModel.name"></mt-field>
            <div @click="popupVisible=true">
                <mt-cell title="分类" is-link>
                    <span v-if="productModel.type">{{productModel.type.name}}</span>
                </mt-cell>
            </div>
            <mt-field label="材质" placeholder="请输入材质" type="text" v-model="productModel.material"></mt-field>
            <mt-field label="钢厂" placeholder="请输入钢厂" type="text" v-model="productModel.fromFactory"></mt-field>
            <mt-field label="件重" placeholder="请输入件重(吨)" type="text" v-model="productModel.weight"></mt-field>
            <mt-field label="交货地" placeholder="请输入交货地" type="text" v-model="productModel.fromArea"></mt-field>
            <mt-field label="单价" placeholder="请输入单价" type="text" v-model="productModel.price"></mt-field>
            <mt-field label="数量" placeholder="请输入数量" type="text" v-model="productModel.count"></mt-field>
            <mt-field label="规格" placeholder="请输入规格" type="text" v-model="productModel.format1"></mt-field>
        </div>
        <mt-popup v-model="popupVisible" position="right" class="more-search">
            <div>
                <div layout="row" layout-align="start center" class="card search-header">
                    <div flex="15" class="text-center" @click="moreSearchBack">
                        <i class="fa fa-angle-left"></i>
                    </div>
                    <div flex class="text-center">筛选</div>
                    <div flex="15"></div>
                </div>
                <div class="product-class-component-wrap">
                    <product-class-component v-on:onSelect="onSelect"></product-class-component>
                </div>
            </div>
        </mt-popup>
    </div>
</template>

<script>
    import headerTop from '../../m-components/header';
    import { sendProduct } from '../../services/api.product';
    import productClassComponent from '../../m-components/product-class.component';
    
    export default {
        data() {
            return {
                popupVisible: false,
                productModel: {
                    name: null,
                    material: null,
                    fromFactory: null,
                    weight: null,
                    fromArea: null,
                    price: null,
                    count: null,
                    format1: null
                }
            }
        },
        components: {
            headerTop,productClassComponent
        },
        created() {
            this.$parent.tabIndex = 2;
        },
        mounted() {
    
        },
        methods: {
            sendClick() {
                this.$indicator.open();
                sendProduct(this.productModel)
                    .subscribe(
                        (res) => {
                            this.$indicator.close();
                            //this.$router.push('/my-index');
                            this.$toast({
                                message: '发布成功',
                                position: 'bottom',
                                duration: 3000
                            });
                        },
                        (error) => {
                            this.$indicator.close();
                            this.$toast({
                                message: error.message,
                                position: 'bottom',
                                duration: 5000
                            });
                        }
                    );
            },
            onSelect(item) {
                this.productModel.type = item;
                this.popupVisible = false;
            },
            moreSearchBack() {
                this.popupVisible = false;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import '../../styles/variables';
    .send-product-component {
        .more-search {
            height: 100%;
            width: 85%;
            .search-header {
                height: 40px;
            }
            .product-class-component-wrap {
                height: calc(100% - 40px);
                overflow-y: auto;
                width: 90vw;
                background-color: $bg-color;
                position: absolute;
                top: 41px;
                left: 0px;
                transition: left 0.5s ease-out;
            }
        }
    }
</style>
