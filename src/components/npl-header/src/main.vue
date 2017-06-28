<template>
  <div class="zk-npl-header">
    <div class="float-left header-logo">
      <a class="logo">
        <img class="logo-image" :src="logoImg">
      </a>
    </div>
    <div class="float-left">
      <div>
        <div>
          <input class="header-search-input" name="query" v-model="searchParams" type="text" @keydown.enter="visualSearch" @focus="inputFocus">
          
        </div>
        <div>
        </div>
      </div>
    </div>
    
  </div>
  
</template>

<script>
  const logoImg = require('@/assets/images/logo_zhihuiya_35.png');
  export default {
    name: 'zk-npl-header',
    data() {
      return {
        logoImg,
      };
    },
    methods: {
      visualSearch() {
  
      },
      inputFocus() {
  
      }
    }
  };
</script>

<style scoped lang="scss">
  .zk-npl-header {
    position:relative;
    .float-left {
      float: left;
    }
    .header-search-textarea {
      position: absolute;
      left:0px;
      top:0px;
    }
  }
</style>


