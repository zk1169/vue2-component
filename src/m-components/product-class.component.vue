<template>
  <div class="product-class-component">
    <div>
      <div class="type-left-wrap">
        <div v-for="item in typeList" class="type-item" v-bind:class="{'active':selectId==item.id}" @click="tabClick(item)">
          {{item.name}}
        </div>
      </div>
      <div flex class="type-right-wrap padding">
        <div v-for="item in subTypeList" class="sub-item-wrap" layout="row" layout-wrap>
          <div class="sub-item-title" @click="typeClick(item)">{{item.name}}</div>
          <div v-for="subItem in item.list" @click="typeClick(subItem)" class="sub-item-text fs-12" layout="row" layout-wrap>
            {{subItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import type from '../config/type';
  export default {
    name: 'product-class-component',
    data() {
      return {
        typeList: type,
        selectId: null,
        subTypeList: null
      };
    },
    created(){
      this.selectId = type[0].id;
      this.subTypeList = type[0].list;
    },
    methods: {
      tabClick(type) {
        this.selectId = type.id;
        this.subTypeList = type.list;
      },
      typeClick(item){
        this.$emit('onSelect',item);
      }
    },
    components: {}
  }
</script>

<style lang="scss">
  @import '../styles/variables';
  .product-class-component {
    .type-item {
      padding: 10px 15px;
      color: $label-color;
      border-bottom: 1px solid $border-color;
      //border-right: 1px solid $border-color;
    }
    .type-item.active {
      background-color: #fff;
      color: $second-color;
      //border-right: none;
    }
    .type-left-wrap{
      position:absolute;
      top:0px;
      left:0px;
      width:80px;
    }
    .type-right-wrap {
      border-left: 1px solid $border-color;
      margin-left:79px;
      min-height:100vh;
      background-color: #fff;
      .sub-item-wrap {
        border-bottom: 1px dashed $border-color;
        .sub-item-title {
          font-weight: bold;
          padding: 10px 15px;
        }
        .sub-item-text {
          padding: 10px;
        }
      }
    }
  }
</style>
